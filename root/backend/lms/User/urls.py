from django.urls import path,include
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path('user/login/',csrf_exempt(views.login_token),name="login"),
    path('user/token_autheticate/',csrf_exempt(views.token_authenticate),name="token_authenticate"),
    # path('home/',views.view_users),
    # path('index/', views.index, name="index")
]