import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <section className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-primary">Contact</h1>
        <p className="text-lg text-gray-700 mb-8">
          Feel free to reach out to me via email or connect with me on LinkedIn and GitHub!
        </p>
        <div className="space-y-4 mb-8">
          <div>
            <span className="font-semibold text-secondary">Email:</span> <a href="mailto:mararnihar@gmail.com" className="text-primary hover:underline">mararnihar@gmail.com</a>
          </div>
          <div>
            <span className="font-semibold text-secondary">LinkedIn:</span> <a href="https://linkedin.com/in/niharmarar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/niharmarar</a>
          </div>
          <div>
            <span className="font-semibold text-secondary">GitHub:</span> <a href="https://github.com/NiharMarar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/NiharMarar</a>
          </div>
        </div>
        <form className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" rows={4} placeholder="Type your message" />
          </div>
          <button type="submit" className="btn-primary w-full">Send Message</button>
        </form>
      </section>
    </Layout>
  );
} 