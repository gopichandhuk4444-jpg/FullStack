from django.urls import path
from .views import ProfileImageView,ProfileView

urlpatterns = [
    path('',ProfileView.as_view(),name='profile'),
    path('<int:pk>/photo/', ProfileImageView.as_view(), name='profile-photo'),
]