from .serializers import Student_Group_Serializer
from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin
from .models import Student_Group
# Create your views here.

class Student_Group(GenericAPIView,ListModelMixin):
    
    queryset = Student_Group.objects.filter(student="0120190202")
    serializer_class = Student_Group_Serializer

    def get(self,request,*args,**kwargs):
        return self.list(request,*args,**kwargs)

