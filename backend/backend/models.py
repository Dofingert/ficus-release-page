from django.db import models
import uuid


class DownloadChannel(models.Model):
    # id is implicitly defined by django-orm
    name = models.CharField(default='',max_length=64)
    url = models.URLField()


class DownloadUserRecord(models.Model):
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid1, editable=False)


# one user may download multiple times.
# make a detailed log
class DownloadRecord(models.Model):
    user = models.ForeignKey('DownloadUserRecord', on_delete=models.CASCADE)
    channel = models.ForeignKey('DownloadChannel', on_delete=models.CASCADE)
    ip = models.CharField(max_length=64)
    time = models.DateTimeField()
