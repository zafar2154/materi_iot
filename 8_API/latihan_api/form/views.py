from django.shortcuts import render, redirect
from .models import Form
from django.http import HttpResponse
# Create your views here.

def form_ui(request):
    if request.method =='POST':
        nama = request.POST.get('nama')
        deskripsi = request.POST.get('deskripsi')
    
        Form.objects.create(nama=nama, deskripsi=deskripsi)
        return HttpResponse("sukses kirim data")
    
    return render(request, 'index.html')