import Image from 'next/image';

import DarkModeToggle from './DarkMode';

import styles from '../../../styles/Header.module.scss';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.container}>
        <div>
          <Image src="/symbol_launch-market_v-1.0-23.svg" alt="Logo" width={68} height={68} />
        </div>

        <div className={styles.container}>
          <nav>
            <ul className={styles.menu}>
              <li className={styles.menu__item}>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link href="/about">
                  About
                </Link>
              </li>
              <li className={styles.menu__item}>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div>        
            <DarkModeToggle />
          </div>
        </div>
    </header>
  );
}