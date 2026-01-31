'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export const ImageCompressor: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string>('');
  const [compressedPreview, setCompressedPreview] = useState<string>('');
  const [quality, setQuality] = useState(80);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setOriginalImage(file);
    setOriginalSize(file.size);
    const reader = new FileReader();
    reader.onload = (e) => setOriginalPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const compressImage = () => {
    if (!originalImage || !originalPreview) return;

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (!blob) return;
          setCompressedSize(blob.size);
          const url = URL.createObjectURL(blob);
          setCompressedPreview(url);
        },
        'image/jpeg',
        quality / 100
      );
    };

    img.src = originalPreview;
  };

  const downloadCompressed = () => {
    if (!compressedPreview) return;
    const a = document.createElement('a');
    a.href = compressedPreview;
    a.download = `compressed_${originalImage?.name || 'image.jpg'}`;
    a.click();
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="label">Select Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800"
        />
      </div>

      {originalImage && (
        <>
          <div>
            <label className="label">Quality: {quality}%</label>
            <input
              type="range"
              min="10"
              max="100"
              value={quality}
              onChange={(e) => setQuality(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <Button onClick={compressImage} variant="primary" size="lg" className="w-full">
            Compress Image
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Original</h3>
              {originalPreview && <img src={originalPreview} alt="Original" className="w-full h-auto rounded" />}
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Size: {formatSize(originalSize)}</p>
            </div>

            {compressedPreview && (
              <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Compressed</h3>
                <img src={compressedPreview} alt="Compressed" className="w-full h-auto rounded" />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Size: {formatSize(compressedSize)} ({(((originalSize - compressedSize) / originalSize) * 100).toFixed(1)}% reduction)
                </p>
                <Button onClick={downloadCompressed} variant="secondary" size="md" className="w-full mt-4">
                  Download Compressed Image
                </Button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
