'use client';

import { useState } from 'react';
import { BiRocket } from 'react-icons/bi';

import Button from '../UI/Button';
import styles from './Form.module.scss';

export default function Form() {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);

  const handleChange = (event: any) => {
    setText(event.target.value);
    setCounter(text.length);
  };

  return (
    <>
      <form
        action='https://formsubmit.co/info@thelaunchmarket.com'
        method='POST'
        className={styles.form}
      >
        <header className={styles.header}>
          <h3>Contact Form</h3>
          <p>
            Thank you for exploring the Launch Market! We are excited to hear
            from you and learn about your project. Don't hesitate to drop us a
            message or schedule a 15 minute chat with us through the scheduling
            link. We look forward to hearing from you!
          </p>
          <p>
            <small>All fields with an asterisk (*) are required fields</small>
          </p>
        </header>

        <div className={styles.container}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Contact Information</legend>

            <label className={styles.label} htmlFor='fullName'>
              <span>*</span>Full Name:
            </label>
            <input
              className={styles.input}
              type='text'
              name='fullName'
              required
              aria-required='true'
            />
            <div>
              <span>
                <small>Example: John Doe</small>
              </span>
            </div>
            <label className={styles.label} htmlFor='email'>
              <span>*</span>Email:
            </label>
            <input
              className={styles.input}
              type='text'
              name='email'
              required
              aria-required='true'
            />
            <div>
              <span>
                <small>Example: johndoe@email.com</small>
              </span>
            </div>
          </fieldset>

          <fieldset className={`${styles.fieldset} ${styles.radioContainer}`}>
            <legend className={styles.legend}>Type of Project:</legend>
            <label className={styles.label} htmlFor='web'>
              <input
                className={styles.radioBtn}
                type='radio'
                name='web'
                value='web'
              />
              Web Development
            </label>

            <label className={styles.label} htmlFor='design'>
              <input
                className={styles.radioBtn}
                type='radio'
                name='design'
                value='design'
              />
              <span></span>
              Design
            </label>
          </fieldset>

          <fieldset className={styles.textArea}>
            <legend className={styles.legend}>
              Details about your request
            </legend>
            <label className={styles.label} htmlFor='message'>
              <span>*</span>Your Message & Question(s):
              <textarea
                className={styles.input}
                name='message'
                aria-required={'true'}
                rows={10}
                cols={50}
                required
                onChange={handleChange}
              ></textarea>
            </label>
            <p>
              <small>Minimum 30 character</small>
            </p>
            <p className={styles.counter}>
              <strong>
                Characters:{' '}
                <output htmlFor='message' aria-live='polite'>
                  {counter}/300
                </output>
              </strong>
            </p>
          </fieldset>

          <div aria-live='assertive'></div>
          <input
            type='hidden'
            name='_next'
            value='https://thelaunchmarket.com/thanks.html'
          />
          <input
            type='hidden'
            name='_subject'
            value='New submission from LM site!'
          />
          <input
            type='hidden'
            name='_autoresponse'
            value='From: Melissa Kipp - Thank You for contacting me. I will review your message and get back to you within 48 hours. Below you will see a copy of your message.'
          />
          <input
            type='hidden'
            name='_url'
            value='https://thelaunchmarket.com/contact.html'
          ></input>
        </div>
        <Button
          type='submit'
          value='Send Message'
          data-callback='onSubmit'
          data-action='submit'
          className={styles.submitBtn}
        >
          Submit
          <BiRocket />
        </Button>
      </form>
    </>
  );
}
