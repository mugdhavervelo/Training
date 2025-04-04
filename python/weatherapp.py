
import requests


API_KEY = 'ef0bc356d99e7f78bf9fa4c46e0f8b50'
city_name= input("enter the name of the city")




url = f'https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}'


responses= requests.get(url)
data = responses.json()
print(data)

















