import type { Metadata } from 'next';
import Image from 'next/image';

import styles from '@/styles/Services.module.scss';

export const metadata: Metadata = {
  title: 'Services | The Launch Market',
  description: 'Welcome to The Launch Market',
};

export default function Services() {
  return (
    <article className={styles.container}>
      <h1 className="srOnly">Services</h1>
      <section className={styles.intro}>
        <Image 
          className={styles.image}
          src="/images/superstition-mountains-2024_by-melissa-j-kipp.webp" 
          alt="An photo of the Superstition Mountains in Arizona with the sun setting west of the mountain range, which casted a warm glow on the mountains." 
          width={1000} 
          height={400}
          unoptimized
          loading='lazy'
          aria-hidden="true"
        />
        <p className={styles.text}>At The Launch Market, we're dedicated to helping your business thrive with tailored design, development, and marketing solutions. Whether you're looking to build a new website, refine your branding, or launch a targeted marketing campaign, our team is here to guide you every step of the way. Our proven process ensures clear communication, high-quality results, and a seamless experience from start to finish. Learn more about our services below, and get in touch to discuss how we can help you achieve your goals.</p>
      </section>
      <div className={styles.offer}>
        <section>
          <h2 className={styles.title}>Digital Marketing Services</h2>
          <p>Our digital marketing services are designed to elevate your brand and connect you with your target audience through strategic campaigns. We tailor each marketing plan based on your unique needs and business goals.</p>
         <h3>What We Offer:</h3> 
          <ul>
            <li>
              <p><strong>Search Engine Optimization (SEO):</strong>&nbsp; Optimize your site to rank higher in search engines and drive organic traffic.</p>
            </li>
            <li>
              <p><strong>Pay-Per-Click (PPC) Campaigns</strong>:&nbsp;Strategize and manage targeted paid ad campaigns on Google, Facebook, and Instagram to get immediate visibility.</p>
            </li>
            <li>
              <p><strong>Social Media Management</strong>:&nbsp;We create engaging content and manage your presence on social platforms to grow your audience and foster engagement.</p>
            </li>
            <li>
              <p><strong>Email Marketing</strong>:&nbsp;From crafting compelling newsletters to automating email funnels, we help nurture leads and retain customers.</p>
            </li>
            <li>
              <p><strong>Analytics and Reporting</strong>:&nbsp;Data-driven marketing decisions are essential. We provide in-depth reporting and analysis to measure the success of your campaigns and continuously optimize for better results.</p>
            </li>
          </ul>
        </section>
      </div>
    </article>
  )
}
