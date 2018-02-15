from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save, pre_delete
from rest_framework.authtoken.models import Token

class User_Prof(models.Model):
    user = models.OneToOneField(User, primary_key=True, related_name='profile',on_delete = models.CASCADE )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.user.username

    @receiver(post_save, sender=User)
    def create_user(sender, instance, created , **kwargs):
        if created:
            User_Prof.objects.create(user = instance)
            
