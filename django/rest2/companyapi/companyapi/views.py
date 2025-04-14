
from django.http import HttpResponse

def home_page(request):
    print("home_page")
    return HttpResponse("Hello, world. You're at the companyapi home page.")