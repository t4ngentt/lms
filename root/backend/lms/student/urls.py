from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('classroom/group',views.Student_Group.as_view(),name="Student_Group")
]


