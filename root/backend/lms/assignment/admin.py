from django.contrib import admin
from .models import Assignment, Assignment_marks, Assignment_submission, Group_Assignment
# Register your models here.
admin.site.register(Assignment)
admin.site.register(Group_Assignment)
admin.site.register(Assignment_submission)
admin.site.register(Assignment_marks)

