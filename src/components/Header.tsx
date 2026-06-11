import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Layers } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__container">
          {/* Logo */}
          <div className="header__logo" onClick={() => handleNavClick('hero')}>
            <Layers className="header__logo-icon" />
            <span className="header__logo-text">SAMYUKT</span>
          </div>

          {/* Desktop Nav */}
          <nav className="header__nav-desktop">
            <button onClick={() => handleNavClick('about')} className="header__nav-link">About</button>
            <button onClick={() => handleNavClick('services')} className="header__nav-link">Services</button>
            <button onClick={() => handleNavClick('pricing')} className="header__nav-link">Pricing</button>
            <button onClick={() => handleNavClick('faq')} className="header__nav-link">FAQ</button>
          </nav>

          {/* Action CTAs */}
          <div className="header__actions">
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="header__theme-btn" aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button onClick={() => handleNavClick('pricing')} className="pill-btn pill-btn--primary header__cta">
              Get Started
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              className="header__menu-btn" 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'mobile-overlay--open' : ''}`}>
        <div className="mobile-overlay__panel">
          <div className="mobile-overlay__header">
            <div className="header__logo">
              <Layers className="header__logo-icon" />
              <span className="header__logo-text">SAMYUKT</span>
            </div>
            <button 
              className="mobile-overlay__close" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mobile-overlay__nav">
            <button onClick={() => handleNavClick('about')} className="mobile-overlay__link">About</button>
            <button onClick={() => handleNavClick('services')} className="mobile-overlay__link">Services</button>
            <button onClick={() => handleNavClick('pricing')} className="mobile-overlay__link">Pricing</button>
            <button onClick={() => handleNavClick('faq')} className="mobile-overlay__link">FAQ</button>
          </nav>

          <div className="mobile-overlay__actions">
            <button onClick={toggleTheme} className="header__theme-btn header__theme-btn--large" aria-label="Toggle Theme">
              {theme === 'dark' ? <><Sun size={20} /> <span>Light Mode</span></> : <><Moon size={20} /> <span>Dark Mode</span></>}
            </button>
            <button onClick={() => handleNavClick('pricing')} className="pill-btn pill-btn--primary mobile-overlay__cta">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 1.5rem 0;
          transition: var(--transition-smooth);
        }

        .header--scrolled {
          padding: 1rem 0;
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }

        .header__container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header__logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          user-select: none;
        }

        .header__logo-icon {
          color: var(--accent-primary);
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .header__logo-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: 0.15rem;
          color: var(--text-primary);
        }

        .header__nav-desktop {
          display: flex;
          gap: 2rem;
        }

        .header__nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .header__nav-link:hover {
          color: var(--accent-primary);
        }

        .header__actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .header__theme-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-primary);
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .header__theme-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-primary);
          color: var(--accent-primary);
        }

        .header__cta {
          font-size: 0.9rem;
          padding: 0.6rem 1.4rem;
        }

        .header__menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        /* Mobile Overlay styling */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(5, 8, 17, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 200;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-overlay--open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-overlay__panel {
          position: absolute;
          top: 0;
          right: 0;
          width: 80%;
          max-width: 380px;
          height: 100%;
          background: var(--bg-secondary);
          border-left: 1px solid var(--border-color);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-overlay--open .mobile-overlay__panel {
          transform: translateX(0);
        }

        .mobile-overlay__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 3rem;
        }

        .mobile-overlay__close {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .mobile-overlay__nav {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: auto;
        }

        .mobile-overlay__link {
          background: none;
          border: none;
          text-align: left;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.5rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .mobile-overlay__link:hover {
          color: var(--accent-primary);
          padding-left: 0.5rem;
        }

        .mobile-overlay__actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .header__theme-btn--large {
          width: 100%;
          height: 48px;
          border-radius: 9999px;
          gap: 0.75rem;
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .mobile-overlay__cta {
          width: 100%;
          padding: 0.8rem;
        }

        @media (max-width: 768px) {
          .header__nav-desktop, .header__cta {
            display: none;
          }
          .header__menu-btn {
            display: block;
          }
        }
      `}</style>
    </>
  );
};
