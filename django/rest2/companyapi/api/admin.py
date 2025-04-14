from django.contrib import admin
from api.models import Company, Employee
# Register your models here.

class CompanyAdmin(admin.ModelAdmin):
    list_display = ('company_id', 'name', 'location', 'type')

class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('employee_id', 'name', 'email', 'company')

admin.site.register(Company, CompanyAdmin)
admin.site.register(Employee, EmployeeAdmin)   