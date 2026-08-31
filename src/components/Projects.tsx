import React, { useState } from 'react';
import {
  Brain,
  Activity,
  Zap,
  CheckCircle2,
  Code2,
  X,
  Stethoscope,
  Trophy,
  Car,
  ChevronRight,
  Flame,
  ExternalLink,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  icon: React.ReactNode;
  accentColor: string;
  summary: string;
  tags: string[];
  repoUrl: string;
  date?: string;
  organization?: string;
  details: {
    objective: string;
    methodology: string[];
    technicalArchitecture: string[];
    outcomes: string[];
    codeSnippets?: string;
  };
}

const PROJECTS: Project[] = [
  {
    id: 'stress-detection',
    title: 'Real-Time Acute Stress Detection',
    subtitle: 'Bio-Signal Processing & Wearable Sensor ML Pipeline',
    category: 'Healthcare & IoT ML',
    badge: 'Flagship Research',
    icon: <Activity className="text-red-400" size={24} />,
    accentColor: 'from-red-500/20 to-orange-500/20',
    repoUrl: 'https://github.com/Swastik54321/physiostress-ai',
    summary:
      'Real-time automated detection of acute stress states using wearable multi-modal physiological sensor streams (HRV, EDA/GSR, and Skin Temperature).',
    tags: ['Physiological Signals', 'Wearables', 'Python', 'Scikit-Learn', 'Feature Engineering'],
    details: {
      objective:
        'Develop an autonomous, low-latency machine learning pipeline capable of continuously processing wearable sensor streams to detect acute psychological and physiological stress spikes before burnout occurs.',
      methodology: [
        'Multi-modal bio-signal acquisition including Electrodermal Activity (EDA), Photoplethysmography (PPG/HRV), and Skin Temperature.',
        'Continuous signal filtering, artifact rejection, and baseline drift normalization.',
        'Time-domain and frequency-domain feature extraction (RMSSD, pNN50, LF/HF spectral ratios, skin conductance response peaks).',
        'Model training with cross-validation on physiological benchmark datasets.',
      ],
      technicalArchitecture: [
        'Data Ingestion: Streaming time-series sensor buffer',
        'Preprocessing: Butterworth bandpass filtering & wavelet denoising',
        'Classification: Ensemble Decision Trees & Support Vector Classifiers',
        'Deployment: Edge-ready inference with sub-second latency',
      ],
      outcomes: [
        'Accurate differentiation between baseline rest and acute stress states.',
        'Robust noise tolerance against motion artifacts from everyday wearable use.',
        'Scalable foundation for proactive digital mental health interventions.',
      ],
    },
  },
  {
    id: 'signal-classifier',
    title: 'SIGNAL: Full-Stack ML in Action',
    subtitle: 'Real-Time Text Classifier & Spam Detection Microservice',
    category: 'Full-Stack NLP',
    badge: 'Live Full-Stack App',
    icon: <Zap className="text-amber-400" size={24} />,
    accentColor: 'from-amber-500/20 to-yellow-500/20',
    repoUrl: 'https://github.com/Swastik54321/spam-classifier-',
    summary:
      'End-to-end NLP classification engine serving predictions via Flask REST API with dynamic frontend confidence meters and sub-50ms response time.',
    tags: ['NLTK', 'TF-IDF', 'Naive Bayes', 'Flask API', 'Joblib', 'React'],
    details: {
      objective:
        'Build and demonstrate a full-stack, production-grade text classification microservice from raw NLP vectorization to a reactive frontend live demo with real-time confidence telemetry.',
      methodology: [
        'Text Preprocessing: Tokenization, lowercasing, stop-word elimination, and stemming using NLTK.',
        'Feature Vectorization: Term Frequency-Inverse Document Frequency (TF-IDF) n-gram matrix representation.',
        'Model Persistence: Trained Multinomial Naive Bayes classifier serialized and persisted using joblib for fast runtime loading.',
        'REST Microservice: Lightweight Flask server with CORS enabled, hosting /predict and /health endpoints.',
      ],
      technicalArchitecture: [
        'Pipeline: Raw Text → NLTK Tokenizer → TF-IDF Vectorizer → MultinomialNB → Probability Array',
        'API Layer: Flask with JSON request/response schema & CORS middleware',
        'Frontend telemetry: Real-time confidence gauge & dynamic verdict updates in milliseconds',
      ],
      outcomes: [
        'Lightning-fast inference under 50ms per classification request.',
        'Seamless communication between React client, Python backend, and ML model.',
        'Interactive live test suite for evaluating ham/spam edge cases dynamically.',
      ],
    },
  },
  {
    id: 'breast-cancer-classification',
    title: 'Breast Cancer Diagnostic Classification',
    subtitle: 'Clinical Oncology Decision Support Pipeline',
    category: 'Clinical AI / Oncology',
    badge: 'InternPe AIML Internship',
    organization: 'InternPe',
    icon: <Stethoscope className="text-emerald-400" size={24} />,
    accentColor: 'from-emerald-500/20 to-teal-500/20',
    repoUrl: 'https://github.com/Swastik54321',
    summary:
      'Diagnostic decision-support system classifying benign vs. malignant breast tumors using cell nuclear characteristics with high ROC-AUC and minimized false-negatives.',
    tags: ['Healthcare ML', 'EDA & Diagnostics', 'Scikit-Learn', 'ROC-AUC', 'Clinical Analytics'],
    details: {
      objective:
        'Build an automated binary classification pipeline capable of distinguishing between benign and malignant tumors to minimize clinician workload and eliminate hazardous false-negative diagnostic errors.',
      methodology: [
        'Comprehensive Exploratory Data Analysis (EDA) on cell nuclear characteristics (radius, texture, perimeter, smoothness, concavity, symmetry).',
        'Correlation matrix analysis isolating the strongest predictive biomarkers for malignancy.',
        'Robust data preprocessing: missing value imputation, standard scaling, and class distribution balancing.',
        'Comparative evaluation of multiple classifiers (Logistic Regression, Random Forest, SVM) with hyperparameter tuning.',
      ],
      technicalArchitecture: [
        'Dataset: Fine Needle Aspirate (FNA) diagnostic metrics',
        'Feature Selection: Correlation thresholding & PCA feature ranking',
        'Optimization: Grid Search Cross-Validation maximizing Recall & ROC-AUC',
      ],
      outcomes: [
        'Prioritized sensitivity to virtually eliminate false-negative misclassifications in clinical tests.',
        'High diagnostic confidence score supporting radiologist screening workflows.',
        'Completed during AIML Internship at InternPe.',
      ],
    },
  },
  {
    id: 'ipl-match-predictor',
    title: 'IPL Match Outcome & Win Predictor',
    subtitle: 'Sports Analytics on 100,000+ Ball-by-Ball Records',
    category: 'Sports Analytics',
    badge: 'InternPe AIML Internship',
    date: 'June 05, 2026',
    organization: 'InternPe',
    icon: <Trophy className="text-cyan-400" size={24} />,
    accentColor: 'from-cyan-500/20 to-blue-500/20',
    repoUrl: 'https://github.com/Swastik54321',
    summary:
      'Probabilistic match forecasting engine analyzing 100,000+ individual delivery records to predict real-time win likelihoods based on dynamic match states.',
    tags: ['Sports Analytics', '100k+ Records', 'Random Forest', 'Feature Encoding', 'Probabilities'],
    details: {
      objective:
        'Forecast cricket match outcomes dynamically by modeling complex in-game variables including toss decisions, venue statistics, required run rates, wickets in hand, and historical head-to-head records.',
      methodology: [
        'Processed an extensive ball-by-ball dataset containing over 100,000+ individual delivery records spanning multiple tournament seasons.',
        'Engineered dynamic in-match features: balls remaining, runs needed, current run rate (CRR), required run rate (RRR), and batting depth.',
        'Categorical encoding of stadiums, toss winners, toss decisions, and batting/bowling combinations.',
        'Trained and validated probabilistic models including Logistic Regression and Random Forest Classifiers.',
      ],
      technicalArchitecture: [
        'Data Pipeline: 100k+ ball-by-ball historical IPL dataset',
        'Encoding: One-Hot Encoding & Target Encoding for venues and teams',
        'Algorithms: Logistic Regression (calibration) & Random Forest Ensemble',
      ],
      outcomes: [
        'Real-time winning probability computation updated ball by ball.',
        'Actionable insights into venue toss advantages and chasing dynamics.',
        'Demonstrated strong capability in managing high-volume tabular event data.',
      ],
    },
  },
  {
    id: 'car-price-predictor',
    title: 'Automotive Vehicle Valuation Engine',
    subtitle: 'End-to-End Predictive Regression Modeling',
    category: 'Predictive Analytics',
    badge: 'InternPe AIML Internship',
    date: 'May 23, 2026',
    organization: 'InternPe',
    icon: <Car className="text-purple-400" size={24} />,
    accentColor: 'from-purple-500/20 to-pink-500/20',
    repoUrl: 'https://github.com/Swastik54321',
    summary:
      'Market value estimation model analyzing automotive attributes (mileage, engine CC, manufacturing year, brand depreciation) using multi-regression pipelines.',
    tags: ['Regression', 'R² / MAE / RMSE', 'Automotive Analytics', 'Scikit-Learn', 'Feature Pipelines'],
    details: {
      objective:
        'Construct a robust regression model to estimate fair market value for pre-owned vehicles based on multidimensional mechanical and market attributes.',
      methodology: [
        'Data cleaning and imputation on automotive market datasets.',
        'Feature encoding for categorical parameters: fuel type, transmission, seller type, and vehicle brand tiers.',
        'Feature engineering: vehicle age depreciation, annual average mileage, and engine displacement scaling.',
        'Comparative evaluation of Linear Regression, Ridge/Lasso, and Random Forest Regressors.',
      ],
      technicalArchitecture: [
        'Metrics: Evaluated on R² score, Mean Absolute Error (MAE), and Root Mean Squared Error (RMSE)',
        'Pipeline: Scikit-learn Pipeline with ColumnTransformer for clean one-step inference',
      ],
      outcomes: [
        'High R² predictive accuracy with minimal error margins across price segments.',
        'Reliable decision support for automotive valuation and pricing transparency.',
      ],
    },
  },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto text-white">
      {/* Background accents */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-widest text-white/90 mb-4 w-fit">
            <Flame size={14} className="text-red-400" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-playfair italic">
            Applied AI & Machine Learning Projects
          </h2>
          <p className="text-white/70 max-w-2xl mt-4 text-base sm:text-lg leading-relaxed">
            From biosensor signal processing and clinical diagnostics to full-stack NLP microservices and high-volume sports analytics.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <a
            key={project.id}
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-7 rounded-3xl bg-zinc-900/70 border border-white/10 hover:border-white/30 backdrop-blur-md flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
              idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            <div>
              {/* Card top */}
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      {project.category}
                    </span>
                    {project.organization && (
                      <span className="block text-[11px] text-white/40">
                        {project.organization} {project.date ? `• ${project.date}` : ''}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/90 transition-colors"
                  >
                    Case Study
                  </button>
                  <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90 hidden sm:inline-block">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors flex items-center gap-2">
                <span>{project.title}</span>
                <ExternalLink size={18} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </h3>
              <p className="text-xs sm:text-sm font-medium text-white/50 mb-4 font-mono">
                {project.subtitle}
              </p>

              {/* Summary */}
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {project.summary}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View details / repo button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white/90 group-hover:text-white">
                <span>View Full Architecture & Case Study</span>
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/20 rounded-3xl p-6 sm:p-10 text-white shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-white/10 border border-white/15">
                {selectedProject.icon}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <p className="text-sm font-mono text-white/60 mb-6">
              {selectedProject.subtitle}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Objective */}
            <div className="mb-8 p-5 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-sm uppercase tracking-wider font-semibold text-white/90 mb-2 flex items-center gap-2">
                <Brain size={16} className="text-red-400" />
                Project Objective & Scope
              </h4>
              <p className="text-white/80 text-sm leading-relaxed">
                {selectedProject.details.objective}
              </p>
            </div>

            {/* Methodology */}
            <div className="mb-8">
              <h4 className="text-sm uppercase tracking-wider font-semibold text-white/90 mb-3 flex items-center gap-2">
                <Code2 size={16} className="text-amber-400" />
                Methodology & Pipeline
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.details.methodology.map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-white/80 leading-relaxed"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-red-400 shrink-0 mt-0.5"
                    />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Architecture */}
            <div className="mb-8">
              <h4 className="text-sm uppercase tracking-wider font-semibold text-white/90 mb-3 flex items-center gap-2">
                <Zap size={16} className="text-cyan-400" />
                Technical Architecture & Implementation
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProject.details.technicalArchitecture.map((arch, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-zinc-900 border border-white/10 text-xs text-white/80 leading-relaxed"
                  >
                    {arch}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Outcomes */}
            <div className="mb-8">
              <h4 className="text-sm uppercase tracking-wider font-semibold text-white/90 mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400" />
                Key Outcomes & Impact
              </h4>
              <ul className="space-y-2">
                {selectedProject.details.outcomes.map((outcome, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-white/80 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-gray-900 text-xs font-semibold uppercase tracking-wider hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <span>View GitHub Repository</span>
                <ExternalLink size={14} />
              </a>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
