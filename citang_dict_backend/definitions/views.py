from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *


class DefinitionView(APIView):
    serializer_class = DefinitionSerializer
    def get(self, request):
        output = [{"word": output.word, 
            "Long_Definition": output.long_Definition}
            for output in Definition.objects.all()]
        return Response(output)

    def post(self,request):
        serializer = DefinitionSerializer(data = request.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)


    
