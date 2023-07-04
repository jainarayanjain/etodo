from django.contrib.auth import get_user_model
from rest_framework import generics, permissions, viewsets
from rest_framework.authtoken.models import Token

from user.serializers import (
    TokenSerializer,
    UserSerializer,
)

User = get_user_model()


class LoginView(generics.CreateAPIView):
    """Login View: Use to log in user"""

    queryset = Token.objects.all()
    serializer_class = TokenSerializer
    permission_classes = [permissions.AllowAny]


class DetailView(generics.RetrieveAPIView):
    """Detail View: Use to return user details"""

    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user


class LogoutView(generics.DestroyAPIView):
    """Logout View: Use to log out the user"""

    queryset = Token.objects.all()

    def get_object(self):
        return self.get_queryset().get(user=self.request.user)

