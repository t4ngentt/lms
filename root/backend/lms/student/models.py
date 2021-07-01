# from root.backend.lms.User.models import Semester
# from django.db import models
# from User.models import User,Branch,Group,Semester,Course
# from quiz.models import Quiz,Quiz_Questions,Quiz_For_Selected_Students,Quiz_Questions_For_Selected

# class Student_Info(models.Model):
#     prn = models.BigIntegerField(primary_key=True)
#     name = models.CharField(max_length=200)
#     user = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='user_fk')
#     branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk')

#     class Meta:
#         db_table = 'STUDENT_INFO'
#         verbose_name = 'student_info'
#         verbose_name_plural = 'student_infos'

# class Student_Group(models.Model):
#     student_group_id = models.BigAutoField(primary_key=True)
#     student = models.ForeignKey(Student_Info,on_delete=models.CASCADE,verbose_name='student_info_fk')
#     group = models.ForeignKey(Group,on_delete=models.CASCADE,verbose_name='group_fk')

#     class Meta:
#         db_table = 'STUDENT_GROUP'
#         verbose_name = 'student_group'
#         verbose_name_plural = 'student_groups'

# class Student_Course(models.Model):
#     student = models.ForeignKey(Student_Info,on_delete=models.CASCADE,verbose_name='student_info_fk')
#     course = models.ForeignKey(Course,on_delete=models.CASCASE,verbose_name='course_fk')

#     class Meta:
#         db_table = 'STUDENT_COURSE'
#         verbose_name = 'student_course_relation'
#         verbose_name_plural = 'student_course_relations'

# class Student_Current_Info(models.Model):
#     student_group = models.ForeignKey(Student_Group,on_delete=models.CASCADE,verbose_name='student_group_fk')
#     semester = models.ForeignKey(Semester,on_delete=models.CASCADE,verbose_name='semester_fk')
#     roll_no = models.IntegerField()

#     class Meta:
#         db_table = 'STUDENT_CURRENT_INFO'
#         verbose_name = 'student_current_info'
#         verbose_name_plural = 'student_current_infos'

# class Project(models.Model):
#     project_id = models.BigAutoField(primary_key=True)
#     name = models.CharField(max_length=100)
#     desc = models.TextField(blank=True)
#     link = models.URLField(max_length=300,blank=True)

#     class Meta:
#         db_table = 'PROJECT'
#         verbose_name = 'project'
#         verbose_name_plural = 'projects'

# class Student_Profile(models.Model):
#     prn = models.BigAutoField(primary_key=True)
#     dob = models.DateField()
#     cgpa = models.FloatField()
#     bio = models.TextField()
#     avatar = models.ImageField()
#     interests = models.TextField()
#     resume = models.FileField()
#     participations = models.TextField()
#     social_media = models.URLField()

# class Student_Project(models.Model):
#     project = models.ForeignKey(Project,on_delete=models.CASCADE,verbose_name='project_fk')
#     student = models.ForeignKey(Student_Profile,on_delete=models.CASCADE,verbose_name='student_profile_fk')

#     class Meta:
#         db_table = 'STUDENT_PROJECT'
#         verbose_name = 'student_project_relation'
#         verbose_name_plural = 'student_project_relations'

# class Student_Documents(models.Model):
#     student_doc_id = models.BigAutoField(primary_key=True)
#     student = models.ForeignKey(Student_Info,on_delete=models.CASCADE,verbose_name='student_info_fk')
#     aadhar = models.FileField(upload_to='/media/')
#     caste_cretificate = models.FileField(upload_to='/media/')
#     income_certificate = models.FileField(upload_to='/media/')
#     domicile_certificate = models.FileField(upload_to='/media/')

#     class Meta:
#         db_table = 'STUDENT_DOCUMENT'
#         verbose_name = 'student_document'
#         verbose_name_plural = 'student_documents'

# class Student_Quiz(models.Model):
#     student = models.ForeignKey(Student_Info,on_delete=models.CASCADE,verbose_name='student_info_fk')
#     quiz = models.ForeignKey(Quiz,on_delete=models.CASCADE,verbose_name='quiz_fk')
#     submitted_time = models.DateTimeField(auto_now=True)
#     marks = models.FloatField()
#     is_attempted = models.BooleanField(default=False)

#     class Meta:
#         db_table = 'STUDENET_QUIZ'
#         verbose_name = 'student_quiz'
#         verbose_name_plural = 'student_quizes'

# class Student_Quiz_Answers(models.Model):
#     student = models.ForeignKey(Student_Info,on_delete=models.CASCADE,verbose_name='student_info_fk')
#     question = models.ForeignKey(Quiz_Questions,on_delete=models.CASCADE,verbose_name='quiz_question_fk')
#     # answer


# class Student_Selected_Quiz(models.Model):
#     student = models.ForeignKey(Student_Info,on_delete=models.CASCADE,verbose_name='student_info_fk')
#     quiz = models.ForeignKey(Quiz_For_Selected_Students,on_delete=models.CASCADE,verbose_name='quiz_fk')
#     submitted_time = models.DateTimeField(auto_now=True)
#     marks = models.FloatField()
#     is_attempted = models.BooleanField(default=False)

#     class Meta:
#         db_table = 'STUDENET_SELECTED_QUIZ'
#         verbose_name = 'student_selected_quiz'
#         verbose_name_plural = 'student_selected_quizes'

# class Student_Selected_Quiz_Answers(models.Model):
#     student = models.ForeignKey(Student_Info,on_delete=models.CASCADE,verbose_name='student_info_fk')
#     question = models.ForeignKey(Quiz_Questions_For_Selected,on_delete=models.CASCADE,verbose_name='quiz_question_fk')
#     # answer

# class Student_Result(models.Model):

#     student_group = models.ForeignKey(Student_Group,on_delete=models.CASCADE,verbose_name='student_group_fk')
#     semester = models.ForeignKey(Semester,on_delete=models.CASCADE,verbose_name='semester_fk')
#     sgpa = models.FloatField()
#     cgpa = models.FloatField()

#     class Meta:
#         db_table = 'STUDENT_RESULT'
#         verbose_name = 'student_result'
#         verbose_name_plural = 'student_results'

