from django.contrib import admin
from .models import Course, Lesson, Enrollment, Question, Choice, Submission
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin


class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 2


class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1


class QuestionAdmin(admin.ModelAdmin):
    inlines = [ChoiceInline]


class LessonAdmin(admin.ModelAdmin):
    inlines = [QuestionInline]


admin.site.register(Question, QuestionAdmin)
admin.site.register(Lesson, LessonAdmin)
admin.site.register(Course)
admin.site.register(Enrollment)
admin.site.register(Submission)