import Layout from '../components/Layout';

const projects = [
  {
    title: 'Atomic Archipelago - OS Concurrency and Scheduling Puzzle',
    link: 'https://github.com/NiharMarar/Atomic-Archipelago',
    description: 'Java-based synchronization primitives and concurrency at the OS level, with a multi-threaded simulation and deadlock-free operation.',
    tech: 'Java, Nachos, OS, Concurrency',
  },
  {
    title: 'HealthSync - Database Application',
    link: 'https://github.com/NiharMarar/HealthSync-Database-Application',
    description: 'Hospital database management system with UI for patient record management, scheduling, and billing. Complex SQL queries for data accuracy.',
    tech: 'Python, SQL, Flask',
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-primary">Projects</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold mb-2 text-secondary">{project.title}</h2>
              <p className="text-gray-700 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 mb-4">Tech: {project.tech}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">View on GitHub</a>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
} 