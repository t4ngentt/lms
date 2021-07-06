# from django.shortcuts import render
# from rest_framework.response import response
from .models import User
from .serializers import UserSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .CustomAuth import CustomAuthenticationBackend
import json,jwt
from django.http.response import JsonResponse

# def index(request):
#     return render(request,'login.html')

def login_token(request):
    login_data=request.body
    print(login_data)
    json_data = json.loads(login_data)
    print(json_data)

    user=CustomAuthenticationBackend.authenticate(CustomAuthenticationBackend,request,json_data['email'],json_data['password'])
    print("hi",user)
    if user is not None:
        jwt_t= jwt.encode({'email': json_data['email']}, 'django-insecure-%oy1s23mp4z-%^ito$+60!5@2fm*qus5=$2c8i3!fte26j%l$n', algorithm='HS256',)
        print(jwt_t,user)
        user_data=UserSerializer(user, context={'request': request}).data
        del user_data['password']
        print(user_data)
        return JsonResponse({
        'token': jwt_t ,
        'user': user_data
    })
    else:
        # return HttpResponse("Invalid Credentials")
        return JsonResponse({'msg':'Error'})


# class Login_Check(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     # print("this")
#     # authentication_classes = [CustomAuthenticate]
#     # print("no")
#     # permission_classes = [IsAuthenticated]