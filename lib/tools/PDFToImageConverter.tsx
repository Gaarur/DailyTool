'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export const PDFToImageConverter: React.FC = () => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPdfFile(file);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <p className="text-blue-800 dark:text-blue-200">
          <strong>Note:</strong> PDF to Image conversion requires an external library (PDF.js). 
          This is a placeholder component. To implement full functionality, install pdf-lib or pdfjs-dist package.
        </p>
      </div>

      <div>
        <label className="label">Select PDF File</label>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
        />
      </div>

      {pdfFile && (
        <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Selected: {pdfFile.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
            Install PDF.js library to enable conversion functionality
          </p>
          <Button variant="primary" size="lg" disabled>
            Convert to Image
          </Button>
        </div>
      )}

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Implementation Guide:</h4>
        <code className="text-sm">npm install pdfjs-dist</code>
        <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
          Then use PDF.js to render PDF pages to canvas and export as images.
        </p>
      </div>
    </div>
  );
};
