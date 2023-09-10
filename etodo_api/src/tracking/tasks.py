from celery import shared_task
from django.utils import timezone

from tracking.models import Task
from tracking.helpers import through_email


@shared_task()
def email_task() -> None:
    """Email Task"""
    instance = Task.objects.filter(is_completed=False).first()
    task_list = Task.objects.filter(is_completed=False).values_list("name", flat=True)
    subject = "Task not completed"
    body = ", ".join(elem for elem in task_list)
    to = [instance.user.profile.reviewer_email]
    through_email(subject, body, to)
