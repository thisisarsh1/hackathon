from django.db import models

# Create your models here.
class Event(models.Model):
    event_id= models.AutoField(primary_key=True)
    name = models.CharField(max_length =50,default ="")
    publishing_date = models.DateField()
    duration = models.DurationField()
    date_of_event = models.DateField()
    image = models.ImageField(upload_to='ccrcoe/events/images', height_field=None, width_field=None, default = '')
    OPTION_CHOICES = [
        (True, 'Inhouse'),
        (False, 'Outside'),
    ]
    type_of_event = models.BooleanField(choices=OPTION_CHOICES)
    registeration_link= models.URLField(default = None)
    event_description = models.TextField(default='')
    gallery = models.FileField(upload_to='ccrcoe/events/gallery', blank=True, null=True)
    comment = models.CharField(max_length = 200, default = '')
    location = models.CharField(max_length=100, blank=True, null=True)  # New field for location

    def save(self, *args, **kwargs):
        # If type_of_event is False (Outside), location must be provided
        if not self.type_of_event:
            if not self.location:
                raise ValueError("Location is required for Outside events.")
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name