from django.contrib import admin
from guardian.admin import GuardedModelAdmin

from user.models import Profile

admin.site.register(Profile, GuardedModelAdmin)
