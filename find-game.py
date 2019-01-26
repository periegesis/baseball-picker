import csv
import argparse
import json
import random
import traceback
import re

from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

DEVELOPER_KEY = 'fake-key'
YOUTUBE_API_SERVICE_NAME = 'youtube'
YOUTUBE_API_VERSION = 'v3'
youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION, developerKey=DEVELOPER_KEY)

normal_game = re.compile(r'[A-Z]{3}(.*)AT(.*)[A-Z]{3}')
world_series = re.compile(r'WORLD(.*)SERIES')
alcs = re.compile(r'AL(.*)GAME')
nlcs = re.compile(r'NL(.*)GAME')

def youtube_search(next_page, start_time):
  # Call the search.list method to retrieve results matching the specified
  # query term.
  if (next_page != None):
    search_response = youtube.activities().list(
      channelId='UC4UPjWuKWWS6DvsM55yTPGw',
      part='id,snippet,contentDetails',
      publishedBefore=start_time,
      pageToken=next_page,
      maxResults=50
    ).execute()
  else:
    search_response = youtube.activities().list(
      channelId='UC4UPjWuKWWS6DvsM55yTPGw',
      part='id,snippet,contentDetails',
      publishedBefore=start_time,
      pageToken=next_page,
      maxResults=50
    ).execute()
  return search_response

def full_game(title):
  if normal_game.match(title):
    return True
  if world_series.match(title):
    return True
  if alcs.match(title):
    return True
  if nlcs.match(title):
    return True
  return False

def print_results(out_file, results):
  for result in results['items']:
    if result['kind'] == 'youtube#activity' and full_game(result['snippet']['title']):
      out_file.write(result['snippet']['title'] + ', ' + json.dumps(result))
      out_file.write('\n')
    
with open("game-videos-2011.txt", "w+") as outfile:
  start_time='2019-01-11T13:39:20.000Z'
  try:
    results = youtube_search(None, start_time)
    print_results(outfile, results)
    next_page = results['nextPageToken']
    while (start_time != None):
      search_response = youtube_search(next_page, start_time)
      print(json.dumps(search_response['pageInfo']))
      print_results(outfile, search_response)
      outfile.flush()
      try:
        next_page = search_response['nextPageToken']
        continue
      except KeyError as e:
        items = search_response['items']
        start_time = items[len(items) - 1]['snippet']['publishedAt']
        next_page = None
        continue
    outfile.write('next_page had no value')
  except Exception as e:
      outfile.write(str(e))
      traceback.print_exc()
  outfile.close()