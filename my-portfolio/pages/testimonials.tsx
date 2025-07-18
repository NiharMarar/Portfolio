import Layout from '../components/Layout';

export default function Testimonials() {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans">
        <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-primary dark:text-accent text-center">Testimonials</h1>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-200 font-sans mb-2">No testimonials yet.</p>
            <p className="text-gray-500 dark:text-gray-400 font-sans">Check back soon for feedback from colleagues, clients, and collaborators!</p>
          </div>
        </section>
      </div>
    </Layout>
  );
} 