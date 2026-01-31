import { Container } from '@/components/layout/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - EasyDailyTools',
  description: 'Privacy Policy for EasyDailyTools. Learn how we handle your data and protect your privacy.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 31, 2026';

  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Last Updated: {lastUpdated}</p>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2>Introduction</h2>
          <p>
            Welcome to EasyDailyTools ("we," "our," or "us"). We are committed to protecting your privacy 
            and ensuring you have a positive experience on our website.
          </p>

          <h2>Information We Collect</h2>
          <h3>Tool Usage</h3>
          <p>
            All our tools run entirely in your web browser. We do not collect, store, or transmit any data 
            that you enter into our tools. All calculations and processing happen locally on your device.
          </p>

          <h3>Cookies and Tracking</h3>
          <p>
            We use cookies and similar tracking technologies to improve user experience and analyze website traffic. 
            This includes:
          </p>
          <ul>
            <li>Essential cookies for website functionality</li>
            <li>Analytics cookies to understand how visitors use our site</li>
            <li>Advertising cookies for Google AdSense (see below)</li>
          </ul>

          <h2>Google AdSense</h2>
          <p>
            We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve 
            ads based on your prior visits to our website or other websites. Google's use of advertising cookies 
            enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
          </p>
          <p>
            You may opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" 
               className="text-primary-600 hover:underline">
              Google Ads Settings
            </a>.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We may use third-party services for analytics and advertising purposes. These services may collect 
            information about your use of our website:
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> For website traffic analysis</li>
            <li><strong>Google AdSense:</strong> For displaying advertisements</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            Since all tool calculations happen in your browser and we don't store your input data, your information 
            remains private on your device. We implement appropriate technical measures to protect our website.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Our services are not directed to children under 13. We do not knowingly collect personal information 
            from children under 13.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Disable cookies in your browser settings</li>
            <li>Opt out of personalized advertising</li>
            <li>Request information about data we may have collected</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify users of any material changes 
            by posting the new policy on this page with an updated "Last Updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:{' '}
            <a href="/contact" className="text-primary-600 hover:underline">Contact Page</a>
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mt-8">
            <h3 className="text-yellow-900 dark:text-yellow-100 font-semibold mb-2">
              Important Notice
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              By using our website, you consent to our Privacy Policy and agree to its terms. 
              This includes the use of cookies and third-party advertising services like Google AdSense.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
