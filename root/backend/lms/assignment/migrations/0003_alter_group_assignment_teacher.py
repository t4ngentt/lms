# Generated by Django 3.2.4 on 2021-07-17 17:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('assignment', '0002_auto_20210713_2150'),
    ]

    operations = [
        migrations.AlterField(
            model_name='group_assignment',
            name='teacher',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='teacher_fk'),
        ),
    ]
