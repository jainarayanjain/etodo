from rest_framework import serializers

from tracking.models import Task


class TaskSerializer(serializers.ModelSerializer):
    """TaskSerializer"""

    class Meta:
        model = Task
        exclude = ["user"]
