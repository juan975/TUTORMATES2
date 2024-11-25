from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer  # Asegúrate de tener este serializador

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
