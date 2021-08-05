from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('classroom/courses',views.Teacher_Course_Names.as_view(),name="Teacher_course"),
    path('classroom/group_course/<str:pk>/units',views.Teacher_Course_Unit_Api.as_view(),name="Teacher_course_units"),
    path('classroom/group_course/units/<str:pk>/lectures',views.Teacher_Lecture.as_view(),name="Teacher_Lectures"),
    path('classroom/group_course/units/lecture/<str:pk>/attendance', views.Teacher_Attendance.as_view(), name="Teacher_Attendance")
  
    ]