# from django.shortcuts import render
# from rest_framework.response import response
from .models import User, user_group
from .serializers import UserSerializer
from student.serializers import Student_Group_Serializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from .CustomAuth import CustomAuthenticationBackend
import json,jwt,datetime
from django.http.response import JsonResponse

def login_token(request):
    login_data=request.body
    print(login_data)
    json_data = json.loads(login_data)
    print(json_data)
    user=CustomAuthenticationBackend.authenticate(CustomAuthenticationBackend,request,json_data['email'],json_data['password'])
    if user is not None:
        jwt_t= jwt.encode({'email': json_data['email'],'exp':datetime.datetime.utcnow()+datetime.timedelta(minutes=60)}, 'django-insecure-%oy1s23mp4z-%^ito$+60!5@2fm*qus5=$2c8i3!fte26j%l$n', algorithm='HS256')
        print(jwt_t,user)
        user_data=UserSerializer(user, context={'request': request}).data
        del user_data['password']
        print(user_data)
        return JsonResponse({
        'token': jwt_t,
        'user': user_data
        })
    else:
        return JsonResponse({'msg':'Error'})


def token_authenticate(request):
    data= request.headers['Authorization']
    token = str.replace(str(data), 'Bearer ', '')
    print(token)
    if not token:
        return JsonResponse({'msg':'Unauthenticated'})
    try:
        payload = jwt.decode(token,'django-insecure-%oy1s23mp4z-%^ito$+60!5@2fm*qus5=$2c8i3!fte26j%l$n', algorithms=['HS256'])
        
    except jwt.ExpiredSignatureError:
        return JsonResponse({'msg':'Unauthenticated'})
    user = User.objects.get(email=payload['email'])
    user_data=UserSerializer(user, context={'request': request}).data
    del user_data['password']
    return JsonResponse({
        'user': user_data })

def token_authentication(request):
    data= request.headers['Authorization']
    token = str.replace(str(data), 'Bearer ', '')
    print(token)
    if not token:
        return False
    try:
        payload = jwt.decode(token,'django-insecure-%oy1s23mp4z-%^ito$+60!5@2fm*qus5=$2c8i3!fte26j%l$n', algorithms=['HS256'])
        
    except jwt.ExpiredSignatureError:
        return False
    user = User.objects.get(email=payload['email'])
    user_data=UserSerializer(user, context={'request': request}).data
    del user_data['password']
    return True


# class Login_Check(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     # print("this")
#     # authentication_classes = [CustomAuthenticate]
#     # print("no")
#     # permission_classes = [IsAuthenticated]

class Group_Detail(GenericAPIView,RetrieveModelMixin):
    queryset = user_group.objects.all()
    serializer_class = Student_Group_Serializer
    def get(self,request,*args,**kwargs):
        return self.retrieve(request,*args,**kwargs)