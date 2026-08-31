import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto text-white border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-widest text-white/90 mb-4 w-fit">
            <MessageSquare size={14} className="text-red-400" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-playfair italic mb-6">
            Let’s Build Something Intelligent Together.
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
            Whether you have an interesting AI/ML research initiative, an internship/full-time opportunity, or want to discuss full-stack machine learning architectures—my inbox is always open.
          </p>

          {/* Contact Direct Cards */}
          <div className="space-y-4 mb-8">
            {/* Phone Entry */}
            <a
              href="tel:+918260582227"
              className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div>
                <span className="text-xs text-white/50 block">Phone Support</span>
                <span className="text-sm font-medium">+91 8260582227</span>
              </div>
            </a>

            {/* Email Entry */}
            <a
              href="mailto:swastikpanda845@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white group"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div>
                <span className="text-xs text-white/50 block">Direct Email</span>
                <span className="text-sm font-medium">swastikpanda845@gmail.com</span>
              </div>
            </a>

            {/* Socials Grid */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/swastik-panda-a40272423"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-white/50 block">Professional</span>
                  <span className="text-sm font-medium">LinkedIn</span>
                </div>
              </a>

              <a
                href="https://github.com/Swastik54321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-white/20 transition-all text-white/80 hover:text-white group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-white/50 block">Code Repository</span>
                  <span className="text-sm font-medium">GitHub</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right column: Interactive form */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/70 border border-white/10 backdrop-blur-xl">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-in zoom-in-75">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
              <p className="text-white/70 text-sm max-w-sm">
                Thank you for reaching out, Swastik will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-6 text-xs uppercase tracking-wider text-white/60 hover:text-white underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Send a Direct Message</h3>

              <div>
                <label htmlFor="name" className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-red-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-red-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-white/70 mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-red-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-xl bg-white text-gray-900 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <p>© {new Date().getFullYear()} Swastik Panda • Centurion University. All rights reserved.</p>
        <p className="font-mono">Engineered with React, TypeScript & Tailwind CSS</p>
      </div>
    </section>
  );
};
