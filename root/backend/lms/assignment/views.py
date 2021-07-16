from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from .models import Group_Assignment,Assignment,Assignment_submission,Assignment_marks
# Create your views here.
from .serializers import Assignment_Serializer
import json


class Assignment_Names(APIView):
    def get(self, request, pk=None, format=None):
        querylist = Group_Assignment.objects.filter(grp_course_id=pk).values()
        assignment_fk = []
        print(querylist)
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