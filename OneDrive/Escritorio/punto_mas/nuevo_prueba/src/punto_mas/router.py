from rest_framework import routers
from home.api import views

router = routers.DefaultRouter()

router.register("sample", views.SampleViewSet, basename="samples")
