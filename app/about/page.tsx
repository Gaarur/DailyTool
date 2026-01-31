import { Container } from '@/components/layout/Container';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - EasyDailyTools',
  description: 'Learn about EasyDailyTools - your source for free, fast, and simple online tools for everyday use.',
};

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About EasyDailyTools</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Welcome to EasyDailyTools - your one-stop destination for simple, fast, and free online tools.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p>
            We believe that everyone should have access to powerful, easy-to-use tools without the hassle 
            of downloads, sign-ups, or complicated interfaces. Our mission is to provide a comprehensive 
            collection of daily-use tools that are fast, reliable, and completely free.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us?</h2>
          <ul>
            <li><strong>100% Free:</strong> All our tools are completely free to use with no hidden charges.</li>
            <li><strong>No Sign-up Required:</strong> Start using tools immediately without creating an account.</li>
            <li><strong>Privacy First:</strong> All calculations happen in your browser. We don't store your data.</li>
            <li><strong>Mobile Friendly:</strong> Optimized for all devices - phones, tablets, and desktops.</li>
            <li><strong>Fast & Simple:</strong> Clean interface with instant results.</li>
            <li><strong>Always Available:</strong> Access tools 24/7 from anywhere in the world.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Tools</h2>
          <p>
            We offer a wide range of tools across different categories including calculators, converters, 
            and utilities. From calculating your age and BMI to compressing images and converting files, 
            we've got you covered for your daily needs.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            Have suggestions for new tools? Found a bug? We'd love to hear from you! 
            Visit our <a href="/contact" className="text-primary-600 hover:underline">contact page</a> to get in touch.
          </p>
        </div>
      </div>
    </Container>
  );
}
