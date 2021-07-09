from django.contrib.admin import options
from django.db import models
from django.db.models.deletion import CASCADE
from User.models import Group_Course

from django.db import models


class Quiz(models.Model):
    quiz_id = models.BigAutoField(primary_key=True)
    total_marks = models.FloatField()
    total_questions = models.IntegerField()
    grp_course = models.ForeignKey(Group_Course,on_delete=models.CASCADE,verbose_name='group_course_fk')
    start_date = models.DateTimeField()
    due_date = models.DateTimeField()
    duration = models.TimeField()

    class Meta:
        db_table = 'QUIZ'
        verbose_name = 'quiz'
        verbose_name_plural = 'quizes'

# class Quiz_For_Selected_Students(models.Model):
#     quiz_id = models.BigAutoField(primary_key=True)
#     total_marks = models.FloatField()
#     total_questions = models.IntegerField()
#     prn = models.PositiveBigIntegerField(unique=True)
#     start_date = models.DateTimeField()
#     due_date = models.DateTimeField()
#     duration = models.TimeField()

#     class Meta:
#         db_table = 'QUIZ_FOR_SELECTED'
#         verbose_name = 'quiz_for_selected'
#         verbose_name_plural = 'quizes_for_selected'

class Quiz_Data(models.Model):
    question_id = models.BigAutoField(primary_key=True)
    quiz = models.ForeignKey(Quiz,on_delete=models.CASCADE,verbose_name='quiz_fk')
    question = models.TextField()
    options = models.CharField(max_length=1000)   #Array in PostgreSQL will be implemented
    answer = models.CharField(max_length=450)  

    class Meta:
        db_table = 'QUIZ_Data'
        verbose_name = 'quiz_data'
        verbose_name_plural = 'quiz_data'

# class Quiz_Questions_For_Selected(models.Model):
#     question_id = models.BigAutoField(primary_key=True)
#     quiz = models.ForeignKey(Quiz_For_Selected_Students,on_delete=models.CASCADE,verbose_name='quiz_for_selected_fk')
#     question = models.TextField()
#     options = models.CharField(max_length=1000)   #Array in PostgreSQL will be implemented
#     answer = models.CharField(max_length=450) 

#     class Meta:
#         db_table = 'QUIZ_QUESTIONS_FOR_SELECTED'
#         verbose_name = 'quiz_question_for_selected'
#         verbose_name_plural = 'quiz_questions_for_selected'
