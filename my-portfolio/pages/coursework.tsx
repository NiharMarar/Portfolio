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
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-accent text-center">Relevant Coursework</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          {coursework.map((course) => (
            <span key={course} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              {course}
            </span>
          ))}
        </div>
      </section>
    </Layout>
  );
} 