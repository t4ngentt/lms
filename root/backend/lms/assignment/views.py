from copy import Error
import datetime
import os
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from User.models import Group_Course
from rest_framework.generics import CreateAPIView
from .models import Group_Assignment,Assignment,Assignment_submission,Assignment_marks
# Create your views here.
from .serializers import Assignment_Serializer
import json
from django.views.decorators.csrf import csrf_protect
from django.core.files.storage import FileSystemStorage
from pathlib import Path
from lms.settings import BASE_DIR
import os
class Student_Assignment_Names(APIView):
    def get(self, request, group_pk=None, course_pk=None, format=None):
        grp_course_obj=Group_Course.objects.get(group_id=group_pk,course_id=course_pk)
        querylist = Group_Assignment.objects.filter(grp_course_id=grp_course_obj.group_course_id).values()
        assignment_fk = []
        for j in querylist:
            assignment_fk.append(j['assignment_id_id'])
        queryset = Assignment.objects.filter(assignment_id__in=assignment_fk)
        serializer_class = Assignment_Serializer(queryset, many=True)

        return Response(serializer_class.data)
    
# class Create_Assignment(CreateAPIView):
#     queryset = Assignment.objects.all()
#     serializer_class = Assignment_Serializer
#     def create(self, request, *args, **kwargs):
#         x=Group_Assignment()
#         return Response(status=204)

from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def Create_Assignment(request):
    try:
        if request.method == 'POST':
            data = request.POST
            files = request.FILES.getlist('f1')
            print(files)
            for i in data:
                if i is None:
                    return JsonResponse({"You Entered invalid data"})
            assignment_object = Assignment(title = data['title'],description = data['description'],min_marks = data['min_marks'],max_marks = data['max_marks'],post_date = data['post_date'],due_date = data['due_date'])
            assignment_object.save()
            grp_obj = Group_Course.objects.get(group_course_id = data['grp_course_id'])
            Group_Assignment(grp_course = grp_obj,assignment_id = assignment_object).save()
            fs = FileSystemStorage(location=str(os.path.join(BASE_DIR,"media")))
            fileurl = []
            for i in files:
                file = fs.save(i.name,i)
                fileurl.append(fs.url(file))
            return JsonResponse({"msg":"Assignment Created Successfully ! ","file_url":str(fileurl)})
    except Exception as e:
        print(e)
        return JsonResponse({"Error":str(e)})
        

class Teacher_Assignment_Names(APIView):
    def get(self, request, pk=None, format=None):
        
        querylist = Group_Assignment.objects.filter(grp_course_id=pk).values()
        assignment_fk = []
        print(querylist)
        for j in querylist:
            assignment_fk.append(j['assignment_id_id'])
        queryset = Assignment.objects.filter(assignment_id__in=assignment_fk)
        serializer_class = Assignment_Serializer(queryset, many=True)
        # dir=str(os.path.join(BASE_DIR,"0120190202"))
        # os.makedirs(dir)
        # dir=str(os.path.join(dir,"Assignments"))
        # os.makedirs(dir)
        return Response(serializer_class.data)