'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      className={styles.container} 
      ref={containerRef}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      <div className={styles.afterImage}>
        <Image src={afterImage} alt="After" fill priority />
      </div>
      
      <div className={styles.beforeImage} style={{ width: `${sliderPosition}%` }}>
        <Image src={beforeImage} alt="Before" fill priority />
      </div>

      <div className={styles.sliderLine} style={{ left: `${sliderPosition}%` }}>
        <div className={styles.sliderButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>

      <div className={styles.labels}>
        <span className={styles.afterLabel}>AFTER</span>
        <span className={styles.beforeLabel}>BEFORE</span>
      </div>
    </div>
  );
}
