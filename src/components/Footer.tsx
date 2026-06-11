import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="footer-sec">
      <div className="container">
        
        {/* Giant Nav Options (Vectr Inspired) */}
        <div className="footer-nav">
          <button onClick={() => handleNavClick('about')} className="footer-nav-btn">
            <span className="footer-nav-btn__label">About Our Firm</span>
            <span className="footer-nav-btn__arrow-box">
              <ArrowRight className="footer-nav-btn__arrow" size={24} />
            </span>
          </button>
          
          <button onClick={() => handleNavClick('services')} className="footer-nav-btn">
            <span className="footer-nav-btn__label">Explore Services</span>
            <span className="footer-nav-btn__arrow-box">
              <ArrowRight className="footer-nav-btn__arrow" size={24} />
            </span>
          </button>
          
          <button onClick={() => handleNavClick('pricing')} className="footer-nav-btn">
            <span className="footer-nav-btn__label">Review Pricing</span>
            <span className="footer-nav-btn__arrow-box">
              <ArrowRight className="footer-nav-btn__arrow" size={24} />
            </span>
          </button>
        </div>

        <div className="footer-divider" />

        {/* Meta Bottom Layout */}
        <div className="footer-bottom">
          <div className="footer-bottom__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Layers className="footer-bottom__logo-icon" />
            <span className="footer-bottom__logo-text">SAMYUKT</span>
          </div>

          <div className="footer-bottom__meta">
            <p className="footer-copyright">© {new Date().getFullYear()} Samyukt, Inc. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy" className="footer-link">Privacy Policy</a>
              <a href="#terms" className="footer-link">Terms of Service</a>
            </div>
          </div>

          {/* Social icons (Inline SVGs) */}
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

      </div>


      <style>{`
        .footer-sec {
          background: var(--bg-primary);
          padding: 6rem 0 4rem 0;
          border-top: 1px solid var(--border-color);
          position: relative;
        }

        .footer-nav {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .footer-nav-btn {
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
          padding: 2.5rem 2rem;
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: var(--transition-smooth);
          text-align: left;
          color: var(--text-primary);
        }

        .footer-nav-btn:hover {
          border-color: var(--accent-primary);
          background: rgba(0, 242, 254, 0.02);
          transform: translateY(-4px);
        }

        .footer-nav-btn__label {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.4rem;
        }

        .footer-nav-btn__arrow-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: var(--transition-smooth);
        }

        .footer-nav-btn:hover .footer-nav-btn__arrow-box {
          background: var(--accent-primary);
          border-color: var(--accent-primary);
          color: #ffffff;
          box-shadow: 0 0 15px var(--accent-primary);
          transform: rotate(-45deg);
        }

        .footer-divider {
          height: 1px;
          background: var(--border-color);
          margin-bottom: 3rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .footer-bottom__logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .footer-bottom__logo-icon {
          color: var(--accent-primary);
        }

        .footer-bottom__logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 0.15rem;
        }

        .footer-bottom__meta {
          display: flex;
          align-items: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .footer-copyright {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-link {
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--accent-primary);
        }

        .footer-social {
          display: flex;
          gap: 0.75rem;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
          background: none;
        }

        .footer-social-btn:hover {
          color: var(--accent-primary);
          border-color: var(--accent-primary);
          background: rgba(0, 242, 254, 0.02);
        }

        @media (max-width: 992px) {
          .footer-nav {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-bottom__meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};
