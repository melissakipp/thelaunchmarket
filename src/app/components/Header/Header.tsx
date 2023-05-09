'use client';

import styles from '../../styles/Header.module.css';
import DarkMode from './DarkMode';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>        
        <DarkMode />
      </div>

    </header>
  );
}