from celery import shared_task
from django.utils import timezone

from tracking.models import Task
from tracking.helpers import through_email


@shared_task()
def email_task() -> None:
    """Email Task"""
    date = timezone.now().isoformat().split("T")[0]
    start = f"{date}T00:00:00.0Z"
    end = f"{date}T23:59:59.0Z"
    instance = Task.objects.filter(
        created__gte=start, created__lte=end, is_completed=False
    ).first()
    list_of_task = list(
        Task.objects.filter(
            created__gte=start, created__lte=end, is_completed=False
        ).values("name")
    )

    if len(list_of_task) == 0:
        return
    subject = "Reminder"
    body = ''.join(str(elem) for elem in list_of_task)
    to = [instance.user.profile.reviewer_email]
    through_email(subject, body, to)
    Task.objects.all().delete()