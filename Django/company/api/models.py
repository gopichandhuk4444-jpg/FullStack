from django.db import models
import os
from datetime import datetime
# Create your models here.
def rename_photo(instance, filename: str):
    ext = filename.split('.')[-1]
    return os.path.join('api', f'{instance.name}_{datetime.now()}.{ext}')
class Profile(models.Model):
    name=models.CharField(max_length=40)
    photo=models.ImageField(upload_to=rename_photo,default='images/default.png')
