from rest_framework import serializers
from . models import *


class DefinitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Definition
        fields = ['word','long_Definition']
