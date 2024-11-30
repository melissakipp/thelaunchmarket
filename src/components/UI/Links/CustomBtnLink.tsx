import Link from 'next/link';
import { IconType } from 'react-icons';
import classNames from 'classnames';
import styles from './CustomBtnLink.module.css';

type Variant = 'link' | 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface CustomBtnLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

const CustomBtnLink: React.FC<CustomBtnLinkProps> = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className,
  external = false,
  disabled = false,
}) => {
  const classes = classNames(
    styles.base,          // Base styles
    styles[variant],      // Variant styles
    styles[size],         // Size styles
    {
      [styles.disabled]: disabled, // Conditional class for disabled state
    },
    className // Additional custom classes
  );

  const iconClasses = classNames(
    styles.icon, // Base icon styles
    {
      [styles.iconLeft]: iconPosition === 'left',
      [styles.iconRight]: iconPosition === 'right',
    }
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <span className={iconClasses}>
          <Icon />
        </span>
      )}
      <span className={styles.content}>{children}</span>
      {Icon && iconPosition === 'right' && (
        <span className={iconClasses}>
          <Icon />
        </span>
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-disabled={disabled}>
      {content}
    </Link>
  );
};

export default CustomBtnLink;
