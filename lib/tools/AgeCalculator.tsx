'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const AgeCalculator: React.FC = () => {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
    totalDays: number;
    nextBirthday: number;
  } | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    // Total days
    const oneDay = 24 * 60 * 60 * 1000;
    const totalDays = Math.floor((today.getTime() - birth.getTime()) / oneDay);

    // Next birthday
    let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < today) {
      nextBirthday = new Date(today.getFullYear() + 1, birth.getMonth(), birth.getDate());
    }
    const daysToNextBirthday = Math.floor((nextBirthday.getTime() - today.getTime()) / oneDay);

    setResult({
      years,
      months,
      days,
      totalDays,
      nextBirthday: daysToNextBirthday,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Input
          type="date"
          label="Date of Birth"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          max={new Date().toISOString().split('T')[0]}
        />
      </div>

      <Button onClick={calculateAge} variant="primary" size="lg" className="w-full">
        Calculate Age
      </Button>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-center text-primary-700 dark:text-primary-300 mb-4">
              Your Age
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{result.years}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{result.months}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Months</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">{result.days}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Days</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-xs text-gray-600 dark:text-gray-400 uppercase mb-1">Total Days Lived</div>
              <div className="text-xl font-semibold">{result.totalDays.toLocaleString()}</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-xs text-gray-600 dark:text-gray-400 uppercase mb-1">Days to Next Birthday</div>
              <div className="text-xl font-semibold">{result.nextBirthday}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
