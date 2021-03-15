n = int(input())
sum = 0
for i in range(n):
    sum += i+1
a = list(map(int, input().split()))
for i in range(n-1):
    sum -= a[i]
print(sum)
