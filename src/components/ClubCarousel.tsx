interface Club {
  name: string;
  logoUrl: string;
}

interface Props {
  clubs: Club[];
  title?: string;
}

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

export default function ClubCarousel({ clubs, title = 'Les clubs MADXP' }: Props) {
  const validClubs = clubs.filter((c) => c.logoUrl);

  if (validClubs.length === 0) return null;

  // Dupliquer les logos pour créer un défilement infini en CSS
  const logos = [...validClubs, ...validClubs, ...validClubs, ...validClubs];

  return (
    <section className="py-24 overflow-hidden bg-white">
      <h2 className="text-[36px] md:text-[48px] font-bold text-[#0a0b0d] text-center mb-[60px] px-5">
        {title}
      </h2>
      <div className="overflow-hidden">
        <div
          className="flex gap-[30px] md:gap-[50px] items-center animate-scroll"
          style={{
            width: 'max-content',
          }}
        >
          {logos.map((club, i) => (
            <ClubLogo key={i} club={club} />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll ${validClubs.length * 5}s linear infinite;
        }
      `}</style>
    </section>
  );
}
