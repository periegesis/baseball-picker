import csv
import re

video_id_match = re.compile(r'"videoId": "(.*)"}}}')

def parse_game(game_data):
    game_features = []
    game_features.append(date(game_data))
    game_features.append(away_team(game_data))
    game_features.append(home_team(game_data))
    game_features.append(winning_team(game_data))
    game_features.append(run_differential(game_data))
    game_features.append(is_extra_innings(game_data))
    game_features.append(away_team_obp(game_data))
    game_features.append(home_team_obp(game_data))
    game_features.append(comeback_in_ninth(game_data))
    game_features.append(find_video(game_data))
    return game_features

def date(game_data):
    return game_data[0]

def away_team(game_data):
    return game_data[3]

def home_team(game_data):
    return game_data[6]

def winning_team(game_data):
    return game_data[3] if int(game_data[9]) > int(game_data[10]) else game_data[6]

def away_team_obp(game_data):
    on_base = int(game_data[22]) + int(game_data[29]) + int(game_data[30])
    plate_appearances = int(game_data[21]) + int(game_data[28]) + int(game_data[29]) + int(game_data[30])
    return str(on_base/plate_appearances)

def home_team_obp(game_data):
    on_base = int(game_data[50]) + int(game_data[57]) + int(game_data[58])
    plate_appearances = int(game_data[49]) + int(game_data[56]) + int(game_data[57]) + int(game_data[58])
    return str(on_base/plate_appearances) if int(plate_appearances) > 0 else "0"

def run_differential(game_data):
    return str(abs(int(game_data[9]) - int(game_data[10])))

def is_extra_innings(game_data):
    return str(int(game_data[11]) > 54)

def comeback_in_ninth(game_data):
    away_box_score = runs_per_inning(game_data[19])
    home_box_score = runs_per_inning(game_data[20])
    return str((sum(away_box_score[0:8]) > sum(home_box_score[0:8]) and int(game_data[9]) < int(game_data[10]))
        or (sum(away_box_score[0:8]) < sum(home_box_score[0:8]) and int(game_data[9]) > int(game_data[10])))

def runs_per_inning(box_score):
    runs = []
    extra_digits = ""
    for i in range(len(box_score)):
        if (box_score[i] == "\""):
            continue
        if (box_score[i] == "x"):
            runs.append(0)
        elif (box_score[i] == "("):
            extra_digits += "("
        elif (box_score[i] == ")"):
            runs.append(int(extra_digits[1:]))
            extra_digits = ""
        elif (len(extra_digits) > 0):
            extra_digits += box_score[i]
        else:
            runs.append(int(box_score[i]))
    return runs

def find_video(game_data):
    title = build_title(game_data)
    infile = open("game-videos-present.txt")
    for line in infile:
        if line.startswith(title):
            id = video_id_match.search(line)
            if (id is not None):
                infile.close()
                return id.groups()[0]
            else:
                return "INVALID_VIDEO_FOUND"
    infile.close()
    return "NO_VIDEO_FOUND"

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
  return game_data[3] + " AT " + game_data[6] + " - " + month + " " + day + ", " + year

with open("game-features.txt", "a") as outfile:
    year = 2018
    with open("./game-data/GL%s.TXT" % year) as underlying_file:
        infile = csv.reader(underlying_file, skipinitialspace=True)
        for line in infile:
            game_features = parse_game(line)
            outfile.write(",".join(game_features))
            outfile.write("\n")
    underlying_file.close()
outfile.close()
