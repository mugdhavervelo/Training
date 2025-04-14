from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import logout, authenticate, login as auth_login  # ✅ fix here

# Create your views here.
def index(request):
    if request.user.is_anonymous:  # ✅ fix typo: should be is_anonymous
        return redirect('/login/')
    return render(request, 'index.html')

def login_view(request):  # ✅ renamed to avoid conflict with django.contrib.auth.login
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)  # ✅ use alias to avoid calling your view recursively
            return redirect('/')
        else:
            return render(request, 'login.html', {'error': 'Invalid username or password'})

    return render(request, 'login.html')

def logoutUser(request):
    logout(request)
    return redirect('/login/')
