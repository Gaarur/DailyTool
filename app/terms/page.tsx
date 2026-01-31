import { Container } from '@/components/layout/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - EasyDailyTools',
  description: 'Terms and Conditions for using EasyDailyTools website and services.',
};

export default function TermsPage() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using EasyDailyTools, you accept and agree to be bound by the terms and provisions 
            of this agreement.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to use our tools for personal and commercial purposes. This license shall 
            automatically terminate if you violate any of these restrictions.
          </p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Use tools in a lawful manner</li>
            <li>Do not attempt to compromise the security of the website</li>
            <li>Do not use tools for any illegal or harmful purposes</li>
            <li>Respect intellectual property rights</li>
          </ul>

          <h2>4. Tool Accuracy</h2>
          <p>
            While we strive to ensure our tools are accurate, we make no warranties about the completeness, 
            reliability, or accuracy of the results. See our Disclaimer for more information.
          </p>

          <h2>5. Availability</h2>
          <p>
            We do not guarantee that our services will be uninterrupted or error-free. We reserve the right 
            to modify, suspend, or discontinue any part of our services at any time.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content 
            or privacy practices of these external sites.
          </p>

          <h2>7. Advertisements</h2>
          <p>
            We display advertisements through Google AdSense. These ads are served by third parties and may 
            use cookies. We are not responsible for the content of these advertisements.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            The content, layout, design, data, and graphics on this website are protected by intellectual 
            property laws. Unauthorized use is prohibited.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            EasyDailyTools and its operators will not be liable for any damages arising from the use or 
            inability to use our services, including but not limited to direct, indirect, incidental, or 
            consequential damages.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of the website after 
            changes constitutes acceptance of the modified terms.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with applicable laws.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            For questions about these Terms & Conditions, please contact us through our{' '}
            <a href="/contact" className="text-primary-600 hover:underline">Contact Page</a>.
          </p>
        </div>
      </div>
    </Container>
  );
}
