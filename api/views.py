from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import DoctorSerializer
from .models import Doctor

# Create your views here.

class DoctorCreate(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

    def delete(self, request, *args, **kwargs):
        Doctor.objects.all().delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        # Customize the response here
        return Response({"doctors": serializer.data})
            
        

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response({"doctors": serializer.data})

    


class DoctorRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    lookup_field = "pk"

# class BlogPostList(APIView):
#     def get(self, request, format=None):
#         # Get the title from the query parameters ( if none, default to empty string)
#         title = request.query_params.get("title", "")

#         if title:
#             # Filter the queryset base on the title
#             blog_posts = BlogPost.objects.filter(title__icontains=title)
#         else:
#             # If non title is provided, return all blog post
#             blog_posts = BlogPost.objects.all()

#         serializer = BlogPostSerializer(blog_posts, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)