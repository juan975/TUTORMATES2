from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet

router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)

# Rutas para la API
urlpatterns = [
    path('', include(router.urls)),
]
