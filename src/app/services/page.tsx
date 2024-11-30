import Link from 'next/link';
import {
  FiLayout,
  FiCode,
  FiFeather,
  FiShoppingCart,
  FiSearch,
  FiSettings,
  FiZap,
  FiGlobe,
} from 'react-icons/fi';
import styles from './Services.module.css';
import ServiceCta from '@/src/components/Cta/ServiceCta';
import ServiceHero from '@/src/components/Hero/ServiceHero';

interface ServiceItem {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

interface ClientType {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CoreValue {
  id: number;
  title: string;
  description: string;
}

const ServicesPage = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      icon: FiLayout,
      title: 'UI/UX Design',
      description: 'User-centric design that focuses on conversion optimization and customer engagement across all platforms.',
      color: 'primary',
    },
    {
      id: 2,
      icon: FiCode,
      title: 'Web Development',
      description: "Custom website development that's fast, secure, and user-friendly, built with the latest technologies.",
      color: 'secondary',
    },
    {
      id: 3,
      icon: FiFeather,
      title: 'Brand Identity',
      description: 'Transform your brand through strategic visual identity and compelling communications.',
      color: 'info',
    },
    {
      id: 4,
      icon: FiShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Custom online store development with secure payment processing and inventory management.',
      color: 'warning',
    },
    {
      id: 5,
      icon: FiSearch,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      color: 'error',
    },
    {
      id: 6,
      icon: FiSettings,
      title: 'Website Maintenance',
      description: 'Ongoing support and updates to keep your website secure, fast, and up-to-date.',
      color: 'success',
    },
  ];

  const clientTypes: ClientType[] = [
    {
      id: 1,
      icon: FiZap,
      title: 'Startups',
      description:
        'We understand the unique challenges startups face and provide iterative, growth-focused solutions that add value while working within your constraints.',
    },
    {
      id: 2,
      icon: FiSettings,
      title: 'Small Businesses',
      description:
        'We help small businesses overcome scaling challenges with time-efficient solutions that ensure smooth operations and sustainable growth.',
    },
    {
      id: 3,
      icon: FiGlobe,
      title: 'Non-Profits',
      description:
        'We support your mission by solving technical challenges and raising awareness for your cause, helping you make a bigger impact in the world.',
    },
  ];

  const coreValues: CoreValue[] = [
    {
      id: 1,
      title: 'Quality First',
      description: 'We are committed to delivering high-quality work in every project.',
    },
    {
      id: 2,
      title: 'Impact Driven',
      description: 'Passionate about helping businesses succeed and making a positive impact.',
    },
    {
      id: 3,
      title: 'Customer Focus',
      description: 'Dedicated to outstanding customer service and building strong partnerships.',
    },
    {
      id: 4,
      title: 'Innovation',
      description: 'Bringing innovation and creativity to design and development solutions.',
    },
    {
      id: 5,
      title: 'Empathy',
      description: 'Maintaining an empathy-driven, caring, and service-oriented mindset.',
    },
  ];

  return (
    <main className={styles.serviceContainer}>
      <article className={styles.servicesPage}>
        
        <ServiceHero />

        <section className={styles.servicesSection}>
          <div>
            <ul className={styles.servicesGrid}>
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <li key={service.id} className={`${styles.serviceCard} ${styles[service.color]}`}>
                    <div className={styles.icon}>
                      <IconComponent size={24} aria-hidden='true'/>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className={styles.coreValues}>
          <div>
            <h2>Our Core Values</h2>
            <ul className={styles.valuesGrid}>
              {coreValues.map((value) => (
                <li key={value.id} className={styles.valueCard}>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.clientTypes}>
          <div>
            <h2>Who We Serve</h2>
            <ul className={styles.clientsGrid}>
              {clientTypes.map((client) => {
                const IconComponent = client.icon;
                return (
                  <li key={client.id} className={styles.clientCard}>
                    <div className={styles.icon}>
                      <IconComponent size={24} aria-hidden='true'/>
                    </div>
                    <h3>{client.title}</h3>
                    <p>{client.description}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <ServiceCta />
        
      </article>
    </main>
  );
};

export default ServicesPage;
