export type SystemCategory = 'all' | 'physics' | 'compiler' | 'deeptech';

export interface BenchmarkMetric {
  metric: string;
  value: string;
  baseline: string;
}

export interface SystemPill {
  text: string;
  highlight?: boolean;
}

export interface SystemProject {
  id: string;
  title: string;
  domain: string;
  domainBadgeClass: 'cyan' | 'emerald' | 'lavender' | 'amber';
  tag: string;
  subtitle: string;
  category: 'physics' | 'compiler' | 'deeptech';
  status: string;
  description: string;
  pills: SystemPill[];
  moduleTag: string;
  problem: string;
  tradeoffs: string;
  diagram: string;
  benchmarks: BenchmarkMetric[];
  specs: Record<string, string>;
  colSpan?: 'single' | 'half' | 'full';
}

export interface OpenSourceProject {
  id: string;
  name: string;
  description: string;
  githubUrl: string;
  stars?: string;
  badge: string;
  tags: string[];
}

export interface CapabilityItem {
  label: string;
  detail: string;
}

export interface CapabilityCategory {
  num: string;
  title: string;
  items: CapabilityItem[];
  fullWidth?: boolean;
}
