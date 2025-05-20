from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def sapa(request):
    return HttpResponse('haloooo masyarakat')

def about(request):
    return HttpResponse('ini halaman utama')

def homepage(request):
    context = {
        'title': 'yang gw tentukan'
    }
    return render(request, 'index.html', context)