
print(10/2)
print(10/3)
print(10/4)

try:
    print(10/0)
except ZeroDivisionError:
    print("Division by zero")
print(10/1)
print(10/5)
print(10/6)

print("")

#exception handling with files

try:
    with open('love.txt', 'r') as file:
        print(file.read())
except FileNotFoundError:
    print("File not found")


#generic exception handling

try:
    with open('lisa.txt', 'r') as file:
        print(file.read())

except Exception as e:
    print(e, type(e))