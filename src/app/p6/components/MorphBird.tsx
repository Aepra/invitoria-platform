'use client';
import { weddingData } from '../data/wedding';
import { useScrollProgress, seg, easeOut } from '../hooks/useScrollProgress';
import { Crown } from './Ornaments';

/** Royal dove with a tiny crown and flapping wings. */
function RoyalBird({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 140 110" className={className} style={style} fill="none" aria-hidden>
      {/* tiny crown */}
      <g transform="translate(86 6) rotate(12)">
        <path d="M0 14 L3 4 L8 11 L12 0 L16 11 L21 4 L24 14 Z" fill="#D4AF37" stroke="#B8860B" strokeWidth="1" />
        <circle cx="12" cy="2.5" r="1.6" fill="#C8785B" />
      </g>
      {/* back wing (flaps) */}
      <path
        d="M58 52 Q44 22 14 18 Q36 34 40 54 Z"
        fill="#BBD5C2"
        stroke="#4C8864"
        strokeWidth="1.5"
        className="animate-wing-flap"
        style={{ transformOrigin: '56px 52px' }}
      />
      {/* body */}
      <path
        d="M18 74 Q34 44 72 42 Q96 40 108 24 Q112 40 100 52 Q118 52 126 46 Q120 62 100 66 Q96 82 66 84 Q34 86 18 74 Z"
        fill="#FDFBF5"
        stroke="#4C8864"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* front wing (flaps, delayed) */}
      <path
        d="M66 60 Q58 34 30 30 Q52 44 54 62 Q60 66 66 60 Z"
        fill="#DDE9E0"
        stroke="#4C8864"
        strokeWidth="1.5"
        className="animate-wing-flap"
        style={{ transformOrigin: '64px 60px', animationDelay: '0.12s' }}
      />
      {/* eye + beak */}
      <circle cx="102" cy="36" r="2.4" fill="#22302A" />
      <path d="M110 32 L122 35 L110 39 Z" fill="#D89579" />
      {/* olive branch */}
      <path d="M122 35 Q134 30 138 22" stroke="#4C8864" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M130 30 q4 -4 8 -3 M132 33 q5 -1 8 1" stroke="#6BA37E" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function MiniCloud({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 90" className={className} style={style} fill="none" aria-hidden>
      <path
        d="M28 78 Q6 78 6 60 Q6 44 26 42 Q28 22 52 20 Q66 4 90 10 Q104 0 122 8 Q146 4 154 24 Q176 26 178 46 Q196 50 194 66 Q192 78 172 78 Z"
        fill="rgba(255,255,255,0.9)"
        stroke="rgba(212,175,55,0.3)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/**
 * Scroll-driven morph scene (like a motion-graphic video):
 *  1. A crowned dove flies in from the lower-left, wings flapping.
 *  2. It reaches the center, bursts into a ring of golden sparkles.
 *  3. From the sparkle, a royal gold-framed photo card blooms open.
 *  4. Clouds at the bottom corners part to reveal the scene.
 */
export function MorphBird() {
  const { ref, progress: p } = useScrollProgress<HTMLElement>();

  // Phase 1 - bird flies in (0 -> 0.42)
  const fly = easeOut(seg(p, 0, 0.42));
  const birdX = -46 + fly * 46;
  const birdY = 34 - fly * 34;
  const birdRot = -14 + fly * 14;
  const birdScale = 0.55 + fly * 0.45;

  // Phase 2 - bird dissolves into light (0.42 -> 0.58)
  const dissolve = seg(p, 0.42, 0.58);
  const birdOpacity = 1 - dissolve;
  const birdFinalScale = birdScale + dissolve * 0.9;

  // Golden burst ring (0.44 -> 0.68)
  const burst = seg(p, 0.44, 0.68);
  const burstScale = 0.15 + burst * 2.4;
  const burstOpacity = burst < 0.15 ? burst / 0.15 : 1 - seg(burst, 0.15, 1);

  // Phase 3 - photo card blooms (0.55 -> 0.92)
  const card = easeOut(seg(p, 0.55, 0.92));
  const cardScale = 0.2 + card * 0.8;
  const cardRot = -12 + card * 12;
  const cardY = 70 - card * 70;
  const cardOpacity = Math.min(1, card * 2.2);

  // Caption + crown (0.82 -> 1)
  const caption = easeOut(seg(p, 0.82, 1));

  // Clouds part as the card arrives
  const cloudOut = card * 120;

  // Hint text visible only at the start
  const hintOpacity = 1 - seg(p, 0.02, 0.18);

  return (
    <section ref={ref} className="relative" style={{ height: '260vh' }} aria-label="Persembahan">
      <div className="sticky top-0 h-[100dvh] overflow-hidden bg-gradient-to-b from-cream-100 via-sage-50 to-cream-200 flex items-center justify-center">
        {/* soft golden glow backdrop */}
        <div
          className="absolute w-72 h-72 sm:w-[26rem] sm:h-[26rem] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.22), rgba(212,175,55,0) 65%)',
            opacity: 0.4 + card * 0.6,
            transform: `scale(${0.7 + card * 0.5})`,
          }}
        />

        {/* parting clouds */}
        <MiniCloud
          className="absolute -left-10 bottom-6 w-48 animate-cloud-bob"
          style={{ transform: `translateX(${-cloudOut}px)`, opacity: 1 - card * 0.85 }}
        />
        <MiniCloud
          className="absolute -right-10 bottom-6 w-48 animate-cloud-bob"
          style={{ transform: `translateX(${cloudOut}px) scaleX(-1)`, opacity: 1 - card * 0.85, animationDelay: '0.9s' }}
        />
        <MiniCloud
          className="absolute left-10 top-10 w-32 opacity-60 animate-cloud-bob"
          style={{ animationDelay: '1.5s', transform: `translateX(${-cloudOut * 0.5}px)` }}
        />
        <MiniCloud
          className="absolute right-8 top-24 w-28 opacity-50 animate-cloud-bob"
          style={{ animationDelay: '2.1s', transform: `translateX(${cloudOut * 0.5}px) scaleX(-1)` }}
        />

        {/* scroll hint */}
        <p
          className="absolute top-16 inset-x-0 px-8 text-center font-body text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-sage-600"
          style={{ opacity: hintOpacity }}
        >
          Gulir perlahan — seekor merpati membawa kabar bahagia
        </p>

        {/* THE BIRD */}
        <div
          className="absolute z-20 will-change-transform"
          style={{
            transform: `translate(${birdX * 3.2}px, ${birdY * 9}px) rotate(${birdRot}deg) scale(${birdFinalScale})`,
            opacity: birdOpacity,
            filter: dissolve > 0 ? `blur(${dissolve * 5}px)` : undefined,
          }}
        >
          <RoyalBird className="w-28 sm:w-36 h-24 sm:h-28 drop-shadow-[0_14px_20px_rgba(49,87,65,0.3)]" />
        </div>

        {/* golden burst */}
        {burst > 0 && burst < 1 && (
          <div className="absolute z-10 pointer-events-none" style={{ opacity: burstOpacity }}>
            <div
              className="w-40 h-40 rounded-full border-[3px] border-gold-400"
              style={{ transform: `scale(${burstScale})` }}
            />
            <div
              className="absolute inset-0 w-40 h-40 rounded-full border border-gold-300"
              style={{ transform: `scale(${burstScale * 0.72})` }}
            />
          </div>
        )}

        {/* THE PHOTO CARD */}
        <div
          className="relative z-10 will-change-transform"
          style={{
            transform: `translateY(${cardY}px) rotate(${cardRot}deg) scale(${cardScale})`,
            opacity: cardOpacity,
          }}
        >
          <div className="relative w-64 sm:w-72 rounded-[1.8rem] bg-white/90 backdrop-blur-md border-2 border-gold-400/80 shadow-[0_35px_80px_-25px_rgba(184,134,11,0.45)] p-3.5 sm:p-4 pt-6 text-center">
            {/* crown on top of the card */}
            <Crown
              className="absolute -top-7 left-1/2 w-14 h-10 animate-float-soft"
              style={{ transform: 'translateX(-50%)', opacity: caption }}
            />
            {/* inner gold frame */}
            <div className="rounded-[1.2rem] border border-gold-300/70 p-1.5">
              <div className="overflow-hidden rounded-[0.9rem] arch-frame">
                <img
                  src={weddingData.gallery[2]}
                  alt="Momen bahagia"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div style={{ opacity: caption, transform: `translateY(${(1 - caption) * 14}px)` }}>
              <p className="mt-3 sm:mt-4 font-display tracking-[0.3em] uppercase text-gold-600 text-[9px] sm:text-[10px]">
                Sebuah Momen Abadi
              </p>
              <p className="font-script text-2xl sm:text-3xl text-ink-800 mt-1">
                {weddingData.bride.nickname} <span className="text-clay-500">&amp;</span> {weddingData.groom.nickname}
              </p>
              <p className="font-body text-ink-500 text-[11px] sm:text-xs italic mt-1 mb-1">
                “Dan di antara tanda kebesaran-Nya ialah Dia menciptakan pasangan untukmu.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
