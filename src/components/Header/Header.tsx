'use client';

import React from 'react';
import Link from 'next/link';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import styles from '@/src/styles/components/Header/Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Home">
          <span className={styles.logoText}>Logo</span>
        </Link>

        <div className={styles.navContainer}>
          <button 
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(true)}
            aria-expanded={isMenuOpen}
            aria-controls="navigation"
          >
            <HiBars3 className={styles.menuIcon} />
            <span className={styles.srOnly}>Menu</span>
          </button>

          <nav 
            id="navigation"
            className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          >
            <div className={styles.navHeader}>
              <button
                className={styles.closeButton}
                onClick={() => setIsMenuOpen(false)}
              >
                <HiXMark className={styles.closeIcon} />
                <span className={styles.srOnly}>Close menu</span>
              </button>
            </div>

            <ul className={styles.menu}>
              {['Home', 'Services', 'Contact'].map((item) => (
                <li key={item} className={styles.menuItem}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className={styles.menuLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;