import sys
import Counter

n = int(input())
A = list(map(int, input().split()))

A_even = [i for i in A if i % 2 == 0]
A_2 = [i for i in A if i % 2 == 0 and (i % 3 == 0 or i % 5 == 0)]

if A_even == A_2:
    print("APPROVED")
else:
    print("DENIED")
