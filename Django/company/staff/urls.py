from rest_framework.routers import DefaultRouter
from django.urls import path,include
from .views import EmployeesView,EmployeeDetailView,DepartmentView,DepartmentDetailView
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('employees/',EmployeesView.as_view(),name='employees' ),
    path('employees/<int:pk>/',EmployeeDetailView.as_view(),name='employee_detail' ),
    path('department/',DepartmentView.as_view(),name='department' ),
    path('department/<int:pk>/',DepartmentDetailView.as_view(),name='department_detail' ),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

