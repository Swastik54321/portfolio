# Use official lightweight Python runtime
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PORT=10000

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install python packages
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Pre-download NLTK data for fast startup
RUN python -m nltk.downloader punkt stopwords

# Copy application source code
COPY . .

# Expose port
EXPOSE 10000

# Production 24/7 Gunicorn server execution
CMD ["gunicorn", "-w", "2", "-b", "0.0.0.0:10000", "app:app"]
