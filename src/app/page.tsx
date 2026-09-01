"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Crown, Diamond, Snowflake, Leaf, Moon, Heart, Sparkles, Star, Flower2 } from 'lucide-react';
import catalogData from '../data/catalog.json';

interface Theme {
  id: string;
  name: string;
  category: string;
  description: string;
  color: string;
  icon: string;
  demoLink: string;
  tags?: string[];
}

const CATEGORIES = [
  { id: 'all',        label: 'Semua',     emoji: '✨' },
  { id: 'special',   label: 'Special',   emoji: '⭐' },
  { id: 'klasik',    label: 'Klasik',    emoji: '🎩' },
  { id: 'premium',   label: 'Premium',   emoji: '💎' },
  { id: 'minimalist',label: 'Minimalist',emoji: '🤍' },
  { id: 'floral',    label: 'Floral',    emoji: '🌸' },
  { id: 'rustic',    label: 'Rustic',    emoji: '🌿' },
  { id: 'cartoon',   label: 'Cartoon',   emoji: '🎨' },
  { id: 'magis',     label: 'Magis',     emoji: '🔮' },
  { id: 'adat',      label: 'Adat',      emoji: '🏛️' },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'gem':       return <Diamond className="w-10 h-10 text-white drop-shadow-md" />;
    case 'snowflake': return <Snowflake className="w-10 h-10 text-white drop-shadow-md" />;
    case 'leaf':      return <Leaf className="w-10 h-10 text-white drop-shadow-md" />;
    case 'crown':     return <Crown className="w-10 h-10 text-white drop-shadow-md" />;
    case 'moon':      return <Moon className="w-10 h-10 text-white drop-shadow-md" />;
    case 'heart':     return <Heart className="w-10 h-10 text-white drop-shadow-md" />;
    default:          return <Sparkles className="w-10 h-10 text-white drop-shadow-md" />;
  }
};

