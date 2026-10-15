/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#08090a',
        'surface-1': '#0f1012',
        'surface-2': '#15171a',
        'surface-3': '#1c1e22',
        'surface-4': '#22252b',
        'border-subtle': 'rgba(255, 255, 255, 0.07)',
        'border-active': 'rgba(255, 255, 255, 0.16)',
        'border-accent': 'rgba(94, 106, 210, 0.35)',
        'accent-primary': '#5e6ad2',
        'accent-cyan': '#38bdf8',
        'accent-emerald': '#10b981',
        'accent-amber': '#f59e0b',
        'text-primary': '#f7f8f8',
        'text-secondary': '#a1a1aa',
        'text-muted': '#71717a',
        'text-dim': '#3f3f46',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        tighter: '-0.025em',
      },
      transitionTimingFunction: {
        snappy: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
