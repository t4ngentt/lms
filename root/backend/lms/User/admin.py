from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
from .models import User

# Register your models here.
admin.site.unregister(Group)
@admin.register(User)
class User_Admin(UserAdmin):
    
    filter_horizontal=()
    list_display = ('user_id','email','f_name','l_name','role','is_active','staff','admin',)
    list_filter = ('email','f_name','l_name','user_id','is_active','staff','admin','role')
    search_fields = ('email','f_name','l_name','user_id','is_active','staff','admin','role')
    ordering = ('admin','staff','role')
    add_fieldsets = (
        (None,{
            'fields':('user_id','email','f_name','l_name','password')
        }),
        ('Permissions',{
            'fields' : ('is_active','staff','admin','role')
        })
    )
    fieldsets = (
        (None,{
            'classes':('wide',),
            'fields':('user_id','email','f_name','l_name','password')
        }),
        ('Permissions',{
            'fields': ('is_active','staff','admin','role')
        })
    )
