from django.db import models
from django.utils.translation import gettext_lazy
from django.conf import settings


class Task(models.Model):
    """Task Model"""

    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.DO_NOTHING,
                             verbose_name=gettext_lazy("user"))
    name = models.CharField(gettext_lazy("name"), max_length=200)
    is_completed = models.BooleanField(gettext_lazy("is completed"), default=False)
    created = models.DateTimeField(gettext_lazy("created"), auto_now_add=True)
    updated = models.DateTimeField(gettext_lazy("updated"), auto_now=True)
