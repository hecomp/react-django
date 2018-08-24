from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('leads.urls')),
    path('', include('frontend.urls')),  #Mapping frontend
]