'use client';
import { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import styles from './HomeFeature.module.css';
import CustomBtnLink from '../UI/Links/CustomBtnLink';

export default function HomeFeature() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={styles.featureContainer}>
      <div className={`${styles.featureContent} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.featureGraphic}>
          <svg viewBox="0 0 400 400" className={styles.animateSvg}>
            <circle cx="200" cy="200" r="50" className={styles.pulseCircle} />
            <path d="M 100 200 L 300 200" className={styles.linePath} />
            <path d="M 200 100 L 200 300" className={styles.linePath} />
            <rect x="150" y="150" width="100" height="100" className={styles.floatRect} />
          </svg>
        </div>
        <div className={styles.featureText}>
          <h2>Launch Your Digital Journey</h2>
          <div className={styles.featurePoints}>
            <span>✨ Modern Design</span>
            <span>🚀 Fast Development</span>
            <span>💎 Quality Results</span>
          </div>
          {/* <CustomBtnLink 
            href="/work" 
            variant="primary" 
            icon={FiArrowRight}
          >
            See Our Work
          </CustomBtnLink> */}
        </div>
      </div>
    </section>
  );
}