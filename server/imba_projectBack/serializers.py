from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Project

class Project_Serializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('project_name','description','skills_required','payment_method'
        )
