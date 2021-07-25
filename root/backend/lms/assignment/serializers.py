from rest_framework import serializers
from .models import Assignment,Assignment_marks,Assignment_submission,Group_Assignment
from User.models import Course,user_group

class Assignment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = "__all__"

class Assignment_Submission_Serializer(serializers.ModelSerializer):
    name = serializers.ReadOnlyField
    file_path = serializers.ReadOnlyField
    class Meta:
        model = Assignment_submission
        fields = ['assignment_submission_id','assignment_id','prn','submit_time','name','file_path',]
    # def get_name(self,queryset):
    #     for i in queryset:
    #         print(type(i))
    #         return i.prn.f_name+" "+i.prn.l_name
    # def get_file_path(self,queryset):
    #     for i in queryset:
    #         print(type(i))
    #         folder_path =str(BASE_DIR)+'\\studentdata\\0120190202\\assignments\\f6edf695-c46c-471c-92b1-99b010ff105b'
    #         assignments = os.listdir(folder_path)
    #         submission_file_path=[]
    #         for j in assignments:
    #             submission_file_path.append(folder_path+"\\"+j)
    #         return submission_file_path
        


