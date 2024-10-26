from django.urls import path
from .views import DoctorCreate, DoctorRetrieveUpdateDestroy

urlpatterns = [
    path("api/doctors", DoctorCreate.as_view()),
    path("api/doctor/<int:pk>", DoctorRetrieveUpdateDestroy.as_view())
]