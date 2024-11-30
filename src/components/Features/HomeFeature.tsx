import { FiZap, FiGlobe, FiSettings } from 'react-icons/fi';
import styles from './HomeFeature.module.css';

export default function HomeFeature() {
  return (
    <section className={styles.features}>
        <div className={styles.featureCard}>
          <FiZap className={styles.icon} />
          <h3>Startups & Freelancers</h3>
          <p>Fast, efficient solutions that fit your budget and timeline. We grow with you.</p>
        </div>
        <div className={styles.featureCard}>
          <FiSettings className={styles.icon} />
          <h3>Small Business Solutions</h3>
          <p>User-friendly websites that drive results. No technical hassles, just smooth operations.</p>
        </div>
        <div className={styles.featureCard}>
          <FiGlobe className={styles.icon} />
          <h3>Modern Web Design</h3>
          <p>Clean, responsive designs that look great on every device. Built for conversion.</p>
        </div>
      </section>
  );
}