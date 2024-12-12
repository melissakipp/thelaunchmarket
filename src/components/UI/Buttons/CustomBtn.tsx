import React, { forwardRef } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/src/lib/utils/cn';

import styles from './CustomBtn.module.css';

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
  danger: styles.danger,
  ghost: styles.ghost
};

const sizes = {
  sm: styles.small,
  md: styles.medium,
  lg: styles.large
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  startIcon,
  endIcon,
  fullWidth = false,
  disabled,
  children,
  ...props
}, ref) => {
  const { theme } = useTheme();

  const buttonClasses = cn(
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    // Optional: Add theme-specific classes
    theme === 'dark' && styles[`${variant}Dark`],
    className
  );

  return (
    <button
      ref={ref}
      disabled={isLoading || disabled}
      className={buttonClasses}
      {...props}
    >
      {isLoading && (
        <svg 
          className={styles.spinner}
          fill="none" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle 
            className={styles.spinnerTrack}
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className={styles.spinnerHead}
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {!isLoading && startIcon && (
        <span className={styles.startIcon} aria-hidden="true">{startIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && endIcon && (
        <span className={styles.endIcon} aria-hidden="true">{endIcon}</span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;