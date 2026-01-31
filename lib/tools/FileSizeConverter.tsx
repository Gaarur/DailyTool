'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const units = ['B', 'KB', 'MB', 'GB', 'TB'] as const;
type Unit = typeof units[number];

export const FileSizeConverter: React.FC = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState<Unit>('MB');
  const [toUnit, setToUnit] = useState<Unit>('GB');
  const [result, setResult] = useState<number | null>(null);

  const convertSize = () => {
    const val = parseFloat(value);
    if (isNaN(val)) return;

    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);

    // Convert to bytes first
    let bytes = val * Math.pow(1024, fromIndex);

    // Convert from bytes to target unit
    const converted = bytes / Math.pow(1024, toIndex);

    setResult(converted);
  };

  const unitOptions = units.map(u => ({ value: u, label: u }));

  const copyResult = () => {
    if (result !== null) {
      navigator.clipboard.writeText(result.toString());
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Input
          type="number"
          label="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="1024"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Select
          label="From Unit"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value as Unit)}
          options={unitOptions}
        />
        <Select
          label="To Unit"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value as Unit)}
          options={unitOptions}
        />
      </div>

      <Button onClick={convertSize} variant="primary" size="lg" className="w-full">
        Convert
      </Button>

      {result !== null && (
        <div className="mt-6">
          <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg text-center">
            <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-2">Result</h3>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              {result.toLocaleString()} {toUnit}
            </div>
            <Button onClick={copyResult} variant="secondary" size="sm">
              Copy Result
            </Button>
          </div>

          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold mb-2">Conversion</h4>
            <p className="text-sm">
              {value} {fromUnit} = {result.toLocaleString()} {toUnit}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
