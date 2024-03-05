from rest_framework import serializers
from .models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta :
        model = Event 
        fields = ('event_id','name','publishing_date','duration','date_of_event','image','type_of_event','registeration_link','event_description','gallery','comment','location')