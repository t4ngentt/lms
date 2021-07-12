from django.contrib import admin
# from .models import Teacher_Info,Skills,Teacher_Profile,Teacher_Course
from .models import Teacher_Course, Teacher_Profile, Teacher_experience
# # Register your models here.

@admin.register(Teacher_experience)
class Teacher_experience(admin.ModelAdmin):
    def get_form(self, request, obj=None, **kwargs):
        
        self.exclude = ("school","branch", )
        form = super(Teacher_experience, self).get_form(request, obj, **kwargs)
        return form

    def save_model(self, request, obj, form, change):
        if not obj.school:
            obj.school = obj.teacher.school
        if not obj.branch:
            
            obj.branch = obj.teacher.branch
        obj.save()
@admin.register(Teacher_Profile)
class Teacher_Profile(admin.ModelAdmin):
    def get_form(self, request, obj=None, **kwargs):
        
        self.exclude = ("school","branch", )
        form = super(Teacher_Profile, self).get_form(request, obj, **kwargs)
        return form

    def save_model(self, request, obj, form, change):
        if not obj.school:
            obj.school = obj.teacher_id.school
        if not obj.branch:
            
            obj.branch = obj.teacher_id.branch
        obj.save()
@admin.register(Teacher_Course)
class Teacher_Course(admin.ModelAdmin):
    def get_form(self, request, obj=None, **kwargs):
        
        self.exclude = ("school","branch", )
        form = super(Teacher_Course, self).get_form(request, obj, **kwargs)
        return form

    def save_model(self, request, obj, form, change):
        if not obj.school:
            obj.school = obj.teacher.school
        if not obj.branch:
            
            obj.branch = obj.teacher.branch
        obj.save()
