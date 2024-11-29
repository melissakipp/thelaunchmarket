import type { Metadata } from 'next';
import './Home.css';
import Hero from '@/src/components/Hero/HomeHero';
import HomeCta from '@/src/components/Cta/HomeCta';

export const metadata: Metadata = {
  title: 'Home | The Launch Market',
  description: 'Welcome to The Launch Market',
};

export default function Home() {
  return (
    <main className='homeMain'>
      <article>
        <Hero />
        <HomeCta />
      </article>
    </main>
  );
}
