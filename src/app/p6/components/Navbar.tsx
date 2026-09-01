'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'pengantin', label: 'Pengantin' },
  { id: 'acara', label: 'Acara' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'ucapan', label: 'Ucapan' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    const root = document.querySelector('.app-scroll');
    if (el && root) {
      const top = el.offsetTop - 76;
      root.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-30 bg-cream-100/85 backdrop-blur-md border-b border-sage-200/70">
      <div className="max-w-4xl mx-auto px-5 h-16 flex items-center justify-between">
        <button onClick={() => go('beranda')} className="flex items-center gap-2">
          <span className="font-script text-2xl text-clay-600">S &amp; A</span>
          <span className="hidden sm:inline font-display tracking-[0.25em] uppercase text-[11px] text-sage-600">
            Invitation
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="font-body text-sm text-ink-600 hover:text-sage-600 transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-sage-700"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <ul className="md:hidden border-t border-sage-200/70 bg-cream-50 px-6 py-3 space-y-2">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="block w-full text-left font-body text-ink-600 py-2 hover:text-sage-600"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}