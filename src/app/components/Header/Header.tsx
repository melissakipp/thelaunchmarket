import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import DarkModeToggle from './DarkMode';
import Dialog from './Dialog';

import styles from './Header.module.scss';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.container}>
      <div className={styles.logoSmall}>
        <Link href='/'>
          <Image className={styles.smSvg} src='/images/the-launch-market_small-logo.svg' alt='The Launch Market' width={150} height={150} />
        </Link>
      </div>
      <div className={styles.logoLarger}>
        <Link href='/'>
          <Image className={styles.lgSvg} src='/images/the-launch-market_large-logo_@0.5x.png' alt='The Launch Market' width={250} height={250} />
        </Link>
      </div>

      <div className={styles.container}>
        <nav>
          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <Link href='/'>Home</Link>
            </li>
            <li className={styles.menu__item}>
              <Link href='/services'>Services</Link>
            </li>
            <li className={styles.menu__item}>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.menuModal}>
          <button className={styles.menuBtn} onClick={handleClick}>
            Open / Close
          </button>
          {open && <Dialog open={open} />}
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
}
