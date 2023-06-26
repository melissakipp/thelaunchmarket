import styles from '../../styles/Contact.module.scss';
import type { Metadata } from 'next';
import Form from '../components/Form/Form';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Welcome to The Launch Market',
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <article>
        <section></section>
        <section>
          <Form />
        </section>
      </article>
    </main>
  );
}
