# Generated by Django 3.2.20 on 2023-07-30 00:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('definitions', '0002_definitions_pub_date'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='definitions',
            new_name='Definition',
        ),
    ]
