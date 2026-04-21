import Navbar from '@/components/Navbar';
import PresetGrid from '@/components/PresetGrid';
import { fetchPresets } from '@/lib/api';
import styles from '../cafe-presets-free/Landing.module.css'; // Reusing styles

export const metadata = {
  title: 'Moody & Film Lightroom Presets | SnapTone',
  description: 'Elevate your photos with cinematic moody and film-look presets. Download free premium Lightroom presets.',
};

export default async function MoodyLanding() {
  const presets = await fetchPresets();

  return (
    <main>
      <Navbar />
      
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            Premium <span className="text-gradient">Moody & Film</span> Presets
          </h1>
          <p className={styles.subtitle}>
            Cinematic grain and deep shadows for professional-grade editing.
          </p>
        </div>
      </header>

      <PresetGrid presets={presets} initialCategory="Moody" />
      
      <footer className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)' }}>&copy; 2024 SnapTone. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
