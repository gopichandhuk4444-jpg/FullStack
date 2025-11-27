from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Count, Avg
from rest_framework.viewsets import ModelViewSet
from .models import Book, Author, Review
from .serializers import BookSerializer, AuthorSerializer, ReviewSerializer
from .permissions import IsOwnerOrReadOnly
from rest_framework import permissions

class BookViewset(ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class AuthorViewset(ModelViewSet):
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()

    @action(detail=False, methods=['GET'])
    def top(self, request):
        top_authors = Author.objects.annotate(no_of_books=Count('books')).filter(no_of_books__gt=3)
        serializer = self.get_serializer(top_authors, many=True)
        return Response(serializer.data)

class ReviewViewset(ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

    @action(detail=True, methods=['GET'])
    def rating(self, request, pk=None):
        avg_rating = Book.objects.filter(pk=pk).aggregate(avg=Avg('reviews__rating'))
        return Response({'book_id': pk, 'average_rating': avg_rating['avg']})

    @action(detail=True, methods=['GET'])
    def list_of_reviews(self, request, pk=None):
        list_reviews = Review.objects.filter(book_id=pk)
        serializer = self.get_serializer(list_reviews, many=True)
        return Response(serializer.data)