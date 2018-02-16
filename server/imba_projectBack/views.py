from django.shortcuts import render
from .serializers import Project_Serializer
from .models import Project
from rest_framework import permissions,generics
from rest_framework.permissions import AllowAny

class Project_create(generics.CreateAPIView):
    serializer_class = Project_Serializer
    permission_classes = (AllowAny,)

class Project_List(generics.ListAPIView):
    serializer_class = Project_Serializer
    queryset = Project.objects.all()
    permission_classes = (AllowAny,)
