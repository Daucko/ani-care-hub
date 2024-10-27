#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install dependencies
pip install -r requirements.txt

# Collect static files and apply migrations
python manage.py collectstatic --no-input
python manage.py migrate

# Create superuser if CREATE_SUPERUSER is true
if [[ "$CREATE_SUPERUSER" == "true" ]]; then
    python manage.py createsuperuser --no-input --email "$DJANGO_SUPERUSER_EMAIL"
fi
