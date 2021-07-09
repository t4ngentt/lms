from rest_framework import serializers
from .models import Student_Course, Student_Current_Info, Student_Group

class Student_Group_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Student_Group
        fields = ['student_group_id','student','group']

class Student_Course_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Student_Course
        fields = ['student','course']

class Student_Current_Info_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Student_Current_Info
        fields = ['student_group','semester','roll_no']