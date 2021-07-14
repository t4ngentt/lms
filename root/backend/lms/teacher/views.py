from django.shortcuts import render
from pandas.core.frame import DataFrame
from rest_framework.response import Response
from User.models import Group_Course
from .serializers import Teacher_Course_Serializer
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from .models import Teacher_Course
from User.models import Course, user_group,User
from User.views import token_authentication
from django.db import connection
import os
import hashlib
import json
import pandas as pd
# Create your views here.

class Teacher_Course_Names(APIView):
    def get(self, request):
        # if token_authentication(request):
            #teacher_id = (json.loads(request.body))['teacher_id']
            #print(teacher_id)
            print("hello")
            querylist = Teacher_Course.objects.filter(teacher='0120190203').values()
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
            tmp_data=pd.read_csv('teacher/sample.csv')
            df= DataFrame(tmp_data)

            User_data=[]
            for index,row in df.iterrows():
                x=User(
                    user_id=row['user_id'],
                    f_name=row['f_name'],
                    l_name=row['l_name'],
                    email=row['email'],
                    staff=row['staff'],
                    is_active=True,
                    admin=row['admin'],
                    role=row['role'],
                )
                x.set_password("Vaishu@22")
                User_data.append(x)
            User.objects.bulk_create(User_data)
            return Response(serializer.data)

