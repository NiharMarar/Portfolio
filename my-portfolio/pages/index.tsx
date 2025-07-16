

import Layout from '../components/Layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
    title: 'Atomic Archipelago',
    description: 'OS concurrency and scheduling puzzle with multi-threaded simulation.',
    link: 'https://github.com/NiharMarar/Atomic-Archipelago',
  },
  {
    title: 'HealthSync',
    description: 'Hospital database management system with UI and complex SQL queries.',
    link: 'https://github.com/NiharMarar/HealthSync-Database-Application',
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
      
      <div className="bg-red-500 text-white p-8">
        If you see a red box, Tailwind is working!
      </div>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center pt-16 pb-8 animate-fade-in">
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
          <a href="/projects" className="btn-primary">View My Work</a>
          <a href="/contact" className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">Get In Touch</a>
        </div>
        {/* Featured Projects Preview */}
        <section className="w-full max-w-4xl mb-12">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <div key={project.title} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 animate-fade-in">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-700 mb-2">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline font-medium">View on GitHub</a>
              </div>
            ))}
          </div>
        </section>
        {/* Scroll down arrow */}
        <a href="/about" className="mt-4 animate-bounce text-primary text-3xl">↓</a>
      </div>
    </Layout>
  );
}
