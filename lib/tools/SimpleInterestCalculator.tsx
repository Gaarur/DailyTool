'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const SimpleInterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState<{
    interest: number;
    totalAmount: number;
  } | null>(null);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r <= 0 || t <= 0) return;

    // Simple Interest Formula: SI = (P × R × T) / 100
    const interest = (p * r * t) / 100;
    const totalAmount = p + interest;

    setResult({
      interest: parseFloat(interest.toFixed(2)),
      totalAmount: parseFloat(totalAmount.toFixed(2)),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Input
          type="number"
          label="Principal Amount (₹)"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="10000"
        />
      </div>

      <div>
        <Input
          type="number"
          label="Rate of Interest (% per annum)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="5"
          step="0.1"
        />
      </div>

      <div>
        <Input
          type="number"
          label="Time Period (Years)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="2"
          step="0.1"
        />
      </div>

      <Button onClick={calculateInterest} variant="primary" size="lg" className="w-full">
        Calculate Interest
      </Button>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg text-center">
              <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Simple Interest</h3>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                ₹{result.interest.toLocaleString('en-IN')}
              </div>
            </div>

            <div className="bg-secondary-50 dark:bg-secondary-900/20 p-6 rounded-lg text-center">
              <h3 className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total Amount</h3>
              <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">
                ₹{result.totalAmount.toLocaleString('en-IN')}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Breakdown</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Principal Amount:</span>
                <span className="font-medium">₹{parseFloat(principal).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Simple Interest:</span>
                <span className="font-medium">₹{result.interest.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Total Amount:</span>
                <span className="font-bold">₹{result.totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-sm">Formula Used:</h4>
            <p className="text-sm font-mono text-blue-800 dark:text-blue-200">
              Simple Interest = (Principal × Rate × Time) / 100
            </p>
            <p className="text-sm font-mono text-blue-800 dark:text-blue-200 mt-1">
              SI = ({principal} × {rate} × {time}) / 100 = ₹{result.interest.toLocaleString('en-IN')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
