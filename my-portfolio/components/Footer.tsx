import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-gray-300 hover:text-primary transition-colors">
            Nihar Marar
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/about" className="text-gray-300 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
} 