import Link from 'next/link';
import styles from '@/styles/NavItem.module.css';

export default function NavItem({ href, text, active }) {
  return (
    <Link 
      href={href} 
      className={`${active ? "active" : ""} ${styles.navLink}`}
    >
      {text}
    </Link>
  );
}
