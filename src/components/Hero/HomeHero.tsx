import { FiArrowRight } from 'react-icons/fi';
import styles from './HomeHero.module.css';
import CustomBtnLink from '../UI/Links/CustomBtnLink';


export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <h1 className='srOnly'>The Launch Market's home page</h1>
      <h2>Modern Web Design for <br />Your Growing Brand</h2>
      <p>Beautiful, functional websites built for your future. <br />No complexity, just results.</p>
      {/* Outline Button */}
      <CustomBtnLink 
        href='/about'
        variant='outline' 
        size='sm'
        icon={FiArrowRight}
        iconPosition='right'
      >
        Learn more <span className='srOnly'>about The Launch Market</span>
      </CustomBtnLink>
    </section>
  );
}
