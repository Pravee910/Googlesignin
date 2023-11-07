from django.urls import path
from . import views



urlpatterns = [
    path("",views.register),
    path("home",views.home,name="home"),
   
    path('login', views.login_view, name='login_view'),
     path('forgotpassword', views.forgotpassword, name='forgot'),
    path('createpassword', views.createpassword, name='crtpassword'),
    path('newpassword', views.newpassword, name='newpassword'),

  
    path("logout",views.logout_view,name="logout")
   
]
