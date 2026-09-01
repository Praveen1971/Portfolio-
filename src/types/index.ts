import type { ReactNode } from 'react';

export interface SectionProps {
  children?: ReactNode;
  id?: string;
  className?: string;
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  url?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  percentage?: string;
}
