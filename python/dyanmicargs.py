
def car(brand, *details):
    print(f"brand of the car is {brand}")
    print(f"details are {details}")





car("audi", 'SUNROOF')
car("mercedes", 900, 'sunroof', "camera")


def userdetails(name, **details):
    print(f"name is {name}")
    for key, value in details.items():
        print(f"{key} is {value}")


userdetails("Mugdha", age = 21)
userdetails("Prachi", age = 20, city = 'Nashik')




#return statements
def addition(a,b):
    return a+b

def subtraction(a,b):
    return a-b
def multiplication(a,b):
    return a*b
def division(a,b):
    return a/b

a = int(input("enter a number"))
b = int(input("enter a number"))
op = input("enter a op - +, - , * ,/")

if op == "+":
    print(addition(a, b))
elif op == "-":
    print(subtraction(a, b))
elif op == "*":
    print(multiplication(a, b))
elif op == "/":
    print(division(a, b))
else:
    print("invalid input")