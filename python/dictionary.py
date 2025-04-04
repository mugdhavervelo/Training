car = {"brand":"mercedes", "model":"m2", "price": 120000}

print(car)
print(type(car))
print(car["brand"])


marks = {"hindi": 90,
         "english": 89,
         "math":98}

print(marks["hindi"])

marks["english"] = 92

print(marks["english"])

del marks["hindi"]

print(marks)

print(len(marks))