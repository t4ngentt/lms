from django.db import models
from User.models import User,School,Group_Course,Branch
# from student.models import Student_Info
# Create your models here.

# # class Teacher_Info(models.Model):
# #     teacher_id = models.BigAutoField(primary_key=True)
# #     teacher_name = models.CharField(max_length=100)
# #     school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk')
# #     branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk')
# #     user = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='user_fk')

# #     class Meta:
# #         db_table = 'TEACHER_INFO'
# #         verbose_name = 'teacher_info'
# #         verbose_name_plural = 'teacher_infos'

# # class Skills(models.Model):
# #     skill = models.CharField(max_length=100)
# #     student = models.ForeignKey(Student_Info,on_delete=models.CASCADE,verbose_name='student_info_fk')
# #     teacher = models.ForeignKey(Teacher_Info,on_delete=models.CASCADE,verbose_name='teacher_info_fk')
# #     school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk')
# #     branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk')
# #     class Meta:
# #         db_table = 'SKILLS'
# #         verbose_name = 'skills'
# #         verbose_name_plural = 'skills'

# class Teacher_Profile(models.Model):
#     teacher = models.ForeignKey(Teacher_Info,on_delete=models.CASCADE,verbose_name='teacher_info_fk')
#     bio = models.TextField()
#     school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk')
#     branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk')
#     # certificates
#     # experience
#     # achievements
#     # qualifications
#     # interests
#     # social_media

#     class Meta:
#         db_table = 'TEACHER_PROFILE'
#         verbose_name = 'teacher_profile'
#         verbose_name_plural = 'teacher_profiles'

class Teacher_Course(models.Model):
    teacher_course_id = models.BigAutoField(primary_key=True)
    teacher = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='user_fk')
    group_course = models.ForeignKey(Group_Course,on_delete=models.CASCADE,verbose_name='group_course_fk')
    school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk')
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk') 

    class Meta:
        db_table = 'TEACHER_COURSE'
        verbose_name = 'teacher_course'
        verbose_name_plural = 'teacher_courses'

    def __str__(self):
        return f"{self.teacher_course_id}"
        