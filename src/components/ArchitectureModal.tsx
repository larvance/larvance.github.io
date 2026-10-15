import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { SystemProject } from '../types';

interface ArchitectureModalProps {
  project: SystemProject | null;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({ project, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    // Prevent body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button
    closeButtonRef.current?.focus();

    // Escape key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const badgeColorClass = {
    cyan: 'text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20',
    emerald: 'text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20',
    lavender: 'text-accent-primary bg-accent-primary/10 border-accent-primary/20',
    amber: 'text-accent-amber bg-accent-amber/10 border-accent-amber/20',
  }[project.domainBadgeClass];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div
        ref={modalContainerRef}
        className="relative w-full max-w-3xl max-h-[90vh] bg-surface-1 border border-border-active rounded-xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-border-subtle bg-surface-2/40">
          <div className="flex items-center justify-between gap-4 mb-2">
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${badgeColorClass}`}>
                {project.domain}
              </span>
              <span className="text-[11px] font-mono text-text-muted">
                {project.tag}
              </span>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-md text-text-muted hover:text-text-primary hover:bg-surface-3 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <h3 id="modal-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-text-muted mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-7 overflow-y-auto">
          {/* Section 1: Problem */}
          <div>
            <h4 className="text-xs font-mono text-accent-primary uppercase tracking-wider mb-2">
              // 01. Problem &amp; Architectural Motivation
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Section 2: Trade-offs */}
          <div>
            <h4 className="text-xs font-mono text-accent-primary uppercase tracking-wider mb-2">
              // 02. Architectural Design &amp; Key Trade-Offs
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.tradeoffs}
            </p>
          </div>

          {/* Section 3: Subsystem Flow Diagram */}
          <div>
            <h4 className="text-xs font-mono text-accent-primary uppercase tracking-wider mb-2">
              // 03. Execution Pipeline &amp; Subsystem Flow
            </h4>
            <pre className="p-4 rounded-lg bg-surface-2 border border-border-subtle font-mono text-xs text-text-secondary overflow-x-auto leading-relaxed">
              {project.diagram}
            </pre>
          </div>

          {/* Section 4: Benchmarks */}
          <div>
            <h4 className="text-xs font-mono text-accent-primary uppercase tracking-wider mb-3">
              // 04. Measured Performance Benchmarks
            </h4>
            <div className="rounded-lg border border-border-subtle overflow-hidden">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-surface-2 border-b border-border-subtle text-text-muted">
                  <tr>
                    <th className="py-2.5 px-3 font-medium">Benchmark Metric</th>
                    <th className="py-2.5 px-3 font-medium">Measured Throughput / Latency</th>
                    <th className="py-2.5 px-3 font-medium">Baseline Configuration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle">
                  {project.benchmarks.map((b, idx) => (
                    <tr key={idx} className="hover:bg-surface-2/40 transition-colors">
                      <td className="py-2.5 px-3 text-text-secondary">{b.metric}</td>
                      <td className="py-2.5 px-3 font-semibold text-text-primary">{b.value}</td>
                      <td className="py-2.5 px-3 text-text-muted">{b.baseline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 5: Technical Spec Sheet */}
          <div>
            <h4 className="text-xs font-mono text-accent-primary uppercase tracking-wider mb-3">
              // 05. Technical Specification Sheet
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {Object.entries(project.specs).map(([key, val], idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-surface-2/60 border border-border-subtle flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono text-text-muted">{key}</span>
                  <span className="text-xs font-mono text-text-primary font-medium mt-1">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-border-subtle bg-surface-2/30 flex items-center justify-between text-xs font-mono text-text-muted">
          <span>{project.moduleTag}</span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-md bg-surface-2 hover:bg-surface-3 text-text-primary border border-border-subtle transition-colors"
          >
            Close Specification [Esc]
          </button>
        </div>
      </div>
    </div>
  );
};
