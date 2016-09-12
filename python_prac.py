# Python 2
n = int(raw_input())
for i in range(0,n):
    a, b = raw_input().split()
    print int(a) + int(b)

# Python 3
n = int(input())
for i in range(n):
    a, b = input().strip().split(' ')
    print (int(a) + int(b))