import sys
from collections import Counter

n = int(input())
l = []
for _ in range(n):
    l.append(input())

count = Counter(l)
amount = count.most_common(1)[0][1]

for i in sorted(count.most_common()):
    if i[1] == amount:
        print(i[0])
