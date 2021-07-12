# Generated by Django 3.2 on 2021-07-12 17:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('User', '0008_auto_20210712_2237'),
        ('quiz', '0003_auto_20210712_0037'),
    ]

    operations = [
        migrations.RenameField(
            model_name='group_quiz',
            old_name='assignment_id',
            new_name='quiz_id',
        ),
        migrations.RemoveField(
            model_name='quiz',
            name='grp_course',
        ),
        migrations.RemoveField(
            model_name='quiz',
            name='teacher',
        ),
        migrations.AddField(
            model_name='group_quiz',
            name='branch',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='User.branch', verbose_name='branch_fk'),
        ),
        migrations.AddField(
            model_name='group_quiz',
            name='school',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='User.school', verbose_name='school_fk'),
        ),
        migrations.AddField(
            model_name='quiz_data',
            name='branch',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='User.branch', verbose_name='branch_fk'),
        ),
        migrations.AddField(
            model_name='quiz_data',
            name='school',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='User.school', verbose_name='school_fk'),
        ),
        migrations.AlterField(
            model_name='group_quiz',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterModelTable(
            name='group_quiz',
            table='QUIZ_GROUP',
        ),
    ]