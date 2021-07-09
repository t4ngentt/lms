from rest_framework import serializers
from .models import Student_Course, Student_Current_Info, Student_Group
from User.models import Course,user_group

class Student_Group_Serializer(serializers.ModelSerializer):
    class Meta:
        model = user_group
        fields = ['group_id','group_name']

class Student_Course_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['course_id','course_name']

class Student_Current_Info_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Student_Current_Info
        fields = ['student_group','semester','roll_no']