from django.db import models

# Create your models here.
class Form(models.Model):
    nama = models.CharField(max_length=100)
    deskripsi = models.TextField()
    time = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.nama