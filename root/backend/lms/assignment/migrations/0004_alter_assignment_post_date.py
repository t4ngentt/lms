# Generated by Django 3.2.4 on 2021-07-18 23:57

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('assignment', '0003_alter_group_assignment_teacher'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assignment',
            name='post_date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
