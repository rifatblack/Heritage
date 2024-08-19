from django.urls import path

from . import views

urlpatterns = [
    path('login/', views.login_view, name='auth-login'),
    path('logout/', views.logout_view, name='auth-logout'),
    path('session/', views.session_view, name='auth-session'),
    path('whoami/', views.whoami_view, name='auth-whoami'),
]