from django.shortcuts import render,redirect

from django.contrib.auth.decorators import login_required


from django.contrib.auth import logout


# Create your views here.
def home(request):
    return render(request,"home.html")

def logout_view(request):
    logout(request)
    return render(request,"login.html")

def register(request):
    return render(request,"register.html")

@login_required
def login_view(request):
    return render(request,"login.html")

def forgotpassword(request):
    return render(request,"forgotpassword.html")

def createpassword(request):
    return render(request,"createpassword.html")

def newpassword(request):
    return render(request,"newpassword.html")





