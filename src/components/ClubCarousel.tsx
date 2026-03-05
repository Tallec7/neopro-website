import { useRef, useEffect } from 'react';

interface Club {
  name: string;
  logoUrl: string;
}

interface Props {
  clubs: Club[];
}

/** Logo dans un conteneur arrondi avec outline grise */
function ClubLogo({ club }: { club: Club }) {
  return (
    <div className="flex-shrink-0 w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-[16px] border border-gray-300 bg-white flex items-center justify-center p-4">
      <img
        src={club.logoUrl}
        alt={club.name}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default function ClubCarousel({ clubs }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Filtrer les clubs sans logo (protection défensive)
  const validClubs = clubs.filter((c) => c.logoUrl);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || validClubs.length === 0) return;

    let animId: number;
    let pos = 0;
    const speed = 0.5;

    const animate = () => {
      pos += speed;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [validClubs.length]);

  if (validClubs.length === 0) return null;

  return (
    <section className="py-24 overflow-hidden bg-white">
      <h2 className="text-[36px] md:text-[48px] font-bold text-[#101828] text-center mb-[60px] px-5">
        Les clubs Neopro
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-[30px] md:gap-[50px] items-center overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Répéter les logos suffisamment pour un défilement continu sans encarts vides */}
        {Array.from({ length: Math.max(4, Math.ceil(20 / validClubs.length)) })
          .flatMap(() => validClubs)
          .map((club, i) => (
            <ClubLogo key={i} club={club} />
          ))}
      </div>
    </section>
  );
}
