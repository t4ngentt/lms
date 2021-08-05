# Generated by Django 3.2.4 on 2021-08-04 23:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0007_delete_attendance'),
        ('teacher', '0004_alter_attendance_val'),
    ]

    operations = [
        migrations.AddField(
            model_name='lecture',
            name='course_unit',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='User.course_unit'),
        ),
        migrations.AlterField(
            model_name='attendance',
            name='val',
            field=models.IntegerField(choices=[(1, 'PRESENT'), (0, 'ABSENT')], default=1),
        ),
    ]
