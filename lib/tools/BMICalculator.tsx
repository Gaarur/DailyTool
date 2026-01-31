'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const BMICalculator: React.FC = () => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState<{
    bmi: number;
    category: string;
    color: string;
  } | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || w <= 0 || h <= 0) return;

    let bmi: number;
    if (unit === 'metric') {
      // Height in cm, weight in kg
      bmi = w / Math.pow(h / 100, 2);
    } else {
      // Height in inches, weight in lbs
      bmi = (w / Math.pow(h, 2)) * 703;
    }

    let category = '';
    let color = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-blue-600 dark:text-blue-400';
    } else if (bmi < 25) {
      category = 'Normal Weight';
      color = 'text-green-600 dark:text-green-400';
    } else if (bmi < 30) {
      category = 'Overweight';
      color = 'text-yellow-600 dark:text-yellow-400';
    } else {
      category = 'Obese';
      color = 'text-red-600 dark:text-red-400';
    }

    setResult({ bmi: parseFloat(bmi.toFixed(1)), category, color });
  };

  return (
    <div className="space-y-6">
      <div>
        <Select
          label="Unit System"
          value={unit}
          onChange={(e) => setUnit(e.target.value as 'metric' | 'imperial')}
          options={[
            { value: 'metric', label: 'Metric (kg, cm)' },
            { value: 'imperial', label: 'Imperial (lbs, in)' },
          ]}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          label={unit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder={unit === 'metric' ? '70' : '154'}
        />
        <Input
          type="number"
          label={unit === 'metric' ? 'Height (cm)' : 'Height (in)'}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder={unit === 'metric' ? '170' : '67'}
        />
      </div>

      <Button onClick={calculateBMI} variant="primary" size="lg" className="w-full">
        Calculate BMI
      </Button>

      {result && (
        <div className="mt-6">
          <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg text-center">
            <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-2">Your BMI</h3>
            <div className="text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">
              {result.bmi}
            </div>
            <div className={`text-2xl font-semibold ${result.color}`}>
              {result.category}
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h4 className="font-semibold mb-2">BMI Categories:</h4>
            <ul className="space-y-1 text-sm">
              <li className="flex justify-between">
                <span>Underweight</span>
                <span className="text-gray-600 dark:text-gray-400">&lt; 18.5</span>
              </li>
              <li className="flex justify-between">
                <span>Normal Weight</span>
                <span className="text-gray-600 dark:text-gray-400">18.5 - 24.9</span>
              </li>
              <li className="flex justify-between">
                <span>Overweight</span>
                <span className="text-gray-600 dark:text-gray-400">25 - 29.9</span>
              </li>
              <li className="flex justify-between">
                <span>Obese</span>
                <span className="text-gray-600 dark:text-gray-400">≥ 30</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
