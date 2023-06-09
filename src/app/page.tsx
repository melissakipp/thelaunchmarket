import styles from '../styles/Home.module.scss';
import type { Metadata } from 'next';
import Hero from './components/Hero/Hero';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to The Launch Market',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <article>
        <section>
          <Hero />
        </section>

        <section className={styles.ctaBox}>
          <p>Are you ready to launch your product or service to the market?</p>
        </section>
      </article>
    </main>
  );
}
