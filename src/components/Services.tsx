import React from 'react';
import { Video, Globe, Settings, Lightbulb, Database, Users, HelpCircle, Code, ArrowRight } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  status: 'available' | 'soon';
  price?: string;
  icon: React.ReactNode;
  id: string;
}

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: 'Samyukt Studios',
      description: 'Professional video editing, reel creation, and vertical motion design to elevate your company brand across social networks.',
      status: 'available',
      price: '$20 / Reel',
      icon: <Video size={24} />,
      id: 'studios'
    },
    {
      title: 'Web Development',
      description: 'Stunning custom static landing sites starting at $149, and fully dynamic SaaS applications integrated with database hosting.',
      status: 'available',
      price: 'From $149',
      icon: <Globe size={24} />,
      id: 'webdev'
    },
    {
      title: 'Implementation & Deployment',
      description: 'Expert engineering support to set up, secure, and launch your customized Samyukt instance without structural friction.',
      status: 'soon',
      icon: <Settings size={24} />,
      id: 'impl'
    },
    {
      title: 'Strategic Consulting',
      description: 'Data-driven insights and workflow mapping to align your technological systems with organizational KPI goals.',
      status: 'soon',
      icon: <Lightbulb size={24} />,
      id: 'consult'
    },
    {
      title: 'Data Migration',
      description: 'Secure, zero-loss migration protocol to transfer files, records, and legacy operational data securely into Samyukt database systems.',
      status: 'soon',
      icon: <Database size={24} />,
      id: 'migration'
    },
    {
      title: 'Staff Training',
      description: 'Comprehensive workflow workshops, instruction manuals, and tutorials to ensure absolute adoption rates among your staff.',
      status: 'soon',
      icon: <Users size={24} />,
      id: 'training'
    },
    {
      title: 'Dedicated Support',
      description: '24/7 technical hotline assistance, error triage, and server maintenance keeping your operations running continuously.',
      status: 'soon',
      icon: <HelpCircle size={24} />,
      id: 'support'
    },
    {
      title: 'Custom Development',
      description: 'Bespoke module development and custom API integration to handle your unique administrative edge cases.',
      status: 'soon',
      icon: <Code size={24} />,
      id: 'custom'
    }
  ];

  const handleExplore = (serviceId: string) => {
    if (serviceId === 'studios' || serviceId === 'webdev') {
      const el = document.getElementById('pricing');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="services-sec">
      <div className="container">
        <div className="services-sec__intro">
          <div className="services-sec__tag">OUR SERVICES</div>
          <h2 className="services-sec__title">Professional Solutions Built For Enterprises</h2>
          <p className="services-sec__desc">
            We provide core design capabilities and software deployment services. Explore our 
            active studio channels or review our technology integration roadmap below.
          </p>
        </div>

        <div className="services-sec__grid">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`service-card glass-panel ${service.status === 'soon' ? 'service-card--soon' : 'service-card--active'}`}
            >
              <div className="service-card__glow" />
              
              <div className="service-card__header">
                <div className="service-card__icon-box">
                  {service.icon}
                </div>
                
                {service.status === 'available' ? (
                  <span className="service-badge service-badge--available">Available</span>
                ) : (
                  <span className="service-badge service-badge--soon">Coming Soon</span>
                )}
              </div>

              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              
              {service.status === 'available' ? (
                <div className="service-card__footer">
                  <span className="service-card__price">{service.price}</span>
                  <button 
                    onClick={() => handleExplore(service.id)} 
                    className="service-card__link"
                  >
                    Explore Service <ArrowRight size={16} />
                  </button>
                </div>
              ) : (
                <div className="service-card__footer">
                  <span className="service-card__soon-text">Enterprise Roadmap</span>
                  <span className="service-card__soon-dots">•••</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-sec {
          padding: 8rem 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          position: relative;
        }

        .services-sec__intro {
          max-width: 800px;
          margin-bottom: 5rem;
        }

        .services-sec__tag {
          font-family: var(--font-heading);
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.15rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .services-sec__title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.75rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .services-sec__desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .services-sec__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .service-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          background: var(--bg-glass);
          border: 1px solid var(--border-color);
          height: 100%;
        }

        .service-card__glow {
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0;
          pointer-events: none;
          transition: var(--transition-smooth);
        }

        .service-card--active:hover .service-card__glow {
          opacity: 0.08;
        }

        .service-card--active .service-card__glow {
          background: var(--accent-primary);
          top: -75px;
          right: -75px;
        }

        .service-card--active:hover {
          border-color: rgba(0, 242, 254, 0.3);
          transform: translateY(-5px);
        }

        .service-card--soon {
          opacity: 0.6;
          border-style: dashed;
        }

        .service-card--soon:hover {
          opacity: 0.85;
          border-color: var(--border-hover);
        }

        .service-card__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .service-card__icon-box {
          color: var(--text-primary);
          transition: var(--transition-fast);
        }

        .service-card--active:hover .service-card__icon-box {
          color: var(--accent-primary);
          transform: scale(1.1);
        }

        .service-badge {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.05rem;
          text-transform: uppercase;
          padding: 0.2rem 0.6rem;
          border-radius: 99px;
          border: 1px solid transparent;
        }

        .service-badge--available {
          color: var(--accent-emerald);
          background: rgba(0, 255, 135, 0.05);
          border-color: rgba(0, 255, 135, 0.2);
        }

        .service-badge--soon {
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border-color: var(--border-color);
        }

        .service-card__title {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .service-card__desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .service-card__footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          font-family: var(--font-heading);
        }

        .service-card__price {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .service-card__link {
          background: none;
          border: none;
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .service-card__link:hover {
          color: var(--accent-secondary);
          gap: 0.4rem;
        }

        .service-card__soon-text {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .service-card__soon-dots {
          color: var(--text-muted);
          letter-spacing: 0.1rem;
        }

        @media (max-width: 1200px) {
          .services-sec__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 992px) {
          .services-sec__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .services-sec__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
