import Navbar from '@/components/Navbar';
import PresetGrid from '@/components/PresetGrid';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import DownloadButton from '@/components/DownloadButton';
import RelatedPresets from '@/components/RelatedPresets';
import StickyCTA from '@/components/StickyCTA';
import { fetchPresets } from '@/lib/api';
import styles from './LandingMoody.module.css';

export const metadata = {
  title: 'Moody & Film Lightroom Presets | SnapTone',
  description: 'Turn your photos into cinematic moody film instantly. Download the best free Lightroom presets for a professional look.',
};

export default async function MoodyLanding() {
  const presets = await fetchPresets();
  const moodyPresets = presets.filter(p => p.category === 'Moody' || p.category === 'Film');
  const featuredPreset = moodyPresets[0] || presets[0];

  return (
    <main style={{ backgroundColor: '#0a0a0a', color: '#fff' }}>
      <Navbar />
      
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            Turn Your Photos Into <br />
            <span className="text-gradient">Cinematic Moody Film 🎬</span>
          </h1>
          <p className={styles.subtitle}>
            Professional-grade presets designed for creators who want that deep, atmospheric aesthetic instantly.
          </p>

          <div className={styles.sliderWrapper}>
            <BeforeAfterSlider 
              beforeImage={featuredPreset.beforeImage} 
              afterImage={featuredPreset.afterImage} 
            />
          </div>

          <div className={styles.heroCTA}>
            <DownloadButton 
              presetId={featuredPreset.id}
              fileUrl={featuredPreset.fileUrl}
              presetName={featuredPreset.name}
              text="Download Free Preset"
              dataAttr="data-hero-download"
            />
            <div className={styles.socialProof}>
              <span className={styles.proofItem}>🔥 10,000+ downloads</span>
              <span className={styles.proofItem}>⭐ 4.8 average rating</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.testimonialSection}>
        <div className="container">
          <p className={styles.testimonialText}>
            "This preset made my photos look professional instantly. The moody tones are exactly what I was looking for!"
          </p>
          <p className={styles.testimonialAuthor}>— TikTok Creator @AestheticVibes</p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
            Browse <span className="text-gradient">Moody</span> Collection
          </h2>
          <PresetGrid presets={presets} initialCategory="Moody" />
        </div>
      </div>

      <div className="container section-padding">
        <RelatedPresets presets={presets} currentId={featuredPreset.id} category="Film" />
      </div>

      <StickyCTA />
      
      <footer className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)' }}>&copy; 2024 SnapTone. All rights reserved.</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.5 }}>v0.1.0</p>
        </div>
      </footer>
    </main>
  );
}
