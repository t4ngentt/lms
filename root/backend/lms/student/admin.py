from django.contrib import admin
from .models import Student_Group,Student_Course,Student_Current_Info
# Register your models here.


@admin.register(Student_Course)
class Student_Course(admin.ModelAdmin):
    raw_id_fields = ['student','course','school','branch']
    list_display = ['student','course','school','branch']
    list_filter = ['school','branch','course']

# admin.register(Student_Info)
@admin.register(Student_Group)
class Student_Group(admin.ModelAdmin):
    raw_id_fields = ['student','group','school','branch']
    list_display = ['student_group_id','student','group','school','branch']
    list_filter = ['group','school','branch']

@admin.register(Student_Current_Info)
class Student_Current_Info(admin.ModelAdmin):
    raw_id_fields = ['student_group','semester','school','branch']
    list_display = ['student_group','semester','roll_no','school','branch']
    list_filter = ['student_group','semester','school','branch']
# admin.register(Student_Profile)
# admin.register(Student_Project)
# admin.register(Student_Documents)
# admin.register(Student_Quiz_Answers)
# admin.register(Student_Quiz)
# admin.register(Student_Selected_Quiz)
# admin.register(Student_Selected_Quiz_Answers)
# admin.register(Student_Result)
# admin.register(Project)


