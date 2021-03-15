dna = input()
prev = 'A'
count = 0
mx = 1
for a in dna:
    if a == prev:
        count += 1
        mx = max(mx, count)
    else:
        count = 1
        prev = a
print(mx)
