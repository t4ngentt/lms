from django import forms
from django.contrib import admin
from django.contrib.auth import models
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group
from .models import User,Branch,Branch_Semester,School,user_group,Group_Course,Admin_info,Semester,Course
from django.contrib.auth.forms import ReadOnlyPasswordHashField
# Register your models here

admin.site.unregister(Group)

class UserCreationForm(forms.ModelForm):
    """A form for creating new users. Includes all the required
    fields, plus a repeated password."""
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ('user_id','email','f_name','l_name','role','is_active','staff','admin')

    def clean_password2(self):
        # Check that the two password entries match
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Passwords don't match")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    """A form for updating users. Includes all the fields on
    the user, but replaces the password field with admin's
    password hash display field.
    """
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = User
        fields = ('user_id','email','f_name','l_name','role','is_active','staff','admin',)

    def clean_password(self):
        # Regardless of what the user provides, return the initial value.
        # This is done here, rather than on the field, because the
        # field does not have access to the initial value
        return self.initial["password"]



@admin.register(User)
class User_Admin(UserAdmin):
    
    filter_horizontal=()
    list_display = ('user_id','email','f_name','l_name','role','is_active','staff','admin',)
    list_filter = ('email','f_name','l_name','user_id','is_active','staff','admin','role')
    search_fields = ('email','f_name','l_name','user_id','is_active','staff','admin','role')
    ordering = ('admin','staff','role')
    add_fieldsets = (
        (None,{
            'fields':('user_id','email','f_name','l_name','password1','password2')
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


@admin.register(School)
class School(admin.ModelAdmin):
    list_display = ('school_id','school_name')
    list_editable = ('school_name',)
    ordering = ('school_id',)

@admin.register(Branch)
class Branch(admin.ModelAdmin):
    raw_id_fields = ['school']
    list_display = ('branch_id','branch_name')
    list_editable = ('branch_name',)
    ordering = ('branch_id',)

@admin.register(Admin_info)
class Admin_info(admin.ModelAdmin):
    raw_id_fields = ['user']
    list_display = ('user','admin_id','admin_name')
    list_editable = ('admin_name',)
    ordering = ('admin_id',)

@admin.register(Semester)
class Semester(admin.ModelAdmin):
    raw_id_fields = ['school','branch']
    list_display = ('semester_id','semester_name','school','branch')
    list_editable = ('semester_name',)
    ordering = ('semester_id',)

@admin.register(Branch_Semester)
class Branch_Semester(admin.ModelAdmin):
    raw_id_fields = ['school','branch','semester']
    ordering = ('branch_sem_id',)

@admin.register(user_group)
class group(admin.ModelAdmin):
    raw_id_fields = ['school','branch','semester']
    list_display = ('group_id','group_name','no_of_students')
    list_editable = ('group_name','no_of_students')
    ordering = ('semester_id',)

@admin.register(Course)
class Course(admin.ModelAdmin):
    raw_id_fields = ('school','branch','semester')
    list_display = ('course_id','course_name','course_desc')
    list_editable = ('course_name',)
    ordering = ('course_id',)

@admin.register(Group_Course)
class Group_Course(admin.ModelAdmin):
    raw_id_fields = ('group','course','school','branch')
    ordering = ('group_course_id',)

    


