from django.urls import path,include
from . import views

urlpatterns = [
    path('user/login/',views.login_token,name="login"),
    # path('home/',views.view_users),
    # path('index/', views.index, name="index")
]