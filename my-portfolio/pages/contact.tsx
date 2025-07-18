import Layout from '../components/Layout';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return false;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xpwlwykj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 font-sans">
        <section className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6 text-primary">Contact</h1>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 font-sans">
            Feel free to reach out to me via email or connect with me on LinkedIn and GitHub!
          </p>
          <div className="space-y-4 mb-8">
            <div>
              <span className="font-semibold text-secondary">Email:</span> <a href="mailto:mararnihar@gmail.com" className="text-primary hover:underline">mararnihar@gmail.com</a>
            </div>
            <div>
              <span className="font-semibold text-secondary">LinkedIn:</span> <a href="https://linkedin.com/in/nihar-marar/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/nihar-marar/</a>
            </div>
            <div>
              <span className="font-semibold text-secondary">GitHub:</span> <a href="https://github.com/NiharMarar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/NiharMarar</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 font-sans">
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Your Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" placeholder="Enter your name" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Your Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" placeholder="Enter your email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100" rows={4} placeholder="Type your message" required />
            </div>
            {error && <div className="text-red-500 mb-4 font-medium">{error}</div>}
            {status === 'success' && <div className="text-green-600 mb-4 font-medium">Thank you! Your message has been sent.</div>}
            {status === 'error' && <div className="text-red-500 mb-4 font-medium">Something went wrong. Please try again later.</div>}
            <button type="submit" className="btn-primary w-full" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>
      </div>
    </Layout>
  );
} 