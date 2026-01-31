'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export const GSTCalculator: React.FC = () => {
  const [mode, setMode] = useState<'add' | 'remove'>('add');
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState('18');
  const [result, setResult] = useState<{
    originalAmount: number;
    cgst: number;
    sgst: number;
    igst: number;
    totalGst: number;
    finalAmount: number;
  } | null>(null);

  const calculateGST = () => {
    const amt = parseFloat(amount);
    const rate = parseFloat(gstRate);

    if (isNaN(amt) || amt <= 0) return;

    let originalAmount = amt;
    let totalGst = 0;
    let finalAmount = amt;

    if (mode === 'add') {
      // Calculate GST on amount
      totalGst = (amt * rate) / 100;
      finalAmount = amt + totalGst;
    } else {
      // Remove GST from amount
      originalAmount = (amt * 100) / (100 + rate);
      totalGst = amt - originalAmount;
      finalAmount = amt;
    }

    const cgst = totalGst / 2;
    const sgst = totalGst / 2;
    const igst = totalGst;

    setResult({
      originalAmount: parseFloat(originalAmount.toFixed(2)),
      cgst: parseFloat(cgst.toFixed(2)),
      sgst: parseFloat(sgst.toFixed(2)),
      igst: parseFloat(igst.toFixed(2)),
      totalGst: parseFloat(totalGst.toFixed(2)),
      finalAmount: parseFloat(finalAmount.toFixed(2)),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Select
          label="Calculation Mode"
          value={mode}
          onChange={(e) => {
            setMode(e.target.value as 'add' | 'remove');
            setResult(null);
          }}
          options={[
            { value: 'add', label: 'Add GST to Amount' },
            { value: 'remove', label: 'Remove GST from Amount' },
          ]}
        />
      </div>

      <div>
        <Input
          type="number"
          label={mode === 'add' ? 'Amount (Excluding GST)' : 'Amount (Including GST)'}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="10000"
        />
      </div>

      <div>
        <Select
          label="GST Rate"
          value={gstRate}
          onChange={(e) => setGstRate(e.target.value)}
          options={[
            { value: '5', label: '5%' },
            { value: '12', label: '12%' },
            { value: '18', label: '18%' },
            { value: '28', label: '28%' },
          ]}
        />
      </div>

      <Button onClick={calculateGST} variant="primary" size="lg" className="w-full">
        Calculate GST
      </Button>

      {result && (
        <div className="mt-6 space-y-4">
          <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg">
            <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-4 text-center">
              {mode === 'add' ? 'Final Amount' : 'Original Amount'}
            </h3>
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 text-center">
              ₹{result.finalAmount.toLocaleString('en-IN')}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Breakdown</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Original Amount:</span>
                <span className="font-medium">₹{result.originalAmount.toLocaleString('en-IN')}</span>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-400">CGST ({parseFloat(gstRate)/2}%):</span>
                  <span className="font-medium">₹{result.cgst.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600 dark:text-gray-400">SGST ({parseFloat(gstRate)/2}%):</span>
                  <span className="font-medium">₹{result.sgst.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">IGST ({gstRate}%):</span>
                  <span className="font-medium">₹{result.igst.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="border-t pt-3">
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Total GST:</span>
                  <span className="font-bold text-primary-600 dark:text-primary-400">
                    ₹{result.totalGst.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Note:</strong> For intra-state transactions, use CGST + SGST. For inter-state transactions, use IGST.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
