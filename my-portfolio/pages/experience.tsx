import Layout from '../components/Layout';

const experiences = [
  {
    title: 'Machine Learning Engineer Intern',
    company: 'X10e',
    location: 'Mountain View, CA',
    date: 'Jan 2025 – May 2025',
    description: [
      'Developed a platform for analyzing genetic (RNA) data related to Traumatic Brain Injury (TBI).',
      'Created an intuitive web interface for practitioners to explore critical genomic factors.',
      'Leveraged AWS, Gradio, and ML techniques (LightGBM, XGBoost, CatBoost, etc.).',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Avitam Consulting Inc',
    location: 'San Diego, CA',
    date: 'Jan 2024 – Dec 2024',
    description: [
      'Supported development and integration of internal tools for startup clients.',
      'Contributed to backend development tasks for client-facing platforms using JDE, SQL, Python, and ERP-related technologies.',
    ],
  },
  {
    title: 'Code Instructor',
    company: 'Code Ninjas Rancho Bernardo',
    location: 'San Diego, CA',
    date: 'June 2022 – Present',
    description: [
      'Teach Data Structures and Algorithms in Python, C++, C#, and JavaScript.',
      'Helped students develop projects and solve coding challenges.',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'UC Merced',
    location: 'Merced, CA',
    date: 'Feb 2023 – May 2023',
    description: [
      'Developed a cost-effective eye-tracking software solution.',
      'Engineered a MATLAB-based PDF tracking tool for cursor position analysis.',
    ],
  },
];

export default function Experience() {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans">
        <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-10 text-primary dark:text-accent">Experience</h1>
          <div className="relative border-l-2 border-primary dark:border-accent pl-8">
            {experiences.map((exp, idx) => (
              <div key={exp.title} className="mb-12 relative">
                <span className="absolute -left-5 top-1.5 w-4 h-4 bg-primary dark:bg-accent rounded-full border-2 border-white dark:border-gray-900"></span>
                <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 font-sans">{exp.title}</h3>
                <div className="font-semibold text-gray-700 dark:text-gray-300 font-sans">{exp.company} <span className="text-gray-400 dark:text-gray-400">| {exp.location}</span></div>
                <div className="text-gray-400 dark:text-gray-400 mb-2 font-sans">{exp.date}</div>
                <ul className="list-disc ml-5 text-gray-700 dark:text-gray-200 text-base font-medium font-sans">
                  {exp.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
} 