import csv

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

with open("game-features.txt", "w+") as outfile:
    for year in range(2009, 2018):
        with open("C:/Users/rahar/Documents/Projects/baseball-picker/game-data/GL%s.TXT" % year) as underlying_file:
            infile = csv.reader(underlying_file, skipinitialspace=True)
            for line in infile:
                game_features = parse_game(line)
                outfile.write(",".join(game_features))
                outfile.write("\n")
        underlying_file.close()
outfile.close()
