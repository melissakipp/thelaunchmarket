import styles from './HomeServicesFeatures.module.css';

export default function HomeServicesFeatures() {
  return (
    <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          <div>
            <h3>Web Design & Development</h3>
            <ul>
              <li>Custom website design</li>
              <li>Mobile-responsive development</li>
              <li>E-commerce solutions</li>
              <li>Search engine optimization (SEO)</li>
            </ul>
          </div>
          <div>
            <h3>Support & Maintenance</h3>
            <ul>
              <li>Regular updates and backups</li>
              <li>Performance optimization</li>
              <li>Security monitoring</li>
              <li>Content updates</li>
            </ul>
          </div>
        </div>
      </section>
  );
}