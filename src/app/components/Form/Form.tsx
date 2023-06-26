import Button from '../UI/Button';
import styles from './Form.module.scss';

export default function Form() {
  return (
    <>
      <form
        action='https://formsubmit.co/'
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
          <fieldset>
            <legend>Contact Information</legend>

            <label htmlFor='fullName'>
              <span>*</span>Full Name:
              {/* <span className='successControl' aria-live='polite'>&check;</span> */}
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
            <div>Your name must be 3 or more characters.</div>
            <label htmlFor='email'>
              Email: <small>&lpar;required&rpar;</small>
              {/* <span className='success' aria-live='polite'>&check;</span> */}
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
            <div>Please enter a correct email.</div>
          </fieldset>
          <fieldset>
            <legend>Type of Project&colon;</legend>
            <label htmlFor='webDev'>
              <input
                className={styles.input}
                type='radio'
                name='project'
                value='web'
              />
              <span></span>
              Web Development
            </label>

            <label htmlFor='design'>
              <input
                className={styles.input}
                type='radio'
                name='project'
                value='design'
              />
              <span></span>
              Design
            </label>
            <br />

            {/* <div className='error'> 
                  <span className='contact-htmlForm__field--error contact-htmlForm__msg--success'
                    ><small>Example error or success placeholder</small></span
                  >
                </div> */}
          </fieldset>

          <fieldset>
            <legend>Details about your request</legend>
            <label htmlFor='message'>
              Your Message &sol; Question&colon;
              <small>&nbsp;&lpar;required&rpar;</small>
              <textarea
                className={styles.input}
                name='message'
                // minlength={'30'}
                aria-required={'true'}
              ></textarea>
            </label>
            <p>
              <small>Note&colon;&nbsp;Minimum 30 character</small>
            </p>
            <p>
              <strong>Count:</strong>&nbsp;
              <output htmlFor='message' aria-live='polite'>
                0
              </output>
            </p>
          </fieldset>

          {/*<fieldset className='checks'>
                <legend>Security Check</legend>
                <input type='checkbox' name='newsletter' id='newsletter' />
                <span ></span>
                <label htmlFor='newsletter'>I am a human.</label>
                </fieldset>*/}
          {/* above input was 'chekced' */}

          <div aria-live='assertive'></div>
          {/* Hidden Fields */}
          {/* <!-- this is htmlFor production code in the _next input value='https://melissajkipp.com/thanks.html' 
          http://localhost:8080/_pages/thanks.html/
          --> */}
          <input
            type='hidden'
            name='_next'
            value='https://thelaunchmarket.com/thanks.html'
          />
          <input type='hidden' name='_subject' value='New submission!' />
          <input type='hidden' name='_captcha' value='true' />
          <input
            type='hidden'
            name='_autoresponse'
            value='From: Melissa Kipp - Thank You htmlFor contacting me. I will review your message and get back to you within 48 hours. Below you will see a copy of your message.'
          />
          <input type='hidden' name='_template' value='box' />
        </div>
        <Button
          type='submit'
          value='Send Message'
          // className='g-recaptcha'
          data-sitekey='6LcaPgAdAAAAAL8_xAl1feANnhFbzIC6q8l6CPF_'
          data-callback='onSubmit'
          data-action='submit'
          className={styles.submitBtn}
        >
          Submit
          <span>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='paper-plane'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z'
              ></path>
            </svg>
          </span>
        </Button>
      </form>
    </>
  );
}
