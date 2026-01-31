import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getToolBySlug, tools } from '@/lib/data/tools';
import { ToolLayout } from '@/components/tools/ToolLayout';
import { SchemaMarkup, getToolSchema } from '@/components/seo/SchemaMarkup';

// Tool component imports
import { AgeCalculator } from '@/lib/tools/AgeCalculator';
import { BMICalculator } from '@/lib/tools/BMICalculator';
import { EMICalculator } from '@/lib/tools/EMICalculator';
import { PercentageCalculator } from '@/lib/tools/PercentageCalculator';
import { WordCounter } from '@/lib/tools/WordCounter';
import { ImageCompressor } from '@/lib/tools/ImageCompressor';
import { PDFToImageConverter } from '@/lib/tools/PDFToImageConverter';
import { FileSizeConverter } from '@/lib/tools/FileSizeConverter';
import { GSTCalculator } from '@/lib/tools/GSTCalculator';
import { SimpleInterestCalculator } from '@/lib/tools/SimpleInterestCalculator';

// Tool component mapping
const toolComponents: { [key: string]: React.ComponentType } = {
  'age-calculator': AgeCalculator,
  'bmi-calculator': BMICalculator,
  'emi-calculator': EMICalculator,
  'percentage-calculator': PercentageCalculator,
  'word-counter': WordCounter,
  'image-compressor': ImageCompressor,
  'pdf-to-image': PDFToImageConverter,
  'file-size-converter': FileSizeConverter,
  'gst-calculator': GSTCalculator,
  'simple-interest-calculator': SimpleInterestCalculator,
};

