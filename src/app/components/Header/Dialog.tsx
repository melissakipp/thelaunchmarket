import Link from 'next/link';

import styles from '../../../styles/components/Header/Dialog.module.scss';

export default function Dialog({ open }: { open: boolean }) {
  return (
    <dialog className={styles.modal} open={open} aria-modal='true'>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menu__item}>
            <Link href='/'>Home</Link>
          </li>
          <li className={styles.menu__item}>
              <Link href='/Services'>Services</Link>
            </li>
          <li className={styles.menu__item}>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      {/* <button
        onClick={() => {
          // open = false;
          console.log('close');
        }}
        aria-modal='false'
      >
        Close
      </button> */}
    </dialog>
  );
}
