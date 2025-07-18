import Layout from '../components/Layout';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'NEXUS Shopping Website',
    link: 'https://shopping-website-zeta-rose.vercel.app/',
    description: 'A cyberpunk-themed, full-stack e-commerce platform built with Next.js, React, and Supabase. Features a custom UI, secure authentication, Stripe payments, real-time shipping, admin dashboard, and user reviews.',
    tech: ['Next.js', 'React', 'Supabase', 'Stripe', 'Shippo', 'Tailwind CSS', 'Vercel'],
    image: '/NEXUS.png',
    bullets: [
      'Architected a scalable e-commerce platform with Next.js and Supabase, supporting user authentication, product catalog, cart, and order management with real-time updates.',
      'Designed and implemented a custom cyberpunk UI using Tailwind CSS, with animated components, responsive layouts, and consistent design language.',
      'Developed a secure admin dashboard for product and category management, leveraging Supabase Row Level Security (RLS) for granular access control and auditability.',
      'Integrated Stripe for PCI-compliant payment processing and Shippo for automated shipping label generation and real-time order tracking.',
      'Built a user review system with verified purchase detection, review sorting, and profile integration to enhance trust and engagement.',
      'Enforced security best practices: RLS on all sensitive tables, environment-based secrets, and comprehensive input validation.',
      'Deployed to Vercel for global performance, continuous integration, and zero-downtime updates; configured environment variables for seamless production and development workflows.',
      'Authored modular, reusable React components and custom hooks for state management, ensuring maintainability and extensibility for future features.'
    ]
  },
  {
    title: 'Atomic Archipelago - OS Concurrency and Scheduling Puzzle',
    link: 'https://github.com/NiharMarar/Atomic-Archipelago',
    description: 'Java-based synchronization primitives and concurrency at the OS level, with a multi-threaded simulation and deadlock-free operation.',
    tech: ['Java', 'Nachos', 'OS', 'Concurrency'],
    image: '/os_project.png',
    bullets: [
      'Engineered a kernel-level concurrency library in Java for the Nachos teaching OS, implementing custom Locks, Semaphores, Condition Variables, and a Communicator to guarantee atomic operations without busy-waiting',
      'Built a multi-threaded boat-crossing simulation that exercised 1,000+ concurrent threads; validated race-condition freedom, starvation avoidance, and correct hand-off scheduling under heavy stress tests',
      'Extended the Nachos scheduler to support priority donation and pre-emptive priority scheduling, cutting average thread wait time by 35 % in benchmark workloads',
      'Authored a comprehensive JUnit test suite and invariance checks, achieving 100 % pass rates on all course autograder and custom stress scenarios',
      'Produced detailed design documentation and API guidelines, enabling classmates to integrate the new primitives into later virtual-memory and file-system modules with zero regressions'
    ]
  },
  {
    title: 'HealthSync - Database Application',
    link: 'https://github.com/NiharMarar/HealthSync-Database-Application',
    description: 'Hospital database management system with UI for patient record management, scheduling, and billing. Complex SQL queries for data accuracy.',
    tech: ['Python', 'SQL', 'Flask'],
    image: '/hospital_db.png',
    bullets: [
      'Architected a fully-normalized relational schema (patients, clinicians, encounters, billing, inventory) with enforced foreign-key constraints and cascade rules, streamlining hospital-wide data integrity',
      'Developed a role-based web UI in Python/Flask that guides patients, doctors, and administrators through appointments, electronic health records, and inventory dashboards',
      'Authored and optimized 30+ advanced SQL queries and stored procedures (joins, window functions, nested subqueries) that cut financial-report runtimes from 30 s to under 5 s',
      'Implemented HIPAA-aligned security features—RBAC authentication, AES-encrypted PHI columns, and audit logging, ensuring secure patient record management and end-to-end billing accuracy'
    ]
  },
];

const allTags = Array.from(new Set(projects.flatMap(p => p.tech)));

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.tech.includes(filter));

  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans">
        <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-primary">Projects</h1>
          {/* Filter UI */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              className={`px-4 py-2 rounded-full border font-semibold transition-colors ${filter === 'All' ? 'bg-primary text-white' : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'}`}
              onClick={() => setFilter('All')}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`px-4 py-2 rounded-full border font-semibold transition-colors ${filter === tag ? 'bg-primary text-white' : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'}`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, idx) => (
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
                <h2 className="text-2xl font-semibold mb-2 text-secondary">{project.title}</h2>
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mt-auto">{project.title === 'NEXUS Shopping Website' ? 'View Live' : 'View on GitHub'}</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
} 