from django.db.models import Q
from django.shortcuts import get_object_or_404
from .models import Property, Bid, TeamMember

class PropertyService:
    @staticmethod
    def get_properties(search='', location='', property_type='', budget=None):
        properties = Property.objects.all().order_by('-listed_at')

        if search:
            properties = properties.filter(
                Q(name__icontains=search) | Q(description__icontains=search)
            )

        if location:
            properties = properties.filter(location__icontains=location)

        if property_type:
            properties = properties.filter(property_type__icontains=property_type)

        if budget:
            try:
                budget = float(budget)
                properties = properties.filter(price__lte=budget)
            except ValueError:
                raise ValueError("Invalid budget format. Must be a number.")
        
        return properties

    @staticmethod
    def get_property_with_highest_bid(pk):
        property = get_object_or_404(Property, pk=pk)
        highest_bid = Bid.objects.filter(property=property).order_by('-amount').first()
        return property, highest_bid

    @staticmethod
    def create_bid(property, user, bid_amount):
        highest_bid = Bid.objects.filter(property=property).order_by('-amount').first()
        
        if highest_bid and highest_bid.bidder == user:
            raise ValueError("You already have the highest bid.")
        
        if highest_bid and bid_amount <= highest_bid.amount:
            raise ValueError("Bid amount must be higher than the current highest bid.")
        
        minimum_increment = 10
        if highest_bid and bid_amount < highest_bid.amount + minimum_increment:
            raise ValueError(f"Bid must be at least {minimum_increment} more than the current highest bid.")
        
        bid = Bid.objects.create(property=property, bidder=user, amount=bid_amount)
        bid.save()
        return bid

class TeamMemberService:
    @staticmethod
    def get_team_members():
        return TeamMember.objects.all()
