# Generated by Django 3.2.4 on 2021-08-04 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0003_auto_20210804_2007'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='val',
            field=models.IntegerField(choices=[(1, 'PRESENT'), (0, 'ABSENT')], default=0),
        ),
    ]
