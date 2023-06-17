import styles from '../../styles/About.module.scss';
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'About',
  description: 'Welcome to The Launch Market',
};

export default function About() {
  return (
    <main className={styles.main}>
      <article>

        <section>
          <h1>About Page</h1>
        </section>

      </article>
     
    </main>
  );
}