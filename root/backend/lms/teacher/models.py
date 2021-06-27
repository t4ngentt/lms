from django.db import models
from User.models import User,School,Group_Course
# Create your models here.

class Teacher_Info(models.Model):
    teacher_id = models.BigAutoField(primary_key=True)
    teacher_name = models.CharField(max_length=100)
    school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk')
    user = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='user_fk')

    class Meta:
        db_table = 'TEACHER_INFO'
        verbose_name = 'teacher_info'
        verbose_name_plural = 'teacher_infos'

class Teacher_Profile(models.Model):
    teacher = models.ForeignKey(Teacher_Info,on_delete=models.CASCADE,verbose_name='teacher_info_fk')
    bio = models.TextField()
    # skills
    # certificates
    # experience
    # achievements
    # qualifications
    # interests
    # social_media

    class Meta:
        db_table = 'TEACHER_PROFILE'
        verbose_name = 'teacher_profile'
        verbose_name_plural = 'teacher_profiless'

class Teacher_Course(models.Model):
    teacher_course_id = models.BigAutoField(primary_key=True)
    teacher = models.ForeignKey(Teacher_Info,on_delete=models.CASCADE,verbose_name='teacher_info_fk')
    group_course = models.ForeignKey(Group_Course,on_delete=models.CASCADE,verbose_name='group_course_fk')

    class Meta:
        db_table = 'TEACHER_COURSE'
        verbose_name = 'teacher_course'
        verbose_name_plural = 'teacher_courses'
        