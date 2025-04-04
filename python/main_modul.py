import moduleii

a = int(input("enter a number"))
b = int(input("enter a number"))
op = input("enter operation -> +, /, - , * ")

if op == "+":
    print(moduleii.add(a,b))
elif op == "/":
    print(moduleii.div(a,b))
elif op == "-":
    print(moduleii.sub(a,b))
elif op == "*":
    print(moduleii.mul(a,b))
else:
    print("invalid operation")




