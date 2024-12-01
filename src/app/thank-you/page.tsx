import styles from './ThankYou.module.css'; // Import the CSS module

export default function ThankYou() {
  return (
    <main className={styles.container}>
      <article>
        <div className={styles.messageWrapper}>
          <h1 className={styles.title}>Thank You for Contacting Us!</h1>
          <p className={styles.subtitle}>We'll get back to you within 48 hours.</p>
        </div>
        
        <div className={styles.envelopeWrapper}>
          <div className={styles.envelope}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6M22 6L12 13L2 6M22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6" />
            </svg>
          </div>
        </div>
      </article>
    </main>
  );
}
