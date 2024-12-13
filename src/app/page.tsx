import type { Metadata } from 'next';
import styles from '@/src/styles/Home.module.css'; 
import Hero from '@/src/components/Hero/HomeHero';
import Feature from '@/src/components/Features/HomeFeature';
import ServicesFeatures from '@/src/components/Features/HomeServicesFeatures';
import Cta from '@/src/components/Cta/HomeCta'; 

export const metadata: Metadata = {
  title: 'Home | The Launch Market',
  description: 'Welcome to The Launch Market',
};

export default function Home() {
  return (
    <div className={styles.homeMain}> 
      <article className={styles.homeContainer}>
        <Hero /> 
        <Feature />
        <ServicesFeatures />
        <Cta />  
      </article>
    </div>
  );
}