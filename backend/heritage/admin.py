from django.contrib import admin

# Register your models here.

from .models import Property, Bid, Testimonial, TeamMember, PropertyImage

admin.site.register(Property)
admin.site.register(PropertyImage)
admin.site.register(Bid)
admin.site.register(Testimonial)
admin.site.register(TeamMember)