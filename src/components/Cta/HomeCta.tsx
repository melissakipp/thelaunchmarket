import Link from 'next/link';

import { FiArrowRight } from 'react-icons/fi';
import styles from './HomeCta.module.css';

export default function HomeCta() {
  return (
    <section className={styles.cta}>
        <h2>Ready to Get Started?</h2>
        <p>Let's create something amazing together.</p>
        <Link
          href='/contact'
          className={styles.primaryLink}
        >
          Start Your Project 
          <FiArrowRight />
        </Link>
      </section>
  );
}
