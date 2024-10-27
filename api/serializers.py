from rest_framework import serializers # type: ignore
from .models import Doctor

class DoctorSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    def get_image_url(self, obj):
        request = self.context.get("request")
        image_url = obj.image.url
        return request.build_absolute_uri(image_url) if obj.image else None
    
    class Meta:
        model = Doctor
        fields = [ "first_name", "last_name", "email", "password", "vcn_number", "address", "latitude", "longitude", "bio", 
        "x_link", "facebook_link", "instagram_link", "linked_in_link", "image_url" ]

    