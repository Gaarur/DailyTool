'use client';

import React, { useEffect } from 'react';

interface AdSenseAdProps {
  slot: 'homepage-top' | 'homepage-mid' | 'tool-header' | 'tool-mid' | 'tool-bottom';
  format?: 'auto' | 'rectangle' | 'horizontal';
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export const AdSenseAd: React.FC<AdSenseAdProps> = ({ slot, format = 'auto' }) => {
  // UNCOMMENT THE CODE BELOW WHEN APPROVED BY ADSENSE
  /*
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="my-8 text-center overflow-hidden">
      <div className="text-xs text-gray-400 mb-2">Advertisement</div>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot={slot === 'homepage-top' ? '1234567890' : '0987654321'} // Replace with actual Slot IDs
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
  */

  // Placeholder for development/review
  return (
    <div className="my-8">
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mb-2">
        Advertisement
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-8 flex items-center justify-center min-h-[250px]">
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm font-medium mb-2">Google AdSense Placeholder</p>
          <p className="text-xs">Slot: {slot}</p>
          <p className="text-xs">Format: {format}</p>
          <p className="text-xs mt-4 max-w-md mx-auto">
            Your site needs to be approved by AdSense before real ads appear.
            Once approved, uncomment the validation code in <code>components/ads/AdSenseAd.tsx</code>.
          </p>
        </div>
      </div>
    </div>
  );
};
