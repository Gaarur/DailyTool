import React from 'react';
import Link from 'next/link';
import { Container } from './Container';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">EasyDailyTools</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Simple online tools for everyday use. Fast, free, and no sign-up required.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Home</Link></li>
              <li><Link href="/tools" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">All Tools</Link></li>
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-600 dark:text-gray-400">Personal Tools</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">Financial Tools</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">File Tools</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">Text Tools</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
            <p>© {currentYear} EasyDailyTools. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              We use Google AdSense to show ads. See our{' '}
              <Link href="/privacy-policy" className="text-primary-600 dark:text-primary-400 hover:underline">
                Privacy Policy
              </Link>
              {' '}for cookie usage.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
