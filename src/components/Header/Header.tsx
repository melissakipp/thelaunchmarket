'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import styles from './Header.module.css'; // Import the CSS module
import Logo from '@/src/assets/the-launch-market_small-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
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
          <Image src={Logo} alt="Logo" width={125} height={125} />
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
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
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
