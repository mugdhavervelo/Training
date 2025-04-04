users =['Prachi', 'Jayu']

name = input("enter your name")

if name in users:
    print(users)
    print(len(users))

else:
    users.append(name)
    print(users)
    print(len(users))