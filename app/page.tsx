import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.landingPageHeader}>
        <p className={styles.intro}>Welcome to</p>
        <h1 className={styles.name}>The Launch Market</h1>
        <h2 className={styles.info}>Coming Soon</h2>
      </header>

      <section className={styles.banner}>
        <p className={styles.cta}>Are you ready to launch your product or service to the market?</p>
      </section>
      
    </main>
  )
}
