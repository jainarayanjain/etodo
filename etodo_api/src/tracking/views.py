from rest_framework import viewsets

from tracking.filters import TaskFilterSet
from tracking.models import Task
from tracking.serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    """TaskModelViewSet"""

    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filterset_class = TaskFilterSet
