from django.db import models


class Project(models.Model):
    project_name = models.CharField(max_length=50)
    description = models.TextField()
    skills_required = models.TextField()
    
    payment_method = models.CharField(max_length=50)
