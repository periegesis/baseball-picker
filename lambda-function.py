#!/usr/bin/python

import argparse
import json
import random

blowout = 1
highScoring = 2
comeback = 4,
pitching = 8
noLosses = 16
anyLosses = 32
fewLosses = 64
videoQuality = 128

filesize = 1628656
qualityVideoStart = 1017692

def get_random_line(file, start):
  # function adapted from https://stackoverflow.com/questions/10819911/read-random-lines-from-huge-csv-file-in-python
  offset = random.randrange(start, filesize)

  file.seek(offset)                  # go to random position
  file.readline()                    # discard the partial line
  random_line = file.readline()      # read the next complete line

  # extra to handle last/first line edge cases
  if len(random_line) == 0:       # we have hit the end
      file.seek(0)
      random_line = file.readline()  # so we'll grab the first line instead
  
  return random_line

def validate_game(game, team, props):
  if game[9].startswith("NO_VIDEO_FOUND"):
    return False
  if team != 'NONE' and not (game[1] == team or game[2] == team):
    return False
  if props & noLosses > 0 and team != game[3]:
    return False
  return True

def isDuplicate(existingGames, newGame):
  for game in existingGames:
    if game[0] == newGame[0] and game[1] == newGame[1] and game[2] == newGame[2] and game[3] == newGame[3]:
      return True
  return False

def random_games(team, props):
  propsVal = int(props)
  games = []
  f = open('game-features.txt')
  available_game_count = 19439
  for i in range(available_game_count):   # prevents us from iterating forever if fewer than three games match
    start = qualityVideoStart if propsVal & videoQuality > 0 else 0
    random_game = get_random_line(f, start).split(',')
    if validate_game(random_game, team, propsVal) and not isDuplicate(games, random_game):
      games.append(random_game)
      if len(games) == 3:
        f.close()
        return games

def build_date(game_data):
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
  return month + " " + day + ", " + year

def clean_game_data(games):
  clean_games = []
  for game in games:
    videoId = game[9][0:-1]   # remove newline at end of videoId
    clean_games.append({
      "awayTeam": game[1],
      "homeTeam": game[2],
      "date": build_date(game),
      "videoId": videoId
    })
  return clean_games

def lambda_handler(event, context):
  team = event["queryStringParameters"]["team"]
  props = event["queryStringParameters"]["props"]
  games = clean_game_data(random_games(team, props))
  if (games != None):
    return {
      'statusCode': 200,
      'body': json.dumps(games),
      'headers': {
        "Access-Control-Allow-Origin" : "*",
      }
    }

if __name__ == '__main__':
  parser = argparse.ArgumentParser()
  parser.add_argument('--q', help='Team', default='NONE')
  parser.add_argument('--p', help='Props', default=0)
  args = parser.parse_args()

  try:
    queryStringParameters = {}
    queryStringParameters["team"] = args.q
    queryStringParameters["props"] = args.p
    event = {}
    event["queryStringParameters"] = queryStringParameters
    print(lambda_handler(event, None))
  except Error as e:
    print('An HTTP error %d occurred:\n%s' % (e.resp.status, e.content))