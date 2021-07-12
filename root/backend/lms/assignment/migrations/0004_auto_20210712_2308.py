# Generated by Django 3.2 on 2021-07-12 17:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0008_auto_20210712_2237'),
        ('assignment', '0003_auto_20210712_2224'),
    ]

    operations = [
        migrations.AddField(
            model_name='assignment_marks',
            name='branch',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='User.branch', verbose_name='branch_fk'),
        ),
        migrations.AddField(
            model_name='assignment_marks',
            name='school',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='User.school', verbose_name='school_fk'),
        ),
        migrations.AddField(
            model_name='assignment_submission',
            name='branch',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='User.branch', verbose_name='branch_fk'),
        ),
        migrations.AddField(
            model_name='assignment_submission',
            name='school',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='User.school', verbose_name='school_fk'),
        ),
        migrations.AddField(
            model_name='group_assignment',
            name='branch',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='User.branch', verbose_name='branch_fk'),
        ),
        migrations.AddField(
            model_name='group_assignment',
            name='school',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='User.school', verbose_name='school_fk'),
        ),
    ]
