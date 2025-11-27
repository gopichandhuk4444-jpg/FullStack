from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin,ListModelMixin
from.serailizers import ProfileSerailizer,Profile
from django.http import FileResponse, Http404
# Create your views here.
class ProfileView(CreateModelMixin,ListModelMixin,GenericAPIView):
    queryset=Profile.objects.all()
    serializer_class=ProfileSerailizer
    def post(self,request):
        return self.create(request)
    def get(self,request):
        return self.list(request)


class ProfileImageView(GenericAPIView):
    queryset = Profile.objects.all()

    def get(self, request, pk):
        try:
            profile = self.get_object()  # uses queryset + pk
        except Profile.DoesNotExist:
            raise Http404("Profile not found")

        if not profile.photo:
            raise Http404("No image found for this profile")

        # Stream the image file directly
        return FileResponse(profile.photo.open('rb'), content_type='image/jpeg')