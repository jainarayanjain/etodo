from rest_framework import viewsets

from tracking.filters import TaskFilterSet
from tracking.models import Task
from tracking.serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    """TaskModelViewSet"""

    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filterset_class = TaskFilterSet

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
