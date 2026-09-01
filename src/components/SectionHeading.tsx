'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function SectionHeading({ number, title, subtitle, children }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-label text-accent-500 font-semibold">{number}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-dark-500 to-transparent" />
      </div>
      <h2 className="text-display-md md:text-display-lg font-display font-bold text-dark-50 mb-4">
        {title}
      </h2>
      {subtitle && <p className="text-body-lg text-dark-300 max-w-3xl">{subtitle}</p>}
      {children}
    </motion.div>
  );
}
