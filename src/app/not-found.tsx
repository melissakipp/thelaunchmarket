'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import './not-found.css';

export default function NotFound() {
  useEffect(() => {
    // Announce to screen readers that this is a 404 page
    document.title = '404 - Page Not Found';
  }, []);

  return (
    <main 
      className="notFoundContainer"
      role="main"
      aria-labelledby="notFoundTitle"
    >
      <div className="content">
        <h1 id="notFoundTitle" className="title">
          404
        </h1>
        <p className="message">
          Oops! The page you're looking for cannot be found.
        </p>
        <p className="suggestion">
          The page might have been moved or deleted. Let's get you back on track.
        </p>
        <Link 
          href="/"
          className="homeLink"
          aria-label="Return to homepage"
        >
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}