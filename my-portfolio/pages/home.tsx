import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'React', icon: '⚛️' },
  { name: 'AWS', icon: '☁️' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'C++', icon: '💻' },
  { name: 'Java', icon: '☕' },
];

const featuredProjects = [
  {
    title: 'NEXUS Shopping Website',
    description: 'A cyberpunk-themed, full-stack e-commerce platform built with Next.js, React, and Supabase. Features a custom UI, secure authentication, Stripe payments, real-time shipping, admin dashboard, and user reviews.',
    link: 'https://shopping-website-zeta-rose.vercel.app/',
    bullets: [
      'Architected a scalable e-commerce platform with Next.js and Supabase, supporting user authentication, product catalog, cart, and order management with real-time updates.',
      'Designed and implemented a custom cyberpunk UI using Tailwind CSS, with animated components, responsive layouts, and consistent design language.',
      'Developed a secure admin dashboard for product and category management, leveraging Supabase Row Level Security (RLS) for granular access control and auditability.',
      'Integrated Stripe for PCI-compliant payment processing and Shippo for automated shipping label generation and real-time order tracking.',
      'Built a user review system with verified purchase detection, review sorting, and profile integration to enhance trust and engagement.',
      'Enforced security best practices: RLS on all sensitive tables, environment-based secrets, and comprehensive input validation.',
      'Deployed to Vercel for global performance, continuous integration, and zero-downtime updates; configured environment variables for seamless production and development workflows.',
      'Authored modular, reusable React components and custom hooks for state management, ensuring maintainability and extensibility for future features.'
    ],
    tech: ['Next.js', 'React', 'Supabase', 'Stripe', 'Shippo', 'Tailwind CSS', 'Vercel'],
    image: '/NEXUS.png',
  },
  {
    title: 'Atomic Archipelago - OS Concurrency and Scheduling Puzzle',
    description: 'Java-based synchronization primitives and concurrency at the OS level, with a multi-threaded simulation and deadlock-free operation.',
    link: 'https://github.com/NiharMarar/Atomic-Archipelago',
    bullets: [
      'Engineered a kernel-level concurrency library in Java for the Nachos teaching OS, implementing custom Locks, Semaphores, Condition Variables, and a Communicator to guarantee atomic operations without busy-waiting',
      'Built a multi-threaded boat-crossing simulation that exercised 1,000+ concurrent threads; validated race-condition freedom, starvation avoidance, and correct hand-off scheduling under heavy stress tests',
      'Extended the Nachos scheduler to support priority donation and pre-emptive priority scheduling, cutting average thread wait time by 35% in benchmark workloads',
      'Authored a comprehensive JUnit test suite and invariance checks, achieving 100% pass rates on all course autograder and custom stress scenarios',
      'Produced detailed design documentation and API guidelines, enabling classmates to integrate the new primitives into later virtual-memory and file-system modules with zero regressions'
    ],
    tech: ['Java', 'Nachos', 'OS', 'Concurrency'],
    image: '/os_project.png',
  },
  {
    title: 'HealthSync - Database Application',
    description: 'Hospital database management system with UI for patient record management, scheduling, and billing. Complex SQL queries for data accuracy.',
    link: 'https://github.com/NiharMarar/HealthSync-Database-Application',
    bullets: [
      'Architected a fully-normalized relational schema (patients, clinicians, encounters, billing, inventory) with enforced foreign-key constraints and cascade rules, streamlining hospital-wide data integrity',
      'Developed a role-based web UI in Python/Flask that guides patients, doctors, and administrators through appointments, electronic health records, and inventory dashboards',
      'Authored and optimized 30+ advanced SQL queries and stored procedures (joins, window functions, nested subqueries) that cut financial-report runtimes from 30 s to under 5 s',
      'Implemented HIPAA-aligned security features—RBAC authentication, AES-encrypted PHI columns, and audit logging, ensuring secure patient record management and end-to-end billing accuracy'
    ],
    tech: ['Python', 'SQL', 'Flask'],
    image: '/hospital_db.png',
  },
];

const subtitles = [
  'Full-Stack Developer',
  'Machine Learning Engineer',
  'Building the Future of the Web',
];

export default function Home() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((i) => (i + 1) % subtitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center pt-16 pb-8 animate-fade-in font-sans">
        {/* Avatar */}
        <div className="mb-6">
          <Image
            src="/avatar.jpg"
            alt="Nihar Marar"
            width={160}
            height={160}
            className="rounded-full border-4 border-primary shadow-lg"
            priority
          />
        </div>
        {/* Name with gradient */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-slide-up">
          Nihar Marar
        </h1>
        {/* Animated subtitle */}
        <div className="h-10 mb-6">
          <span className="text-xl md:text-2xl text-gray-700 font-semibold transition-all duration-500 animate-fade-in">
            {subtitles[subtitleIndex]}
          </span>
        </div>
        {/* Download Resume Button */}
        <a
          href="/NiharMarar_Resume.pdf"
          download
          className="btn-primary inline-block mb-8"
        >
          Download Resume
        </a>
        {/* Skills row */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-xs text-gray-600 mt-1">{skill.name}</span>
            </div>
          ))}
        </div>
        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link href="/projects" className="btn-primary">View My Work</Link>
          <Link href="/contact" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">Get In Touch</Link>
        </div>
        {/* Featured Projects Preview */}
        <section className="w-full max-w-4xl mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 animate-fade-in flex flex-col h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.15)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <Image src={project.image} alt={project.title} width={400} height={160} className="w-full h-40 object-cover rounded-lg mb-4 bg-gray-100" />
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <div>
                  <p className="text-gray-500 dark:text-gray-300 font-sans font-normal mb-2">{project.description}</p>
                  {project.bullets && (
                    <ul className="list-disc list-inside mb-2 text-gray-700 dark:text-gray-200 text-base font-medium font-sans">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex-1" />
                <div>
                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">{tech}</span>
                      ))}
                    </div>
                  )}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mt-auto">{project.title === 'NEXUS Shopping Website' ? 'View Live' : 'View on GitHub'}</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Coursework Section */}
        <section className="w-full max-w-4xl mb-12">
          <h2 className="text-2xl font-bold text-accent mb-6 text-center">Relevant Coursework</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {['Data Structures & Algorithms', 'Database Systems', 'Operating Systems', 'Machine Learning', 'Web Development', 'Computer Networks'].map((course) => (
              <span key={course} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                {course}
              </span>
            ))}
          </div>
        </section>
        {/* Scroll down arrow */}
        <Link href="/about" className="mt-4 animate-bounce text-primary text-3xl">↓</Link>
      </div>
    </Layout>
  );
} 