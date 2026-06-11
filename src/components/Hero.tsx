import React, { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  theme: 'dark' | 'light';
}

export const Hero: React.FC<HeroProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 15000), 80);
    const connectionDistance = 120;
    let mouse = { x: -1000, y: -1000, radius: 180 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Push away from mouse
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x += (dx / dist) * force * 1.5;
          this.y += (dy / dist) * force * 1.5;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark' ? 'rgba(0, 242, 254, 0.6)' : 'rgba(37, 99, 235, 0.6)';
        ctx.fill();
      }
    }

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(0, 242, 254, ${alpha})` 
              : `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.015)' : 'rgba(0, 0, 0, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw particles & lines
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-sec">
      <canvas ref={canvasRef} className="hero-canvas" />
      
      {/* Background ambient glows */}
      <div className="hero-glow hero-glow--1" />
      <div className="hero-glow hero-glow--2" />

      <div className="container hero-sec__container">
        <div className="hero-sec__content">
          <div className="hero-sec__badge">
            <span className="hero-sec__badge-dot" />
            <span>Enterprise Infrastructure & Digital Transformation</span>
          </div>

          <h1 className="hero-sec__title">
            <span>Empowering Enterprises With </span>
            <span className="gradient-text">Modern Technology Solutions</span>
          </h1>

          <p className="hero-sec__subtitle">
            Samyukt bridges the gap between traditional operations and digital intelligence. 
            We build enterprise software tools and deliver specialized professional services 
            designed to make organizations run with absolute efficiency.
          </p>

          <div className="hero-sec__ctas">
            <button 
              onClick={() => handleScrollTo('services')} 
              className="pill-btn pill-btn--primary hero-sec__btn"
            >
              Explore Services <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </button>
            <button 
              onClick={() => handleScrollTo('pricing')} 
              className="pill-btn pill-btn--glass hero-sec__btn"
            >
              View Pricing
            </button>
          </div>
        </div>

        <button onClick={() => handleScrollTo('about')} className="hero-sec__scroll-btn" aria-label="Scroll to discover">
          <span className="scroll-btn-text">scroll to discover our workflow</span>
          <ChevronDown size={18} className="scroll-btn-icon" />
        </button>
      </div>

      <style>{`
        .hero-sec {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 80px;
          overflow: hidden;
          background-color: var(--bg-primary);
        }

        .hero-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          opacity: 0.15;
          z-index: 1;
          pointer-events: none;
        }

        .hero-glow--1 {
          width: 500px;
          height: 500px;
          background: var(--accent-primary);
          top: -100px;
          left: -100px;
          animation: float 10s ease-in-out infinite;
        }

        .hero-glow--2 {
          width: 600px;
          height: 600px;
          background: var(--accent-emerald);
          bottom: -200px;
          right: -100px;
          animation: float 14s ease-in-out infinite alternate;
        }

        .hero-sec__container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          justify-content: space-between;
          height: calc(100vh - 80px);
          padding-bottom: 2rem;
          padding-top: 4rem;
        }

        .hero-sec__content {
          max-width: 900px;
          margin: auto 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-sec__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          font-size: 0.8rem;
          font-family: var(--font-heading);
          font-weight: 500;
          letter-spacing: 0.05rem;
          text-transform: uppercase;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          animation: float 5s ease-in-out infinite alternate;
        }

        .hero-sec__badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 10px var(--accent-emerald);
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .hero-sec__title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 4rem;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
        }

        .hero-sec__title span {
          display: block;
        }

        .hero-sec__subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .hero-sec__ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hero-sec__btn {
          font-size: 1rem;
          padding: 0.85rem 2.25rem;
        }

        .hero-sec__scroll-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: var(--transition-fast);
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.8rem;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
        }

        .hero-sec__scroll-btn:hover {
          color: var(--accent-primary);
        }

        .scroll-btn-icon {
          animation: scroll-bob 1.5s ease-in-out infinite;
        }

        @keyframes scroll-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        @media (max-width: 768px) {
          .hero-sec__title {
            font-size: 2.5rem;
          }
          .hero-sec__subtitle {
            font-size: 1rem;
          }
          .hero-sec__container {
            height: auto;
            min-height: calc(100vh - 80px);
            padding-top: 2rem;
          }
          .hero-sec__badge {
            font-size: 0.7rem;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
