'use client';

import { useState } from 'react';
import styles from './DownloadButton.module.css';

interface DownloadButtonProps {
  fileUrl: string;
  presetName: string;
}

export default function DownloadButton({ fileUrl, presetName }: DownloadButtonProps) {
  const [status, setStatus] = useState<'idle' | 'downloading' | 'done'>('idle');

  const handleDownload = () => {
    setStatus('downloading');
    
    // Simulate download delay
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = `${presetName.toLowerCase().replace(/\s+/g, '-')}.xmp`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setStatus('done');
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <button 
      className={`${styles.button} ${status !== 'idle' ? styles[status] : ''}`}
      onClick={handleDownload}
      disabled={status === 'downloading'}
    >
      <span className={styles.icon}>
        {status === 'idle' && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        )}
        {status === 'downloading' && <span className={styles.spinner}></span>}
        {status === 'done' && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </span>
      <span className={styles.text}>
        {status === 'idle' && 'Download Free'}
        {status === 'downloading' && 'Preparing File...'}
        {status === 'done' && 'Downloaded! ✓'}
      </span>
    </button>
  );
}
