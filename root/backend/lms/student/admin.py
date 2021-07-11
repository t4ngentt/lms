from django.contrib import admin
from .models import Student_Group,Student_Course,Student_Current_Info, Student_Profile, Student_Project, Student_Quiz, Student_Result, Student_experience,Student_Quiz_Answers
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
    def get_form(self, request, obj=None, **kwargs):
        
        self.exclude = ("school","branch", )
        form = super(Student_Group, self).get_form(request, obj, **kwargs)
        return form

    def save_model(self, request, obj, form, change):
        if not obj.school:
            obj.school = obj.student.school
        if not obj.branch:
            obj.branch = obj.student.branch
        obj.save()


@admin.register(Student_Current_Info)
class Student_Current_Info(admin.ModelAdmin):
    raw_id_fields = ['student_group','semester','school','branch']
    list_display = ['student_group','semester','roll_no','school','branch']
    list_filter = ['student_group','semester','school','branch']
    
admin.site.register(Student_Profile)
admin.site.register(Student_experience)
# admin.site.register(Student_Documents)
# admin.site.register(Student_Quiz_Answers)
admin.site.register(Student_Quiz)
# admin.site.register(Student_Selected_Quiz)
admin.site.register(Student_Quiz_Answers)
admin.site.register(Student_Result)
admin.site.register(Student_Project)


