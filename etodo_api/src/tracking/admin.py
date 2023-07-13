from django.contrib import admin
from guardian.admin import GuardedModelAdmin

from tracking.models import Task

admin.site.register(Task, GuardedModelAdmin)
