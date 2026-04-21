import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo}>
          Snap<span className="text-gradient">Tone</span>
        </Link>
        
        <div className={styles.links}>
          <Link href="/#explore">Explore</Link>
          <Link href="/cafe-presets-free">Cafe</Link>
          <Link href="/moody-film-presets">Moody</Link>
        </div>
      </div>
    </nav>
  );
}
