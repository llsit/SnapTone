import Navbar from '@/components/Navbar';
import PresetGrid from '@/components/PresetGrid';
import styles from './Landing.module.css';

export const metadata = {
  title: 'Free Cafe Lightroom Presets | SnapTone',
  description: 'Download the best free Lightroom presets for cafe and lifestyle photography. Transform your coffee shop shots instantly.',
};

export default function CafeLanding() {
  return (
    <main>
      <Navbar />
      
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            Free <span className="text-gradient">Cafe</span> Lightroom Presets
          </h1>
          <p className={styles.subtitle}>
            The ultimate collection for coffee lovers and lifestyle creators.
          </p>
        </div>
      </header>

      <PresetGrid initialCategory="Cafe" />
      
      <footer className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)' }}>&copy; 2024 SnapTone. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
