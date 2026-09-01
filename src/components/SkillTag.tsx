'use client';

import { motion } from 'framer-motion';

interface SkillTagProps {
  label: string;
  delay?: number;
}

export function SkillTag({ label, delay = 0 }: SkillTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, backgroundColor: 'rgb(0, 191, 255)' }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="inline-block px-4 py-2 rounded-full border border-dark-500 text-dark-300 hover:text-dark-800 transition-all duration-300 cursor-default"
    >
      {label}
    </motion.span>
  );
}
