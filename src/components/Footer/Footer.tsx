import { BiSolidEnvelope, BiCopyright, BiHomeHeart } from 'react-icons/bi';

import styles from '@/src/styles/components/Footer/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>
        Launch Market <BiCopyright /> 2023
      </h3>
      <p>
        <BiSolidEnvelope />{' '}
        <a href='mailto:info@thelaunchmarket.com '>Contact Us</a>
      </p>
      <small>
        Created with <BiHomeHeart />{' '}
        <a href='https://melissajkipp.com'>Melissa Kipp</a>
      </small>
    </footer>
  );
}
