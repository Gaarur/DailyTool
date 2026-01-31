import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div className={`card ${hover ? 'hover:shadow-lg hover:-translate-y-1' : ''} ${className}`}>
      {children}
    </div>
  );
};

interface ToolCardProps {
  icon: string;
  title: string;
  description: string;
  category: string;
  href: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({ icon, title, description, category, href }) => {
  return (
    <a href={href} className="block">
      <Card hover className="p-6 h-full">
        <div className="flex items-start space-x-4">
          <div className="text-4xl">{icon}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                {category}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
          </div>
        </div>
      </Card>
    </a>
  );
};
