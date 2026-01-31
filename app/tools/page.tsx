'use client';

import { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { ToolCard } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Input';
import { tools, categories } from '@/lib/data/tools';
import type { Metadata } from 'next';

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categoryOptions = [
    { value: 'All', label: 'All Categories' },
    ...categories.map(c => ({ value: c, label: c }))
  ];

  return (
    <Container className="py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">All Tools</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Browse our complete collection of free online tools
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="search"
          placeholder="Search tools..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          options={categoryOptions}
        />
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
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

      {filteredTools.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No tools found matching your criteria.</p>
        </div>
      )}

      {/* Tool Count */}
      <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
        Showing {filteredTools.length} of {tools.length} tools
      </div>
    </Container>
  );
}
