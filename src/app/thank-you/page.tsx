import styles from './ThankYou.module.css'; // Import the CSS module

export default function ThankYou() {
  return (
    <main className={styles.thankYouMain}> {/* Use scoped class */}
      <h1>Thank you for your message!</h1>
      <p>
        Thank you for contacting me. <br />
        I will review your message and get back to you within 48 hours.
      </p>
    </main>
  );
}
