from django.urls import path
from . import views

urlpatterns = [
    path('classroom/group/course/<str:pk>/assignments/',views.Assignment_Names.as_view(),name="Assignment_names"),
   #path('classroom/group/course/create_assignment/',views.Create_Assignment.as_view(),name="Assignment_names")
    ]