
num = [20, 90, 78, 65, 23, 25]
arr =[]
prr = []


for n in num:
   if n==65:
        break
   arr.append(n)

for n in num:
   if n==65:
        continue
   prr.append(n)



print(arr)
print(prr)
