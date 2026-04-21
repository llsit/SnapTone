'use client';

import { Category } from '@/lib/types';
import styles from './CategoryFilter.module.css';

interface CategoryFilterProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categories: Category[] = ['All', 'Cafe', 'Moody', 'Film', 'Travel'];

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterList}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.pill} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
