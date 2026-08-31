import React, { useEffect, useRef, useState } from 'react';
import { RevealLayer } from './RevealLayer';

const SPOTLIGHT_R = 260;

export const Hero: React.FC = () => {
  const mouseRef = useRef({ x: -999, y: -999 });
  const smoothRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (smoothRef.current.x === -999) {
        smoothRef.current = { x: e.clientX, y: e.clientY };
        setCursorPos({ x: e.clientX, y: e.clientY });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        mouseRef.current = { x: touch.clientX, y: touch.clientY };
        if (smoothRef.current.x === -999) {
          smoothRef.current = { x: touch.clientX, y: touch.clientY };
          setCursorPos({ x: touch.clientX, y: touch.clientY });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const updateSmoothPosition = () => {
      if (mouseRef.current.x !== -999) {
        smoothRef.current.x += (mouseRef.current.x - smoothRef.current.x) * 0.1;
        smoothRef.current.y += (mouseRef.current.y - smoothRef.current.y) * 0.1;
        setCursorPos({ x: smoothRef.current.x, y: smoothRef.current.y });
      }
      rafRef.current = requestAnimationFrame(updateSmoothPosition);
    };

    rafRef.current = requestAnimationFrame(updateSmoothPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden h-screen bg-black"
      style={{ height: '100dvh' }}
    >
      {/* 1. Base image (z-10) */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat hero-zoom z-10"
        style={{ backgroundImage: 'url("./images/Base_image.png")' }}
      />

      {/* 2. Reveal layer (z-30) */}
      <RevealLayer
        image="./images/Reveal_image.png"
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
        radius={SPOTLIGHT_R}
      />

      {/* 3. Heading (z-50) */}
      <div
        className="absolute top-1/2 -translate-y-1/2 flex flex-col items-start text-left px-5 pointer-events-none z-50"
        style={{ left: '80px' }}
      >
        <h1 className="text-white leading-[0.95]">
          <span
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
            style={{
              letterSpacing: '-0.05em',
              animationDelay: '0.25s',
            }}
          >
            I'm
          </span>
          <span
            className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal tracking-tight"
            style={{
              letterSpacing: '-0.05em',
              animationDelay: '0.42s',
            }}
          >
            SWASTIK
          </span>
          <span
            className="block font-playfair italic text-white/90 text-base sm:text-lg md:text-xl mt-3 sm:mt-4 hero-anim hero-reveal"
            style={{
              letterSpacing: '-0.02em',
              animationDelay: '0.58s',
            }}
          >
            AI/ML Engineer & Full-Stack Developer
          </span>
        </h1>
      </div>

      {/* 4. Bottom-left paragraph (z-50) */}
      <div
        className="hidden sm:block absolute bottom-14 max-w-[280px] z-50 hero-anim hero-fade pointer-events-none"
        style={{
          left: '100px',
          animationDelay: '0.7s',
        }}
      >
        <p className="text-sm text-white/80 leading-relaxed">
          B.Tech Computer Science (3rd Year) at Centurion University. Obsessed with
          real-time ML systems, healthcare analytics, and finding new ways to make
          digital experiences feel alive.
        </p>
      </div>

      {/* 5. Bottom-right block (z-50) */}
      <div
        className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[280px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade pointer-events-none"
        style={{
          animationDelay: '0.85s',
        }}
      >
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          AI/ML engineer who builds full-stack systems. From predictive clinical
          models to real-time classification APIs and wearable acute stress
          detection.
        </p>
      </div>
    </section>
  );
};
