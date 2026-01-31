import React from 'react';

interface SchemaMarkupProps {
  type: 'WebApplication' | 'Organization' | 'BreadcrumbList' | 'FAQPage';
  data: any;
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Tool page schema helper
export const getToolSchema = (tool: { name: string; description: string; url: string }) => {
  return {
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
};
