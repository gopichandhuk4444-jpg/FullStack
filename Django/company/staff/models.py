from django.db import models

# Create your models here.
class Department(models.Model):
    name=models.CharField(max_length=40)
    
    def __str__(self) -> str:
        return self.name


class Employee(models.Model):
    # photo=models.ImageField(upload_to='images/',default='images/default.png')
    name=models.CharField(max_length=40)
    email=models.EmailField(unique=True)
    dept=models.ForeignKey(Department,on_delete=models.CASCADE,related_name='employees')
    designation=models.CharField(max_length=40)

    def __str__(self) -> str:
        return self.name
