import { useRef, useEffect } from 'react';

interface Club {
  name: string;
  logoUrl: string;
}

interface Props {
  clubs: Club[];
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
    <section className="py-16 overflow-hidden bg-white">
      <h2 className="text-[40px] md:text-[48px] font-bold text-center mb-12 px-5">
        Les clubs{' '}
        <span className="font-['Playfair_Display'] italic text-[#51b28b]">Neopro</span>
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-12 items-center overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...validClubs, ...validClubs].map((club, i) => (
          <img
            key={i}
            src={club.logoUrl}
            alt={club.name}
            className="h-[60px] w-auto object-contain flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
