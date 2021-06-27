from django.db import models
from User.models import User,Branch

class Student_Info(models.Model):
    prn = models.BigIntegerField(primary_key=True)
    name = models.CharField(max_length=200)
    user = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='user_fk')
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk')

    class Meta:
        db_table = 'STUDENT_INFO'
        verbose_name = 'student_info'
        verbose_name_plural = 'student_infos'

# class Student_Current_Info(models.Model):
#     group = models.ForeignKey()

class Project(models.Model):
    project_id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    desc = models.TextField(blank=True)
    link = models.URLField(max_length=300,blank=True)

    class Meta:
        db_table = 'PROJECT'
        verbose_name = 'project'
        verbose_name_plural = 'projects'