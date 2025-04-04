age_info = {"raju": 25, "mug":21}

for key,value in age_info.items():
    print(f"{key}: {value}")


for i in range(1,10):
    print(i)


inp = ""


while inp !="q":
   num1 = int(input("Enter the first number: "))
   num2 = int(input("Enter the second number: "))




   result = num1 + num2
   print(result)
   inp = input("press q to quit: ")


num=[1,29,29,89,29,90,9]

while 29 in num:
    num.remove(29)

print(num)


for n in num:
    if n == 29:
        num.remove(n)
print(num)
