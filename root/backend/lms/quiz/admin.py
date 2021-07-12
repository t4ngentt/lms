from .models import Group_Quiz, Quiz, Quiz_Data
from django.contrib import admin

# Register your models here.
admin.site.register(Quiz)

@admin.register(Group_Quiz)
class Group_Quiz(admin.ModelAdmin):
    def get_form(self, request, obj=None, **kwargs):
        
        self.exclude = ("school","branch", )
        form = super(Group_Quiz, self).get_form(request, obj, **kwargs)
        return form

    def save_model(self, request, obj, form, change):
        if not obj.school:
            obj.school = obj.teacher.school
        if not obj.branch:
            
            obj.branch = obj.teacher.branch
        obj.save()
    
admin.site.register(Quiz_Data)
# class Quiz_Data(admin.ModelAdmin):
#     def get_form(self, request, obj=None, **kwargs):
        
#         self.exclude = ("school","branch", )
#         form = super(Quiz_Data, self).get_form(request, obj, **kwargs)
#         return form

#     def save_model(self, request, obj, form, change):
#         if not obj.school:
#             obj.school = obj.quiz.school
#         if not obj.branch:
            
#             obj.branch = obj.quiz.branch
#         obj.save()


