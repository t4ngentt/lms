# Generated by Django 2.2 on 2021-07-07 15:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Branch',
            fields=[
                ('branch_id', models.AutoField(primary_key=True, serialize=False)),
                ('branch_name', models.CharField(max_length=250, unique=True)),
            ],
            options={
                'verbose_name': 'Branch',
                'verbose_name_plural': 'Branches',
                'db_table': 'BRANCH',
            },
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('course_id', models.AutoField(primary_key=True, serialize=False)),
                ('course_name', models.CharField(max_length=200, unique=True)),
                ('course_desc', models.TextField(blank=True)),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.Branch', verbose_name='branch_fk')),
            ],
            options={
                'verbose_name': 'course',
                'verbose_name_plural': 'courses',
                'db_table': 'COURSE',
            },
        ),
        migrations.CreateModel(
            name='School',
            fields=[
                ('school_id', models.AutoField(primary_key=True, serialize=False)),
                ('school_name', models.CharField(max_length=250, unique=True)),
            ],
            options={
                'verbose_name': 'School',
                'verbose_name_plural': 'Schools',
                'db_table': 'SCHOOL',
            },
        ),
        migrations.CreateModel(
            name='Semester',
            fields=[
                ('semester_id', models.AutoField(primary_key=True, serialize=False)),
                ('semester_name', models.CharField(max_length=250, unique=True)),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.Branch', verbose_name='branch_fk')),
                ('school', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.School', verbose_name='school_fk')),
            ],
            options={
                'verbose_name': 'Semester',
                'verbose_name_plural': 'Semesters',
                'db_table': 'SEMESTER',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=254, primary_key=True, serialize=False, unique=True, verbose_name='Email Address')),
                ('f_name', models.CharField(max_length=250, verbose_name='First Name')),
                ('l_name', models.CharField(max_length=250, verbose_name='Last Name')),
                ('user_id', models.CharField(max_length=100, unique=True)),
                ('staff', models.BooleanField(default=False, verbose_name='Staff Member')),
                ('is_active', models.BooleanField(default=False, verbose_name='Active User')),
                ('admin', models.BooleanField(default=False, verbose_name='Admin')),
                ('role', models.IntegerField(help_text='Teacher_role : 0 and Student_role : 1', verbose_name='Role of user')),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
                'db_table': 'USER',
            },
        ),
        migrations.CreateModel(
            name='user_group',
            fields=[
                ('group_id', models.AutoField(primary_key=True, serialize=False)),
                ('group_name', models.CharField(max_length=200, unique=True)),
                ('no_of_students', models.IntegerField()),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.Branch', verbose_name='branch_fk')),
                ('school', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.School', verbose_name='school_fk')),
                ('semester', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.Semester', verbose_name='semester_fk')),
            ],
            options={
                'verbose_name': 'group',
                'verbose_name_plural': 'groups',
                'db_table': 'GROUP',
            },
        ),
        migrations.CreateModel(
            name='Group_Course',
            fields=[
                ('group_course_id', models.AutoField(primary_key=True, serialize=False)),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.Branch', verbose_name='branch_fk')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.Course', verbose_name='course_fk')),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.user_group', verbose_name='group_fk')),
                ('school', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.School', verbose_name='school_fk')),
            ],
            options={
                'verbose_name': 'group_course',
                'verbose_name_plural': 'group_courses',
                'db_table': 'GROUP_COURSE',
            },
        ),
        migrations.AddField(
            model_name='course',
            name='school',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.School', verbose_name='school_fk'),
        ),
        migrations.AddField(
            model_name='course',
            name='semester',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.Semester', verbose_name='semester_fk'),
        ),
        migrations.CreateModel(
            name='Branch_Semester',
            fields=[
                ('branch_sem_id', models.AutoField(primary_key=True, serialize=False)),
                ('branch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.Branch', verbose_name='branch_fk')),
                ('school', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.School', verbose_name='school_fk')),
                ('semester', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.Semester', verbose_name='semester_fk')),
            ],
            options={
                'verbose_name': 'branch_sem',
                'verbose_name_plural': 'branch_sems',
                'db_table': 'BRANCH_SEMESTER',
            },
        ),
        migrations.AddField(
            model_name='branch',
            name='school',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='User.School', verbose_name='school_fk'),
        ),
        migrations.CreateModel(
            name='Admin_info',
            fields=[
                ('admin_id', models.AutoField(primary_key=True, serialize=False)),
                ('admin_name', models.CharField(max_length=300)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Admin_User')),
            ],
            options={
                'verbose_name': 'Admin',
                'verbose_name_plural': 'Admins',
                'db_table': 'ADMIN',
            },
        ),
    ]
