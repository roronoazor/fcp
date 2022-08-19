from pydoc import locate
from .views import *
from django.urls import path

urlpatterns = [
    path('', index, name='index'),
    path('about', about, name='about'),
    path('expertise', expertise, name='expertise'),
    path('sector', sector, name='sector'),
    path('transactions', transactions, name='transactions'),
    path('locations', locations_and_contacts, name='locations'),
    path('team', team, name='team'),
]
