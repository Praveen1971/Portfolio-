'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
}

export function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-300 relative overflow-hidden group';

  const variants = {
    primary:
      'bg-accent-500 text-dark-800 hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/20',
    secondary:
      'border border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-dark-800 hover:shadow-lg hover:shadow-accent-500/20',
    ghost: 'text-dark-50 hover:text-accent-500 border-b border-transparent hover:border-accent-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-body-sm rounded-md',
    md: 'px-6 py-3 text-body-md rounded-lg',
    lg: 'px-8 py-4 text-body-lg rounded-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <Link href={href} {...props}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={classes}
        >
          {children}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
