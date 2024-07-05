from .base import models, serializers


class Sample(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class SampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sample
        fields = ['title']
