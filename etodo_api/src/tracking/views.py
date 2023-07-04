from rest_framework import viewsets

from tracking.models import Task
from tracking.serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    """TaskModelViewSet"""

    queryset = Task.objects.all()
    serializer_class = TaskSerializer
