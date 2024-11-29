'use client';

import { useState } from 'react';
import { BiRocket } from 'react-icons/bi';
import styles from './ContactForm.module.css'; // Import the CSS module
import Button from '@/src/components/UI/Button';

interface FormError {
  message: string;
  status?: number;
  details?: string;
}

export default function Form() {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    setCounter(event.target.value.length);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const form = event.target as HTMLFormElement;

    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value,
    };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        form.reset();
        setText('');
        setCounter(0);
        setLoading(false);
        window.location.href = '/thank-you';
      } else {
        setLoading(false);
        throw new Error(response.statusText);
      }
    } catch (error) {
      const formError = error as FormError; // Cast error to FormError
      console.error('Error submitting the form:', formError.message);
      alert(`Failed to send the message: ${formError.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <header className={styles.contactHeader}>
        <h3>Contact Form</h3>
        <p>
          Thank you for exploring The Launch Market! We are excited to hear from you and learn about your project. Don't hesitate to drop us a message or schedule a 15-minute chat with us through the scheduling link. We look forward to hearing from you!
        </p>
        <p>
          <small>
            All fields with an asterisk (<span>*</span>) are required fields
          </small>
        </p>
      </header>

      <div className={styles.contactForm__container}>
        <fieldset className={styles.contactForm__fieldset}>
          <legend>Contact Information</legend>
          <div className={styles.contactForm__info}>
            <label htmlFor="name">
              Full Name: <span>*</span>
              <input
                id="name"
                type="text"
                data-type="text"
                name="name"
                required
                aria-required="true"
              />
            </label>
            <p className={styles.contactForm__smText}>
              <small>Example: John Doe</small>
            </p>
          </div>
          <div className={styles.contactForm__info}>
            <label htmlFor="email">
              Email: <span>*</span>
              <input
                id="email"
                type="email"
                data-type="email"
                name="email"
                required
                aria-required="true"
              />
            </label>
            <p className={styles.contactForm__smText}>
              <small>Example: johndoe@email.com</small>
            </p>
          </div>
        </fieldset>

        <fieldset className={styles.contactForm__msg}>
          <label htmlFor="message">
            Your Message & Question(s): <span>*</span>
            <textarea
              id="message"
              name="message"
              aria-required="true"
              rows={10}
              cols={50}
              required
              onChange={handleChange}
            ></textarea>
          </label>
          <p className={styles.contactForm__smText}>
            <small>Minimum 30 characters</small>
          </p>
          <p className={styles.counter}>
            <strong>
              Characters:{' '}
              <output htmlFor="message" aria-live="polite">
                {counter}/300
              </output>
            </strong>
          </p>
        </fieldset>
      </div>
      <div className={styles.contactForm__btn}>
        <Button
          type="submit"
          disabled={loading}
          value="Send Message"
          data-callback="onSubmit"
          data-action="submit"
          className={styles.submitBtn}
        >
          Submit
          <BiRocket />
        </Button>
      </div>
    </form>
  );
}
