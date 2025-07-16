import Layout from '../components/Layout';
import { useState } from 'react';

const projects = [
  {
    title: 'Atomic Archipelago - OS Concurrency and Scheduling Puzzle',
    link: 'https://github.com/NiharMarar/Atomic-Archipelago',
    description: 'Java-based synchronization primitives and concurrency at the OS level, with a multi-threaded simulation and deadlock-free operation.',
    tech: ['Java', 'Nachos', 'OS', 'Concurrency'],
    image: '/project-placeholder.png',
  },
  {
    title: 'HealthSync - Database Application',
    link: 'https://github.com/NiharMarar/HealthSync-Database-Application',
    description: 'Hospital database management system with UI for patient record management, scheduling, and billing. Complex SQL queries for data accuracy.',
    tech: ['Python', 'SQL', 'Flask'],
    image: '/project-placeholder.png',
  },
];

const allTags = Array.from(new Set(projects.flatMap(p => p.tech)));

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.tech.includes(filter));

  return (
    <Layout>
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
          {filteredProjects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 animate-fade-in flex flex-col">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4 bg-gray-100" />
              <h2 className="text-2xl font-semibold mb-2 text-secondary">{project.title}</h2>
              <p className="text-gray-700 mb-2 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mt-auto">View on GitHub</a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
} 