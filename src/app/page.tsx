import type { Metadata } from 'next';
import styles from './Home.module.css'; 
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
    <main className={styles.homeMain}> 
      <article>
        <Hero /> 
        <Feature />
        <ServicesFeatures />
        <Cta />  
      </article>
    </main>
  );
}