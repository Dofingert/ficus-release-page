from backend.models import *
import uuid
import datetime
import json
from django.http import JsonResponse
from django.shortcuts import redirect
from django.forms.models import model_to_dict


def req_download(request):
    if request.method == "GET":
        user_uuid = request.session.get('uuid')
        user = DownloadUserRecord.objects.filter(uuid=user_uuid)
        if user.count() == 0:
            user_uuid = uuid.uuid1()
            user = DownloadUserRecord(uuid=user_uuid)
            user.save()
        else:
            user = user[0]

        target = request.GET.get('target', 1)
        target = int(target)
        if target > DownloadChannel.objects.count():
            target = 1

        target_url = DownloadChannel.objects.filter(id=target)[0]
        # print('uuid is ', user_uuid, ' target is ', target_url.url, '\n')

        new_record = DownloadRecord(user=user, channel=target_url, time=datetime.datetime.now())
        new_record.save()

        return redirect(target_url.url)


def get_download_record(request):
    if request.method == "GET":
        if DownloadRecord.objects.count() > 0:
            ret = []
            for i in DownloadRecord.objects.iterator():
                ret.append(model_to_dict(i))
            print(ret)
            return JsonResponse({"data": ret})
        return JsonResponse({"0": "0"})
