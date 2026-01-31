import { Container } from '@/components/layout/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - EasyDailyTools',
  description: 'Disclaimer for EasyDailyTools online tools and calculators.',
};

export default function DisclaimerPage() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <h2>General Disclaimer</h2>
          <p>
            The information and tools provided on EasyDailyTools are for general informational purposes only. 
            While we strive to provide accurate and up-to-date tools, we make no representations or warranties 
            of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or 
            availability of the tools and information.
          </p>

          <h2>No Professional Advice</h2>
          <p>
            The tools and calculators provided on this website are not intended to provide professional advice. 
            Specifically:
          </p>
          <ul>
            <li>
              <strong>Medical/Health Tools (BMI Calculator, etc.):</strong> Results are not medical advice. 
              Consult a qualified healthcare professional for medical guidance.
            </li>
            <li>
              <strong>Financial Tools (EMI, Interest Calculators, etc.):</strong> Results are for informational 
              purposes only. Consult a qualified financial advisor for financial decisions.
            </li>
            <li>
              <strong>Tax Tools (GST Calculator):</strong> Tax laws and rates may change. Consult a tax 
              professional or accountant for accurate tax calculations and advice.
            </li>
          </ul>

          <h2>Accuracy of Results</h2>
          <p>
            While we make every effort to ensure the accuracy of our tools, we cannot guarantee that all 
            calculations and conversions are 100% accurate. Users should verify critical calculations using 
            alternative methods or professional services.
          </p>

          <h2>Use at Your Own Risk</h2>
          <p>
            Any reliance you place on information or results from our tools is strictly at your own risk. 
            We will not be liable for any loss or damage, including but not limited to:
          </p>
          <ul>
            <li>Financial losses from calculator errors</li>
            <li>Health issues from misinterpreting BMI or other health metrics</li>
            <li>Tax penalties from incorrect GST calculations</li>
            <li>Data loss from file conversion or compression tools</li>
          </ul>

          <h2>External Links</h2>
          <p>
            This website may contain links to external websites. We have no control over the content and 
            nature of these sites and are not responsible for their content or privacy practices.
          </p>

          <h2>Third-Party Advertisements</h2>
          <p>
            We display third-party advertisements through Google AdSense. We are not responsible for the 
            content of these advertisements or the products/services advertised.
          </p>

          <h2>Changes and Updates</h2>
          <p>
            We reserve the right to modify, update, or discontinue any tools or content on this website at 
            any time without notice.
          </p>

          <h2>Questions</h2>
          <p>
            If you have any questions about this disclaimer, please contact us through our{' '}
            <a href="/contact" className="text-primary-600 hover:underline">Contact Page</a>.
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mt-8">
            <h3 className="text-red-900 dark:text-red-100 font-semibold mb-2">
              Important Notice
            </h3>
            <p className="text-red-800 dark:text-red-200 text-sm">
              By using this website, you acknowledge that you have read this disclaimer and agree to its terms. 
              If you do not agree with this disclaimer, please do not use our tools or services.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
