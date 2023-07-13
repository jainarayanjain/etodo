from django_filters import rest_framework as filters

from tracking.models import Task


class TaskFilterSet(filters.FilterSet):
    """Task Filter Set"""

    class Meta:
        model = Task
        fields = []
