import React from 'react';
import { Briefcase, Zap, Rocket, LineChart, ShieldCheck, HeartHandshake } from 'lucide-react';

interface Feature {
  category: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  metrics: { value: string; label: string }[];
  color: string;
}

export const Features: React.FC = () => {
  const features: Feature[] = [
    {
      category: 'Live',
      title: 'Enterprise Technology',
      description: 'Deep understanding of corporate workflows and complex business processes to align systems with business targets.',
      icon: <Briefcase size={22} />,
      metrics: [
        { value: '+24%', label: 'Efficiency gains' },
        { value: '89.2k', label: 'Processes automated' },
        { value: '250+', label: 'Organizations' }
      ],
      color: 'var(--accent-primary)'
    },
    {
      category: 'AI Powered',
      title: 'Process Automation',
      description: 'Eliminating slow manual procedures with intelligent, custom algorithms and process workflow engines.',
      icon: <Zap size={22} />,
      metrics: [
        { value: '98%', label: 'Success Rate' },
        { value: '70%', label: 'Reduction in delay' }
      ],
      color: 'var(--accent-emerald)'
    },
    {
      category: 'Enterprise',
      title: 'Digital Transformation',
      description: 'Seamlessly guiding organizations from legacy database models to modern digital computing suites.',
      icon: <Rocket size={22} />,
      metrics: [
        { value: '3×', label: 'Growth factor' },
        { value: '0', label: 'Migration data loss' }
      ],
      color: 'var(--accent-secondary)'
    },
    {
      category: 'Scalable',
      title: 'Scalable Solutions',
      description: 'Custom cloud architecture that automatically adjusts capacity to fit your growing data traffic.',
      icon: <LineChart size={22} />,
      metrics: [
        { value: '10M+', label: 'Requests/Day' },
        { value: '99.99%', label: 'API reliability' }
      ],
      color: 'var(--accent-primary)'
    },
    {
      category: '24/7',
      title: 'Reliable Support',
      description: 'Dedicated systems assistance from design phase through daily system operations and active audits.',
      icon: <ShieldCheck size={22} />,
      metrics: [
        { value: '+3', label: 'Global regions' },
        { value: '99.9%', label: 'Guaranteed Uptime' }
      ],
      color: 'var(--accent-gold)'
    },
    {
      category: 'Future-Ready',
      title: 'Long-term Innovation',
      description: 'Continuous improvements and modules deployment driven by modern, evolving corporate goals.',
      icon: <HeartHandshake size={22} />,
      metrics: [
        { value: '100%', label: 'Continuous delivery' },
        { value: 'Zero', label: 'Legacy freeze' }
      ],
      color: 'var(--accent-emerald)'
    }
  ];

  return (
    <section id="features" className="features-sec">
      <div className="container">
        <div className="features-sec__intro">
          <div className="features-sec__tag">CAPABILITIES</div>
          <h2 className="features-sec__title">Designed For Complex Modern Systems</h2>
          <p className="features-sec__desc">
            We engineer high-performance systems with strict standards. Our modules automate 
            complex variables so you can manage performance with absolute transparency.
          </p>
        </div>

        <div className="features-sec__grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card glass-panel" style={{ '--card-accent': feature.color } as React.CSSProperties}>
              <div className="feature-card__glow" />
              <div className="feature-card__header">
                <div className="feature-card__icon">{feature.icon}</div>
                <span className="feature-card__badge">{feature.category}</span>
              </div>
              
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
              
              <div className="feature-card__divider" />
              
              <div className="feature-card__metrics">
                {feature.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="feature-card__metric">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-sec {
          padding: 8rem 0;
          background: var(--bg-primary);
          position: relative;
        }

        .features-sec__intro {
          max-width: 800px;
          margin-bottom: 5rem;
        }

        .features-sec__tag {
          font-family: var(--font-heading);
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.15rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .features-sec__title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.75rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .features-sec__desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .features-sec__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-card {
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-color);
          background: var(--bg-glass);
        }

        .feature-card__glow {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: var(--card-accent);
          filter: blur(100px);
          opacity: 0.03;
          top: -100px;
          left: -100px;
          pointer-events: none;
          transition: var(--transition-smooth);
        }

        .feature-card:hover .feature-card__glow {
          opacity: 0.12;
          transform: translate(30px, 30px);
        }

        .feature-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
        }

        .feature-card__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .feature-card__icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--card-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
        }

        .feature-card:hover .feature-card__icon {
          background: var(--card-accent);
          color: #ffffff;
          box-shadow: 0 0 15px var(--card-accent);
        }

        .feature-card__badge {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08rem;
          text-transform: uppercase;
          color: var(--card-accent);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
        }

        .feature-card__title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .feature-card__description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .feature-card__divider {
          height: 1px;
          background: linear-gradient(90deg, var(--border-color), transparent);
          margin-bottom: 1.5rem;
        }

        .feature-card__metrics {
          display: flex;
          gap: 1.5rem;
        }

        .feature-card__metric {
          display: flex;
          flex-direction: column;
        }

        .metric-value {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.4rem;
          color: var(--text-primary);
        }

        .metric-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05rem;
          color: var(--text-secondary);
          margin-top: 0.15rem;
        }

        @media (max-width: 992px) {
          .features-sec__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .features-sec__grid {
            grid-template-columns: 1fr;
          }
          .feature-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};
