from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User
# Register your models here.

@admin.site.register(User)
class UserAdmin(BaseUserAdmin):
    
    list_display = ('email','full_name','is_active','is_staff','is_admin','is_teacher','is_student')
    list_filter = ('email','full_name','is_active','is_staff','is_admin','is_teacher','is_student')
    search_fields = ('email','full_name','is_active','is_staff','is_admin','is_teacher','is_student')
    ordering = ('is_admin','is_staff','is_teacher','is_student')
    add_fieldsets = (
        (None,{
            'fields':('email','full_name','password')
        }),
        ('Permissions',{
            'fields' : ('is_active','is_staff','is_admin','is_teacher','is_student')
        })
    )
    fieldsets = (
        (None,{
            'fields':('email','full_name','password')
        }),
        ('Permissions',{
            'fields': ('is_active','is_staff','is_admin','is_teacher','is_student')
        })
    )
