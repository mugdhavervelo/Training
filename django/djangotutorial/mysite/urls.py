

from django.contrib import admin
from django.urls import path, include  # <- add include here


admin.site.site_header = "Mugdha Admin"
admin.site.site_title = "Mugdha Admin Portal"
admin.site.index_title = "Welcome to Mugdha Portal"

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("home.urls")),
]
