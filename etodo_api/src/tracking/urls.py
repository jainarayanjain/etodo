from django.urls import path
from rest_framework import routers

from tracking.apps import TrackingConfig
from tracking.views import (
    TaskViewSet
)

app_name = TrackingConfig.name

router = routers.DefaultRouter()
router.register(r"tasks", TaskViewSet, basename="task")
urlpatterns = [
]
urlpatterns += router.urls
