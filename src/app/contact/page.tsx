import type { Metadata } from 'next';

import './Contact.module.css';
import Form from '@/src/components/Forms/ContactForm';
import ListWithIcon from '@/src/components/List/ListWithIcon';
import {
  BiCalendar,
  BiSolidEnvelope,
  BiLogoLinkedinSquare,
} from 'react-icons/bi';

export const metadata: Metadata = {
  title: 'Contact | The Launch Market',
  description: 'Welcome to The Launch Market',
};

export default function Contact() {
  return (
    <main className='contactMain'>
      <article className='contactContainer'>
        <div className='contactTitle'>
          <h1>Contact Us</h1>
          <p>Hello</p> 
        </div>
        <section>
          <ul className='contactList'>
            <ListWithIcon
              name='Calendar'
              icon={<BiCalendar />}
              href='https://calendly.com/melissakipp/15-minute-chat'
            />
            <ListWithIcon
              name='Email'
              icon={<BiSolidEnvelope />}
              href='mailto:info@thelaunchmarket.com'
            />
            <ListWithIcon
              name='LinkedIn'
              icon={<BiLogoLinkedinSquare />}
              href='https://www.linkedin.com/company/launchmarket/'
            />
          </ul>
        </section>
        <section className='formContainer'>
          <Form />
        </section>
      </article>
    </main>
  );
}
