import React, { useState } from 'react';
import { Mail, Github, Menu, X } from 'lucide-react';

interface NavbarProps {
  onCopyEmail: (email: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCopyEmail }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const email = 'contact@larvance.com';

  const handleCopy = () => {
    onCopyEmail(email);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-canvas/80 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2.5 group" aria-label="larvance home">
            <img
              src="/assets/avatar-circle.png?v=7"
              alt="larvance"
              className="w-7 h-7 rounded-full border border-border-active object-cover group-hover:border-accent-primary transition-colors"
            />
            <span className="font-semibold text-sm tracking-tight text-text-primary group-hover:text-accent-primary transition-colors">
              larvance
            </span>
          </a>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-6 text-xs text-text-secondary">
          <a href="#systems" className="hover:text-text-primary transition-colors">
            Flagship Systems
          </a>
          <a href="#open-source" className="hover:text-text-primary transition-colors">
            Open Source
          </a>
          <a href="#capabilities" className="hover:text-text-primary transition-colors">
            Capabilities
          </a>
          <a href="#contact" className="hover:text-text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-1 hover:bg-surface-2 border border-border-subtle hover:border-border-active text-xs text-text-primary btn-snappy"
            title="Copy email: contact@larvance.com"
          >
            <Mail className="w-3.5 h-3.5 text-text-secondary" />
            <span className="font-mono text-[11px]">Email</span>
          </button>

          <a
            href="https://github.com/larvance"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md bg-surface-1 hover:bg-surface-2 border border-border-subtle hover:border-border-active text-text-secondary hover:text-text-primary btn-snappy"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-md bg-surface-1 text-text-secondary hover:text-text-primary border border-border-subtle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-1 border-b border-border-subtle px-4 pt-2 pb-4 space-y-2">
          <a
            href="#systems"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-text-secondary hover:text-text-primary"
          >
            Flagship Systems
          </a>
          <a
            href="#open-source"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-text-secondary hover:text-text-primary"
          >
            Open Source
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-text-secondary hover:text-text-primary"
          >
            Capabilities
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm text-text-secondary hover:text-text-primary"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
