import styles from '../styles/page.module.css';
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to The Launch Market',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <article>

        <section>
          <p>Welcome to</p>
          <h1>The Launch Market</h1>
          <h2>Coming Soon</h2>
        </section>

        <section className='ctaBox'>
          <p>Are you ready to launch your product or service to the market?</p>
        </section>

      </article>
     
    </main>
  );
}
