import { presets } from '@/data/presets';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import DownloadButton from '@/components/DownloadButton';
import RelatedPresets from '@/components/RelatedPresets';
import styles from './page.module.css';

export function generateStaticParams() {
  return presets.map((preset) => ({
    id: preset.id,
  }));
}

export default function PresetDetail({ params }: { params: { id: string } }) {
  const preset = presets.find((p) => p.id === params.id);

  if (!preset) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      
      <div className={`${styles.detailLayout} container section-padding`}>
        <div className={styles.visuals}>
          <BeforeAfterSlider 
            beforeImage={preset.beforeImage} 
            afterImage={preset.afterImage} 
          />
        </div>
        
        <div className={styles.content}>
          <div className={styles.header}>
            <span className={styles.category}>{preset.category}</span>
            <h1 className={styles.name}>{preset.name}</h1>
          </div>
          
          <p className={styles.description}>{preset.description}</p>
          
          <div className={styles.tags}>
            {preset.tags.map(tag => (
              <span key={tag} className={styles.tag}>#{tag}</span>
            ))}
          </div>

          <div className={styles.ctaWrapper}>
            <DownloadButton 
              fileUrl={preset.fileUrl} 
              presetName={preset.name} 
            />
            <p className={styles.fineprint}>
              Free download • Compatible with Lightroom Mobile & Desktop (.xmp/.dng)
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <RelatedPresets currentId={preset.id} category={preset.category} />
      </div>

      <footer className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)' }}>&copy; 2024 SnapTone. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
