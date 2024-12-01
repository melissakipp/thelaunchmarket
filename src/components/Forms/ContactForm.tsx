'use client';

import { useState } from 'react';
import { BiRocket } from 'react-icons/bi';
import styles from './ContactForm.module.css';
import CustomBtn from '@/src/components/UI/Buttons/CustomBtn';

interface FormError {
  message: string;
  status?: number;
  details?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Form() {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setText(value);
    setCounter(value.length);
    
    // Reset error state when user starts typing
    if (error) setError(null);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data: FormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    // Validate message length
    if (data.message.length < 30) {
      setError('Message must be at least 30 characters long');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || response.statusText || 'Failed to send message');
      }

      setSuccess(true);
      form.reset();
      setText('');
      setCounter(0);
      
      // Delay redirect to show success state
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 1000);
    } catch (error) {
      const formError = error as FormError;
      console.error('Error submitting the form:', formError);
      setError(formError.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <header className={styles.contactHeader}>
        <h3>Contact Form</h3>
        <p>
          Thank you for exploring The Launch Market! We are excited to hear from you and learn about your project. 
          Don't hesitate to drop us a message or schedule a 15-minute chat with us through the scheduling link. 
          We look forward to hearing from you!
        </p>
        <p>
          <small>
            All fields with an asterisk (<span className={styles.required}>*</span>) are required fields
          </small>
        </p>
      </header>

      {error && (
        <div className={styles.error} role="alert">
          {error}
        </div>
      )}

      {success && (
        <div className={styles.success} role="alert">
          Message sent successfully! Redirecting...
        </div>
      )}

      <div className={styles.contactForm__container}>
        <fieldset className={styles.contactForm__fieldset} disabled={loading}>
          <legend>Contact Information</legend>
          <div className={styles.contactForm__info}>
            <label htmlFor="name">
              Full Name <span className={styles.required}>*</span>
              <input
                id="name"
                type="text"
                name="name"
                required
                aria-required="true"
                minLength={2}
                maxLength={100}
                aria-invalid={error ? 'true' : 'false'}
              />
            </label>
            <p className={styles.contactForm__smText}>
              <small>Example: John Doe</small>
            </p>
          </div>
          <div className={styles.contactForm__info}>
            <label htmlFor="email">
              Email <span className={styles.required}>*</span>
              <input
                id="email"
                type="email"
                name="email"
                required
                aria-required="true"
                maxLength={100}
                aria-invalid={error ? 'true' : 'false'}
              />
            </label>
            <p className={styles.contactForm__smText}>
              <small>Example: johndoe@email.com</small>
            </p>
          </div>
        </fieldset>

        <fieldset className={styles.contactForm__msg} disabled={loading}>
          <label htmlFor="message">
            Your Message & Question(s) <span className={styles.required}>*</span>
            <textarea
              id="message"
              name="message"
              required
              aria-required="true"
              rows={10}
              cols={50}
              minLength={30}
              maxLength={300}
              onChange={handleChange}
              aria-invalid={error ? 'true' : 'false'}
            />
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
        <CustomBtn
          type="submit"
          variant="secondary"
          size="md"
          isLoading={loading}
          startIcon={<BiRocket />}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </CustomBtn>
      </div>
    </form>
  );
}