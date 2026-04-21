import { presets } from '@/data/presets';
import PresetCard from './PresetCard';
import styles from './RelatedPresets.module.css';

interface RelatedPresetsProps {
  currentId: string;
  category: string;
}

export default function RelatedPresets({ currentId, category }: RelatedPresetsProps) {
  const related = presets
    .filter(p => p.category === category && p.id !== currentId)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Related <span className="text-gradient">Presets</span></h3>
      <div className={styles.grid}>
        {related.map(preset => (
          <PresetCard key={preset.id} preset={preset} />
        ))}
      </div>
    </section>
  );
}
