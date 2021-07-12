
from django.db import models
from User.models import User,Branch,user_group,Semester,Course,School
from quiz.models import Quiz,Quiz_Data

# class Student_Info(models.Model):
#     prn = models.CharField(primary_key=True, max_length=100)
#     name = models.CharField(max_length=200)
#     user = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='user_fk')
#     school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk')
#     branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk')
    
#     class Meta:
#         db_table = 'STUDENT_INFO'
#         verbose_name = 'student_info'
#         verbose_name_plural = 'student_infos'

class Student_Group(models.Model):
    student_group_id = models.BigAutoField(primary_key=True)
    student = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='User_fk')
    group = models.ForeignKey(user_group,on_delete=models.CASCADE,verbose_name='group_fk')
    school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk', blank=True, null=True)
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk',blank=True, null=True)
    
    class Meta:
        db_table = 'STUDENT_GROUP'
        verbose_name = 'student_group'
        verbose_name_plural = 'student_groups'

    def __str__(self):
        return f"{self.student.user_id}"

class Student_Course(models.Model):
    student = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='User_fk')
    course = models.ForeignKey(Course,on_delete=models.CASCADE,verbose_name='course_fk')
    school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk',blank=True,null=True)
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk',blank=True,null=True)
    
    class Meta:
        db_table = 'STUDENT_COURSE'
        verbose_name = 'student_course_relation'
        verbose_name_plural = 'student_course_relations'

    def __str__(self):
        return f"{self.student.user_id}"

class Student_Current_Info(models.Model):

    student_group = models.ForeignKey(Student_Group,on_delete=models.CASCADE,verbose_name='student_group_fk')
    semester = models.ForeignKey(Semester,on_delete=models.CASCADE,verbose_name='semester_fk')
    roll_no = models.IntegerField()
    school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk',blank=True,null=True)
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk',blank=True,null=True)
    
    class Meta:
        db_table = 'STUDENT_CURRENT_INFO'
        verbose_name = 'student_current_info'
        verbose_name_plural = 'student_current_infos'

    def __str__(self):
        return f"{self.roll_no}"

class Student_Profile(models.Model):
    sudent_id = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name="student_fk")
    username = models.CharField(unique=True,max_length=50)
    dob = models.DateField()
    cgpa = models.FloatField()
    bio = models.TextField()
    # avatar = models.ImageField()
    interests = models.TextField()
    # resume = models.FileField()
    skills = models.TextField()
    participations = models.TextField()
    social_media_links = models.TextField()
    interests = models.TextField()
    school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk',blank=True,null=True)
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk',blank=True,null=True)
    
    class Meta:
        db_table = 'STUDENT_PROFILE'
        verbose_name = 'student_profile'
        verbose_name_plural = 'student_profiles'

class Student_experience(models.Model):
    student=models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='student_fk')
    title= models.TextField()
    desc = models.TextField()
    school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk',blank=True,null=True)
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk',blank=True,null=True)
    
    class Meta:
        db_table = 'STUDENT_EXPERIENCE'
        verbose_name = 'student_experience'
        verbose_name_plural = 'student_experiences'

class Student_Project(models.Model):
    student = models.ForeignKey(Student_Profile,on_delete=models.CASCADE,verbose_name='student_profile_fk')
    project_id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    desc = models.TextField(blank=True)
    link = models.URLField(max_length=300,blank=True)
    school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk',blank=True,null=True)
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk',blank=True,null=True)
    
    class Meta:
        db_table = 'STUDENT_PROJECT'
        verbose_name = 'student_project_relation'
        verbose_name_plural = 'student_project_relations'

# class Student_Documents(models.Model):
#     student_doc_id = models.BigAutoField(primary_key=True)
#     student = models.ForeignKey(Student_Info,on_delete=models.CASCADE,verbose_name='student_info_fk')
#     aadhar = models.FileField(upload_to='/media/')
#     caste_cretificate = models.FileField(upload_to='/media/')
#     income_certificate = models.FileField(upload_to='/media/')
#     domicile_certificate = models.FileField(upload_to='/media/')
#     school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk')
#     branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk')
    
#     class Meta:
#         db_table = 'STUDENT_DOCUMENT'
#         verbose_name = 'student_document'
#         verbose_name_plural = 'student_documents'

class Student_Quiz(models.Model):
    student = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='User_fk')
    quiz = models.ForeignKey(Quiz,on_delete=models.CASCADE,verbose_name='quiz_fk')
    submitted_time = models.DateTimeField(auto_now=True)
    marks = models.FloatField(default=0)
    attempt_count = models.IntegerField(default=0)
    school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk',blank=True,null=True)
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk',blank=True,null=True)
    
    class Meta:
        db_table = 'STUDENET_QUIZ'
        verbose_name = 'student_quiz'
        verbose_name_plural = 'student_quizes'

class Student_Quiz_Answers(models.Model):
    student = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='User_fk')
    question = models.ForeignKey(Quiz_Data,on_delete=models.CASCADE,verbose_name='quiz_data_fk')
    answer = models.CharField(max_length=400,blank=True,null=True)
    school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk',blank=True,null=True)
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk',blank=True,null=True)
    
    class Meta:
        db_table = 'STUDENET_QUIZ_ANSWER'
        verbose_name = 'student_quiz_answers'
        verbose_name_plural = 'student_quiz_answers'

# class Student_Selected_Quiz(models.Model):
#     student = models.ForeignKey(User,on_delete=models.CASCADE,verbose_name='User_fk')
#     quiz = models.ForeignKey(Quiz_For_Selected_Students,on_delete=models.CASCADE,verbose_name='quiz_fk')
#     submitted_time = models.DateTimeField(auto_now=True)
#     marks = models.FloatField()
#     is_attempted = models.BooleanField(default=False)
#     school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk')
#     branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk')
    
#     class Meta:
#         db_table = 'STUDENT_SELECTED_QUIZ'
#         verbose_name = 'student_selected_quiz'
#         verbose_name_plural = 'student_selected_quizes'

# class Student_Selected_Quiz_Answers(models.Model):
#     student = models.ForeignKey(Student_Info,on_delete=models.CASCADE,verbose_name='student_info_fk')
#     question = models.ForeignKey(Quiz_Questions_For_Selected,on_delete=models.CASCADE,verbose_name='quiz_question_fk')
#     school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk')
#     branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk')
#     # answer


class Student_Result(models.Model):
    student_group = models.ForeignKey(Student_Group,on_delete=models.CASCADE,verbose_name='student_group_fk')
    semester = models.ForeignKey(Semester,on_delete=models.CASCADE,verbose_name='semester_fk')
    sgpa = models.FloatField()
    cgpa = models.FloatField()
    school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk',blank=True,null=True)
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk',blank=True,null=True)
    
    class Meta:
        db_table = 'STUDENT_RESULT'
        verbose_name = 'student_result'
        verbose_name_plural = 'student_results'

