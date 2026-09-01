'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  external?: boolean;
}

function SocialLink({ icon, href, label, external = true }: SocialLinkProps) {
  const isEmail = href.startsWith('mailto:');
  const isPhone = href.startsWith('tel:');

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Link href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-dark-500 text-dark-300 hover:border-accent-500 hover:text-accent-500 transition-all duration-300 cursor-pointer">
          {icon}
        </span>
      </Link>
    </motion.div>
  );
}

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <SocialLink
        icon={<Mail size={20} />}
        href="mailto:itspraveenpatel1971@gmail.com"
        label="Email"
        external={false}
      />
      <SocialLink
        icon={<Linkedin size={20} />}
        href="https://linkedin.com/in/praveenpatel1971"
        label="LinkedIn"
      />
      <SocialLink
        icon={<Github size={20} />}
        href="https://github.com/Praveen1971"
        label="GitHub"
      />
      <SocialLink
        icon={<Phone size={20} />}
        href="tel:9506706903"
        label="Phone"
        external={false}
      />
    </div>
  );
}
