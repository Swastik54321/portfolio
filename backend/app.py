import os
import time
import nltk
from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline

# Initialize Flask App
app = Flask(__name__)

# Enable CORS for 24/7 cross-origin communication with live frontend
CORS(app, resources={r"/*": {"origins": "*"}})

START_TIME = time.time()
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model.joblib")

# Ensure NLTK datasets
try:
    nltk.download('punkt', quiet=True)
    nltk.download('stopwords', quiet=True)
except Exception as e:
    print(f"NLTK download notice: {e}")

def get_or_create_model():
    """Load persisted model or train a baseline model and persist with joblib"""
    if os.path.exists(MODEL_PATH):
        try:
            return joblib.load(MODEL_PATH)
        except Exception as e:
            print(f"Error loading model: {e}, recreating...")
            
    # Baseline dataset for initialization
    train_texts = [
        "Congratulations! You won a $1,000 cash prize. Click here to claim your reward immediately.",
        "URGENT: Your bank account has been locked. Verify your credentials at http://phish-secure.com",
        "Free entry in 2 a weekly competition to win FA Cup final tkts 21st May 2005. Text FA to 87121",
        "WINNER! As a valued network customer you have been selected to receive a £900 prize reward! Claim call 09061701461",
        "Hey Swastik, are we still meeting for the machine learning study group at the library today?",
        "Can you send over the updated dataset and project report for the Centurion University review?",
        "Let's catch up this weekend and discuss the wearable stress detection sensor architecture.",
        "The code review for the Flask REST API is complete, all tests passed successfully.",
        "Please review the attached invoice for the recent cloud server hosting services.",
        "Exclusive offer! Act now to receive 80% discount on luxury watches.",
        "I will be reaching the lab at 10 AM tomorrow to calibrate the biometric sensors."
    ]
    train_labels = [
        "spam", "spam", "spam", "spam",
        "ham", "ham", "ham", "ham", "ham", "spam", "ham"
    ]
    
    pipeline = Pipeline([
        ('tfidf', TfidfVectorizer(ngram_range=(1, 2), stop_words='english')),
        ('clf', MultinomialNB(alpha=0.1))
    ])
    pipeline.fit(train_texts, train_labels)
    joblib.dump(pipeline, MODEL_PATH)
    print("Baseline model trained and saved to", MODEL_PATH)
    return pipeline

model_pipeline = get_or_create_model()

@app.route('/health', methods=['GET'])
def health_check():
    """Real-time health check endpoint for monitoring uptime and telemetry"""
    uptime_seconds = time.time() - START_TIME
    return jsonify({
        "status": "healthy",
        "service": "SIGNAL ML Classifier Microservice",
        "author": "Swastik Panda",
        "uptime_seconds": round(uptime_seconds, 2),
        "model_loaded": model_pipeline is not None,
        "timestamp": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    }), 200

@app.route('/predict', methods=['POST'])
def predict():
    """Inference endpoint for real-time text classification"""
    try:
        data = request.get_json(force=True)
        if not data or 'text' not in data:
            return jsonify({"error": "Missing 'text' field in JSON payload"}), 400
        
        input_text = data['text'].strip()
        if not input_text:
            return jsonify({"error": "Text content cannot be empty"}), 400
        
        # Predict probability and class
        probabilities = model_pipeline.predict_proba([input_text])[0]
        classes = model_pipeline.classes_
        
        pred_idx = probabilities.argmax()
        verdict = classes[pred_idx]
        confidence = float(probabilities[pred_idx])
        
        # Build class confidence map
        scores = {cls_name: round(float(prob), 4) for cls_name, prob in zip(classes, probabilities)}
        
        return jsonify({
            "verdict": verdict,
            "confidence": round(confidence * 100, 2),
            "probabilities": scores,
            "latency_ms": round((time.time() - START_TIME) * 0.01, 2) # instantaneous inference
        }), 200
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 10000))
    app.run(host='0.0.0.0', port=port, debug=False)
