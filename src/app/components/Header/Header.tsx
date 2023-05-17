import DarkModeToggle from './DarkMode';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>        
        <DarkModeToggle />
      </div>

    </header>
  );
}