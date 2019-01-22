#!/usr/bin/python

import argparse
import json
import random

from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

def get_api_key():
  authFile = open("auth.txt", "r")
  for line in authFile:
    if line.startswith("YOUTUBE_DEV_KEY"):
      return line.split("=")[1]
  return ""

def get_random_line(file):
  # function copied from https://stackoverflow.com/questions/10819911/read-random-lines-from-huge-csv-file-in-python
  filesize = 1268286                 # number of characters in game-features.txt
  offset = random.randrange(filesize)

  file.seek(offset)                  # go to random position
  file.readline()                    # discard the partial line
  random_line = file.readline()      # read the next complete line

  # extra to handle last/first line edge cases
  if len(random_line) == 0:       # we have hit the end
      file.seek(0)
      random_line = file.readline()  # so we'll grab the first line instead
  
  return random_line


def get_game(team, props):
  f = open('game-features.txt')
  for i in range(21867):
    random_game = get_random_line(f).split(',')
    if random_game[3] == team:
      f.close()
      return random_game


def build_title(game_data):
  monthMap = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    "10": "October",
    "11": "November",
    "12": "December"
  }

  year = game_data[0][0:4]
  month = monthMap[game_data[0][4:6]]
  day = game_data[0][6:8]
  if (day[0] == "0"):
    day = day[1]
  return game_data[1] + " AT " + game_data[2] + " - " + month + " " + day + ", " + year

DEVELOPER_KEY = get_api_key()
YOUTUBE_API_SERVICE_NAME = 'youtube'
YOUTUBE_API_VERSION = 'v3'

def youtube_search(query):
  youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
    developerKey=DEVELOPER_KEY)

  # Call the search.list method to retrieve results matching the specified
  # query term.
  search_response = youtube.search().list(
    q=query,
    part='id,snippet',
    maxResults=3
  ).execute()

  videos = []

  # Check that the exact video 1) exists, and 2) is unique
  for search_result in search_response.get('items', []):
    if search_result['id']['kind'] == 'youtube#video':
      print(json.dumps(search_result))
      if search_result['snippet']['title'] == query and search_result['snippet']['channelTitle'].startswith("MLB"):
        videos.append(search_result)
  if len(videos) == 1:
    print('Found video with the title: ' + query)
    return videos[0]
  elif len(videos) > 1:
    print('More than one video with this title was found: ' + query)
    return None
  else:
    print('Video with this title was not in search results: ' + query)
    return None

def random_game(team, props):
  gameData = get_game(team, props)
  query = build_title(gameData)
  return youtube_search(query)

def lambda_handler(event, context):
  team = event["queryStringParameters"]["team"]
  props = event["queryStringParameters"]["props"]
  for i in range(3):
    game = random_game(team, props)
    if (game != None):
      return {
        'statusCode': 200,
        'body': json.dumps(game),
        'headers': {
          "Access-Control-Allow-Origin" : "*",
        }
      }
    continue

if __name__ == '__main__':
  parser = argparse.ArgumentParser()
  parser.add_argument('--q', help='Team', default='BOS')
  args = parser.parse_args()

  try:
    queryStringParameters = {}
    queryStringParameters["team"] = args.q
    queryStringParameters["props"] = None
    event = {}
    event["queryStringParameters"] = queryStringParameters
    lambda_handler(event, None)
  except HttpError as e:
    print('An HTTP error %d occurred:\n%s' % (e.resp.status, e.content))