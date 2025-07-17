import Layout from '../components/Layout';
import { FaPython, FaJava, FaReact, FaAws, FaDatabase, FaJs, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <FaPython className="text-3xl text-blue-500" />, level: 95 },
  { name: 'JavaScript', icon: <FaJs className="text-3xl text-yellow-400" />, level: 90 },
  { name: 'TypeScript', icon: <SiTypescript className="text-3xl text-blue-600" />, level: 80 },
  { name: 'Java', icon: <FaJava className="text-3xl text-red-500" />, level: 85 },
  { name: 'C++', icon: <SiCplusplus className="text-3xl text-blue-700" />, level: 75 },
  { name: 'React', icon: <FaReact className="text-3xl text-cyan-400" />, level: 90 },
  { name: 'AWS', icon: <FaAws className="text-3xl text-orange-400" />, level: 70 },
  { name: 'SQL', icon: <FaDatabase className="text-3xl text-gray-500" />, level: 85 },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-3xl text-blue-800" />, level: 70 },
  { name: 'MongoDB', icon: <SiMongodb className="text-3xl text-green-600" />, level: 65 },
  { name: 'Git', icon: <FaGitAlt className="text-3xl text-orange-600" />, level: 80 },
  { name: 'Linux', icon: <FaLinux className="text-3xl text-black" />, level: 75 },
];

export default function Skills() {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans">
        <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-10 text-primary">Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl shadow p-4 border border-gray-200 dark:border-gray-700 animate-fade-in font-sans">
                <div>{skill.icon}</div>
                <div className="flex-1">
                  <div className="font-semibold text-lg text-secondary mb-1 font-sans">{skill.name}</div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-1 overflow-hidden">
                    <div className="bg-green-500 h-4 rounded-full transition-all duration-700" style={{ width: `${skill.level}%`, minWidth: '8px' }}></div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-300 font-sans">Proficiency: {skill.level}%</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
} 