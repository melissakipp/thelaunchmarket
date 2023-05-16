<<<<<<< HEAD
import styles from '../../../styles/Header.module.css';
import DarkMode from './DarkMode';

const MENU_ITEMS = [
  {
    text: 'Home',
    href: '/',
  },
];
=======
import styles from '../../styles/Header.module.css';
>>>>>>> main

export default function Header() {
  return (
    <header className={styles.header}>
      <div>        
          <p>The Launch Market</p>
      </div>

    </header>
  );
}