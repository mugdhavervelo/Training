from django.shortcuts import render
from rest_framework import viewsets
from .models import Company
from .serializers import CompanySerializer
from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

# Create your views here.
class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


    #function for custom apis
    @action(detail=True, methods=['get'])
    #get employees for a company
    def employees (self, request, pk=None):
        company = Company.objects.get(pk=pk)
        emps = Employee.objects.filter(company=company)
        emp_serializer = EmployeeSerializer(emps, many=True, context={'request': request})
        return Response(emp_serializer.data)


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

