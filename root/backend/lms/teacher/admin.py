from django.contrib import admin
# from .models import Teacher_Info,Skills,Teacher_Profile,Teacher_Course
from .models import Teacher_Course, Teacher_Profile, Teacher_experience
# # Register your models here.

admin.site.register(Teacher_experience)
admin.site.register(Teacher_Profile)
admin.site.register(Teacher_Course)
# admin.register(Skills)
