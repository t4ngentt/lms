from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('classroom/courses',views.Teacher_Course_Names.as_view(),name="Teacher_course")
    ]