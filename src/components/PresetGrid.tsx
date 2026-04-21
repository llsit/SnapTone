'use client';

import { useState } from 'react';
import { presets } from '@/data/presets';
import { Category } from '@/lib/types';
import PresetCard from './PresetCard';
import CategoryFilter from './CategoryFilter';
import styles from './PresetGrid.module.css';

interface PresetGridProps {
  initialCategory?: Category;
}

export default function PresetGrid({ initialCategory = 'All' }: PresetGridProps) {
  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);

  const filteredPresets = activeCategory === 'All'
    ? presets
    : presets.filter(p => p.category === activeCategory);

  return (
    <section id="explore" className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Explore <span className="text-gradient">Presets</span></h2>
          <p className={styles.subtitle}>Hand-picked, high-quality transformations for every style.</p>
        </div>

        <CategoryFilter 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        <div className={styles.grid}>
          {filteredPresets.map((preset) => (
            <PresetCard key={preset.id} preset={preset} />
          ))}
        </div>

        {filteredPresets.length === 0 && (
          <div className={styles.noResults}>
            <p>No presets found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
