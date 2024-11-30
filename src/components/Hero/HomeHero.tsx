import Link from 'next/link';

import { FiArrowRight } from 'react-icons/fi';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  return (
    <section className={styles.hero}>
        <h1>Transforming Ideas into Digital Reality</h1>
        <p>Beautiful, functional websites that grow with your business. No complexity, just results.</p>
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
