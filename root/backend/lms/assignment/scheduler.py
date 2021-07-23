from apscheduler.schedulers.background import BackgroundScheduler
import datetime
from .models import Assignment


def update_assignment_status(assignment_id):
    assignment_obj= Assignment.objects.get(assignment_id=assignment_id)
    assignment_obj.visibility=('Submitable','Submitable')
    assignment_obj.save()
    return assignment_obj

def assignment_visibility_scheduler(submitable_date,assignment_id):
    scheduler=BackgroundScheduler()
    scheduler.add_job(update_assignment_status(assignment_id), 'date', run_date=submitable_date)
    scheduler.start()



