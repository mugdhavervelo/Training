name = ["Mugdha", "Prachi", "Jayu", "Sakshi"]
print(name)
print(name[0])
print(name[-1])

name.append("Dileep")
print(name)

name.remove("Prachi")
print(name)

name.pop()
print(name)

name[0]= "Meghna"
print(name)

name.insert(0,"Lisa")
print(name)

length = len(name)
print(length)

name.sort()
print(name)

name.sort(reverse=True)
print(name)

name.reverse()
print(name)

popvalue = name.pop(1)
print(popvalue)
print(name)

print(name[0:2])

#numeric list

sell = [2,8,78,0, 90, 6, 9]
print(sell)

print(len(sell))
print(max(sell))
print(min(sell))
print(sum(sell))

#mixlist

mixlist = ['Mugdha', 21, "IT"]
print(mixlist)