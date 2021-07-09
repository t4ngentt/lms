# Generated by Django 3.2.4 on 2021-07-09 06:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('User', '0002_auto_20210708_2224'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student_Group',
            fields=[
                ('student_group_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.branch', verbose_name='branch_fk')),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.user_group', verbose_name='group_fk')),
                ('school', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.school', verbose_name='school_fk')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='User_fk')),
            ],
            options={
                'verbose_name': 'student_group',
                'verbose_name_plural': 'student_groups',
                'db_table': 'STUDENT_GROUP',
            },
        ),
        migrations.CreateModel(
            name='Student_Current_Info',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('roll_no', models.IntegerField()),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.branch', verbose_name='branch_fk')),
                ('school', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.school', verbose_name='school_fk')),
                ('semester', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.semester', verbose_name='semester_fk')),
                ('student_group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='student.student_group', verbose_name='student_group_fk')),
            ],
            options={
                'verbose_name': 'student_current_info',
                'verbose_name_plural': 'student_current_infos',
                'db_table': 'STUDENT_CURRENT_INFO',
            },
        ),
        migrations.CreateModel(
            name='Student_Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.branch', verbose_name='branch_fk')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.course', verbose_name='course_fk')),
                ('school', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.school', verbose_name='school_fk')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='User_fk')),
            ],
            options={
                'verbose_name': 'student_course_relation',
                'verbose_name_plural': 'student_course_relations',
                'db_table': 'STUDENT_COURSE',
            },
        ),
    ]