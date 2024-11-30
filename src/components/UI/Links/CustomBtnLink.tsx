import Link from 'next/link';
import classNames from 'classnames'; // Optional: Helps handle conditional classes
import styles from './CustomBtnLink.module.css'; // Define your CSS module

interface CustomLinkProps {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'outline'; // Define your variants
  className?: string; // Optional: Allow custom classes
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, text, variant = 'primary', className }) => {
  return (
    <Link
      href={href}
      className={classNames(styles.link, styles[variant], className)} // Apply base styles and variant styles
    >
      {text}
    </Link>
  );
};

export default CustomLink;