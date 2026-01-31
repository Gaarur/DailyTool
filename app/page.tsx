import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ToolCard } from '@/components/ui/Card';
import { AdSenseAd } from '@/components/ads/AdSenseAd';
import { getPopularTools, categories } from '@/lib/data/tools';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const popularTools = getPopularTools();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900 py-20">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Simple Online Tools for <span className="text-gradient">Everyday Use</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Fast, free, and easy-to-use tools for your daily needs. 
              No sign-up required. Works on all devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tools">
                <Button variant="primary" size="lg">
                  Browse All Tools
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-16">
        {/* AdSense Ad */}
        <AdSenseAd slot="homepage-top" format="horizontal" />

        {/* Popular Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Popular Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTools.map((tool) => (
              <ToolCard
                key={tool.id}
                icon={tool.icon}
                title={tool.name}
                description={tool.description}
                category={tool.category}
                href={`/tools/${tool.slug}`}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/tools">
              <Button variant="secondary" size="md">
                View All Tools →
              </Button>
            </Link>
          </div>
        </section>

        {/* AdSense Ad */}
        <AdSenseAd slot="homepage-mid" />

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div key={category} className="bg-white dark:bg-gray-800 rounded-xl shadow-soft border border-gray-100 dark:border-gray-700 transition-all p-6 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg">{category}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Why Choose EasyDailyTools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All tools work instantly in your browser. No waiting, no installation.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">100% Private</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your data stays on your device. We don't store or track anything.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Perfect on phones, tablets, and desktops. Works everywhere.
              </p>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
