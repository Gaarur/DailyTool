import React from 'react';
import { Container } from '../layout/Container';
import { Breadcrumbs } from '../seo/Breadcrumbs';
import { AdSenseAd } from '../ads/AdSenseAd';
import { Card } from '../ui/Card';

interface ToolLayoutProps {
  title: string;
  description: string;
  category: string;
  children: React.ReactNode;
  howToUse: string[];
  faqs: Array<{ question: string; answer: string }>;
  seoContent: string;
}

export const ToolLayout: React.FC<ToolLayoutProps> = ({
  title,
  description,
  category,
  children,
  howToUse,
  faqs,
  seoContent,
}) => {
  return (
    <Container className="py-8">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: title, href: '#' },
        ]}
      />

      {/* Hero Section */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{title}</h1>
          <span className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
            {category}
          </span>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      {/* Ad Placement 1 - Below Title */}
      <AdSenseAd slot="tool-header" format="horizontal" />

      {/* Tool UI */}
      <Card className="p-8 mb-8">
        {children}
      </Card>

      {/* Ad Placement 2 - After Tool UI */}
      <AdSenseAd slot="tool-mid" />

      {/* How to Use Section */}
      <Card className="p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How to Use</h2>
        <ol className="list-decimal list-inside space-y-2">
          {howToUse.map((step, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-300">{step}</li>
          ))}
        </ol>
      </Card>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* SEO Content Section */}
      <Card className="p-8 mb-8">
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300">{seoContent}</p>
        </div>
      </Card>

      {/* Ad Placement 3 - Bottom */}
      <AdSenseAd slot="tool-bottom" />
    </Container>
  );
};
