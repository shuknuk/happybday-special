import { useEffect } from 'react';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onerror = function(message, source, lineno, colno, error) {
        if (error && error.message && error.message.includes('TimelineMax')) {
          // Suppress this error
          return true;
        }
        return false;
      };
    }
  }, []);

  return <Component {...pageProps} />;
}
