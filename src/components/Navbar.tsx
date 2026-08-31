import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
      {/* Left: Logo + Wordmark */}
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          scrollTo('home');
        }}
        className="flex items-center gap-2.5 z-10 group"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 256 256"
          fill="#ffffff"
          className="shrink-0 transition-transform group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
        </svg>
        <span className="text-white font-medium text-lg tracking-tight select-none">
          Swastik.co
        </span>
      </a>

      {/* Center pill navigation */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1.5 items-center gap-1 shadow-lg">
        <button
          type="button"
          onClick={() => scrollTo('home')}
          className="text-white hover:bg-white/20 transition-colors px-3.5 py-1.5 rounded-full text-xs font-medium"
        >
          Home
        </button>
        <button
          type="button"
          onClick={() => scrollTo('about')}
          className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-3.5 py-1.5 rounded-full text-xs font-medium"
        >
          About
        </button>
        <button
          type="button"
          onClick={() => scrollTo('projects')}
          className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-3.5 py-1.5 rounded-full text-xs font-medium"
        >
          Projects
        </button>
        <button
          type="button"
          onClick={() => scrollTo('experience')}
          className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-3.5 py-1.5 rounded-full text-xs font-medium"
        >
          Experience
        </button>
        <button
          type="button"
          onClick={() => scrollTo('contact')}
          className="text-white/80 hover:bg-white/20 hover:text-white transition-colors px-3.5 py-1.5 rounded-full text-xs font-medium"
        >
          Contact
        </button>
      </div>

      {/* Right (desktop) */}
      <div className="hidden md:block z-10">
        <button
          type="button"
          onClick={() => scrollTo('contact')}
          className="inline-block bg-white text-gray-900 text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full hover:bg-gray-200 active:scale-95 transition-all shadow-md"
        >
          Let's talk
        </button>
      </div>

      {/* Right (mobile) */}
      <div className="md:hidden z-10">
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="text-white p-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 active:scale-95 transition-all flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 p-4 bg-zinc-950/95 backdrop-blur-xl border border-white/20 rounded-2xl flex flex-col gap-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            type="button"
            onClick={() => scrollTo('home')}
            className="text-white text-left px-4 py-2 rounded-xl hover:bg-white/10 font-medium text-sm transition-colors"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="text-white/80 hover:text-white text-left px-4 py-2 rounded-xl hover:bg-white/10 font-medium text-sm transition-colors"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="text-white/80 hover:text-white text-left px-4 py-2 rounded-xl hover:bg-white/10 font-medium text-sm transition-colors"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => scrollTo('experience')}
            className="text-white/80 hover:text-white text-left px-4 py-2 rounded-xl hover:bg-white/10 font-medium text-sm transition-colors"
          >
            Experience
          </button>
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="text-white/80 hover:text-white text-left px-4 py-2 rounded-xl hover:bg-white/10 font-medium text-sm transition-colors"
          >
            Contact
          </button>
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="text-center mt-2 bg-white text-gray-900 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors"
          >
            Let's talk
          </button>
        </div>
      )}
    </nav>
  );
};
