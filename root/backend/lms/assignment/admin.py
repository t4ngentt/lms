from django.contrib import admin
from .models import Assignment, Assignment_marks, Assignment_submission, Group_Assignment
# Register your models here.
admin.site.register(Assignment)
@admin.register(Group_Assignment)
class Group_Assignment(admin.ModelAdmin):
    def get_form(self, request, obj=None, **kwargs):
        
        self.exclude = ("school","branch", )
        form = super(Group_Assignment, self).get_form(request, obj, **kwargs)
        return form

    def save_model(self, request, obj, form, change):
        if not obj.school:
            obj.school = obj.teacher.school
        if not obj.branch:
            
            obj.branch = obj.teacher.branch
        obj.save()
    




@admin.register(Assignment_submission)
class Assignment_submission(admin.ModelAdmin):
    def get_form(self, request, obj=None, **kwargs):
        
        self.exclude = ("school","branch", )
        form = super(Assignment_submission, self).get_form(request, obj, **kwargs)
        return form

    def save_model(self, request, obj, form, change):
        if not obj.school:
            obj.school = obj.prn.school
        if not obj.branch:
            
            obj.branch = obj.prn.branch
        obj.save()

@admin.register(Assignment_marks)
class Assignment_marks(admin.ModelAdmin):
    def get_form(self, request, obj=None, **kwargs):
        
        self.exclude = ("school","branch", )
        form = super(Assignment_marks, self).get_form(request, obj, **kwargs)
        return form

    def save_model(self, request, obj, form, change):
        if not obj.school:
            obj.school = obj.assignment_submission_id.school
        if not obj.branch:
            
            obj.branch = obj.assignment_submission_id.branch
        obj.save()

