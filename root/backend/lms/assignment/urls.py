from django.urls import path
from . import views

urlpatterns = [
    path('classroom/group/<str:group_pk>/course/<str:course_pk>/assignments/',views.Student_Assignment_Names.as_view(),name="Assignment_names"),
    path('classroom/group/course/create_assignment/',views.Create_Assignment,name="Assignment_names"),
    path('classroom/group_course/<str:pk>/assignments/',views.Teacher_Assignment_Names.as_view(),name="Assignment_names"),
    path('classroom/group/course/submit_assignment/',views.submit_assignment,name="submit_assignment"),
    path('assignment/<str:pk>/',views.Assignment_Details.as_view(),name="assignment_details"),
        ]