import DarkModeToggle from './DarkMode';

import styles from '../../../styles/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>        
        <DarkModeToggle />
      </div>

    </header>
  );
}