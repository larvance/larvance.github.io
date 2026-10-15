import React from 'react';
import { CapabilityCategory } from '../types';
import { useSpotlight } from '../hooks/useSpotlight';

interface CapabilityMatrixProps {
  categories: CapabilityCategory[];
}

const CapabilityCard: React.FC<{ category: CapabilityCategory }> = ({ category }) => {
  const spotlight = useSpotlight();

  const colSpanClass = category.fullWidth
    ? 'col-span-1 lg:col-span-2'
    : 'col-span-1';

  return (
    <div
      onMouseMove={spotlight.onMouseMove}
      onMouseLeave={spotlight.onMouseLeave}
      className={`spotlight-card rounded-xl p-6 sm:p-7 flex flex-col justify-between ${colSpanClass}`}
    >
      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface-2 text-accent-primary border border-border-subtle font-semibold">
            {category.num}
          </span>
          <h3 className="text-lg font-semibold tracking-tight text-text-primary">
            {category.title}
          </h3>
        </div>

        <ul className="space-y-3.5">
          {category.items.map((item, idx) => (
            <li key={idx} className="text-xs leading-relaxed flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/60 mt-1.5 shrink-0" />
              <div>
                <strong className="text-text-primary font-medium">{item.label}: </strong>
                <span className="text-text-secondary">{item.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const CapabilityMatrix: React.FC<CapabilityMatrixProps> = ({ categories }) => {
  return (
    <section id="capabilities" className="py-20 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-accent-primary uppercase tracking-wider mb-2">
            // TECHNICAL COMPETENCIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
            Architectural Capability Matrix
          </h2>
          <p className="text-sm text-text-secondary mt-2">
            Hard-core engineering domains spanning embedded microkernels, flight navigation filters, compiler IR passes, physical simulation, and deep learning runtimes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {categories.map((category) => (
            <CapabilityCard key={category.num} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
