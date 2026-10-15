import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { OpenSource } from './components/OpenSource';
import { CapabilityMatrix } from './components/CapabilityMatrix';
import { Footer } from './components/Footer';
import { ArchitectureModal } from './components/ArchitectureModal';
import { Toast } from './components/Toast';
import { FLAGSHIP_SYSTEMS } from './data/systems';
import { OPEN_SOURCE_PROJECTS } from './data/openSource';
import { CAPABILITY_CATEGORIES } from './data/capabilities';
import { SystemProject } from './types';
import { useClipboard } from './hooks/useClipboard';

export const App: React.FC = () => {
  const [inspectingProject, setInspectingProject] = useState<SystemProject | null>(null);
  const { copiedText, copy } = useClipboard();

  // Handle deep-linking via query parameter or URL hash
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const inspectParam = params.get('inspect') || params.get('system');
      const hash = window.location.hash.replace('#', '');

      const targetId = inspectParam || hash;
      if (targetId) {
        const found = FLAGSHIP_SYSTEMS.find(
          (s) => s.id.toLowerCase() === targetId.toLowerCase()
        );
        if (found) {
          setInspectingProject(found);
        }
      }
    } catch {
      // Ignore URL parsing errors
    }
  }, []);

  const handleInspect = useCallback((project: SystemProject) => {
    setInspectingProject(project);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('inspect', project.id);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Ignore history state errors
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    setInspectingProject(null);
    try {
      const url = new URL(window.location.href);
      url.searchParams.delete('inspect');
      url.searchParams.delete('system');
      window.history.replaceState({}, '', url.pathname);
    } catch {
      // Ignore history state errors
    }
  }, []);

  const handleCopyEmail = useCallback(
    (email: string) => {
      copy(email);
    },
    [copy]
  );

  return (
    <div className="min-h-screen bg-canvas text-text-primary selection:bg-accent-primary/30 selection:text-white">
      {/* Navigation Header */}
      <Navbar onCopyEmail={handleCopyEmail} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero onCopyEmail={handleCopyEmail} />

        {/* Flagship Systems Bento Grid */}
        <BentoGrid systems={FLAGSHIP_SYSTEMS} onInspect={handleInspect} />

        {/* Public Open Source Repositories */}
        <OpenSource projects={OPEN_SOURCE_PROJECTS} />

        {/* Systems Capability Matrix */}
        <CapabilityMatrix categories={CAPABILITY_CATEGORIES} />
      </main>

      {/* Footer */}
      <Footer onCopyEmail={handleCopyEmail} />

      {/* Architecture Deep-Dive Modal */}
      <ArchitectureModal project={inspectingProject} onClose={handleCloseModal} />

      {/* Floating Micro-Toast for Clipboard Feedback */}
      <Toast message={copiedText ? `Copied ${copiedText} to clipboard` : null} />
    </div>
  );
};

export default App;
