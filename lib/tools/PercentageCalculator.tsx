'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const PercentageCalculator: React.FC = () => {
  const [mode, setMode] = useState<'whatPercent' | 'percentOf' | 'percentChange'>('whatPercent');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const v1 = parseFloat(value1);
    const v2 = parseFloat(value2);

    if (isNaN(v1) || isNaN(v2)) return;

    let res = 0;
    if (mode === 'whatPercent') {
      // What percent is v1 of v2?
      res = (v1 / v2) * 100;
    } else if (mode === 'percentOf') {
      // What is v1% of v2?
      res = (v1 / 100) * v2;
    } else if (mode === 'percentChange') {
      // Percentage change from v1 to v2
      res = ((v2 - v1) / v1) * 100;
    }

    setResult(parseFloat(res.toFixed(2)));
  };

  const getLabel1 = () => {
    if (mode === 'whatPercent') return 'Value';
    if (mode === 'percentOf') return 'Percentage';
    return 'Original Value';
  };

  const getLabel2 = () => {
    if (mode === 'whatPercent') return 'Out of';
    if (mode === 'percentOf') return 'Of Value';
    return 'New Value';
  };

  const getResultLabel = () => {
    if (mode === 'percentOf') return '';
    return '%';
  };

  return (
    <div className="space-y-6">
      <div>
        <Select
          label="Calculation Mode"
          value={mode}
          onChange={(e) => {
            setMode(e.target.value as any);
            setResult(null);
          }}
          options={[
            { value: 'whatPercent', label: 'What % is X of Y?' },
            { value: 'percentOf', label: 'What is X% of Y?' },
            { value: 'percentChange', label: 'Percentage Change' },
          ]}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          label={getLabel1()}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          placeholder="10"
        />
        <Input
          type="number"
          label={getLabel2()}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
          placeholder="50"
        />
      </div>

      <Button onClick={calculate} variant="primary" size="lg" className="w-full">
        Calculate
      </Button>

      {result !== null && (
        <div className="mt-6 bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg text-center">
          <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-2">Result</h3>
          <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
            {result.toLocaleString()}{getResultLabel()}
          </div>
        </div>
      )}
    </div>
  );
};
