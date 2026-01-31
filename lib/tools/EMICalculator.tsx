'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const EMICalculator: React.FC = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [tenureUnit, setTenureUnit] = useState<'months' | 'years'>('years');
  const [result, setResult] = useState<{
    emi: number;
    totalAmount: number;
    totalInterest: number;
  } | null>(null);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12; // Monthly interest rate
    let n = parseFloat(tenure);

    if (!p || !r || !n || p <= 0 || rate === '0' || n <= 0) return;

    // Convert years to months if needed
    if (tenureUnit === 'years') {
      n = n * 12;
    }

    // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - p;

    setResult({
      emi: parseFloat(emi.toFixed(2)),
      totalAmount: parseFloat(totalAmount.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2)),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Input
          type="number"
          label="Loan Amount (Principal)"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="500000"
        />
      </div>

      <div>
        <Input
          type="number"
          label="Interest Rate (% per annum)"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="10.5"
          step="0.1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          label="Loan Tenure"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          placeholder="5"
        />
        <Select
          label="Tenure Unit"
          value={tenureUnit}
          onChange={(e) => setTenureUnit(e.target.value as 'months' | 'years')}
          options={[
            { value: 'years', label: 'Years' },
            { value: 'months', label: 'Months' },
          ]}
        />
      </div>

      <Button onClick={calculateEMI} variant="primary" size="lg" className="w-full">
        Calculate EMI
      </Button>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg text-center">
            <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-2">Monthly EMI</h3>
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
              ₹{result.emi.toLocaleString('en-IN')}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-xs text-gray-600 dark:text-gray-400 uppercase mb-1">Total Interest</div>
              <div className="text-xl font-semibold">₹{result.totalInterest.toLocaleString('en-IN')}</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-xs text-gray-600 dark:text-gray-400 uppercase mb-1">Total Amount</div>
              <div className="text-xl font-semibold">₹{result.totalAmount.toLocaleString('en-IN')}</div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Breakdown</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Principal Amount:</span>
                <span className="font-medium">₹{parseFloat(principal).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Total Interest:</span>
                <span className="font-medium">₹{result.totalInterest.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="text-gray-900 dark:text-gray-100 font-semibold">Total Payment:</span>
                <span className="font-semibold">₹{result.totalAmount.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
