from django.db import models
from User.models import Group_Course
from django.utils import timezone
from student.models import Student_Info
# Create your models here.

class Assignment(models.Model):
    assignment_id= models.BigAutoField(primary_key=True)
    grp_course = models.ForeignKey(Group_Course,on_delete=models.CASCADE,verbose_name='group_course_fk')
    file = models.FileField(upload_to='media')
    title = models.CharField(max_length=1000)
    description = models.TextField()
    min_marks = models.IntegerField()
    max_marks = models.IntegerField()
    post_date= models.DateTimeField(default=timezone.now)
    due_date= models.DateTimeField()

    class Meta:
        db_table = 'ASSIGNMENT'
        verbose_name = 'assignment'
        verbose_name_plural = 'assignments'

class Assignment_submission(models.Model):
    assignment_submission_id = models.BigAutoField(primary_key=True)
    assignment_id = models.ForeignKey(Assignment,on_delete=models.CASCADE,verbose_name='assignment_fk')
    prn = models.ForeignKey(Student_Info,on_delete=models.CASCADE,verbose_name='prn_fk')
    file= models.FileField(upload_to='media')

    class Meta:
        db_table = 'ASSIGNMENT_SUBMISSION'
        verbose_name = 'assignment_submission'
        verbose_name_plural = 'assignment_submissions'

class Assignment_marks(models.Model):
    assignment_submission_id = models.ForeignKey(Assignment_submission,on_delete=models.CASCADE,verbose_name='assignment_submission_fk')
    marks= models.IntegerField()

    class Meta:
        db_table = 'ASSIGNMENT_MARKS'
        verbose_name = 'assignment_marks'
        verbose_name_plural = 'assignment_marks'


    


