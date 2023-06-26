import styles from '../../styles/Contact.module.scss';
import type { Metadata } from 'next';
import Form from '../components/Form/Form';
import ListWithIcon from '../components/List/ListWithIcon';
import {
  BiCalendar,
  BiSolidEnvelope,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Welcome to The Launch Market',
};

export default function Contact() {
  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <section>
          <ul className={styles.list}>
            <ListWithIcon
              name='Calendar'
              icon={<BiCalendar />}
              href='https://calendly.com/melissakipp/15-minute-chat'
            />
            <ListWithIcon
              name='Email'
              icon={<BiSolidEnvelope />}
              href='info@thelaunchmarket.com'
            />
            <ListWithIcon
              name='LinkedIn'
              icon={<BiLogoLinkedinSquare />}
              href='https://www.linkedin.com/company/launchmarket/'
            />
          </ul>
        </section>
        <section>
          <Form />
        </section>
      </article>
    </main>
  );
}
