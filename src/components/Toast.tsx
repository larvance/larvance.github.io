import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-surface-2 border border-border-active shadow-2xl backdrop-blur-md text-text-primary text-xs font-mono transition-all duration-200 animate-in fade-in slide-in-from-bottom-2"
    >
      <div className="flex items-center justify-center w-4 h-4 rounded-full bg-accent-emerald/20 text-accent-emerald">
        <Check className="w-3 h-3" />
      </div>
      <span>{message}</span>
    </div>
  );
};
