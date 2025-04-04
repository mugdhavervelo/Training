import random


randomfloat = random.random()
print(randomfloat)

randomint = random.randint(1,15)
print(randomint)

fruits = ['apple','banana','orange']

print(fruits)
randfruit = random.choice(fruits)
print(randfruit)


names =["mugdha", "prachi", "dileep", "raju", "lakshman"]
print(names)

randname = random.choice(names)
print(randname)
random.shuffle(names)
print(names)


import datetime

print(datetime.datetime.today())