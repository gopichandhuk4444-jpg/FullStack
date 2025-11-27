from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status,filters
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .serializers import Employee,Employeeserialzer,Department,DepartmentSerailizer
from rest_framework.mixins import ListModelMixin,RetrieveModelMixin,DestroyModelMixin,CreateModelMixin,UpdateModelMixin
from rest_framework.generics import GenericAPIView
# Create your views here.
# class DepartmentView(APIView):
#     def get(self,request):
#         departments=Department.objects.all()
#         serializar=DepartmentSerailizer(departments,many=True)
#         return Response(serializar.data)
#     def post(self,request):
#         serializer=DepartmentSerailizer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data,status=status.HTTP_201_CREATED)
# class DepartmentDetailView(APIView):
#     def get_object(self,pk):
#         return get_object_or_404(Department,pk=pk)
#     def get(self,request,pk):
#         serializer=DepartmentSerailizer(self.get_object(pk))
#         return Response(serializer.data)
#     def put(self,request,pk):
#         obj=self.get_object(pk=pk)
#         serializer=DepartmentSerailizer(obj,data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)
#     def delete(self,request,pk):
#         self.get_object(pk=pk).delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
# class EmployeesView(APIView):
#     def get(self,request):
#         employees=Employee.objects.all()
#         serializar=Employeeserialzer(employees,many=True)
#         return Response(serializar.data)
#     def post(self,request):
#         serializer=Employeeserialzer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data,status=status.HTTP_201_CREATED)
# class EmployeeDetailView(APIView):
#     def get_object(self,pk):
#         return get_object_or_404(Employee,pk=pk)
#     def get(self,request,pk):
#         serializer=Employeeserialzer(self.get_object(pk))
#         return Response(serializer.data)
#     def put(self,request,pk):
#         obj=self.get_object(pk=pk)
#         serializer=Employeeserialzer(obj,data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)
#     def delete(self,request,pk):
#         self.get_object(pk=pk).delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)

class DepartmentView(ListModelMixin,CreateModelMixin,GenericAPIView):
    queryset=Department.objects.all()
    serializer_class=DepartmentSerailizer
    def get(self,request):
        return self.list(request)
    def post(self,request):
        return self.create(request)

class DepartmentDetailView(RetrieveModelMixin,UpdateModelMixin,DestroyModelMixin,GenericAPIView):
    queryset=Department.objects.all()
    serializer_class=DepartmentSerailizer
    def get(self,request,pk):
        return self.retrieve(request,pk)
    def put(self,request,pk):
        return self.update(request,pk)
    def delete(self,request,pk):
        return self.destroy(request,pk)
class EmployeesView(ListModelMixin,CreateModelMixin,GenericAPIView):
    queryset=Employee.objects.all()
    serializer_class=Employeeserialzer
    filter_backends = [
        # DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter
    ]
    search_fields=['name','id']
    def get(self,request):
        return self.list(request)
    def post(self,request):
        return self.create(request)

class EmployeeDetailView(RetrieveModelMixin,UpdateModelMixin,DestroyModelMixin,GenericAPIView):
    queryset=Employee.objects.all()
    serializer_class=Employeeserialzer
    def get(self,request,pk):
        return self.retrieve(request,pk)
    def put(self,request,pk):
        return self.update(request,pk)
    def delete(self,request,pk):
        return self.destroy(request,pk)