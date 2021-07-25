# Generated by Django 3.2.4 on 2021-07-19 13:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0004_course_unit'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course_unit',
            name='desc',
            field=models.TextField(blank=True, null=True, verbose_name='Unit Description'),
        ),
        migrations.AlterField(
            model_name='course_unit',
            name='name',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='Unit Name'),
        ),
    ]