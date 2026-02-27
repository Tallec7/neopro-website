import { useRef, useEffect } from 'react';

interface Club {
  name: string;
  logoUrl: string;
}

interface Props {
  clubs: Club[];
}

const HEXAGON_COLORS = ['#51B28B', '#1EC5E0'];

/** Hexagone SVG coloré avec logo centré */
function HexagonLogo({ club, colorIndex }: { club: Club; colorIndex: number }) {
  const color = HEXAGON_COLORS[colorIndex % HEXAGON_COLORS.length];

  return (
    <div className="relative flex-shrink-0 w-[140px] h-[140px] md:w-[200px] md:h-[200px]">
      {/* Hexagone coloré */}
      <svg
        className="absolute inset-[2.3%_6.7%] w-[86.6%] h-[95.4%]"
        viewBox="0 0 173.205 190.718"
        fill="none"
      >
        <path
          d="M86.6025 0L173.205 47.6795V143.039L86.6025 190.718L0 143.039V47.6795L86.6025 0Z"
          fill={color}
        />
      </svg>
      {/* Logo centré dans l'hexagone */}
      <img
        src={club.logoUrl}
        alt={club.name}
        className="absolute inset-0 w-[70%] h-[70%] m-auto object-contain"
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
        className="flex gap-[40px] md:gap-[70px] items-center overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...validClubs, ...validClubs].map((club, i) => (
          <HexagonLogo key={i} club={club} colorIndex={i} />
        ))}
      </div>
    </section>
  );
}
