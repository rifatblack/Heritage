from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

import json
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt

from .services import PropertyService, TeamMemberService
from .serializers import PropertySerializer, BidSerializer, TestimonialSerializer, TeamMemberSerializer

@api_view(['GET'])
def property_list(request):
    search = request.query_params.get('search', '')
    location = request.query_params.get('location', '')
    property_type = request.query_params.get('property_type', '')
    budget = request.query_params.get('budget', None)

    try:
        properties = PropertyService.get_properties(search, location, property_type, budget)
    except ValueError as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    serializer = PropertySerializer(properties, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def property_detail(request, pk):
    property, highest_bid = PropertyService.get_property_with_highest_bid(pk)

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
        property = PropertyService.get_property_with_highest_bid(property_id)[0]
        user = request.user

        data = json.loads(request.body)
        bid_amount = data.get('amount')

        if not bid_amount:
            return JsonResponse({"error": "Bid amount is required."}, status=status.HTTP_400_BAD_REQUEST)

        try:
            bid_amount = float(bid_amount)
            bid = PropertyService.create_bid(property, user, bid_amount)
            return JsonResponse({"message": "Bid placed successfully.", "bid": BidSerializer(bid).data}, status=status.HTTP_201_CREATED)

        except ValueError as e:
            return JsonResponse({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
    return JsonResponse({"error": "Method not allowed."}, status=405)

@api_view(['POST'])
def finalize_bid(request, property_id):
    property = PropertyService.get_property_with_highest_bid(property_id)[0]
    highest_bid = PropertyService.get_property_with_highest_bid(property_id)[1]

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
    property = PropertyService.get_property_with_highest_bid(pk)[0]
    serializer = TestimonialSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user, property=property)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def team_info(request):
    team_members = TeamMemberService.get_team_members()
    serializer = TeamMemberSerializer(team_members, many=True)
    return Response(serializer.data)
