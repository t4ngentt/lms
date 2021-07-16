from django.urls import path,include
from django.views.decorators.csrf import csrf_exempt
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView,TokenVerifyView
urlpatterns = [
    # path('user/login/',csrf_exempt(views.login_token),name="login"),
    # path('user/token_autheticate/',csrf_exempt(views.token_authenticate),name="token_authenticate"),
    path('groupDetails/<int:pk>',views.Group_Detail.as_view(),name="grp_detail"),
    # path('home/',views.view_users),
    # path('index/', views.index, name="index")
    path('gettoken/',views.MyTokenObtainPairView.as_view(),name="token"),
    path('verifytoken/',TokenVerifyView.as_view(),name="verify"),
    path('refreshtoken/',TokenRefreshView.as_view(),name="refresh")
]