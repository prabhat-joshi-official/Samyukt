import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What types of organizations does Samyukt serve?',
      answer: 'Samyukt partners with startups, growing mid-market businesses, and government agencies. We design software tools and deliver specialized professional services customized to bridge the gap between traditional operations and modern digital solutions.'
    },
    {
      question: 'How does Samyukt ensure secure, zero-loss database migrations?',
      answer: 'We enforce strict Zero-Loss migration protocols. Our team sets up secure staging databases, maps legacy schemas to relational objects, runs active checksum validation runs, and carries out tests before the DNS cutover. This ensures 100% data integrity and zero business downtime.'
    },
    {
      question: 'What is included in the Samyukt Studios video editing retainer?',
      answer: 'Our Studios retainer is a comprehensive digital asset package. It includes professional editing, custom text/graphic overlays, pacing adjustments, audio selection/syncing, color correction, and format optimizations (9:16 vertical) tailored for platform algorithms. Subscriptions come with revision packages and direct file exports.'
    },
    {
      question: 'Can I request bespoke module and custom dashboard development?',
      answer: 'Yes. While our basic templates support immediate go-live needs, our development desk builds custom dashboard integrations, bespoke enterprise API pipelines, and specialized administrative interfaces for unique business cases.'
    },
    {
      question: 'How fast can a new project consultation get started?',
      answer: 'We move fast. Contact our technical desk through our form, and an engineer will coordinate a scoping workshop within 24 to 48 hours to study your existing operational workflows.'
    }
  ];

  const toggleItem = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-sec">
      <div className="container faq-sec__container">
        
        {/* Left Intro */}
        <div className="faq-sec__intro">
          <div className="faq-sec__tag">FAQ</div>
          <h2 className="faq-sec__title">Frequently Asked Questions</h2>
          <p className="faq-sec__desc">
            Find answers to common operational questions regarding system onboarding, 
            data migration integrity, and video production packages.
          </p>
          <div className="faq-sec__decor" />
        </div>

        {/* Right Accordion */}
        <div className="faq-sec__accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-card glass-panel ${isOpen ? 'faq-card--open' : ''}`}
              >
                <button 
                  onClick={() => toggleItem(idx)}
                  className="faq-card__trigger"
                  aria-expanded={isOpen}
                >
                  <span className="faq-card__question">{faq.question}</span>
                  <span className="faq-card__icon">
                    <ChevronDown size={18} />
                  </span>
                </button>
                
                <div className="faq-card__content">
                  <div className="faq-card__content-inner">
                    <p className="faq-card__answer">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .faq-sec {
          padding: 8rem 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          position: relative;
        }

        .faq-sec__container {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 4rem;
          align-items: start;
        }

        .faq-sec__intro {
          position: sticky;
          top: 120px;
        }

        .faq-sec__tag {
          font-family: var(--font-heading);
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.15rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .faq-sec__title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.75rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .faq-sec__desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .faq-sec__decor {
          height: 1px;
          background: linear-gradient(90deg, var(--accent-primary), transparent);
          width: 80px;
          margin-top: 2rem;
        }

        .faq-sec__accordion {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-card {
          border: 1px solid var(--border-color);
          background: var(--bg-glass);
          overflow: hidden;
          transition: var(--transition-smooth);
        }

        .faq-card:hover {
          border-color: var(--border-hover);
        }

        .faq-card--open {
          border-color: var(--accent-primary);
        }

        .faq-card__trigger {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.75rem 2rem;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          color: var(--text-primary);
          gap: 1.5rem;
        }

        .faq-card__question {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.15rem;
          transition: var(--transition-fast);
        }

        .faq-card__trigger:hover .faq-card__question {
          color: var(--accent-primary);
        }

        .faq-card__icon {
          color: var(--text-secondary);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .faq-card--open .faq-card__icon {
          transform: rotate(180deg);
          color: var(--accent-primary);
        }

        .faq-card__content {
          height: 0;
          overflow: hidden;
          transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-card--open .faq-card__content {
          height: auto;
        }

        .faq-card__content-inner {
          padding: 0 2rem 1.75rem 2rem;
        }

        .faq-card__answer {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .faq-sec__container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .faq-sec__intro {
            position: relative;
            top: 0;
          }
        }

        @media (max-width: 600px) {
          .faq-card__trigger {
            padding: 1.25rem 1.5rem;
          }
          .faq-card__content-inner {
            padding: 0 1.5rem 1.25rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
