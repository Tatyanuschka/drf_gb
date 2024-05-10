from rest_framework.serializers import ModelSerializer

from users.serializers import UserModelSerializer
from .models import Project, ToDo


class ProjectSerializer(ModelSerializer):
    # project_manager = UserModelSerializer(read_only=False)

    class Meta:
        model = Project
        fields = ('title', 'description', 'project_manager', 'created_at')
        read_only_fields = ('created_at', 'updated_at')


class ToDoSerializer(ModelSerializer):
    # project = ProjectSerializer(read_only=False)

    class Meta:
        model = ToDo
        fields = ('task_title', 'project', 'owner', 'deadline')
        read_only_fields = ('created_at', 'updated_at')
