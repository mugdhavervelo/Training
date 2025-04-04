#
# with open('new.txt', 'w') as file:
#     file.write("Hello World")
#
# with open('new.txt', 'a') as file:
#     file.write("\nHello World line 2")
#
# with open('new.txt', 'r') as file:
#     print(file.read())




# with open ('name.txt', 'w') as file:
#     file.write("Mugdha")



with open ('name.txt', 'r') as file:
    content = file.readlines()

    for name in content:
        print(f"Welcome to {name.strip()}")

