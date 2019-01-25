import csv
import argparse
import json
import random

from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

DEVELOPER_KEY = 'fake-key'
YOUTUBE_API_SERVICE_NAME = 'youtube'
YOUTUBE_API_VERSION = 'v3'

def youtube_search():
  youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
    developerKey=DEVELOPER_KEY)

  # Call the search.list method to retrieve results matching the specified
  # query term.
  search_response = youtube.activities.list(
    channelId='UCYlskn-J19rOmzy5QVy2W9w',
    part='id,snippet',
    maxResults=50
  ).execute()

  return search_response

def print_results(out_file, results):
  for result in results['items']:
    if result['kind'] == 'youtube#activity':
      out_file.write(result['snippet']['title'] + ', ' + result)
    
with open("game-features-sample.txt", "w+") as outfile:
    
  outfile.close()