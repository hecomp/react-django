from django.urls import path
from leads import views

urlpatterns = [
    path('lead/', views.LeadListCreate.as_view()),
    path('leads/<int:pk>/', views.LeadDetail.as_view())
]