# EasyDailyTools

A production-ready, Google AdSense-approved website featuring 10 daily life tools built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **10 Functional Tools**: Age Calculator, BMI Calculator, EMI Calculator, Percentage Calculator, Word Counter, Image Compressor, PDF to Image, File Size Converter, GST Calculator (India), Simple Interest Calculator
- **SEO Optimized**: Dynamic meta tags, Open Graph tags, Schema markup, sitemap, robots.txt
- **AdSense Ready**: Privacy policy, cookie disclosure, ad placeholders
- **Mobile-First Design**: Responsive on all devices
- **Dark Mode Support**: Toggle between light and dark themes (to be implemented)
- **Client-Side Processing**: All tools work in browser, no backend required
- **Fast Performance**: Optimized for speed and user experience

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready
- **SEO**: Built-in Next.js metadata API

## 🛠️ Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

```bash
npm run build
```

## 📤 Deployment to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Import the repository in Vercel dashboard
3. Deploy automatically

###Vercel Configuration

No additional configuration needed. The project is pre-configured for Vercel.

## 📁 Project Structure

```
easydailytools/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Root layout with SEO
│   ├── page.tsx               # Homepage
│   ├── tools/
│   │   ├── page.tsx          # Tools listing
│   │   └── [slug]/
│   │       └── page.tsx      # Dynamic tool pages
│   ├── about/
│   ├── contact/
│   ├── privacy-policy/
│   ├── disclaimer/
│   ├── terms/
│   ├── sitemap.ts            # Dynamic sitemap
│   └── robots.ts             # Robots.txt
├── components/
│   ├── layout/               # Header, Footer, Container
│   ├── ui/                   # Button, Card, Input
│   ├── tools/                # ToolLayout, ToolCard
│   ├── ads/                  # AdSense placeholders
│   └── seo/                  # Schema, Breadcrumbs
├── lib/
│   ├── tools/                # Tool implementations
│   ├── data/                 # Tools configuration
│   └── utils/                # Helper functions
└── public/                    # Static assets
```

## 🎯 Tools Included

| Tool | Category | Description |
|------|----------|-------------|
| Age Calculator | Personal | Calculate exact age in years, months, days |
| BMI Calculator | Personal | Body Mass Index with health categories |
| EMI Calculator | Financial | Monthly loan payment calculator |
| Percentage Calculator | Financial | Multiple percentage calculations |
| Word Counter | Text | Count words, characters, sentences |
| Image Compressor | File | Client-side image compression |
| PDF to Image | File | Convert PDF pages to images |
| File Size Converter | File | Convert between storage units |
| GST Calculator | Financial | India GST calculation with breakdown |
| Simple Interest | Financial | Interest calculator with formula |

## 📈 Scaling to 100+ Tools

### Roadmap

1. **Add More Calculators**: Date calculators, unit converters, fitness tools
2. **Financial Tools**: Compound interest, SIP calculator, retirement planner
3. **Text Tools**: Case converter, base64 encoder, hash generator
4. **Image Tools**: Image resizer, format converter, watermark tool
5. **Developer Tools**: JSON formatter, color picker, regex tester

### Implementation Pattern

1. Create tool component in `lib/tools/`
2. Add tool data to `lib/data/tools.ts`
3. Map component in `app/tools/[slug]/page.tsx`
4. Add tool-specific content (how-to, FAQs, SEO)

## 🔐 AdSense Integration

### Before AdSense Approval

The site includes AdSense placeholder components showing where ads will appear.

### After AdSense Approval

Replace placeholder content in `components/ads/AdSenseAd.tsx` with actual AdSense code:

```tsx
<ins className="adsbygoogle"
     style={{ display: 'block' }}
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="XXXXXXXXXX"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
```

Add AdSense script to `app/layout.tsx`:

```tsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
  crossOrigin="anonymous"
/>
```

## 🔗 Important Pages for AdSense

- ✅ Privacy Policy (includes AdSense disclosure)
- ✅ Terms & Conditions
- ✅ Disclaimer
- ✅ About Us
- ✅ Contact Us

## 📊 SEO Features

- ✅ Dynamic metadata for each page
- ✅ Open Graph tags for social sharing
- ✅ Schema markup (WebApplication, Organization, Breadcrumbs)
- ✅ XML Sitemap (auto-generated)
- ✅ Robots.txt
- ✅ Semantic HTML structure
- ✅ Mobile-responsive design
- ✅ Fast page load times

## 🌍 Target Audience

- **Region**: India
- **Age**: 16-45
- **Users**: Mobile-first, students, office workers, freelancers

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📧 Support

For questions or support, visit our [Contact Page](https://easydailytools.com/contact)

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
