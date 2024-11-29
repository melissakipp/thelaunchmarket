import Link from 'next/link';
import { 
  BiSolidEnvelope, 
  BiCopyright, 
  BiLogoLinkedin, 
  BiLogoGithub,
  BiPalette,
  BiCode,
  BiSearchAlt
} from 'react-icons/bi';
import styles from '@/src/styles/components/Footer/Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Web Design', icon: <BiPalette /> },
    { name: 'Development', icon: <BiCode /> },
    { name: 'SEO', icon: <BiSearchAlt /> }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>The Launch Market</h4>
          <p className={styles.tagline}>
            Creating beautiful and functional websites that deliver results
          </p>
          <div className={styles.social}>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <BiLogoLinkedin />
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <BiLogoGithub />
            </Link>
            <Link href="mailto:info@thelaunchmarket.com" aria-label="Email">
              <BiSolidEnvelope />
            </Link>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4>Services</h4>
          <ul>
            {services.map((service, index) => (
              <li key={index}>
                {service.icon} {service.name}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Contact</h4>
          <p>
            <BiSolidEnvelope />{' '}
            <a href="mailto:info@thelaunchmarket.com">info@thelaunchmarket.com</a>
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          <BiCopyright /> {currentYear} Launch Market. All rights reserved.
          {' | '}
          <span>
            Created by <a href="https://melissajkipp.com">Melissa Kipp</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;