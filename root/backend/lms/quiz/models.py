from django.contrib.admin import options
from django.db import models
from django.db.models.deletion import CASCADE
from User.models import Group_Course

class Quiz(models.Model):
    quiz_id = models.BigAutoField(primary_key=True)
    total_marks = models.FloatField()
    total_questions = models.IntegerField()
    grp_course = models.ForeignKey(Group_Course,on_delete=models.CASCADE,verbose_name='group_course_fk')
    start_date = models.DateTimeField()
    due_date = models.DateTimeField()

    class Meta:
        db_table = 'QUIZ'
        verbose_name = 'quiz'
        verbose_name_plural = 'quizes'

class Quiz_For_Selected_Students(model.Model):
    quiz_id = models.BigAutoField(primary_key=True)
    total_marks = models.FloatField()
    total_questions = models.IntegerField()
    prn = models.PositiveBigIntegerField(unique=True)
    start_date = models.DateTimeField()
    due_date = models.DateTimeField()

    class Meta:
        db_table = 'QUIZ_FOR_SELECTED'
        verbose_name = 'quiz_for_selected'
        verbose_name_plural = 'quizes_for_selected'

class Quiz_Questions(models.Model):
    question_id = models.BigAutoField(primary_key=True)
    quiz = models.ForeignKey(Quiz,on_delete=models.CASCADE,verbose_name='quiz_fk')
    question = models.TextField()
    # options = models.
    # answer = models.

    class Meta:
        db_table = 'QUIZ_QUESTIONS'
        verbose_name = 'quiz_question'
        verbose_name_plural = 'quiz_questions'

class Quiz_Questions_For_Selected(models.Model):
    question_id = models.BigAutoField(primary_key=True)
    quiz = models.ForeignKey(Quiz_For_Selected_Students,on_delete=models.CASCADE,verbose_name='quiz_for_selected_fk')
    question = models.TextField()
    # options = models.
    # answer = models.

    class Meta:
        db_table = 'QUIZ_QUESTIONS_FOR_SELECTED'
        verbose_name = 'quiz_question_for_selected'
        verbose_name_plural = 'quiz_questions_for_selected'
