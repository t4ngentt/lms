from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('classroom/courses',views.Teacher_Course_Names.as_view(),name="Teacher_course"),
    path('classroom/group_course/<str:pk>/group_and_course',views.Group_course_api.as_view(),name="Teacher_course")
    ]