// Tool-specific content
const toolContent: { [key: string]: { howToUse: string[]; faqs: Array<{ question: string; answer: string }>; seoContent: string } } = {
  'age-calculator': {
    howToUse: [
      'Enter your date of birth in the date picker',
      'Click "Calculate Age" button',
      'View your exact age in years, months, and days',
      'See total days lived and days until your next birthday',
    ],
    faqs: [
      {
        question: 'How accurate is the age calculator?',
        answer: 'The age calculator is 100% accurate as it calculates based on your exact date of birth and the current date.',
      },
      {
        question: 'Can I calculate someone else\'s age?',
        answer: 'Yes, you can enter any valid date of birth to calculate age for anyone.',
      },
    ],
    seoContent: 'Our free age calculator helps you calculate your exact age in years, months, and days. Perfect for filling out forms, checking eligibility, or simply knowing your precise age. The calculator also shows you the total number of days you\'ve lived and counts down to your next birthday. All calculations are done instantly in your browser with complete privacy.',
  },
  'bmi-calculator': {
    howToUse: [
      'Select your preferred unit system (Metric or Imperial)',
      'Enter your weight and height',
      'Click "Calculate BMI" button',
      'View your BMI score and health category',
    ],
    faqs: [
      {
        question: 'What is a healthy BMI range?',
        answer: 'A healthy BMI is generally between 18.5 and 24.9. However, BMI is just one indicator and should be considered alongside other health factors.',
      },
      {
        question: 'Is BMI accurate for everyone?',
        answer: 'BMI may not be accurate for athletes, pregnant women, elderly people, or those with high muscle mass. Consult a healthcare professional for personalized advice.',
      },
    ],
    seoContent: 'Calculate your Body Mass Index (BMI) quickly and easily with our free BMI calculator. BMI is a measure of body fat based on your weight and height. Use our calculator to determine if you are underweight, normal weight, overweight, or obese. Supports both metric (kg, cm) and imperial (lbs, inches) measurements. Get instant results with health category classification.',
  },
  'emi-calculator': {
    howToUse: [
      'Enter the loan amount (principal)',
      'Input the interest rate per annum',
      'Enter the loan tenure in months or years',
      'Click "Calculate EMI" to see your monthly payment',
    ],
    faqs: [
      {
        question: 'What is EMI?',
        answer: 'EMI stands for Equated Monthly Installment. It is the fixed payment amount you make to the lender every month for a loan.',
      },
      {
        question: 'How is EMI calculated?',
        answer: 'EMI is calculated using the formula: P × r × (1 + r)^n / ((1 + r)^n - 1), where P is principal, r is monthly interest rate, and n is tenure in months.',
      },
    ],
    seoContent: 'Calculate your Equated Monthly Installment (EMI) for home loans, car loans, or personal loans with our free EMI calculator. Get instant calculations showing monthly EMI, total interest payable, and total amount to be paid. Perfect for planning your loan repayment and comparing different loan options. Supports flexible tenure selection in months or years.',
  },
  'percentage-calculator': {
    howToUse: [
      'Select your calculation mode',
      'Enter the required values',
      'Click "Calculate" to get instant results',
    ],
    faqs: [
      {
        question: 'What can I calculate with this tool?',
        answer: 'You can calculate what percentage X is of Y, what is X% of Y, and percentage change between two values.',
      },
    ],
    seoContent: 'Free percentage calculator for all your percentage needs. Calculate percentages, percentage increase, percentage decrease, and find what percentage one number is of another. Perfect for students, business calculations, discounts, tips, and everyday math. Fast, accurate, and easy to use.',
  },
  'word-counter': {
    howToUse: [
      'Type or paste your text into the text area',
      'View real-time statistics as you type',
      'See word count, character count, sentences, and more',
    ],
    faqs: [
      {
        question: 'Does the word counter include spaces?',
        answer: 'We show both character count with spaces and without spaces so you can use whichever you need.',
      },
    ],
    seoContent: 'Free online word counter tool. Count words, characters, sentences, paragraphs, and get reading time estimates for any text. Perfect for writers, students, bloggers, and content creators. Real-time counting as you type. No word limit, completely free to use.',
  },
  'image-compressor': {
    howToUse: [
      'Upload your image file',
      'Adjust the quality slider',
      'Click "Compress Image" to compress',
      'Download the compressed image',
    ],
    faqs: [
      {
        question: 'Is my image uploaded to a server?',
        answer: 'No, all compression happens in your browser. Your images never leave your device, ensuring complete privacy.',
      },
    ],
    seoContent: 'Compress images online for free with our client-side image compressor. Reduce image file size without uploading to any server. Your images stay private on your device. Perfect for optimizing images for websites, email, and social media. Supports JPG, PNG, and other common image formats.',
  },
  'pdf-to-image': {
    howToUse: [
      'Select your PDF file',
      'Choose output format (PNG or JPG)',
      'Convert PDF pages to images',
      'Download individual pages or all at once',
    ],
    faqs: [
      {
        question: 'How many pages can I convert?',
        answer: 'You can convert all pages from your PDF document. Each page will be saved as a separate image file.',
      },
    ],
    seoContent: 'Convert PDF to Image online for free. Turn PDF pages into high-quality PNG or JPG images. Perfect for extracting pages from PDF documents, creating thumbnails, or converting PDF presentations to images. Easy to use and works directly in your browser.',
  },
  'file-size-converter': {
    howToUse: [
      'Enter the file size value',
      'Select the source unit (B, KB, MB, GB, TB)',
      'Select the target unit',
      'Click "Convert" to see the result',
    ],
    faqs: [
      {
        question: 'What units are supported?',
        answer: 'We support conversion between Bytes (B), Kilobytes (KB), Megabytes (MB), Gigabytes (GB), and Terabytes (TB).',
      },
    ],
    seoContent: 'Free file size converter. Convert between bytes, kilobytes, megabytes, gigabytes, and terabytes instantly. Perfect for understanding storage requirements, file sizes, and data transfer calculations. Accurate conversion using standard binary calculations.',
  },
  'gst-calculator': {
    howToUse: [
      'Select whether to add or remove GST',
      'Enter the amount',
      'Select the GST rate (5%, 12%, 18%, 28%)',
      'Click "Calculate GST" to see the breakdown',
    ],
    faqs: [
      {
        question: 'What is CGST, SGST, and IGST?',
        answer: 'CGST is Central GST, SGST is State GST (for intra-state transactions), and IGST is Integrated GST (for inter-state transactions). IGST = CGST + SGST.',
      },
      {
        question: 'Which GST rate should I use?',
        answer: 'GST rates in India are 5%, 12%, 18%, and 28% depending on the goods or services. Check the GST rate applicable to your product category.',
      },
    ],
    seoContent: 'Free GST calculator for India. Calculate GST amount, CGST, SGST, and IGST with different tax rates (5%, 12%, 18%, 28%). Add GST to base amount or remove GST from inclusive amount. Perfect for businesses, accountants, and anyone dealing with Indian GST calculations.',
  },
  'simple-interest-calculator': {
    howToUse: [
      'Enter the principal amount',
      'Input the annual interest rate',
      'Enter the time period in years',
      'Click "Calculate Interest" to see results',
    ],
    faqs: [
      {
        question: 'What is simple interest?',
        answer: 'Simple interest is calculated on the principal amount only, using the formula: SI = (P × R × T) / 100, where P is principal, R is rate, and T is time.',
      },
      {
        question: 'What\'s the difference between simple and compound interest?',
        answer: 'Simple interest is calculated only on the principal, while compound interest is calculated on principal plus accumulated interest.',
      },
    ],
    seoContent: 'Free simple interest calculator. Calculate simple interest on principal amount for any time period. Get instant results showing interest amount and total value. Includes formula explanation. Perfect for students, investors, and anyone calculating simple interest for loans or deposits.',
  },
};

// Generate static params for all tools
export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

// Generate metadata for each tool
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} - Free Online Tool | EasyDailyTools`,
    description: tool.metaDescription,
    keywords: tool.keywords.join(', '),
    openGraph: {
      title: `${tool.name} | EasyDailyTools`,
      description: tool.metaDescription,
      type: 'website',
      url: `https://easydailytools.com/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const ToolComponent = toolComponents[tool.slug];
  const content = toolContent[tool.slug];

  if (!ToolComponent || !content) {
    notFound();
  }

  const schemaData = getToolSchema({
    name: tool.name,
    description: tool.description,
    url: `https://easydailytools.com/tools/${tool.slug}`,
  });

  return (
    <>
      <SchemaMarkup type="WebApplication" data={schemaData} />
      <ToolLayout
        title={tool.name}
        description={tool.description}
        category={tool.category}
        howToUse={content.howToUse}
        faqs={content.faqs}
        seoContent={content.seoContent}
      >
        <ToolComponent />
      </ToolLayout>
    </>
  );
}
