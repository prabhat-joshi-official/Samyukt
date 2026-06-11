import React, { useState } from 'react';
import { Check, Video, Globe, Sparkles } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'studios' | 'webdev'>('studios');
  const [reelCount, setReelCount] = useState<number>(20); // default to 20 reels retainer

  // Samyukt Studios Retainers configuration
  const retainers = [
    { count: 10, price: 200, popular: false, badge: 'Startup Grow' },
    { count: 20, price: 400, popular: true, badge: 'Most Popular' },
    { count: 30, price: 600, popular: false, badge: 'Enterprise Scale' }
  ];

  const currentRetainer = retainers.find(r => r.count === reelCount) || retainers[1];

  const handleRetainerClick = (count: number) => {
    setReelCount(count);
  };

  const reelFeatures = [
    '30-Second Fully Edited Reels',
    '✂️ Professional Cuts & Smooth Transitions',
    '🔤 Custom Text Overlay & Keyframe Animations',
    '🎵 Copyright-free Music & Sound Integration',
    '🎨 Professional Color Grading & Correction',
    '📱 Optimized Vertical Format (9:16)',
    '✅ 1 Complete Revision Cycle Included',
    'High Definition HD 1080p Export Quality'
  ];

  return (
    <section id="pricing" className="pricing-sec">
      <div className="container">
        <div className="pricing-sec__intro">
          <div className="pricing-sec__tag">PRICING PLANS</div>
          <h2 className="pricing-sec__title">Flexible Subscriptions for Digital Assets</h2>
          <p className="pricing-sec__desc">
            Choose between professional media retention programs or explore customized software hosting packages.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="pricing-tabs">
          <button 
            className={`pricing-tab-btn ${activeTab === 'studios' ? 'pricing-tab-btn--active' : ''}`}
            onClick={() => setActiveTab('studios')}
          >
            <Video size={18} /> Samyukt Studios
          </button>
          <button 
            className={`pricing-tab-btn ${activeTab === 'webdev' ? 'pricing-tab-btn--active' : ''}`}
            onClick={() => setActiveTab('webdev')}
          >
            <Globe size={18} /> Web Development
          </button>
        </div>

        {/* Active Tab Panel */}
        <div className="pricing-container">
          
          {/* SAMYUKT STUDIOS TAB */}
          {activeTab === 'studios' && (
            <div className="studios-pricing">
              <div className="studios-pricing__calculator glass-panel">
                <div className="calculator-header">
                  <div className="calculator-header__badge">
                    <Sparkles size={14} /> ACTIVE SERVICE
                  </div>
                  <h3>Select Your Monthly Reel Retainer</h3>
                  <p>Slide or select the retainer count below to calculate total service fees.</p>
                </div>

                {/* Retainer Option Boxes */}
                <div className="retainer-boxes">
                  {retainers.map((tier) => (
                    <div 
                      key={tier.count} 
                      className={`retainer-box ${reelCount === tier.count ? 'retainer-box--active' : ''} ${tier.popular ? 'retainer-box--popular' : ''}`}
                      onClick={() => handleRetainerClick(tier.count)}
                    >
                      {tier.popular && <div className="retainer-box__pop-badge">Popular</div>}
                      <span className="retainer-box__badge">{tier.badge}</span>
                      <div className="retainer-box__count">{tier.count} Reels</div>
                      <div className="retainer-box__price">${tier.price} <span className="price-mo">/ mo</span></div>
                      <span className="retainer-box__per-reel">${(tier.price / tier.count).toFixed(0)} per reel</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Slider */}
                <div className="retainer-slider">
                  <div className="slider-labels">
                    <span>10 Reels</span>
                    <span>20 Reels</span>
                    <span>30 Reels</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="30" 
                    step="10" 
                    value={reelCount}
                    onChange={(e) => setReelCount(Number(e.target.value))}
                    className="custom-range-slider"
                  />
                </div>

                <div className="calculator-total">
                  <div className="calculator-total__info">
                    <div className="total-label">Monthly Total:</div>
                    <div className="total-price">${currentRetainer.price}</div>
                  </div>
                  <button className="pill-btn pill-btn--primary calculator-cta">
                    Subscribe to {currentRetainer.count} Reels Program
                  </button>
                </div>
              </div>

              {/* Inclusions Card */}
              <div className="studios-pricing__details glass-panel">
                <div className="details-header">
                  <h3>What is Included</h3>
                  <p>Every single reel is engineered by our editors to capture audience retention.</p>
                </div>
                
                <ul className="details-list">
                  {reelFeatures.map((feature, idx) => (
                    <li key={idx} className="details-item">
                      <div className="details-check"><Check size={14} /></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="details-footer">
                  <span className="details-footer-tag">Custom Length?</span>
                  <p>Need 60-second reels or specific edits? <a href="#footer" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                  }}>Contact our desk</a> for a quote.</p>
                </div>
              </div>
            </div>
          )}

          {/* WEB DEVELOPMENT TAB */}
          {activeTab === 'webdev' && (
            <div className="webdev-pricing">
              {/* Static Card */}
              <div className="pricing-card glass-panel">
                <div className="pricing-card__header">
                  <span className="pricing-card__badge">Static Systems</span>
                  <div className="pricing-card__price">$149 <span className="price-once">Flat fee</span></div>
                  <h3>Stunning Static Landing Page</h3>
                  <p>Perfect for corporate showcases, modern portfolios, and single-product landing pages.</p>
                </div>
                <div className="pricing-card__divider" />
                <ul className="pricing-card__features">
                  <li><Check size={16} /> Fully Responsive Layout</li>
                  <li><Check size={16} /> Sleek Vanilla CSS/JS Components</li>
                  <li><Check size={16} /> Fast CDN Hosting Architecture</li>
                  <li><Check size={16} /> Custom Graphic Assets</li>
                  <li><Check size={16} /> Basic SEO Metadata Integration</li>
                  <li><Check size={16} /> Contact Form Hook Endpoint</li>
                </ul>
                <button className="pill-btn pill-btn--glass pricing-card__cta">Deploy Static Page</button>
              </div>

              {/* Dynamic Card */}
              <div className="pricing-card pricing-card--active glass-panel">
                <div className="pricing-card__glow" />
                <div className="pricing-card__header">
                  <div className="pricing-card__pop-label">RECOMMENDED</div>
                  <span className="pricing-card__badge pricing-card__badge--active">Full Stack</span>
                  <div className="pricing-card__price">Custom Quote <span className="price-once">Based on scope</span></div>
                  <h3>Fully Dynamic SaaS Platforms</h3>
                  <p>Engineered with cloud database storage, client login dashboards, and third-party API routes.</p>
                </div>
                <div className="pricing-card__divider" />
                <ul className="pricing-card__features">
                  <li><Check size={16} /> React + Next.js Framework</li>
                  <li><Check size={16} /> Secure Database & Authentication</li>
                  <li><Check size={16} /> Complex Data Dashboards</li>
                  <li><Check size={16} /> Stripe/Payment Processing</li>
                  <li><Check size={16} /> Administrative Backend Console</li>
                  <li><Check size={16} /> 1-Year Dedicated Maintenance</li>
                </ul>
                <button className="pill-btn pill-btn--primary pricing-card__cta">Discuss Project Scope</button>
              </div>
            </div>
          )}

        </div>
      </div>

      <style>{`
        .pricing-sec {
          padding: 8rem 0;
          background: var(--bg-primary);
          position: relative;
        }

        .pricing-sec__intro {
          max-width: 800px;
          margin-bottom: 4rem;
        }

        .pricing-sec__tag {
          font-family: var(--font-heading);
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.15rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .pricing-sec__title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.75rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .pricing-sec__desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        /* Tabs styling */
        .pricing-tabs {
          display: inline-flex;
          padding: 0.25rem;
          border-radius: 99px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          margin-bottom: 4rem;
        }

        .pricing-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.5rem;
          border-radius: 99px;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .pricing-tab-btn--active {
          background: var(--bg-card);
          color: var(--text-primary);
          box-shadow: var(--shadow-sm);
        }

        /* Studios Pricing style */
        .studios-pricing {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          align-items: start;
        }

        .studios-pricing__calculator {
          padding: 3rem;
          display: flex;
          flex-direction: column;
        }

        .calculator-header {
          margin-bottom: 2rem;
        }

        .calculator-header__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.05rem;
          color: var(--accent-emerald);
          background: rgba(0, 255, 135, 0.05);
          border: 1px solid rgba(0, 255, 135, 0.2);
          padding: 0.2rem 0.5rem;
          border-radius: 99px;
          margin-bottom: 1rem;
        }

        .calculator-header h3 {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .calculator-header p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .retainer-boxes {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .retainer-box {
          padding: 1.5rem 1rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          text-align: center;
          cursor: pointer;
          transition: var(--transition-smooth);
          position: relative;
          background: rgba(255, 255, 255, 0.01);
        }

        .retainer-box--active {
          border-color: var(--accent-primary);
          background: rgba(0, 242, 254, 0.02);
        }

        .retainer-box--popular {
          border-color: rgba(255, 255, 255, 0.12);
        }

        .retainer-box--active.retainer-box--popular {
          border-color: var(--accent-primary);
        }

        .retainer-box__pop-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--accent-primary);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 0.05rem;
          padding: 0.15rem 0.6rem;
          border-radius: 99px;
          text-transform: uppercase;
        }

        .retainer-box__badge {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.5rem;
        }

        .retainer-box__count {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }

        .retainer-box__price {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .price-mo {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .retainer-box__per-reel {
          font-size: 0.75rem;
          color: var(--text-secondary);
          display: block;
          margin-top: 0.5rem;
        }

        /* Slider styles */
        .retainer-slider {
          margin-bottom: 3rem;
        }

        .slider-labels {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-heading);
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 0.5rem;
          padding: 0 0.5rem;
        }

        .custom-range-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 4px;
          border-radius: 99px;
          background: var(--border-color);
          outline: none;
        }

        .custom-range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--accent-primary);
          cursor: pointer;
          box-shadow: 0 0 10px var(--accent-primary);
          transition: transform 0.1s ease;
        }

        .custom-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .calculator-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
          margin-top: auto;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .calculator-total__info {
          display: flex;
          flex-direction: column;
        }

        .total-label {
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .total-price {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.25rem;
          color: var(--text-primary);
        }

        .calculator-cta {
          font-size: 0.95rem;
          padding: 0.8rem 1.8rem;
        }

        .studios-pricing__details {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .details-header {
          margin-bottom: 2rem;
        }

        .details-header h3 {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .details-header p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          margin-bottom: 3rem;
        }

        .details-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .details-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(0, 255, 135, 0.08);
          color: var(--accent-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .details-footer {
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
          margin-top: auto;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .details-footer-tag {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.25rem;
        }

        .details-footer a {
          color: var(--accent-primary);
          text-decoration: none;
          font-weight: 600;
        }

        .details-footer a:hover {
          text-decoration: underline;
        }

        /* Web Dev Pricing style */
        .webdev-pricing {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 960px;
          margin: 0 auto;
        }

        .pricing-card {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
        }

        .pricing-card__glow {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: var(--accent-primary);
          filter: blur(100px);
          opacity: 0.05;
          top: -100px;
          right: -100px;
          pointer-events: none;
        }

        .pricing-card--active {
          border-color: var(--accent-primary);
          box-shadow: var(--shadow-glow), var(--shadow-lg);
        }

        .pricing-card__pop-label {
          position: absolute;
          top: 15px;
          right: 20px;
          background: var(--accent-primary);
          color: #ffffff;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 0.05rem;
          padding: 0.2rem 0.6rem;
          border-radius: 99px;
          text-transform: uppercase;
        }

        .pricing-card__badge {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
          text-transform: uppercase;
          color: var(--text-secondary);
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .pricing-card__badge--active {
          color: var(--accent-primary);
        }

        .pricing-card__price {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.5rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .price-once {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .pricing-card h3 {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .pricing-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 2rem;
        }

        .pricing-card__divider {
          height: 1px;
          background: var(--border-color);
          margin-bottom: 2rem;
        }

        .pricing-card__features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
          text-align: left;
        }

        .pricing-card__features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .pricing-card__features li svg {
          color: var(--accent-emerald);
          flex-shrink: 0;
        }

        .pricing-card__cta {
          width: 100%;
          padding: 0.85rem;
          margin-top: auto;
        }

        @media (max-width: 992px) {
          .studios-pricing {
            grid-template-columns: 1fr;
          }
          .webdev-pricing {
            grid-template-columns: 1fr;
          }
          .pricing-card {
            padding: 2rem;
          }
        }

        @media (max-width: 600px) {
          .retainer-boxes {
            grid-template-columns: 1fr;
          }
          .calculator-total {
            flex-direction: column;
            align-items: flex-start;
          }
          .calculator-cta {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
