import React from 'react';
import { ExternalLink, Star, Code2 } from 'lucide-react';
import { OpenSourceProject } from '../types';
import { useSpotlight } from '../hooks/useSpotlight';

interface OpenSourceProps {
  projects: OpenSourceProject[];
}

const OpenSourceCard: React.FC<{ project: OpenSourceProject }> = ({ project }) => {
  const spotlight = useSpotlight();

  return (
    <div
      onMouseMove={spotlight.onMouseMove}
      onMouseLeave={spotlight.onMouseLeave}
      className="spotlight-card rounded-xl p-6 sm:p-7 flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20">
            {project.badge}
          </span>
          {project.stars && (
            <div className="flex items-center gap-1.5 text-xs font-mono text-accent-amber">
              <Star className="w-3.5 h-3.5 fill-accent-amber/20" />
              <span>{project.stars}</span>
            </div>
          )}
        </div>

        <h3 className="text-lg font-semibold text-text-primary group-hover:text-white transition-colors mb-2 flex items-center gap-2">
          <Code2 className="w-4 h-4 text-text-muted group-hover:text-accent-primary transition-colors" />
          <span>{project.name}</span>
        </h3>

        <p className="text-xs text-text-secondary leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2 text-text-muted border border-border-subtle"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-accent-primary hover:text-white transition-colors"
        >
          <span>github.com/{project.name}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export const OpenSource: React.FC<OpenSourceProps> = ({ projects }) => {
  return (
    <section id="open-source" className="py-20 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">
            // PUBLIC REPOSITORIES
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
            Verified Open Source Track Record
          </h2>
          <p className="text-sm text-text-secondary mt-2">
            Independent, battle-tested utilities, compiler plugins, and zero-overhead native libraries released to the developer community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project) => (
            <OpenSourceCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
