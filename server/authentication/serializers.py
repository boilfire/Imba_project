from django.contrib.auth import update_session_auth_hash
from rest_framework import serializers
from authentication.models import User_Prof
from django.contrib.auth.models import User
from django.contrib.auth import update_session_auth_hash

from rest_framework import serializers
from rest_framework.validators import UniqueValidator

class User_Prof_Serializer(serializers.ModelSerializer):

    class Meta:
        model = User_Prof
        read_only_fields = ('created_at', 'updated_at',)
        exclude = ('user',)

class User_Serializer(serializers.ModelSerializer):
    prof = User_Prof_Serializer(required=False)
    password = serializers.CharField(write_only=True, required=True)
    first_name = serializers.CharField(required=True, allow_blank=False)
    last_name = serializers.CharField(required=True, allow_blank=False)
    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])


    class Meta:
        model = User
        fields = (
             'id', 'first_name','last_name','email','username', 'password', 'prof'
        )

    def create(self, validated_data):

        user = User.objects.create_user(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email =validated_data['email'],
            username = validated_data['username'],
            password=validated_data['password']
        )

        return user
