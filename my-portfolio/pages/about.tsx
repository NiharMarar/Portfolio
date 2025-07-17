import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans">
        <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-primary">About Me</h1>
          <a
            href="/NiharMarar_Resume.pdf"
            download
            className="btn-primary inline-block mb-8"
          >
            Download Resume
          </a>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 font-sans">
            Hi, I'm Nihar Marar, a full-stack developer and machine learning engineer passionate about building impactful web and data-driven applications. I have experience in Python, JavaScript, SQL, C++, and more, and enjoy working on both frontend and backend projects.
          </p>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-secondary">Education</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 font-sans">
              <li><b>University of California, Irvine</b> — Master of Computer Science (Aug 2025 – Dec 2026)</li>
              <li><b>University of California, Merced</b> — B.S. Computer Science & Engineering (Aug 2021 – May 2025)</li>
              <li><b>Yonsei University, Seoul</b> — Computer Science (Aug 2023 – Dec 2023)</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-secondary">Skills</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 font-sans">
              <li>Programming: Python, Java, JavaScript, R, SQL, C, C++, C#, Gradio, NumPy, OpenGL, Pandas, React</li>
              <li>Software: AWS, MATLAB, Microsoft Excel, MIPS Assembly, Godot</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
} 