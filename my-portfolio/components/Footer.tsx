import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900 text-gray-300 py-8 mt-16 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-lg font-bold tracking-wide">
          Nihar Marar
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="https://github.com/NiharMarar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com/in/nihar-marar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="mailto:mararnihar@gmail.com" aria-label="Email">
            <FaEnvelope className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-4">
        &copy; {new Date().getFullYear()} Nihar Marar. All rights reserved.
      </div>
    </footer>
  );
} 