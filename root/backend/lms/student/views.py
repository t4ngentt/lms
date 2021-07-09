from User.models import Group_Course
from .serializers import Student_Group_Serializer,Student_Course_Serializer
from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin
from .models import Student_Group,Student_Course
from User.models import Course,user_group
from django.db import connection
cursor = connection.cursor()
# Create your views here.

class Student_Group(GenericAPIView,ListModelMixin):
    querylist=Student_Group.objects.filter(student='0120190202').values()
    group_fk=[]
    for j in querylist:
        group_fk.append(j['group_id'])
    queryset=user_group.objects.filter(group_id__in=group_fk)
    print(queryset.values())
    serializer_class = Student_Group_Serializer
    
    def get(self,request,*args,**kwargs):
        return self.list(request,*args,**kwargs)

class Student_Course(GenericAPIView,ListModelMixin):
    
    querylist=Group_Course.objects.filter(group_id='1').values()
    course_fk=[]
    for j in querylist:
        course_fk.append(j['course_id'])
    queryset=Course.objects.filter(course_id__in=course_fk)
    print(querylist.values())
    serializer_class = Student_Course_Serializer

    def get(self,request,*args,**kwargs):
        return self.list(request,*args,**kwargs)

