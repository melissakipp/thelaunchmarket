'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import styles from './not-found.module.css'; // Import the CSS module

export default function NotFound() {
  useEffect(() => {
    // Announce to screen readers that this is a 404 page
    document.title = '404 - Page Not Found';
  }, []);

  return (
    <main
      className={styles.notFoundContainer} // Use styles object for className
      role="main"
      aria-labelledby="notFoundTitle"
    >
      <div className={styles.content}>
        <h1 id="notFoundTitle" className={styles.title}>
          404
        </h1>
        <p className={styles.message}>
          Oops! The page you're looking for cannot be found.
        </p>
        <p className={styles.suggestion}>
          The page might have been moved or deleted. Let's get you back on track.
        </p>
        <Link
          href="/"
          className={styles.homeLink} // Use styles for link class
          aria-label="Return to homepage"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}
