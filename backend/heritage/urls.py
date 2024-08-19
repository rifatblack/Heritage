from django.urls import path
from . import views

urlpatterns = [
    path('properties/', views.property_list, name='property_list'),
    path('properties/<int:pk>/', views.property_detail, name='property_detail'),
    path('properties/place_bid/<int:property_id>/', views.place_bid, name='place_bid'),
    path('property/<int:property_id>/finalize_bid/', views.finalize_bid, name='finalize_bid'),
    path('user/profile/', views.user_profile, name='user_profile'),
    path('properties/<int:pk>/testimonial/', views.submit_testimonial, name='submit_testimonial'),
    path('team/', views.team_info, name='team_info'),
]
