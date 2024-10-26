from django.contrib import admin
from .models import Doctor

@admin.register(Doctor)
class StudentAdmin(admin.ModelAdmin):
    list_display = ["first_name", "last_name"]

