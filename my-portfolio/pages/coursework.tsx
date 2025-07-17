import Layout from '../components/Layout';

const coursework = [
  'Data Structures & Algorithms',
  'Database Systems',
  'Operating Systems',
  'Machine Learning',
  'Web Development',
  'Computer Networks',
];

export default function Coursework() {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans">
        <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-accent dark:text-accent text-center font-sans">Relevant Coursework</h1>
          <div className="flex flex-wrap gap-4 justify-center">
            {coursework.map((course) => (
              <span key={course} className="px-4 py-2 bg-accent/10 dark:bg-accent/30 text-accent dark:text-accent rounded-full text-sm font-medium font-sans">
                {course}
              </span>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
} 