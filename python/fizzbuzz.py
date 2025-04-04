mlist =[]

for  i in range(1,16):
    if i % 3 == 0 and i % 5 == 0:
        print("fizbuzz")
        mlist.append("fizbuzz")
    elif i % 3 == 0:
        print("fizz")
        mlist.append("fizz")
    elif i % 5 == 0:
        print("buzz")
        mlist.append("buzz")
    else:
        print(i)
        mlist.append(i)

print(mlist)