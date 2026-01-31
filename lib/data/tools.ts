export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'Personal' | 'Financial' | 'File' | 'Text';
  icon: string;
  slug: string;
  keywords: string[];
  popular: boolean;
  metaDescription: string;
}

export const tools: Tool[] = [
  {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate your exact age in years, months, and days from your date of birth',
    category: 'Personal',
    icon: '🎂',
    slug: 'age-calculator',
    keywords: ['age', 'birthday', 'date of birth', 'calculate age', 'years old'],
    popular: true,
    metaDescription: 'Free online age calculator. Calculate your exact age in years, months, days, hours from your date of birth. Simple and accurate age calculation tool.',
  },
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index and check if you are in a healthy weight range',
    category: 'Personal',
    icon: '⚖️',
    slug: 'bmi-calculator',
    keywords: ['bmi', 'body mass index', 'weight', 'health', 'fitness'],
    popular: true,
    metaDescription: 'Free BMI calculator. Calculate your Body Mass Index (BMI) using weight and height. Check if you are underweight, normal, overweight, or obese.',
  },
  {
    id: 'emi-calculator',
    name: 'EMI Calculator',
    description: 'Calculate your monthly EMI for loans with detailed amortization schedule',
    category: 'Financial',
    icon: '💰',
    slug: 'emi-calculator',
    keywords: ['emi', 'loan', 'installment', 'interest', 'mortgage'],
    popular: true,
    metaDescription: 'Free EMI calculator for home loan, car loan, personal loan. Calculate monthly EMI, total interest, and amortization schedule instantly.',
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate percentages, percentage increase, decrease, and more',
    category: 'Financial',
    icon: '📊',
    slug: 'percentage-calculator',
    keywords: ['percentage', 'percent', 'calculate', 'increase', 'decrease'],
    popular: true,
    metaDescription: 'Free percentage calculator. Calculate percentages, percentage increase, percentage decrease, and percentage change easily.',
  },
  {
    id: 'word-counter',
    name: 'Word & Character Counter',
    description: 'Count words, characters, sentences, and paragraphs in your text',
    category: 'Text',
    icon: '📝',
    slug: 'word-counter',
    keywords: ['word count', 'character count', 'text counter', 'word counter'],
    popular: true,
    metaDescription: 'Free word counter tool. Count words, characters, sentences, paragraphs, and get reading time estimate for any text.',
  },
  {
    id: 'image-compressor',
    name: 'Image Compressor',
    description: 'Compress images to reduce file size without losing quality',
    category: 'File',
    icon: '🖼️',
    slug: 'image-compressor',
    keywords: ['image', 'compress', 'resize', 'optimize', 'reduce size'],
    popular: true,
    metaDescription: 'Free online image compressor. Reduce image file size without losing quality. Compress JPG, PNG images instantly in your browser.',
  },
  {
    id: 'pdf-to-image',
    name: 'PDF to Image Converter',
    description: 'Convert PDF pages to high-quality images (PNG/JPG)',
    category: 'File',
    icon: '📄',
    slug: 'pdf-to-image',
    keywords: ['pdf', 'image', 'convert', 'png', 'jpg'],
    popular: false,
    metaDescription: 'Free PDF to Image converter. Convert PDF pages to PNG or JPG images online. High quality conversion, works in your browser.',
  },
  {
    id: 'file-size-converter',
    name: 'File Size Converter',
    description: 'Convert between different file size units (B, KB, MB, GB, TB)',
    category: 'File',
    icon: '💾',
    slug: 'file-size-converter',
    keywords: ['file size', 'convert', 'bytes', 'kb', 'mb', 'gb'],
    popular: false,
    metaDescription: 'Free file size converter. Convert between bytes, KB, MB, GB, TB instantly. Simple and accurate file size conversion tool.',
  },
  {
    id: 'gst-calculator',
    name: 'GST Calculator (India)',
    description: 'Calculate GST amount, CGST, SGST, IGST for Indian tax rates',
    category: 'Financial',
    icon: '🇮🇳',
    slug: 'gst-calculator',
    keywords: ['gst', 'tax', 'india', 'cgst', 'sgst', 'igst'],
    popular: true,
    metaDescription: 'Free GST calculator for India. Calculate GST amount, CGST, SGST, IGST with different tax rates (5%, 12%, 18%, 28%).',
  },
  {
    id: 'simple-interest-calculator',
    name: 'Simple Interest Calculator',
    description: 'Calculate simple interest on principal amount for a given period',
    category: 'Financial',
    icon: '🏦',
    slug: 'simple-interest-calculator',
    keywords: ['simple interest', 'interest', 'principal', 'rate', 'time'],
    popular: false,
    metaDescription: 'Free simple interest calculator. Calculate interest amount and total value using principal, rate, and time period.',
  },
];

export const getToolBySlug = (slug: string): Tool | undefined => {
  return tools.find((tool) => tool.slug === slug);
};

export const getPopularTools = (): Tool[] => {
  return tools.filter((tool) => tool.popular);
};

export const getToolsByCategory = (category: string): Tool[] => {
  return tools.filter((tool) => tool.category === category);
};

export const categories = ['Personal', 'Financial', 'File', 'Text'] as const;
