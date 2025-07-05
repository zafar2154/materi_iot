from django.urls import path
from . import views

urlpatterns = [
    path('nyapa/', views.sapa, name="sapa" ),
    path('homepage/', views.homepage)
]
