from rest_framework import serializers
from .models import Assignment,Assignment_marks,Assignment_submission,Group_Assignment
from User.models import Course,user_group

class Assignment_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = "__all__"