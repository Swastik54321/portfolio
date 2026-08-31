import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto text-white">
      {/* Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-widest text-white/90 mb-4">
          <Briefcase size={14} className="text-red-400" />
          <span>Timeline & Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-playfair italic">
          Experience & Education
        </h2>
        <p className="text-white/70 max-w-2xl mt-4 text-base sm:text-lg leading-relaxed">
          Academic foundation in Computer Science combined with hands-on industrial AI/ML internship experience.
        </p>
      </div>

      <div className="space-y-8">
        {/* Experience Item 1: InternPe */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
                Industry Internship
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                AI / ML Intern
              </h3>
              <p className="text-white/80 font-medium text-base">InternPe</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 w-fit">
              <Calendar size={14} />
              <span>May 2026 – June 2026</span>
            </div>
          </div>

          <p className="text-white/75 text-sm leading-relaxed mb-6">
            Conducted end-to-end predictive modeling and machine learning research on high-impact datasets:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
              <span>
                <strong>Breast Cancer Clinical Classification:</strong> Engineered automated binary diagnostic pipeline analyzing cell nuclear metrics to minimize false-negative errors in oncology screening.
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
              <span>
                <strong>IPL Match Outcome Predictor:</strong> Modelled 100,000+ ball-by-ball records with Logistic Regression and Random Forest classifiers for dynamic in-game probability forecasting.
              </span>
            </li>
            <li className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
              <span>
                <strong>Automotive Car Price Predictor:</strong> Built regression pipelines with Scikit-learn, optimizing $R^2$, MAE, and RMSE on complex automotive market attributes.
              </span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
            {['Scikit-Learn', 'Python', 'Full-Stack AI/ML Pipelines', 'Healthcare ML', 'Sports Analytics', 'Feature Pipelines'].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Item 2: Centurion University */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Higher Education
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                B.Tech in Computer Science & Engineering
              </h3>
              <p className="text-white/80 font-medium text-base">Centurion University of Technology and Management</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 w-fit">
              <Calendar size={14} />
              <span>3rd Year (Pursuing)</span>
            </div>
          </div>

          <p className="text-white/75 text-sm leading-relaxed mb-6">
            Specializing in core computer science disciplines, mathematical modeling, statistical learning, and systems engineering.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/80">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-indigo-300 block mb-1">Focus Areas</span>
              <p className="text-xs text-white/70">Data Structures & Algorithms, Machine Learning, Cybersecurity & Network Security, Android Development, Database Management, Operating Systems.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-indigo-300 block mb-1">Active Research & Projects</span>
              <p className="text-xs text-white/70">Real-time acute stress detection from multi-modal wearable sensor streams and live full-stack AI/ML applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
