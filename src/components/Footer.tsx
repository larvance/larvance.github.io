import React from 'react';
import { Mail, Github, ArrowUp, Copy } from 'lucide-react';

interface FooterProps {
  onCopyEmail: (email: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onCopyEmail }) => {
  const email = 'contact@larvance.com';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-border-subtle bg-canvas pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-border-subtle">
          {/* Identity & Scope */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/assets/avatar.png"
                alt="larvance"
                className="w-6 h-6 rounded-full border border-border-active object-cover"
              />
              <span className="font-semibold text-base tracking-tight text-text-primary">
                larvance
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm mb-4">
              Architecting high-throughput parallel simulation kernels, hard real-time flight firmware, compiler backends, and hardware-accelerated deep learning.
            </p>
            <div className="text-[11px] font-mono text-text-muted">
              Location: Remote / Global Deep Tech
            </div>
          </div>

          {/* Contact Direct */}
          <div>
            <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
              // DIRECT INQUIRIES
            </div>
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => onCopyEmail(email)}
                className="group flex items-center gap-2.5 text-xs font-mono text-text-secondary hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-accent-primary" />
                <span>{email}</span>
                <Copy className="w-3 h-3 text-text-muted group-hover:text-white transition-colors" />
              </button>
              <a
                href="https://github.com/larvance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs font-mono text-text-secondary hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-text-muted" />
                <span>github.com/larvance</span>
              </a>
            </div>
          </div>

          {/* Philosophy / Standards */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">
                // SYSTEM MANDATE
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Deterministic execution, zero runtime allocations in hot loops, and mathematical rigor across all layers of the stack.
              </p>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-text-primary transition-colors"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-text-muted">
          <div>
            &copy; {new Date().getFullYear()} larvance. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-text-muted">
            <span>larvance.com</span>
            <span>&bull;</span>
            <span>Systems &amp; Robotics Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
