import styles from '../../styles/Contact.module.scss';
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Welcome to The Launch Market',
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <article>

        <section>
          <h1>Contact Page</h1>
        </section>

      </article>
     
    </main>
  );
}
