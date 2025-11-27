from rest_framework import serializers
from .models import Department,Employee


class DepartmentSerailizer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'
class Employeeserialzer(serializers.ModelSerializer):
    dept=serializers.PrimaryKeyRelatedField(queryset=Department.objects.all())
    class Meta:
        model = Employee
        fields = '__all__'
