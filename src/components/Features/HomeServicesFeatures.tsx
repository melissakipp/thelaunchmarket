import styles from './HomeServicesFeatures.module.css';
import Card  from '../UI/Cards/Card';
import CardHeader  from '../UI/Cards/CardHeader';
import CardContent  from '../UI/Cards/CardContent';

const serviceCategories = [
  {
    id: 'web-design',
    title: 'Web Design & Development',
    description: 'Crafting your digital presence',
    features: [
      'Brand-focused design',
      'Mobile-responsive sites',
      'E-commerce platforms',
      'Search engine optimization (SEO)'
    ]
  },
  {
    id: 'support',
    title: 'Support & Maintenance',
    description: 'Keeping your website secure and up-to-date',
    features: [
      'Regular updates and backups',
      'Performance optimization',
      'Security monitoring',
      'Content updates'
    ]
  }
];

export default function HomeServicesFeatures() {
  return (
    <section 
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <div className={styles.container}>
        <h2 
          id="services-heading"
          className={styles.heading}
        >
          Our Services
        </h2>
        
        <div className={styles.grid}>
          {serviceCategories.map((category) => (
            <Card 
              key={category.id}
              role="region" 
              aria-labelledby={`title-${category.id}`}
              className={styles.card}
            >
              <CardHeader className={styles.cardHeader}>
                <h3 
                  id={`title-${category.id}`}
                  className={styles.cardTitle}
                >
                  {category.title}
                </h3>
                <p className={styles.cardDescription}>
                  {category.description}
                </p>
              </CardHeader>
              <CardContent className={styles.cardContent}>
                <ul 
                  className={styles.featureList}
                  aria-label={`${category.title} features`}
                >
                  {category.features.map((feature, index) => (
                    <li 
                      key={index}
                      className={styles.featureItem}
                    >
                      <span className={styles.bullet} aria-hidden="true" />
                       {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}