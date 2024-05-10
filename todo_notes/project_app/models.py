from django.db import models

from users.models import User


class Project(models.Model):

    objects = None
    title = models.CharField(max_length=200, null=False, blank=False)
    description = models.TextField(blank=False, null=False)
    # image = models.ImageField(upload_to='images/')
    project_manager = models.ForeignKey(User, on_delete=models.CASCADE, null=False, blank=False, editable=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.title


class ToDo(models.Model):
    # id = models.BigAutoField(primary_key=True, default=datetime.now)
    objects = None
    task_title = models.CharField(max_length=350, null=False, blank=False)
    deadline = models.DateField(null=False, blank=False)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, null=False, blank=False, editable=True, help_text='Выберите из списка')
    owner = models.ForeignKey(User, null=False, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True, editable=False)
    is_active = models.BooleanField(default=True)

    def task_done(self):
        self.is_active = False

    def __str__(self):
        return self.task_title
