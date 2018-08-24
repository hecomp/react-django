from django.contrib import admin
from leads.models import Lead

class LeadsAdmin(admin.ModelAdmin):
    pass
admin.site.register(Lead, LeadsAdmin)