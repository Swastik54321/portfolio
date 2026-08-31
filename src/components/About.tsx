import React from 'react';
import { Brain, Cpu, GraduationCap, Sparkles, Layers } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-widest text-white/90 mb-4">
          <Sparkles size={14} className="text-red-400" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-playfair italic">
          Engineering Intelligence. Building for Impact.
        </h2>
        <p className="text-white/70 max-w-2xl mt-4 text-base sm:text-lg leading-relaxed">
          I am a 3rd-year B.Tech Computer Science student at{' '}
          <strong className="text-white font-semibold">Centurion University</strong>,
          specializing in Artificial Intelligence, Machine Learning, and Full-Stack Engineering.
        </p>
      </div>

      {/* Core Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Academic & Focus */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 text-red-400 group-hover:scale-110 transition-transform">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Education & Foundation</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Pursuing B.Tech in Computer Science & Engineering (3rd Year) at Centurion University. Focused on data structures, applied ML algorithms, and system architecture.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-xs text-white/80">
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Centurion University</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">B.Tech CSE</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">3rd Year</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Cybersecurity & Network Security</span>
          </div>
        </div>

        {/* Card 2: AI/ML Engineering */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform">
              <Brain size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI / ML & Diagnostics</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Hands-on experience developing binary classification pipelines, clinical decision support systems, physiological stress detection from wearable sensors, and NLP classifiers.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-xs text-white/80">
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Scikit-Learn</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">NLTK & TF-IDF</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Full-Stack AI/ML Pipelines</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Signal Processing</span>
          </div>
        </div>

        {/* Card 3: Full-Stack & Deployment */}
        <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-md flex flex-col justify-between hover:border-white/20 transition-all group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Full-Stack & Systems</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Bridging mathematical models to production. Serving predictions through microservice REST APIs, real-time confidence visualizations, and modern React & Android interfaces.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 text-xs text-white/80">
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Flask REST API</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">React + TS</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Android Development</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Model Persistence</span>
          </div>
        </div>
      </div>

      {/* Skills banner */}
      <div className="mt-8 p-8 rounded-3xl bg-gradient-to-r from-zinc-900/90 to-zinc-950 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0">
            <Layers size={24} />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Technical Arsenal</h4>
            <p className="text-white/60 text-xs sm:text-sm">Technologies, algorithms, and frameworks used in active production</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
          {[
            'Python',
            'Scikit-Learn',
            'Full-Stack AI/ML Pipelines',
            'Android Development',
            'Cybersecurity & Network Security',
            'Pandas & NumPy',
            'NLTK',
            'Flask REST API',
            'React 18',
            'TypeScript',
            'EDA & Feature Engineering',
            'ROC-AUC & Optimization',
            'OpenCV',
          ].map((skill) => (
            <span
              key={skill}
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-medium text-white/90 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
