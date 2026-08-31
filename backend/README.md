# 24/7 Backend Microservice for ML Inference (SIGNAL & Predictive APIs)

Production-ready Flask REST API microservice serving real-time machine learning predictions with Gunicorn and Docker containerization.

## 🚀 Endpoints

- **`GET /health`**: Microservice uptime, status, and telemetry.
- **`POST /predict`**: Real-time NLP inference with dynamic confidence scoring.
  ```json
  // Request
  {
    "text": "Congratulations! You have won a lottery prize."
  }

  // Response
  {
    "verdict": "spam",
    "confidence": 98.45,
    "probabilities": {
      "ham": 0.0155,
      "spam": 0.9845
    }
  }
  ```

---

## 🐳 Docker Deployment (24/7 Production)

### 1. Build Docker Image
```bash
docker build -t swastik-ml-backend:latest .
```

### 2. Run Container
```bash
docker run -d -p 10000:10000 --name ml-api swastik-ml-backend:latest
```

---

## ☁️ Free 24/7 Cloud Deployment (Render / Railway / Hugging Face)

1. Connect your GitHub repository (`https://github.com/Swastik54321/spam-classifier-` or main repo).
2. Set Build Command: `pip install -r backend/requirements.txt`
3. Set Start Command: `gunicorn -w 2 -b 0.0.0.0:10000 app:app` (or use Dockerfile).
4. Port: `10000`
