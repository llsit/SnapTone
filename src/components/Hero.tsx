import BeforeAfterSlider from './BeforeAfterSlider';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.overlay} container`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Transform Your Photos <br />
            <span className="text-gradient">Instantly</span>
          </h1>
          <p className={styles.subtitle}>
            Professional cinematic presets in one click. Designed for creators, travelers, and lifestyle photographers.
          </p>
          <div className={styles.actions}>
            <a href="#explore" className="btn-primary">
              Get Free Preset
            </a>
            <a href="#how" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>

        <div className={styles.previewWrapper}>
          <BeforeAfterSlider
            beforeImage="/images/presets/portra-400-before.jpg"
            afterImage="/images/presets/portra-400-after.jpg"
          />
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.mesh}></div>
      </div>
    </section>
  );
}
