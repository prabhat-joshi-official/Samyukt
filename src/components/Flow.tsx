import React, { useState } from 'react';
import { Target, Cpu, Database, Activity } from 'lucide-react';

interface Step {
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  detail: string;
}

export const Flow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: Step[] = [
    {
      num: '01',
      title: 'Workflow Analysis',
      icon: <Target className="flow-step__icon-svg" />,
      description: 'We audit and map your organizational workflows to uncover legacy inefficiencies.',
      detail: 'Samyukt engineers analyze your everyday procedures. We identify manual reporting loops, slow communications, and system latency to lay the groundwork for high-grade performance.'
    },
    {
      num: '02',
      title: 'Architecture Refactoring',
      icon: <Cpu className="flow-step__icon-svg" />,
      description: 'Our team designs modular, highly-scalable software frameworks to replace bottlenecks.',
      detail: 'We formulate cloud-native database schemes and software pipelines tailored specifically to your load metrics. Our designs are engineered for seamless data access and future expansion.'
    },
    {
      num: '03',
      title: 'Process Automation',
      icon: <Activity className="flow-step__icon-svg" />,
      description: 'We integrate intelligent machine workflows that handle repetitive operations automatically.',
      detail: 'Leveraging modern automation and process flow engines, we execute routine tasks automatically. This cuts operational delay by up to 70% and mitigates critical human error.'
    },
    {
      num: '04',
      title: 'Data Migration & Go-Live',
      icon: <Database className="flow-step__icon-svg" />,
      description: 'We run secure, zero-loss migrations to move your operations into the new system.',
      detail: 'Through strict verification schemas and staging runs, we transfer legacy files securely. We provide comprehensive training and live support to ensure absolute adoption rates.'
    }
  ];

  return (
    <section id="about" className="flow-sec">
      <div className="container">
        <div className="flow-sec__header">
          <div className="flow-sec__tag">THE SAMYUKT METHOD</div>
          <h2 className="flow-sec__title">Bridging Legacy Management With Digital Intelligence</h2>
          <p className="flow-sec__desc">
            We don't just supply software. We audit corporate bottlenecks, design custom modules, 
            and implement secure workflows to drive digital transition from first step to final launch.
          </p>
        </div>

        <div className="flow-sec__content">
          {/* Step Selector Grid */}
          <div className="flow-sec__steps">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`flow-step ${idx === activeStep ? 'flow-step--active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="flow-step__header">
                  <div className="flow-step__num">{step.num}</div>
                  <h3 className="flow-step__title">{step.title}</h3>
                </div>
                <p className="flow-step__description">{step.description}</p>
                <div className="flow-step__indicator">
                  <div className="flow-step__indicator-bar" />
                </div>
              </div>
            ))}
          </div>

          {/* Step Visualizer Panel */}
          <div className="flow-visual glass-panel">
            <div className="flow-visual__glow" />
            <div className="flow-visual__header">
              <div className="flow-visual__icon">
                {steps[activeStep].icon}
              </div>
              <div className="flow-visual__number">STAGE {steps[activeStep].num}</div>
            </div>
            
            <h3 className="flow-visual__title">{steps[activeStep].title}</h3>
            <p className="flow-visual__body">{steps[activeStep].detail}</p>

            <div className="flow-visual__visual">
              <div className="flow-visual__grid">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`flow-visual__node ${i <= activeStep ? 'flow-visual__node--active' : ''}`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <div className="flow-visual__progress-line">
                <div 
                  className="flow-visual__progress-fill" 
                  style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .flow-sec {
          padding: 8rem 0;
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          position: relative;
        }

        .flow-sec__header {
          max-width: 800px;
          margin-bottom: 5rem;
        }

        .flow-sec__tag {
          font-family: var(--font-heading);
          color: var(--accent-primary);
          font-weight: 600;
          font-size: 0.85rem;
          letter-spacing: 0.15rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .flow-sec__title {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2.75rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .flow-sec__desc {
          color: var(--text-secondary);
          font-size: 1.1rem;
          line-height: 1.7;
        }

        .flow-sec__content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .flow-sec__steps {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .flow-step {
          padding: 1.5rem;
          border-radius: 12px;
          cursor: pointer;
          transition: var(--transition-smooth);
          border: 1px solid transparent;
        }

        .flow-step:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: var(--border-color);
        }

        .flow-step--active {
          background: rgba(0, 242, 254, 0.03);
          border-color: rgba(0, 242, 254, 0.15);
        }

        .flow-step__header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .flow-step__num {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .flow-step--active .flow-step__num {
          color: var(--accent-primary);
        }

        .flow-step__title {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .flow-step__description {
          color: var(--text-secondary);
          font-size: 0.95rem;
          padding-left: 2.25rem;
          margin-bottom: 1rem;
        }

        .flow-step__indicator {
          height: 2px;
          background: var(--border-color);
          border-radius: 99px;
          overflow: hidden;
          margin-left: 2.25rem;
        }

        .flow-step__indicator-bar {
          height: 100%;
          width: 0;
          background: var(--accent-primary);
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .flow-step--active .flow-step__indicator-bar {
          width: 100%;
        }

        /* Visual Panel */
        .flow-visual {
          padding: 3rem;
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .flow-visual__glow {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: var(--accent-primary);
          filter: blur(80px);
          opacity: 0.2;
          pointer-events: none;
        }

        .flow-visual__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .flow-visual__icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(0, 242, 254, 0.1);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 4s ease-in-out infinite;
        }

        .flow-step__icon-svg {
          width: 24px;
          height: 24px;
        }

        .flow-visual__number {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.15rem;
          color: var(--text-muted);
        }

        .flow-visual__title {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }

        .flow-visual__body {
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 3rem;
          min-height: 100px;
        }

        .flow-visual__visual {
          position: relative;
          margin-top: auto;
        }

        .flow-visual__grid {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
        }

        .flow-visual__node {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--border-color);
          border: 2px solid var(--bg-secondary);
          transition: var(--transition-smooth);
        }

        .flow-visual__node--active {
          background: var(--accent-primary);
          box-shadow: 0 0 10px var(--accent-primary);
          transform: scale(1.2);
        }

        .flow-visual__progress-line {
          position: absolute;
          top: 6px;
          left: 7px;
          right: 7px;
          height: 2px;
          background: var(--border-color);
          z-index: 1;
        }

        .flow-visual__progress-fill {
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-emerald));
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 992px) {
          .flow-sec__content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .flow-visual {
            position: relative;
            top: 0;
          }
        }
      `}</style>
    </section>
  );
};
