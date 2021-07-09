"""lms URL Configuration"""

from django.contrib import admin
from django.urls import path,include
from User import views
# from rest_framework.routers import DefaultRouter
# router = DefaultRouter()

# router.register('userapi',views.Login_Check,basename='user')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('User.urls')),
    path('api/',include('student.urls'))
    # path('auth/', include('rest_framework.urls')),
    
]

