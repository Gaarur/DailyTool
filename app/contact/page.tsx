import { Container } from '@/components/layout/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - EasyDailyTools',
  description: 'Get in touch with EasyDailyTools. Send us your feedback, suggestions, or report issues.',
};

export default function ContactPage() {
  return (
    <Container className="py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        
        <div className="prose dark:prose-invert max-w-none mb-8">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We'd love to hear from you! Whether you have a question, suggestion, or feedback, 
            feel free to reach out.
          </p>
        </div>

        <div className="card p-8">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">📧 Email</h3>
              <p className="text-gray-600 dark:text-gray-400">
                contact@easydailytools.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">💬 Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                For technical support or bug reports, please email us with detailed information.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">💡 Suggestions</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Have an idea for a new tool? We'd love to hear about it! Send us your suggestions 
                and we'll consider adding them to our platform.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Response Time</h3>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            We typically respond to all inquiries within 24-48 hours during business days.
          </p>
        </div>
      </div>
    </Container>
  );
}
