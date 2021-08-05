from student.models import Student_Course, Student_Group
from django.shortcuts import render
# from pandas.core.frame import DataFrame
from rest_framework import viewsets
from rest_framework.response import Response
from User.models import Group_Course , Course_Unit
from User.serializers import Course_Unit_Serializer
from .serializers import Attendence_Serializer, Lecture_Serializer, Student_Group_Attendance_Serializer, Teacher_Course_Serializer
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from .models import Attendance, Lecture, Teacher_Course
from User.models import Course, user_group,User
# from User.views import token_authentication
from django.db import connection
import os
import hashlib
import json
# import pandas as pd
# Create your views here.

class Teacher_Course_Names(APIView):
    def post(self, request):
        # if token_authentication(request):
            teacher_id = (json.loads(request.body))['teacher_id']
            print(teacher_id)
            querylist = Teacher_Course.objects.filter(teacher=teacher_id).values()
            print(querylist)
            group_course_fk = []
            for j in querylist:
                group_course_fk.append(j['group_course_id'])
            queryset = Group_Course.objects.filter(group_course_id__in=group_course_fk)
            for j in queryset:
                x=user_group.objects.get(group_id=j.group_id)
                j.group_id=x.group_name
                y=Course.objects.get(course_id=j.course_id)
                j.course_id=y.course_name
            serializer = Teacher_Course_Serializer(queryset, many=True)
            return Response(serializer.data)

class Group_course_api(APIView):
    def get(request,self, pk=None):
            j = Group_Course.objects.get(group_course_id=pk)
            x=user_group.objects.get(group_id=j.group_id)
            j.group_id=x.group_name
            y=Course.objects.get(course_id=j.course_id)
            j.course_id=y.course_name
            serializer = Teacher_Course_Serializer(j)
            return Response(serializer.data)

class Teacher_Course_Unit_Api(APIView):
    def get(self, request, pk=None, format=None):
        obj= Group_Course.objects.get(group_course_id=pk)
        queryset = Course_Unit.objects.filter(course_id=obj.course_id).values()
        serializer = Course_Unit_Serializer(queryset, many=True)
        return Response(serializer.data)

class Teacher_Lecture(APIView):
    def get(self, request,pk=None):
        queryset= Lecture.objects.filter(course_unit = pk)
        serializer= Lecture_Serializer(queryset, many=True)
        return Response(serializer.data)
    def post(self, request):
        try:
            data = json.loads(request.body)
            obj = Lecture(lecture_number=data['lecture_number'],course_unit=data['course_unit'],
            topic=data['topic'],tlo_no=data['tlo_no'],co_no=data['co_no'],date_of_plan=data['date_of_plan'],date_of_conduction=data['date_of_conduction'])
            obj.save()
            return Response({"status":"lecture created"})
        except Exception as e:
            return Response({"status":str(e)})




class Teacher_Attendance(APIView):
    def get(self, request,pk):
        queryset=   Attendance.objects.filter(lecture=pk)
        serializer = Attendence_Serializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request,pk):
        try:
            data= json.loads(request.body)
            for i in data:
                obj=Attendance(lecture=pk,user=i['prn'],val=i['attendance'])
                obj.save()
            return Response({"status":"Attendance added successfully"})
        except Exception as e:
            return Response({"status":str(e)})


class Students_In_Group(APIView):

    def get(self,request,pk):
        group = Group_Course.objects.get(group_course_id = pk).group
        queryset_list = Student_Group.objects.filter(group = group).values_list('student',flat=True)
        print(queryset_list)
        queryset = User.objects.filter(user_id__in = queryset_list)
        
        serializer = Student_Group_Attendance_Serializer(queryset,many=True)
        return Response(serializer.data)