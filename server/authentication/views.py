import json
from django.shortcuts import render
from rest_framework import mixins, generics, permissions, views
from rest_framework.permissions import AllowAny
from .serializers import User_Serializer
from django.contrib.auth.models import User
from authentication.models import User_Prof
from django.contrib.auth import authenticate, login

# Create your views here.

class User_Registration(mixins.CreateModelMixin
,generics.GenericAPIView):
    permission_classes = (AllowAny,)
    queryset = User.objects.all()
    serializer_class = User_Serializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class LoginView(views.APIView):
    def post(self, request, format=None):
        data = json.loads(request.body)

        username = data.get('username',None)
        password = data.get('password',None)

        account = authenticate(username=username, password=password)

        if account is not None:
            if account.is_active:
                login(request, account)

                serialized = User_Serializer(account)

                return Response(serialized.data)
            else:
                    return Response({
                        'status': 'Unauthorized',
                        'message': 'This account has been disabled.'
                    }, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({
                'status': 'Unauthorized',
                'message': 'Username/password combination invalid.'
            }, status=status.HTTP_401_UNAUTHORIZED)
