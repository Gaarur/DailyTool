'use client';

import React, { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/Input';

export const WordCounter: React.FC = () => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    charactersNoSpaces: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: 0,
  });

  useEffect(() => {
    if (!text) {
      setStats({
        words: 0,
        characters: 0,
        charactersNoSpaces: 0,
        sentences: 0,
        paragraphs: 0,
        readingTime: 0,
      });
      return;
    }

    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, '').length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
    const readingTime = Math.ceil(words / 200); // 200 words per minute

    setStats({
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime,
    });
  }, [text]);

  return (
    <div className="space-y-6">
      <div>
        <Textarea
          label="Enter or paste your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here..."
          rows={10}
          className="font-mono"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{stats.words}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Words</div>
        </div>

        <div className="bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">{stats.characters}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Characters</div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold">{stats.charactersNoSpaces}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Chars (No Spaces)</div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold">{stats.sentences}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Sentences</div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold">{stats.paragraphs}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Paragraphs</div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold">{stats.readingTime}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Min. Read Time</div>
        </div>
      </div>
    </div>
  );
};
