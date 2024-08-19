
from django.contrib import admin
from django.shortcuts import render

from django.conf import settings
from django.conf.urls.static import static, serve

from django.urls import path, include, re_path



urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('authenticate.urls')),
    path('heritage/', include('heritage.urls')),
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': settings.STATIC_ROOT}),
    
]