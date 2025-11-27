from rest_framework.routers import DefaultRouter
from django.urls import path,include
from .views import BookViewset,AuthorViewset,ReviewViewset

router=DefaultRouter()
router.register('book',BookViewset)
router.register('author',AuthorViewset)
router.register('review',ReviewViewset)
urlpatterns = [
    path('',include(router.urls)),
]
