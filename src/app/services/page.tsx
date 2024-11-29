import Link from 'next/link';
import { 
  FiLayout, 
  FiCode, 
  FiFeather, 
  FiShoppingCart, 
  FiSearch, 
  FiSettings, 
  FiZap, 
  FiGlobe 
} from 'react-icons/fi';
import './Services.css';

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
      color: 'blue'
    },
    {
      id: 2,
      icon: FiCode,
      title: 'Web Development',
      description: "Custom website development that's fast, secure, and user-friendly, built with the latest technologies.",
      color: 'green'
    },
    {
      id: 3,
      icon: FiFeather,
      title: 'Brand Identity',
      description: 'Transform your brand through strategic visual identity and compelling communications.',
      color: 'purple'
    },
    {
      id: 4,
      icon: FiShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Custom online store development with secure payment processing and inventory management.',
      color: 'yellow'
    },
    {
      id: 5,
      icon: FiSearch,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      color: 'red'
    },
    {
      id: 6,
      icon: FiSettings,
      title: 'Website Maintenance',
      description: 'Ongoing support and updates to keep your website secure, fast, and up-to-date.',
      color: 'indigo'
    }
  ];

  const clientTypes: ClientType[] = [
    {
      id: 1,
      icon: FiZap,
      title: 'Startups',
      description: 'We understand the unique challenges startups face and provide iterative, growth-focused solutions that add value while working within your constraints.'
    },
    {
      id: 2,
      icon: FiSettings,
      title: 'Small Businesses',
      description: 'We help small businesses overcome scaling challenges with time-efficient solutions that ensure smooth operations and sustainable growth.'
    },
    {
      id: 3,
      icon: FiGlobe,
      title: 'Non-Profits',
      description: 'We support your mission by solving technical challenges and raising awareness for your cause, helping you make a bigger impact in the world.'
    }
  ];

  const coreValues: CoreValue[] = [
    {
      id: 1,
      title: 'Quality First',
      description: 'We are committed to delivering high-quality work in every project.'
    },
    {
      id: 2,
      title: 'Impact Driven',
      description: 'Passionate about helping businesses succeed and making a positive impact.'
    },
    {
      id: 3,
      title: 'Customer Focus',
      description: 'Dedicated to outstanding customer service and building strong partnerships.'
    },
    {
      id: 4,
      title: 'Innovation',
      description: 'Bringing innovation and creativity to design and development solutions.'
    },
    {
      id: 5,
      title: 'Empathy',
      description: 'Maintaining an empathy-driven, caring, and service-oriented mindset.'
    }
  ];

  return (
    <main className="serviceContainer">
      <article className='servicesPage'>
        <section className="serviceHero">
          <h1>Transform Your Digital Presence</h1>
          <p>We define, design, and develop world-class digital products that people love to use, helping businesses succeed by connecting them with the right customers online.</p>
        </section>

        <section className="servicesSection">
          <div>
            <div className="servicesGrid">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div key={service.id} className={`serviceCard ${service.color}`}>
                    <div className="icon">
                      <IconComponent size={24} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="coreValues">
          <div>
            <h2>Our Core Values</h2>
            <div className="valuesGrid">
              {coreValues.map((value) => (
                <div key={value.id} className="valueCard">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="clientTypes">
          <div>
            <h2>Who We Serve</h2>
            <div className="clientsGrid">
              {clientTypes.map((client) => {
                const IconComponent = client.icon;
                return (
                  <div key={client.id} className="clientCard">
                    <div className="icon">
                      <IconComponent size={24} />
                    </div>
                    <h3>{client.title}</h3>
                    <p>{client.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta">
          <div>
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>Let's work together to create something amazing.</p>
            <Link href="/contact" className="primaryBtn">Get Started by contact us</Link>
          </div>
        </section>
      </article>
    </main>
  );
};

export default ServicesPage;