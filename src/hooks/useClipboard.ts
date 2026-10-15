import { useState, useCallback, useRef } from 'react';

export function useClipboard(timeout = 2400) {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const timerRef = useRef<number | null>(null);

  const copy = useCallback((text: string) => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedText(text);
      }).catch(() => {
        fallbackCopy(text);
        setCopiedText(text);
      });
    } else {
      fallbackCopy(text);
      setCopiedText(text);
    }

    timerRef.current = window.setTimeout(() => {
      setCopiedText(null);
      timerRef.current = null;
    }, timeout);
  }, [timeout]);

  const reset = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }
    setCopiedText(null);
  }, []);

  return { copiedText, copy, reset };
}

function fallbackCopy(text: string) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  tempInput.style.position = 'fixed';
  tempInput.style.opacity = '0';
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
  } catch {
    // Ignore fallback errors
  }
  document.body.removeChild(tempInput);
}
