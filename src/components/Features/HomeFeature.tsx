'use client';
import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/src/hooks/useScrollAnimation';
import { HiSparkles, HiFastForward, HiCursorClick } from "react-icons/hi";

import styles from './HomeFeature.module.css';

export default function HomeFeature() {
  const [isVisible, setIsVisible] = useState(false);
  const listRef = useScrollAnimation<HTMLUListElement>();

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
          <ul ref={listRef} className={styles.featurePoints}>
            <li><span aria-hidden="true">✨</span>&nbsp;Modern Design</li>
            <li><span aria-hidden="true">🚀</span>&nbsp;Fast Development</li>
            <li><span aria-hidden="true">💎</span>&nbsp;Quality Results</li>
          </ul>
        </div>
      </div>
    </section>
  );
}