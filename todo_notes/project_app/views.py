from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from rest_framework.viewsets import ModelViewSet

from .models import Project, ToDo
from .serializers import ProjectSerializer, ToDoSerializer


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    parser_classes = (JSONParser,)
    renderer_classes = (JSONRenderer,)


class ToDoViewSet(ModelViewSet):
    queryset = ToDo.objects.all()
    serializer_class = ToDoSerializer
    parser_classes = (JSONParser,)
    renderer_classes = (JSONRenderer,)

