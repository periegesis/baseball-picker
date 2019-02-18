import sys

count = 0
f = open('game-features.txt', 'rb')
for line in f:
    if not (line.startswith("2016".encode("utf-8")) or line.startswith("2017".encode("utf-8")) or line.startswith("2018".encode("utf-8"))):
        count += sys.getsizeof(line)
print(count)
f.close()