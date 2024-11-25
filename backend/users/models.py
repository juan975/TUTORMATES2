from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    idusuario = models.AutoField(db_column='idUsuario', primary_key=True)  # Si prefieres usar 'idUsuario' como nombre
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    correo = models.CharField(max_length=100)
    edad = models.IntegerField()
    genero = models.CharField(max_length=9)
    carrera = models.CharField(max_length=100)
    rol = models.CharField(max_length=13)
    contraseña = models.CharField(max_length=255)  # Asegúrate de cifrar la contraseña en la base de datos

    # Asegúrate de agregar `related_name` para evitar conflictos con 'auth.User'
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_set',  # Nuevo nombre para la relación inversa
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions_set',  # Nuevo nombre para la relación inversa
        blank=True,
    )

    class Meta:
        managed = True
        db_table = 'usuarios'
