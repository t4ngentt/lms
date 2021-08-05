from student.models import Student_Group
from rest_framework import serializers
from .models import Attendance, Lecture, Teacher_Course
from User.models import Course,user_group,Group_Course,User

class Teacher_Course_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Group_Course
        fields = ['group_course_id','group_id','course_id',]

class Lecture_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields= '__all__'

class Attendence_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields= '__all__'


class Student_Attendance_Serializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_id','f_name','l_name','email']