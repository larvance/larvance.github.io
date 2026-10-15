import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SystemProject } from '../types';
import { useSpotlight } from '../hooks/useSpotlight';

interface ProjectCardProps {
  project: SystemProject;
  onInspect: (project: SystemProject) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onInspect }) => {
  const spotlight = useSpotlight();

  const badgeColorClass = {
    cyan: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20',
    emerald: 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20',
    lavender: 'text-accent-primary bg-accent-primary/10 border-accent-primary/20',
    amber: 'text-accent-amber bg-accent-amber/10 border-accent-amber/20',
  }[project.domainBadgeClass];

  const colSpanClass = {
    single: 'col-span-1',
    half: 'col-span-1',
    full: 'col-span-1 md:col-span-2',
  }[project.colSpan || 'half'];

  return (
    <article
      onMouseMove={spotlight.onMouseMove}
      onMouseLeave={spotlight.onMouseLeave}
      className={`spotlight-card rounded-xl p-6 sm:p-7 flex flex-col justify-between ${colSpanClass} group`}
    >
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <span
            className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${badgeColorClass}`}
          >
            {project.domain}
          </span>
          <span className="text-[11px] font-mono text-text-muted truncate">
            {project.status}
          </span>
        </div>

        {/* Card Title & Subtitle */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-text-primary group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-text-muted mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Special full layout for featured engines or standard layout */}
        {project.colSpan === 'full' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-4">
            <div className="lg:col-span-7">
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.pills.map((pill, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
                      pill.highlight
                        ? 'bg-accent-primary/15 border-accent-primary/40 text-text-primary'
                        : 'bg-surface-2 border-border-subtle text-text-secondary'
                    }`}
                  >
                    {pill.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Micro schematic panel */}
            <div className="lg:col-span-5 bg-surface-2/60 border border-border-subtle rounded-lg p-4 font-mono text-[11px] text-text-muted flex flex-col justify-center space-y-2">
              {project.id === 'kortex' && (
                <>
                  <div className="text-accent-primary font-semibold">// DUST ZEROTH-ORDER VIRTUAL POPULATION</div>
                  <div className="text-text-secondary">[Forward Pass] ---&gt; [Virtual Population Sampling]</div>
                  <div>Autograd Tape Overhead: <span className="text-text-primary">0 bytes (Forward-only)</span></div>
                  <div>Attention Sink Context: <span className="text-text-primary">Bounded O(1) Streaming</span></div>
                </>
              )}
              {project.id === 'phonon' && (
                <>
                  <div className="text-accent-amber font-semibold">// COUPLED ELECTRO-THERMAL TCAD ENGINE</div>
                  <div className="text-text-secondary">[Modified Nodal Analysis] ---&gt; [Adaptive Timestep Solver]</div>
                  <div>Dynamic Realism: <span className="text-text-primary">6 Tiers (1D/2D TCAD to Cryo-CMOS)</span></div>
                  <div>Thermal Co-Sim: <span className="text-text-primary">Coupled Jacobian to Chronos Daemon</span></div>
                </>
              )}
              {project.id !== 'kortex' && project.id !== 'phonon' && (
                <>
                  <div className="text-accent-primary font-semibold">// {project.title.toUpperCase()} ARCHITECTURE</div>
                  <div className="text-text-secondary">{project.subtitle}</div>
                  <div>Status: <span className="text-text-primary">{project.status}</span></div>
                  <div>Target: <span className="text-text-primary">{project.moduleTag}</span></div>
                </>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Description */}
            <p className="text-sm text-text-secondary leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.pills.map((pill, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-mono px-2.5 py-1 rounded-md border ${
                    pill.highlight
                      ? 'bg-accent-primary/15 border-accent-primary/40 text-text-primary'
                      : 'bg-surface-2 border-border-subtle text-text-secondary'
                  }`}
                >
                  {pill.text}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-border-subtle flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => onInspect(project)}
          className="inline-flex items-center gap-2 text-xs font-medium text-text-primary hover:text-accent-primary group/btn btn-snappy"
        >
          <span>Inspect Architecture</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>

        <span className="text-[11px] font-mono text-text-muted">
          {project.moduleTag}
        </span>
      </div>
    </article>
  );
};
