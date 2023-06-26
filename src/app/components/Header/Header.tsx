import { useState } from 'react';
import Link from 'next/link';

import DarkModeToggle from './DarkMode';
import Dialog from '../UI/Dialog';

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
          <svg
            width='66'
            height='65'
            viewBox='0 0 66 65'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g>
              <g>
                <g>
                  <path
                    d='M32.0727 60.4292C31.4909 60.4292 31.0126 59.9651 30.9989 59.382L30.626 44.4176L32.0005 44.7666C35.8973 45.7553 40.7664 46.1589 41.52 45.1605C43.8139 42.1283 43.7612 18.0923 41.4516 14.1728C41.3443 13.9914 40.7605 13.6853 39.6457 13.6307C38.0156 13.5527 36.6079 14.0538 36.3209 14.4497C35.4736 15.6119 36.0261 22.4779 36.3912 27.0195C36.9027 33.3746 37.1624 37.3566 36.4439 39.0706C35.9129 40.3401 33.8513 40.7223 32.5686 40.5078C31.4362 40.3206 30.7237 39.6537 30.6631 38.7274C30.6104 37.9435 30.544 36.2704 30.4542 33.9538C30.1321 25.7637 29.3746 6.58525 27.9865 3.80842C27.5316 2.89581 26.3993 2.2835 24.9604 2.16845C23.0745 2.02025 21.1905 2.77296 20.2768 4.04632C19.6521 5.08763 19.4471 12.5699 19.3104 17.5229C19.121 24.4474 18.9629 28.7628 18.3811 30.3072C18.0746 31.1204 17.2351 31.6625 16.0129 31.838C14.6561 32.035 12.3426 31.7678 11.4465 30.5744C10.5133 29.3322 10.6577 25.906 11.2376 17.7998C11.591 12.8643 12.0751 6.10554 11.3528 4.71323C11.22 4.45973 10.6382 4.14967 9.66792 4.06777C7.98307 3.92737 6.14594 4.50458 5.47825 5.38794C1.93284 10.0738 0.308516 32.9788 5.18345 38.667C6.80582 40.5604 13.4515 40.6267 17.2605 40.2231L18.4494 40.0963V59.3567C18.4494 59.9495 17.9672 60.4311 17.3737 60.4311C16.7802 60.4311 16.298 59.9495 16.298 59.3567V42.4617C13.3031 42.6723 5.95657 42.8771 3.54936 40.0651C-2.33102 33.1991 0.0664284 8.97597 3.76412 4.09117C5.07217 2.36151 7.84055 1.757 9.84949 1.92665C11.5207 2.06705 12.7331 2.70471 13.2621 3.72262C14.1973 5.52249 13.9337 10.3 13.3851 17.9519C13.0708 22.3317 12.6413 28.3319 13.184 29.3069C13.2914 29.4239 13.963 29.7164 14.9567 29.7476C15.7728 29.7807 16.257 29.6013 16.3878 29.5019C16.87 28.0998 17.0242 22.4526 17.1629 17.4644C17.4108 8.44557 17.6256 4.05802 18.5314 2.79636C19.8863 0.902891 22.481 -0.18912 25.1303 0.027332C27.3286 0.202834 29.1149 1.25584 29.9095 2.84901C31.3796 5.79159 32.0688 20.4031 32.6018 33.868C32.6818 35.8901 32.7462 37.5243 32.7951 38.3686C33.2129 38.4895 34.1675 38.3784 34.4936 38.1522C35.0109 36.6701 34.6049 31.6391 34.2476 27.1911C33.6365 19.5997 33.3534 14.867 34.5834 13.1822C35.5322 11.8815 37.8652 11.3842 39.7512 11.4837C41.4848 11.5675 42.748 12.135 43.3044 13.0808C46.0864 17.8018 46.0357 42.7542 43.236 46.4534C41.5512 48.6803 35.909 47.8301 32.8439 47.1691L33.1465 59.3294C33.1621 59.9222 32.6916 60.4155 32.0981 60.4292H32.0707H32.0727Z'
                    fill='currentColor'
                  />
                  <path
                    id='Vector_2'
                    d='M1.58723 63.6876C7.16109 63.0734 45.7291 61.9307 46.6935 63.6876C47.6599 65.4485 10.7104 65.2457 1.58723 64.2005C0.925397 64.1244 0.915636 63.7617 1.58723 63.6876Z'
                    fill='currentColor'
                  />
                  <path
                    id='Vector_3'
                    d='M57.4742 57.0927C57.0506 57.0927 56.6484 56.8411 56.4786 56.4258C56.254 55.8758 56.5176 55.2499 57.0682 55.0256C62.6362 52.7519 65.3167 46.3793 63.0403 40.8158C60.7658 35.2524 54.3818 32.577 48.8138 34.8507C48.2632 35.0769 47.6365 34.8117 47.412 34.2618C47.1875 33.7119 47.4511 33.086 48.0016 32.8617C54.6688 30.1414 62.3082 33.3453 65.0317 40.0027C67.7551 46.662 64.5475 54.2924 57.8823 57.0127C57.7495 57.0673 57.6109 57.0927 57.4762 57.0927H57.4742Z'
                    fill='currentColor'
                  />
                </g>
              </g>
            </g>
          </svg>
        </Link>
      </div>
      <div className={styles.logoLarger}>
        <Link href='/'>
          <svg
            width='400'
            height='100'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 419.63 62.67'
          >
            <g>
              <path
                d='m73.61,62.06c-.56,0-.79-.23-.79-.79v-1.68c0-.56.23-.79.79-.79h5.08v-26.11h-5.08c-.56,0-.79-.23-.79-.79v-1.68c0-.56.23-.79.79-.79h13.2c.56,0,.79.23.79.79v1.68c0,.56-.23.79-.79.79h-5.08v26.11h17.91l.84-7.55c.05-.42.28-.7.93-.7h.56c.65,0,.89.23.89.79v9.93c0,.37-.14.79-.75.79h-28.49Z'
                fill='currentColor'
              />
              <path
                d='m129.22,61.27c0,.47-.28.75-.7.79-3.22.42-5.41-.65-6.15-3.82-1.35,2.71-4.94,4.38-8.11,4.38-4.71,0-8.81-2.19-8.81-7.41s4.57-7.51,9.14-7.41c2.75.05,5.78.98,7.65,2.94v-4.01c0-3.68-3.03-5.08-6.25-5.08s-5.88,1.07-8.53,3.26c-.14.09-.7.61-.7-.05v-3.12c0-.19.05-.37.23-.51,2.28-1.68,5.5-2.94,9.14-2.94,5.41,0,8.91,2.47,8.91,7.88v9.75c0,1.82.84,2.89,2.84,2.89h.7c.47,0,.65.28.65.7v1.77Zm-7.04-6.86c0-2.33-4.06-3.5-7.27-3.5-4.2,0-6.48,1.87-6.48,4.24,0,2.66,2.52,4.2,6.15,4.2s7.6-1.91,7.6-4.06v-.89Z'
                fill='currentColor'
              />
              <path
                d='m150.09,62.06c-.65,0-.84-.33-.93-.75l-1.03-3.68h-.19c-1.45,4.1-5.22,5.04-7.88,5.04-4.94,0-7.41-3.36-7.41-6.11v-14.36h-4.24c-.47,0-.79-.33-.79-.79v-1.68c0-.47.33-.79.79-.79h6.25c.47,0,.79.33.79.79v15.99c0,2.38,2.24,3.64,4.85,3.64,3.59,0,7.83-2.29,7.83-7.04v-10.12h-4.62c-.47,0-.79-.33-.79-.79v-1.68c0-.47.33-.79.79-.79h6.62c.47,0,.79.33.79.79v15.57l1.59,5.92c.14.47-.14.84-.75.84h-1.68Z'
                fill='currentColor'
              />
              <path
                d='m174.1,62.06c-.47,0-.79-.33-.79-.79v-1.68c0-.47.33-.79.79-.79h4.43v-13.52c0-2.38-2.47-3.59-5.36-3.59-3.87,0-8.53,2.29-8.53,6.99v10.12h4.06c.47,0,.79.33.79.79v1.68c0,.47-.33.79-.79.79h-11.33c-.47,0-.79-.33-.79-.79v-1.68c0-.47.33-.79.79-.79h4.48v-16.6h-4.9c-.65,0-.84-.23-.84-.79v-1.68c0-.56.28-.79.75-.79h6.81c.65,0,.89.33.93.75l.33,3.73h.19c1.45-4.1,5.64-5.13,8.3-5.13,4.94,0,7.93,2.42,7.93,6.15v14.36h4.24c.47,0,.79.33.79.79v1.68c0,.47-.33.79-.79.79h-11.47Z'
                fill='currentColor'
              />
              <path
                d='m208.63,58.61c0,.28-.09.51-.33.7-1.73,1.4-4.94,3.31-9.79,3.31-6.95,0-11.66-4.1-11.66-12.12s5.41-12.22,12.03-12.22c3.96,0,7.09,1.35,9.19,3.03.23.19.33.42.33.7v3.96c0,.19-.14.37-.33.42l-.75.23c-.23.09-.37-.05-.42-.33-.56-3.22-4.06-4.76-7.93-4.76-5.74,0-9.19,3.45-9.19,8.95s2.98,8.86,8.91,8.86c4.57,0,7.65-1.87,8.67-4.43.05-.14.23-.19.37-.14l.65.23c.14.05.23.19.23.33v3.26Z'
                fill='currentColor'
              />
              <path
                d='m229.2,62.06c-.47,0-.79-.33-.79-.79v-1.68c0-.47.33-.79.79-.79h4.43v-13.48c0-2.38-2.47-3.68-5.27-3.68-3.92,0-8.63,2.33-8.63,7.09v10.07h4.06c.47,0,.79.33.79.79v1.68c0,.47-.33.79-.79.79h-11.33c-.47,0-.79-.33-.79-.79v-1.68c0-.47.33-.79.79-.79h4.48v-26.11h-4.9c-.65,0-.84-.23-.84-.79v-1.68c0-.56.28-.79.75-.79h6.86c.65,0,.93.33.93.75v13.24h.47c1.45-4.1,5.64-5.13,8.3-5.13,4.94,0,7.93,2.47,7.93,6.2v14.31h4.24c.47,0,.79.33.79.79v1.68c0,.47-.33.79-.79.79h-11.47Z'
                fill='currentColor'
              />
              <path
                d='m287.27,62.06c-.56,0-.79-.23-.79-.79v-1.68c0-.56.23-.79.79-.79h4.06v-25.6l-10.68,23.18c-.23.47-.37.7-.98.7h-2.61c-.61,0-.75-.23-.98-.7l-10.68-23.18v25.6h4.06c.56,0,.79.23.79.79v1.68c0,.56-.23.79-.79.79h-11.38c-.56,0-.79-.23-.79-.79v-1.68c0-.56.23-.79.79-.79h4.43v-26.11h-4.43c-.56,0-.79-.23-.79-.79v-1.68c0-.56.23-.79.79-.79h7.65c.7,0,1.26-.05,1.68.89l10.96,24.2,10.96-24.2c.42-.93.98-.89,1.68-.89h7.65c.56,0,.79.23.79.79v1.68c0,.56-.23.79-.79.79h-4.43v26.11h4.43c.56,0,.79.23.79.79v1.68c0,.56-.23.79-.79.79h-11.38Z'
                fill='currentColor'
              />
              <path
                d='m324.78,61.27c0,.47-.28.75-.7.79-3.22.42-5.41-.65-6.15-3.82-1.35,2.71-4.94,4.38-8.11,4.38-4.71,0-8.81-2.19-8.81-7.41s4.57-7.51,9.14-7.41c2.75.05,5.78.98,7.65,2.94v-4.01c0-3.68-3.03-5.08-6.25-5.08s-5.88,1.07-8.53,3.26c-.14.09-.7.61-.7-.05v-3.12c0-.19.05-.37.23-.51,2.28-1.68,5.5-2.94,9.14-2.94,5.41,0,8.91,2.47,8.91,7.88v9.75c0,1.82.84,2.89,2.84,2.89h.7c.47,0,.65.28.65.7v1.77Zm-7.04-6.86c0-2.33-4.06-3.5-7.27-3.5-4.2,0-6.48,1.87-6.48,4.24,0,2.66,2.52,4.2,6.15,4.2s7.6-1.91,7.6-4.06v-.89Z'
                fill='currentColor'
              />
              <path
                d='m327.4,62.06c-.47,0-.75-.23-.75-.79v-1.68c0-.56.19-.79.84-.79h5.22v-16.74h-5.22c-.7-.05-.84-.23-.84-.79v-1.54c0-.56.28-.79.75-.79h6.44c.79,0,1.12.61,1.12,1.26v5.04h.37c.84-4.2,3.78-6.3,6.76-6.3.89,0,2.84.09,3.96,1.21.09.09.09.14.09.28v3.26c0,.14,0,.33-.14.33h-.61c-.14,0-.23-.09-.33-.19-.84-.84-1.96-1.17-3.4-1.17-3.03,0-6.16,2.89-6.16,8.02v8.11h5.32c.65,0,.84.23.84.79v1.68c0,.56-.28.79-.75.79h-13.52Z'
                fill='currentColor'
              />
              <path
                d='m375.14,55.77c.28,0,.33.09.37.28.14.51.23,1.21.23,1.77,0,2.8-1.73,4.8-5.46,4.8-7.88,0-10.21-12.5-14.78-9.98v6.15h4.24c.65,0,.84.23.84.79v1.68c0,.56-.28.79-.75.79h-11.89c-.47,0-.75-.23-.75-.79v-1.68c0-.56.19-.79.84-.79h4.66v-26.11h-5.03c-.65,0-.84-.23-.84-.79v-1.68c0-.56.28-.79.75-.79h6.9c.7,0,1.02.47,1.02,1.12v13.85h.14c2.14-4.24,5.64-6.11,9.28-6.11,4.38,0,7.07,2.29,7.07,6.35,0,4.94-3.57,8.29-9.54,8.29v.23c2.01,2.52,5.18,6.25,8.21,6.2,1.87-.05,3.17-.33,3.73-3.22.05-.19.09-.37.37-.37h.37Zm-14.37-6.32c2.33,0,8.02.38,8.02-3.21,0-2.56-1.39-4.69-4.14-4.69-3.31,0-7.9,2.03-8.69,7.9h4.81Z'
                fill='currentColor'
              />
              <path
                d='m397.83,59.03c0,.28-.09.51-.33.7-1.91,1.54-4.85,2.89-8.72,2.89-6.01,0-11.84-4.1-11.84-12.31s5.13-12.03,11.47-12.03c7.18,0,10.45,4.94,10.45,10.49v2.14c0,.33-.23.56-.56.56h-18.42c.33,5.55,4.57,7.88,8.91,7.88,3.45,0,6.86-1.49,8.16-4.01.05-.14.19-.14.28-.09l.42.23c.14.09.19.14.19.28v3.26Zm-1.73-10.59c0-4.52-3.31-6.9-7.88-6.9-5.27,0-7.88,3.26-8.39,6.9h16.27Z'
                fill='currentColor'
              />
              <path
                d='m416.84,49.62c0-.28.14-.47.61-.47h1.68c.28,0,.51.09.51.47v4.94c0,6.06-4.24,8.07-7.97,8.07-4.94,0-7.51-2.52-7.51-6.9v-13.52h-3.31c-.65,0-.84-.19-.84-.75v-.09c0-.33.09-.56.33-.84l5.36-6.15c.23-.28.42-.42.65-.42h.09c.37,0,.51.23.51.7v4.29h11.33c.42,0,.56.19.56.47v2.28c0,.28-.19.51-.56.51h-11.33v13.38c0,2.89,2.47,3.78,4.76,3.78,2.47,0,5.13-1.26,5.13-4.8v-4.94Z'
                fill='currentColor'
              />
              <g>
                <path
                  d='m30.89,58.26c-.56,0-1.02-.45-1.03-1.01l-.36-14.43,1.32.34c3.75.95,8.44,1.34,9.17.38,2.21-2.92,2.16-26.1-.07-29.88-.1-.17-.67-.47-1.74-.52-1.57-.07-2.92.41-3.2.79-.82,1.12-.28,7.74.07,12.12.49,6.13.74,9.97.05,11.62-.51,1.22-2.5,1.59-3.73,1.39-1.09-.18-1.78-.82-1.84-1.72-.05-.76-.11-2.37-.2-4.6-.31-7.9-1.04-26.39-2.38-29.06-.44-.88-1.53-1.47-2.91-1.58-1.82-.14-3.63.58-4.51,1.81-.6,1-.8,8.22-.93,12.99-.18,6.68-.33,10.84-.89,12.33-.29.78-1.1,1.31-2.28,1.48-1.31.19-3.53-.07-4.4-1.22-.9-1.2-.76-4.5-.2-12.32.34-4.76.81-11.28.11-12.62-.13-.24-.69-.54-1.62-.62-1.62-.13-3.39.42-4.03,1.27-3.42,4.52-4.98,26.6-.28,32.09,1.56,1.83,7.96,1.89,11.63,1.5l1.14-.12v18.57c0,.57-.46,1.04-1.04,1.04s-1.04-.46-1.04-1.04v-16.29c-2.88.2-9.96.4-12.28-2.31C-2.25,32.01.06,8.65,3.62,3.94c1.26-1.67,3.93-2.25,5.86-2.09,1.61.14,2.78.75,3.29,1.73.9,1.74.65,6.34.12,13.72-.3,4.22-.72,10.01-.19,10.95.1.11.75.4,1.71.43.79.03,1.25-.14,1.38-.24.46-1.35.61-6.8.75-11.61.24-8.7.45-12.93,1.32-14.14C19.15.87,21.65-.18,24.2.03c2.12.17,3.84,1.19,4.6,2.72,1.42,2.84,2.08,16.93,2.59,29.91.08,1.95.14,3.53.19,4.34.4.12,1.32,0,1.64-.21.5-1.43.11-6.28-.24-10.57-.59-7.32-.86-11.88.32-13.51.91-1.25,3.16-1.73,4.98-1.64,1.67.08,2.89.63,3.42,1.54,2.68,4.55,2.63,28.61-.07,32.18-1.62,2.15-7.06,1.33-10.01.69l.29,11.72c.01.57-.44,1.05-1.01,1.06h-.03Z'
                  fill='currentColor'
                />
                <path
                  d='m1.53,61.41c5.37-.59,42.51-1.69,43.44,0,.93,1.7-34.65,1.5-43.44.49-.64-.07-.65-.42,0-.49Z'
                  fill='currentColor'
                />
                <path
                  d='m55.35,55.05c-.41,0-.79-.24-.96-.64-.22-.53.04-1.13.57-1.35,5.36-2.19,7.94-8.34,5.75-13.7-2.19-5.36-8.34-7.94-13.7-5.75-.53.22-1.13-.04-1.35-.57-.22-.53.04-1.13.57-1.35,6.42-2.62,13.78.47,16.4,6.89,2.62,6.42-.47,13.78-6.89,16.4-.13.05-.26.08-.39.08Z'
                  fill='currentColor'
                />
              </g>
            </g>
          </svg>
        </Link>
      </div>

      <div className={styles.container}>
        <nav>
          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <Link href='/'>Home</Link>
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

        <div>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
