'use client';

import { useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';

/**
 * Mapping: slug → template path
 * Nanti ini akan diganti dengan query ke database.
 * Untuk sementara, slug "suci-abel" dipetakan ke template undangan-03.
 */
const SLUG_TO_TEMPLATE: Record<string, string> = {
  'suci-abel': '/undangan-03',
};

export default function SlugPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const templatePath = SLUG_TO_TEMPLATE[slug?.toLowerCase()];

  useEffect(() => {
    if (!templatePath) return;

    // Preserve the ?to= query param saat redirect
    const search = window.location.search;
    window.location.replace(`${templatePath}${search}`);
  }, [templatePath]);

  if (!templatePath) {
    notFound();
  }

  // Loading state selagi redirect
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020C1C]">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-amber-200/60 text-sm font-serif">Membuka undangan...</p>
      </div>
    </div>
  );
}
