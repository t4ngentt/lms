from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,BaseUserManager
)

class UserManager(BaseUserManager):

    def create_user(self,email,password,full_name=None,is_active=False,is_staff=False,is_admin=False,is_teacher=False,is_student=False):
        if not email:
            raise ValueError("Users must have an email address")
        if not password:
            raise ValueError("Users must have a password")
        
        user_obj = self.model(
            email = self.normalize_email(email)
        )
        user_obj.set_password(password) #change your password
        user_obj.full_name = full_name
        user_obj.is_active = is_active
        user_obj.is_staff = is_staff
        user_obj.is_admin=is_admin
        user_obj.is_teacher=is_teacher
        user_obj.is_student = is_student
        user_obj.save(using=self._db)
        return user_obj

class User(AbstractBaseUser):
    email = models.EmailField(primary_key=True)  
    full_name = models.CharField(max_length=250)
    is_active = models.BooleanField(default=False) # for login
    is_staff = models.BooleanField(default=False) # staff user login
    is_admin = models.BooleanField(default = False)  #Superuser
    is_teacher = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['email','password']

    class Meta:
        db_table = 'USER'
        verbose_name = 'User'
        verbose_name_plural = 'Users'
    

class Admin_info(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,verbose_name='Admin_User')
    admin_id = models.AutoField(primary_key=True)
    admin_name = models.CharField(max_length=300)

    class Meta:
        db_table = 'ADMIN'
        verbose_name = 'Admin'
        verbose_name_plural = 'Admins'


class School(models.Model):
    school_id = models.AutoField(primary_key=True)
    school_name = models.CharField(unique=True,max_length=250)

    class Meta:
        db_table = 'SCHOOL'
        verbose_name = 'School'
        verbose_name_plural = 'Schools'

class Branch(models.Model):
    school = models.ForeignKey(School,on_delete=models.CASCADE,verbose_name='school_fk')
    branch_id = models.AutoField(primary_key=True)
    branch_name = models.CharField(unique=True,max_length=250)

    class Meta:
        db_table = 'BRANCH'
        verbose_name = 'Branch'
        verbose_name_plural = 'Branches'

class Semester(models.Model):
    semester_id = models.AutoField(primary_key=True)
    semester_name = models.CharField(unique=True,max_length=250)

    class Meta:
        db_table = 'SEMESTER'
        verbose_name = 'Semester'
        verbose_name_plural = 'Semesters'

class Branch_Semester(models.Model):
    branch_sem_id = models.AutoField(primary_key=True)
    branch = models.ForeignKey(Branch,on_delete=models.CASCADE,verbose_name='branch_fk')
    semester = models.ForeignKey(Semester,on_delete=models.CASCADE,verbose_name='semester_fk')

    class Meta:
        db_table = 'BRANCH_SEMESTER'
        verbose_name = 'branch_sem'
        verbose_name_plural = 'branch_sems'

class Group(models.Model):
    group_id = models.AutoField(primary_key=True)
    group_name = models.CharField(unique=True,max_length=200)
    no_of_students = models.IntegerField()
    branch_sem = models.ForeignKey(Branch_Semester,on_delete=models.CASCADE,verbose_name='branch_sem_fk')

    class Meta:
        db_table = 'GROUP'
        verbose_name = 'group'
        verbose_name_plural = 'groups'

class Course(models.Model):
    course_id = models.AutoField(primary_key=True)
    course_name = models.CharField(unique=True,max_length=200)
    course_desc = models.TextField(blank=True)
    branch_sem = models.ForeignKey(Branch_Semester,on_delete=models.CASCADE,verbose_name='branch_sem_fk')

    class Meta:
        db_table = 'COURSE'
        verbose_name = 'course'
        verbose_name_plural = 'courses'

class Group_Course(models.Model):
    group_course_id = models.AutoField(primary_key=True)
    group = models.ForeignKey(Group,on_delete=models.CASCADE,verbose_name='group_fk')
    course = models.ForeignKey(Course,on_delete=models.CASCADE,verbose_name='course_fk')

    class Meta:
        db_table = 'GROUP_COURSE'
        verbose_name = 'group_course'
        verbose_name_plural = 'group_courses'


