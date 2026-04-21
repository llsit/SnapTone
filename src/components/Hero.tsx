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
            Discover high-quality Lightroom presets for creators, travelers, and lifestyle photographers. 1-click magic for your best shots.
          </p>
          <div className={styles.actions}>
            <a href="#explore" className="btn-primary">
              Browse Presets
            </a>
            <a href="#how" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.mesh}></div>
      </div>
    </section>
  );
}
