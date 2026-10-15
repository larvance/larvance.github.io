import React from 'react';
import { ArrowRight, Mail, Github, ExternalLink } from 'lucide-react';
import { useSpotlight } from '../hooks/useSpotlight';

interface HeroProps {
  onCopyEmail: (email: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail }) => {
  const spotlight = useSpotlight();
  const email = 'contact@larvance.com';

  const pillars = [
    {
      title: 'Aerovex Chronos',
      role: 'Parallel Simulation Kernel',
      metric: '8.65M ticks / s',
      description: '128 lockstep parallel worlds with Rayon work-stealing, Baumgarte constraints, and POSIX SHM Seqlock.',
      badgeClass: 'text-accent-cyan border-accent-cyan/20 bg-accent-cyan/10',
    },
    {
      title: 'Aerovex Kestrel',
      role: 'Hard Real-Time Avionics',
      metric: '8 kHz 24-State EKF',
      description: 'Bare-metal embedded flight control firmware in #![no_std] Rust for STM32H7 with zero dynamic heap allocations.',
      badgeClass: 'text-accent-emerald border-accent-emerald/20 bg-accent-emerald/10',
    },
    {
      title: 'Vexel Language',
      role: 'Systems Compiler Core',
      metric: 'LLVM 18 Toolchain',
      description: 'Statically-typed systems programming language with non-lexical lifetimes borrow checker and WASM/native codegen.',
      badgeClass: 'text-accent-primary border-accent-primary/20 bg-accent-primary/10',
    },
    {
      title: 'Aerovex Axiom',
      role: 'In-RAM HDL Simulator',
      metric: '2.81 ms JIT Compile',
      description: 'Cycle-accurate Verilog/SystemVerilog 4-state logic simulation engine powered by Cranelift native JIT compilation.',
      badgeClass: 'text-accent-amber border-accent-amber/20 bg-accent-amber/10',
    },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent-primary/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-1 border border-border-subtle text-xs font-mono text-text-muted mb-6">
            <span className="text-accent-primary font-bold">//</span>
            <span>ELECTRICAL &amp; ELECTRONICS ENGINEER &bull; SYSTEMS ARCHITECT</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tightest text-text-primary leading-[1.12] mb-6">
            Engineering flight-critical autonomous systems, real-time edge kernels, and compiler architectures.
          </h1>

          {/* Lead */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mb-8">
            Founder and Lead Systems Architect at <strong className="text-text-primary font-semibold">Aerovex</strong>. Architecting sovereign robotics infrastructure across hard real-time flight firmware, parallel multi-world simulation kernels, systems programming languages, and in-RAM silicon EDA.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-16">
            <a
              href="#systems"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-text-primary text-canvas font-medium text-sm hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.2)] btn-snappy"
            >
              <span>Explore Flagship Systems</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => onCopyEmail(email)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-1 hover:bg-surface-2 border border-border-subtle hover:border-border-active text-text-primary text-sm font-mono btn-snappy"
              title="Copy email to clipboard"
            >
              <Mail className="w-4 h-4 text-text-secondary" />
              <span>{email}</span>
            </button>

            <a
              href="https://github.com/larvance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-1 hover:bg-surface-2 border border-border-subtle hover:border-border-active text-text-secondary hover:text-text-primary text-sm btn-snappy"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-text-muted" />
            </a>
          </div>
        </div>

        {/* Aerovex Flagship Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              onMouseMove={spotlight.onMouseMove}
              onMouseLeave={spotlight.onMouseLeave}
              className="spotlight-card rounded-xl p-5 border border-border-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${pillar.badgeClass}`}>
                    {pillar.metric}
                  </span>
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-text-primary mb-0.5">
                  {pillar.title}
                </h3>
                <p className="text-[11px] font-mono text-accent-primary mb-2.5">
                  {pillar.role}
                </p>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
