from rest_framework import status
from django.db.models import Q
from django.db.models import Max

import json
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.http import JsonResponse


from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Property, Bid, Testimonial, TeamMember
from .serializers import PropertySerializer, BidSerializer, TestimonialSerializer, TeamMemberSerializer


@api_view(['GET'])
def property_list(request):
    search = request.query_params.get('search', '')
    location = request.query_params.get('location', '')
    property_type = request.query_params.get('property_type', '')
    budget = request.query_params.get('budget', None)

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
            return Response({"error": "Invalid budget format. Must be a number."}, status=400)

    serializer = PropertySerializer(properties, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def property_detail(request, pk):
    property = get_object_or_404(Property, pk=pk)

    highest_bid = Bid.objects.filter(property=property).order_by('-amount').first()

    serializer = PropertySerializer(property)
    property_data = serializer.data
    
    if highest_bid:
        property_data['highest_bid'] = {
            'amount': float(highest_bid.amount),
            'bidder': highest_bid.bidder.username,
            'placed_at': highest_bid.placed_at,
        }
        property_data['minimum_bid'] = round(float(highest_bid.amount) * 1.10, 2)
    else:
        property_data['highest_bid'] = {
            'amount': float(property.price),
            'bidder': None,
            'placed_at': None,
        }
        property_data['minimum_bid'] = round(float(property.price) * 1.05, 2)

    return Response(property_data)


@csrf_exempt
@login_required
def place_bid(request, property_id):
    if request.method == "POST":
        property = get_object_or_404(Property, pk=property_id)
        user = request.user

        data = json.loads(request.body)

        bid_amount = data.get('amount')
        print(bid_amount, user)
        if not bid_amount:
            return JsonResponse({"error": "Bid amount is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            bid_amount = float(bid_amount)
            highest_bid = Bid.objects.filter(property=property).order_by('-amount').first()
            
            if highest_bid and highest_bid.bidder == user:
                return JsonResponse({"error": "You already have the highest bid."}, status=status.HTTP_400_BAD_REQUEST)
            
            if highest_bid and bid_amount <= highest_bid.amount:
                return JsonResponse({"error": "Bid amount must be higher than the current highest bid."}, status=status.HTTP_400_BAD_REQUEST)
            
            minimum_increment = 10
            if highest_bid and bid_amount < highest_bid.amount + minimum_increment:
                return JsonResponse({"error": f"Bid must be at least {minimum_increment} more than the current highest bid."}, status=status.HTTP_400_BAD_REQUEST)

            bid = Bid.objects.create(property=property, bidder=user, amount=bid_amount)
            bid.save()

            return JsonResponse({"message": "Bid placed successfully.", "bid": BidSerializer(bid).data}, status=status.HTTP_201_CREATED)

        except ValueError:
            return JsonResponse({"error": "Invalid bid amount."}, status=status.HTTP_400_BAD_REQUEST)
    return JsonResponse({"error": "Method not allowed."}, status=405)
    
@api_view(['POST'])
def finalize_bid(request, property_id):
    property = get_object_or_404(Property, pk=property_id)
    

    highest_bid = Bid.objects.filter(property=property).order_by('-amount').first()

    if not highest_bid:
        return Response({"error": "No bids have been placed for this property."}, status=status.HTTP_400_BAD_REQUEST)
    

    property.winner = highest_bid.bidder
    property.save()

    return Response({"message": f"{highest_bid.bidder.username} has won the property {property.name} with a bid of {highest_bid.amount}."})


@api_view(['GET'])
def user_profile(request):
    user = request.user
    won_properties = user.won_properties.all()  

    won_properties_serializer = PropertySerializer(won_properties, many=True)

    return Response({
        "username": user.username,
        "email": user.email,
        "won_properties": won_properties_serializer.data
    })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def submit_testimonial(request, pk):
    property = Property.objects.get(pk=pk)
    serializer = TestimonialSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user, property=property)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def team_info(request):
    team_members = TeamMember.objects.all()
    serializer = TeamMemberSerializer(team_members, many=True)
    return Response(serializer.data)
