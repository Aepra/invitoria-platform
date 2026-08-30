"use client";

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Crown, ArrowRight, Diamond, Snowflake, Leaf, Moon, Heart, Search, Sparkles } from 'lucide-react';
import catalogData from '../data/catalog.json';

interface Theme {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  demoLink: string;
  tags?: string[];
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'gem': return <Diamond className="w-10 h-10 text-white drop-shadow-md" />;
    case 'snowflake': return <Snowflake className="w-10 h-10 text-white drop-shadow-md" />;
    case 'leaf': return <Leaf className="w-10 h-10 text-white drop-shadow-md" />;
    case 'crown': return <Crown className="w-10 h-10 text-white drop-shadow-md" />;
    case 'moon': return <Moon className="w-10 h-10 text-white drop-shadow-md" />;
    case 'heart': return <Heart className="w-10 h-10 text-white drop-shadow-md" />;
    default: return <Sparkles className="w-10 h-10 text-white drop-shadow-md" />;
  }
};

export default function Home() {
  const catalog: Theme[] = catalogData;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>(["Classic", "Modern", "Minimalist", "Luxury", "Floral", "Rustic"]);
  const [isTagMenuOpen, setIsTagMenuOpen] = useState(false);
  const [tagSearchQuery, setTagSearchQuery] = useState("");
  const tagMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tagMenuRef.current && !tagMenuRef.current.contains(event.target as Node)) {
        setIsTagMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    catalog.forEach(item => {
      if (item.tags) {
        item.tags.forEach(tag => tags.add(tag));
      }
    });
    return Array.from(tags).sort();
  }, [catalog]);

  const filteredCatalog = useMemo(() => {
    return catalog.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTags.length === 0 || (item.tags && selectedTags.some(t => item.tags!.includes(t)));
      return matchesSearch && matchesTag;
    });
  }, [catalog, searchQuery, selectedTags]);

  return (
    <main className="font-sans antialiased bg-[#f5f5f7] text-slate-900 relative min-h-screen pb-20">
      
      {/* Background ambient light (Very subtle) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white/50">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-pink-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-teal-100/40 rounded-full blur-[120px]"></div>
      </div>

      {/* Static Page Intro */}
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

      {/* Sticky Filter Bar (Transparent & Ultimate Minimalist) */}
      <div className="sticky top-0 z-50 bg-white/50 backdrop-blur-xl border-b border-white/30 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)] mb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* Search & Filter Row */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-3xl mx-auto">
            
            {/* iOS Style Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Cari tema..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/70 border border-white/50 shadow-inner rounded-full py-2 pl-10 pr-4 text-[14px] text-slate-800 placeholder:text-slate-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 bg-slate-200/60 rounded-full p-0.5 active:scale-90 transition-transform"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              )}
            </div>

            {/* Custom Tag Picker with Search */}
            <div className="relative shrink-0 text-left" ref={tagMenuRef}>
              <button 
                onClick={() => setIsTagMenuOpen(!isTagMenuOpen)}
                className="bg-white/90 border border-white/50 text-slate-700 p-2.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex items-center justify-center hover:bg-white transition-all active:scale-[0.95]"
                title="Filter Tag"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                {selectedTags.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-sm border border-white">
                    {selectedTags.length}
                  </span>
                )}
              </button>

              {isTagMenuOpen && (
                <div className="absolute top-[calc(100%+8px)] right-0 w-[240px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100/50 overflow-hidden z-50 animate-fade-in origin-top-right">
                  <div className="p-2 border-b border-slate-100 bg-slate-50/50">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Cari tag..." 
                        value={tagSearchQuery}
                        onChange={(e) => setTagSearchQuery(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-8 pr-3 text-[13px] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm"
                        autoFocus
                      />
                    </div>
                  </div>
                  <div className="max-h-[220px] overflow-y-auto p-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full">
                    {allTags
                      .filter(tag => !selectedTags.includes(tag))
                      .filter(tag => tag.toLowerCase().includes(tagSearchQuery.toLowerCase()))
                      .map(tag => (
                        <button
                          key={tag}
                          onClick={() => {
                            setSelectedTags([...selectedTags, tag]);
                            setTagSearchQuery("");
                            setIsTagMenuOpen(false);
                          }}
                          className="w-full text-left px-3 py-2 text-[13px] font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-colors"
                        >
                          {tag}
                        </button>
                    ))}
                    {allTags.filter(tag => !selectedTags.includes(tag) && tag.toLowerCase().includes(tagSearchQuery.toLowerCase())).length === 0 && (
                      <div className="px-3 py-6 text-center flex flex-col items-center justify-center">
                        <Sparkles className="w-5 h-5 text-slate-300 mb-2" />
                        <span className="text-[12px] text-slate-400">Tag tidak ditemukan</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 1-Line Horizontally Scrollable Tags Chips */}
          {selectedTags.length > 0 && (
            <div className="max-w-3xl mx-auto mt-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex items-center gap-1.5 w-max px-1">
                {selectedTags.map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-800 text-white text-[11px] font-medium rounded-full shadow-sm">
                    {tag}
                    <button 
                      onClick={() => setSelectedTags(selectedTags.filter(t => t !== tag))} 
                      className="opacity-60 hover:opacity-100 transition-opacity active:scale-90"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                  </span>
                ))}
                <button 
                  onClick={() => setSelectedTags([])} 
                  className="text-[11px] text-slate-500 hover:text-slate-700 underline underline-offset-2 px-2 py-1 transition-colors whitespace-nowrap"
                >
                  Bersihkan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="relative z-10 container mx-auto px-6">
        {filteredCatalog.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-7xl mx-auto">
            {filteredCatalog.map((theme) => (
              <div key={theme.id} className="bg-white rounded-[24px] sm:rounded-[32px] p-3 sm:p-5 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100/50 active:scale-[0.98] transition-transform duration-300 group cursor-pointer">
                
                {/* Thumbnail Image */}
                <div className={`w-full aspect-[3/4] sm:aspect-video rounded-[18px] sm:rounded-[24px] mb-4 bg-gradient-to-br ${theme.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="scale-75 sm:scale-100 transition-transform duration-700 group-hover:scale-110 ease-out">
                    {getIcon(theme.icon)}
                  </div>
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] rounded-[18px] sm:rounded-[24px] pointer-events-none"></div>
                </div>
                
                {/* Text Content */}
                <h3 className="text-[16px] sm:text-[19px] font-semibold mb-1 line-clamp-1 text-slate-900 tracking-tight">{theme.name}</h3>
                <p className="text-slate-500 text-[12px] sm:text-[14px] mb-4 flex-grow line-clamp-2 leading-relaxed">{theme.description}</p>
                
                {/* Button Action */}
                <Link href={theme.demoLink} className="w-full py-2.5 px-3 rounded-xl bg-[#f2f2f7] text-[#007aff] text-center font-semibold text-[13px] sm:text-[14px] active:bg-[#e5e5ea] transition-colors flex items-center justify-center gap-1.5 mt-auto">
                  <span>Lihat Demo</span>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-slate-300" />
            </div>
            <p className="text-slate-500 text-[15px] font-medium mb-5">Tidak ada undangan yang cocok.</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setSelectedTags([]);
              }}
              className="bg-slate-800 text-white px-5 py-2 rounded-full font-semibold text-[14px] active:scale-95 transition-transform shadow-md"
            >
              Reset Pencarian
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
