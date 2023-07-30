from django.db import models

from datetime import datetime  

# Create your models here.


class Definition(models.Model):
    word = models.CharField(max_length=100)
    short_Definition = models.TextField(max_length=100, null=True, blank=True)
    long_Definition = models.TextField(max_length=300, blank=True)
    pub_date = models.DateTimeField("date published", default=datetime.now, blank=True)
    def __str__(self):
        return self.word

