from rest_framework import serializers
from User.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import json

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        # Add extra responses here
        data['email'] = self.user.email
        data['prn'] = self.user.user_id
        data['f_name'] = self.user.f_name
        data['l_name'] = self.user.l_name
        data['role'] = self.user.role
        data['admin'] = self.user.admin
        data['branch'] = str(self.user.branch)
        data['school'] = str(self.user.school)
        return data
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

