# from django.shortcuts import render
# from rest_framework.response import response
from .models import User
from .serializers import UserSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .CustomAuth import CustomAuthenticate

# class view_users(viewsets.ModelViewSet):
#     queryset=User.objects.all()
#     serializer_class=UserSerializer
#     permission_classes=[AllowAny]

# def index(request):
#     return render(request,'login.html')

# def login_token(request):
#     # user_id=request.POST.get('email_or_id')
#     # password=request.POST.get('password')
#     login_data=request.body
#     json_data = json.loads(login_data)[0]
    
#     user=CustomAuthenticationBackend.authenticate(CustomAuthenticationBackend,request,json_data['user_id'],json_data['password'])
#     print("hi",user)
#     if user is not None:
#         jwt_t= jwt.encode({'email': json_data['user_id'], "is_student":user.is_student}, 'MySecretKey', algorithm='HS256',)
#         print(jwt_t,user)
#         return JsonResponse({
#         'token': jwt_t.decode("utf-8") ,
#         'user': UserSerializer(user, context={'request': request}).data
#     })
#     else:
#         return HttpResponse("Invalid Credentials")


# class Login_Check(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     # print("this")
#     # authentication_classes = [CustomAuthenticate]
#     # print("no")
#     # permission_classes = [IsAuthenticated]