from django.urls import path

from user.apps import UserConfig
from user.views import LoginView, LogoutView, DetailView

app_name = UserConfig.name

urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("detail/", DetailView.as_view(), name="detail"),
]
