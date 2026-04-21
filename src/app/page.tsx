import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PresetGrid from '@/components/PresetGrid';
import { fetchPresets } from '@/lib/api';

export default async function Home() {
  const presets = await fetchPresets();

  return (
    <main>
      <Navbar />
      <Hero />
      <PresetGrid presets={presets} />
      
      <footer className="section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)' }}>&copy; 2024 SnapTone. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
