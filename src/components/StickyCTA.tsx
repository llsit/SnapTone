'use client';

import { useState, useEffect } from 'react';
import styles from './StickyCTA.module.css';

interface StickyCTAProps {
  // Removed onDownload to avoid serialization error in Server Components
}

export default function StickyCTA({}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleDownload = () => {
    // Trigger the hero download button via a custom event or direct selector
    const btn = document.querySelector('[data-hero-download]') as HTMLButtonElement;
    if (btn) btn.click();
  };

  useEffect(() => {
    const toggleVisibility = () => {
      // Show when scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.stickyWrapper}>
      <button className={styles.stickyButton} onClick={handleDownload}>
        Download Free Preset
      </button>
    </div>
  );
}
