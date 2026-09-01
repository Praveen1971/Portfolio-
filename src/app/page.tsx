'use client';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Toolkit } from '@/components/sections/Toolkit';
import { Projects } from '@/components/sections/Projects';
import { Impact } from '@/components/sections/Impact';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-800">
      <Hero />
      <About />
      <Experience />
      <Toolkit />
      <Projects />
      <Impact />
      <Education />
      <Contact />
    </main>
  );
}
