import styles from '../../styles/Contact.module.scss';
import type { Metadata } from 'next';
import { Scheduler } from '../components/Scheduler/Scheduler';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Welcome to The Launch Market',
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <article>
        <section>
          <Scheduler />
        </section>
      </article>
    </main>
  );
}
