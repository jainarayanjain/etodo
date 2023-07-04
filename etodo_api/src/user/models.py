from django.db import models
from django.conf import settings
from django.utils.translation import gettext_lazy


class Profile(models.Model):
    """Profile Model"""

    user = models.OneToOneField(settings.AUTH_USER_MODEL,
                                on_delete=models.CASCADE,
                                verbose_name=gettext_lazy("user"))
    reviewer_name = models.CharField(gettext_lazy("reviewer name"), max_length=100)
    reviewer_email = models.CharField(gettext_lazy("reviewer email"), max_length=100)
    created = models.DateTimeField(gettext_lazy("created"), auto_now_add=True)
    updated = models.DateTimeField(gettext_lazy("updated"), auto_now=True)
