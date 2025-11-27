from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.conf import settings
 
class Author(models.Model):
    name = models.CharField(max_length=30)
    birth_date = models.DateField()
    country = models.CharField(max_length=30)
    bio = models.TextField()

    def __str__(self):
        return self.name

class Book(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='books')
    title = models.CharField(max_length=50)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')
    genre = models.CharField(max_length=30)
    publish_date = models.DateField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    stock_count = models.IntegerField()

    def __str__(self):
        return self.title

class Review(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, related_name='reviews')
    reviewer_name = models.CharField(max_length=30)
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.reviewer_name} - {self.book.title}"