from django.shortcuts import render, HttpResponse
from datetime import datetime
#import contact
from home.models import Contact
from django.contrib import messages


# Create your views here.
def index(request):
    context ={
        'variable': "Hello World",
        'variable2': "Hello World 2"
    }
    return render(request, "index.html", context)

def about(request):
    return render(request, "about.html")


def services(request):
    return render(request, "services.html")

def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        desc = request.POST.get("desc")
        #make contact object
        contact = Contact(name=name, email=email, phone=phone, desc=desc, date=datetime.today())
        contact.save()
        # print("The name is " + name)
        messages.success(request, "Message sent successfully")
        # return HttpResponse("This is contact page")
    return render(request, "contact.html")
