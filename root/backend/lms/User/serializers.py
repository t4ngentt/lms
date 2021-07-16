from rest_framework import serializers
from User.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
import json

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        credentials={
            'email':'',
            'password':attrs.get("password")
        }
        user_obj = User.objects.filter(email=attrs.get("email")).first() or User.objects.filter(user_id=attrs.get("email")).first()
        if user_obj:
            credentials['email'] = user_obj.email
        data = super().validate(credentials)
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

