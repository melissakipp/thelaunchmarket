import type { Metadata } from 'next';
import styles from './Home.module.css'; // Import the CSS module
import Hero from '@/src/components/Hero/HomeHero';
import HomeCta from '@/src/components/Cta/HomeCta';

export const metadata: Metadata = {
  title: 'Home | The Launch Market',
  description: 'Welcome to The Launch Market',
};

export default function Home() {
  return (
    <main className={styles.homeMain}> {/* Use styles object */}
      <article>
        <Hero />
        <div className={styles.homeCta}> {/* Use styles for .homeCta */}
          <HomeCta />
        </div>
      </article>
    </main>
  );
}