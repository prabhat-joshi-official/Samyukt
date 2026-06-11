import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFade(true), 300);
          setTimeout(onComplete, 800); // Allow fade animation to complete
          return 100;
        }
        // Random progress increment
        return prev + Math.floor(Math.random() * 12) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`loader-overlay ${fade ? 'loader-fade-out' : ''}`}>
      <div className="loader-content">
        {/* Futuristic Hexagon Loader */}
        <div className="loader-logo-wrapper">
          <svg className="loader-hex" viewBox="0 0 100 100" width="120" height="120">
            <defs>
              <linearGradient id="loader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--accent-primary)" />
                <stop offset="100%" stopColor="var(--accent-emerald)" />
              </linearGradient>
            </defs>
            {/* Outer spinning hexagon border */}
            <polygon 
              points="50,5 90,28 90,72 50,95 10,72 10,28" 
              fill="none" 
              stroke="url(#loader-grad)" 
              strokeWidth="2.5" 
              strokeDasharray="60 180"
              className="hex-spinning"
            />
            {/* Inner pulsing hexagon border */}
            <polygon 
              points="50,18 80,35 80,65 50,82 20,65 20,35" 
              fill="none" 
              stroke="var(--text-secondary)" 
              strokeWidth="1.5" 
              strokeOpacity="0.4"
              className="hex-pulsing"
            />
            {/* Middle Logo S representation */}
            <path 
              d="M38,40 C38,34 62,32 62,42 C62,50 38,50 38,58 C38,68 62,66 62,60" 
              fill="none" 
              stroke="url(#loader-grad)" 
              strokeWidth="6" 
              strokeLinecap="round"
              className="hex-logo-path"
            />
          </svg>
        </div>

        <div className="loader-status">
          <div className="loader-title">SAMYUKT CORE</div>
          <div className="loader-subtitle">Bridging legacy workflows with digital intelligence</div>
          
          <div className="loader-progress-bar-container">
            <div className="loader-progress-bar" style={{ width: `${Math.min(progress, 100)}%` }} />
          </div>
          
          <div className="loader-percentage">
            {Math.min(progress, 100)}% CONNECTED
          </div>
        </div>
      </div>

      <style>{`
        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #050811;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .loader-fade-out {
          opacity: 0;
          pointer-events: none;
          transform: scale(1.05);
        }
        .loader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .loader-logo-wrapper {
          position: relative;
          margin-bottom: 2rem;
        }
        .loader-hex {
          overflow: visible;
        }
        .hex-spinning {
          transform-origin: 50px 50px;
          animation: spin-hex 3s linear infinite;
        }
        .hex-pulsing {
          transform-origin: 50px 50px;
          animation: pulse-hex 2s ease-in-out infinite;
        }
        .hex-logo-path {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
          animation: draw-logo 2.5s ease-in-out forwards;
        }
        .loader-status {
          font-family: var(--font-heading);
          color: #f8fafc;
        }
        .loader-title {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.25rem;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }
        .loader-subtitle {
          font-size: 0.85rem;
          font-family: var(--font-sans);
          color: var(--text-secondary);
          opacity: 0.8;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05rem;
        }
        .loader-progress-bar-container {
          width: 240px;
          height: 2px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 99px;
          overflow: hidden;
          margin-bottom: 0.75rem;
        }
        .loader-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-emerald));
          transition: width 0.1s ease-out;
        }
        .loader-percentage {
          font-size: 0.75rem;
          font-family: monospace;
          color: var(--accent-primary);
          letter-spacing: 0.15rem;
        }
        
        @keyframes spin-hex {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse-hex {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.7; }
        }
        @keyframes draw-logo {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
};
