from django.db import models
from django.contrib.auth.hashers import make_password
from django.core.validators import MinLengthValidator

class Doctor(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)  # Ensure to hash this later
    vcn_number = models.CharField(max_length=20, validators=[MinLengthValidator(5)], unique=True)
    address = models.TextField()
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    image = models.ImageField(upload_to='images/')
    bio = models.TextField()
    x_link = models.URLField()
    facebook_link = models.URLField()
    instagram_link = models.URLField()
    linked_in_link = models.URLField()

    def save(self, *args, **kwargs):
        if not self.pk: 
            self.password = make_password(self.password) 
        super(Doctor, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
