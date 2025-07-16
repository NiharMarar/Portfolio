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
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-10 text-primary">Experience</h1>
        <div className="relative border-l-2 border-primary/30 pl-8">
          {experiences.map((exp, idx) => (
            <div key={exp.title} className="mb-12 animate-fade-in" style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}>
              <div className="absolute -left-4 top-2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
              <div className="mb-2 text-lg font-semibold text-secondary">{exp.title}</div>
              <div className="mb-1 text-gray-700 font-medium">{exp.company} <span className="text-gray-400">| {exp.location}</span></div>
              <div className="mb-2 text-sm text-gray-500">{exp.date}</div>
              <ul className="list-disc list-inside text-gray-700 ml-2">
                {exp.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
} 