export default function Home() {
  const catalog: Theme[] = catalogData as Theme[];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCatalog = useMemo(() => {
    if (activeCategory === 'all') return catalog;
    return catalog.filter(item => item.category === activeCategory);
  }, [catalog, activeCategory]);

  // Group by category (for grouped display in "all" view)
  const categoriesWithItems = useMemo(() => {
    if (activeCategory !== 'all') return null;
    const grouped: Record<string, Theme[]> = {};
    catalog.forEach(item => {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });
    return grouped;
  }, [catalog, activeCategory]);

  return (
    <main className="font-sans antialiased bg-[#f5f5f7] text-slate-900 relative min-h-screen pb-20">
      
      {/* Background ambient */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-pink-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-teal-100/40 rounded-full blur-[120px]"></div>
      </div>

      {/* Page Header */}
      <div className="relative z-10 pt-10 pb-6 px-6 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100/50 text-blue-600 text-[11px] font-bold tracking-widest uppercase mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          Katalog Undangan Digital
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mb-3">
          Pilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Undangan Impian</span> Anda
        </h1>
        <p className="text-slate-500 text-[13px] sm:text-[15px] font-medium max-w-md mx-auto leading-relaxed">
          Eksplorasi dan temukan desain undangan digital eksklusif yang paling sesuai dengan gaya dan tema pernikahan Anda.
        </p>
      </div>

      {/* Sticky Category Filter */}
      <div className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/30 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] mb-8">
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex items-center gap-2 px-4 sm:px-6 w-max mx-auto">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all duration-200 active:scale-95 ${
                  activeCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white/80 text-slate-600 border border-slate-100 hover:bg-white hover:shadow-sm'
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
                {activeCategory !== 'all' && cat.id !== 'all' && activeCategory === cat.id && (
                  <span className="bg-white/20 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ml-0.5">
                    {filteredCatalog.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Catalog Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">

        {/* Single category view: flat grid */}
        {activeCategory !== 'all' && (
          <>
            {filteredCatalog.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mx-auto">
                {filteredCatalog.map((theme) => (
                  <ThemeCard key={theme.id} theme={theme} />
                ))}
              </div>
            ) : (
              <EmptyState onReset={() => setActiveCategory('all')} />
            )}
          </>
        )}

        {/* "All" view: grouped by category */}
        {activeCategory === 'all' && categoriesWithItems && (
          <div className="space-y-10 max-w-7xl mx-auto">
            {Object.entries(categoriesWithItems).map(([catId, items]) => {
              const catMeta = CATEGORIES.find(c => c.id === catId);
              if (!catMeta || items.length === 0) return null;
              return (
                <div key={catId}>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{catMeta.emoji}</span>
                      <h2 className="text-lg font-bold text-slate-800 capitalize">{catMeta.label}</h2>
                      <span className="text-[12px] text-slate-400 font-medium bg-slate-100 px-2 py-0.5 rounded-full">
                        {items.length} tema
                      </span>
                    </div>
                    <button
                      onClick={() => setActiveCategory(catId)}
                      className="text-[12px] text-blue-500 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Lihat Semua →
                    </button>
                  </div>
                  {/* Horizontal Scroll on mobile, Grid on desktop */}
                  <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] sm:overflow-x-visible">
                    <div className="flex gap-4 w-max sm:w-auto sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                      {items.map(theme => (
                        <div key={theme.id} className="w-44 sm:w-auto shrink-0">
                          <ThemeCard theme={theme} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </main>
  );
}

function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <div className="bg-white rounded-[24px] sm:rounded-[32px] p-3 sm:p-5 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 active:scale-[0.98] transition-transform duration-300 group cursor-pointer">
      {/* Thumbnail */}
      <div className={`w-full aspect-[3/4] sm:aspect-video rounded-[18px] sm:rounded-[24px] mb-4 bg-gradient-to-br ${theme.color} flex items-center justify-center relative overflow-hidden`}>
        <div className="scale-75 sm:scale-100 transition-transform duration-700 group-hover:scale-110 ease-out">
          {getIconFromName(theme.icon)}
        </div>
        <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] rounded-[18px] sm:rounded-[24px] pointer-events-none"></div>
      </div>

      {/* Text */}
      <h3 className="text-[15px] sm:text-[18px] font-semibold mb-1 line-clamp-1 text-slate-900 tracking-tight">{theme.name}</h3>
      <p className="text-slate-500 text-[12px] sm:text-[13px] mb-4 flex-grow line-clamp-2 leading-relaxed">{theme.description}</p>

      {/* Button */}
      <Link href={theme.demoLink} className="w-full py-2.5 px-3 rounded-xl bg-[#f2f2f7] text-[#007aff] text-center font-semibold text-[13px] sm:text-[14px] active:bg-[#e5e5ea] transition-colors flex items-center justify-center gap-1.5 mt-auto">
        Lihat Demo
      </Link>
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="py-20 text-center flex flex-col items-center">
      <div className="w-16 h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center mb-4">
        <Sparkles className="w-8 h-8 text-slate-300" />
      </div>
      <p className="text-slate-500 text-[15px] font-medium mb-5">Belum ada undangan di kategori ini.</p>
      <button
        onClick={onReset}
        className="bg-slate-800 text-white px-5 py-2 rounded-full font-semibold text-[14px] active:scale-95 transition-transform shadow-md"
      >
        Lihat Semua
      </button>
    </div>
  );
}

function getIconFromName(iconName: string) {
  switch (iconName) {
    case 'gem':       return <Diamond className="w-10 h-10 text-white drop-shadow-md" />;
    case 'snowflake': return <Snowflake className="w-10 h-10 text-white drop-shadow-md" />;
    case 'leaf':      return <Leaf className="w-10 h-10 text-white drop-shadow-md" />;
    case 'crown':     return <Crown className="w-10 h-10 text-white drop-shadow-md" />;
    case 'moon':      return <Moon className="w-10 h-10 text-white drop-shadow-md" />;
    case 'heart':     return <Heart className="w-10 h-10 text-white drop-shadow-md" />;
    default:          return <Sparkles className="w-10 h-10 text-white drop-shadow-md" />;
  }
}
