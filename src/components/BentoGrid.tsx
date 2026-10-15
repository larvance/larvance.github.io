import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { SystemProject, SystemCategory } from '../types';
import { ProjectCard } from './ProjectCard';

interface BentoGridProps {
  systems: SystemProject[];
  onInspect: (project: SystemProject) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ systems, onInspect }) => {
  const [selectedCategory, setSelectedCategory] = useState<SystemCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener ('/' or Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) &&
        document.activeElement !== searchInputRef.current
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape' && document.activeElement === searchInputRef.current) {
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredSystems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return systems.filter((sys) => {
      const matchesCategory =
        selectedCategory === 'all' || sys.category === selectedCategory;

      if (!matchesCategory) return false;
      if (!q) return true;

      const searchableText = `${sys.title} ${sys.domain} ${sys.subtitle} ${sys.description} ${sys.pills
        .map((p) => p.text)
        .join(' ')} ${sys.moduleTag}`.toLowerCase();

      return searchableText.includes(q);
    });
  }, [systems, selectedCategory, searchQuery]);

  return (
    <section id="systems" className="py-20 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono text-accent-primary tracking-wider uppercase mb-2">
              CORE INFRASTRUCTURE
            </div>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-text-primary">
              Flagship Systems Architecture
            </h2>
          </div>
          <p className="text-sm text-text-secondary max-w-xl leading-relaxed">
            Proprietary and core open systems engineered for maximum throughput, sub-microsecond latency, and mathematical precision across simulation, avionics, compilers, and hardware emulation.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-surface-1 border border-border-subtle">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-surface-3 text-text-primary border border-border-active shadow-sm'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              All Systems ({systems.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('physics')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedCategory === 'physics'
                  ? 'bg-surface-3 text-text-primary border border-border-active shadow-sm'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Physics &amp; Avionics
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('compiler')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedCategory === 'compiler'
                  ? 'bg-surface-3 text-text-primary border border-border-active shadow-sm'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Compilers &amp; Silicon EDA
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('deeptech')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors ${
                selectedCategory === 'deeptech'
                  ? 'bg-surface-3 text-text-primary border border-border-active shadow-sm'
                  : 'text-text-muted hover:text-text-secondary'
              }`}
            >
              Deep Tech &amp; DSP
            </button>
          </div>

          {/* Instant Search Bar */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter architecture, tech, or metrics..."
              className="w-full pl-9 pr-8 py-2 rounded-lg bg-surface-1 border border-border-subtle focus:border-border-accent focus:outline-none text-xs text-text-primary placeholder:text-text-muted transition-colors font-mono"
            />
            <kbd className="hidden sm:inline-block absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-surface-2 border border-border-subtle text-[10px] font-mono text-text-muted">
              /
            </kbd>
          </div>
        </div>

        {/* Bento Grid */}
        {filteredSystems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSystems.map((sys) => (
              <ProjectCard
                key={sys.id}
                project={sys}
                onInspect={onInspect}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-dashed border-border-subtle rounded-xl">
            <p className="text-sm font-mono text-text-muted">
              No architectural systems matched &quot;{searchQuery}&quot;.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
