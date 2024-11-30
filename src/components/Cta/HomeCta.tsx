import { FiArrowRight } from 'react-icons/fi';
import styles from './HomeCta.module.css';
import CustomLink from '@/src/components/UI/Links/CustomBtnLink';

export default function HomeCta() {
  return (
    <section className={styles.cta}>
        <h2>Ready to Get Started?</h2>
        <p>Let's create something amazing together.</p>
        <CustomLink
          href='/contact'
          variant='primary'
          icon={FiArrowRight}
          iconPosition='right'
        >
          Start Your Project 
        </CustomLink>
      </section>
  );
}
