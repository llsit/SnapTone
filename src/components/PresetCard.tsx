'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Preset } from '@/lib/types';
import styles from './PresetCard.module.css';

interface PresetCardProps {
  preset: Preset;
}

export default function PresetCard({ preset }: PresetCardProps) {
  return (
    <Link href={`/preset/${preset.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={preset.afterImage}
          alt={`${preset.name} After`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.afterImage}
        />
        <Image
          src={preset.beforeImage}
          alt={`${preset.name} Before`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.beforeImage}
        />
        <div className={styles.badge}>{preset.category}</div>
        <div className={styles.indicator}>Hover to see before</div>
      </div>
      
      <div className={styles.info}>
        <h3 className={styles.name}>{preset.name}</h3>
        <div className={styles.footer}>
          <span className={styles.downloads}>{preset.downloads.toLocaleString()} downloads</span>
          <span className={styles.cta}>View Details →</span>
        </div>
      </div>
    </Link>
  );
}
