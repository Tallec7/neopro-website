import { useState } from 'react';

interface Testimonial {
  quote: string;
  clubName: string;
}

interface Props {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: Props) {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-24 px-5 bg-[#2f3935]">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-white text-[16px] font-medium tracking-wider uppercase text-center mb-4">
          Ce que disent les clubs
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full px-4">
                <blockquote className="text-white text-[24px] md:text-[32px] font-bold leading-relaxed mb-8 text-center">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="text-center">
                  <p className="text-[#81e3bc] font-medium text-[14px]">{t.clubName}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
              className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-30 cursor-pointer"
              disabled={current === 0}
              aria-label="Precedent"
            >
              &#8592;
            </button>
            <button
              onClick={() => setCurrent((prev) => Math.min(testimonials.length - 1, prev + 1))}
              className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white/10 transition-colors disabled:opacity-30 cursor-pointer"
              disabled={current === testimonials.length - 1}
              aria-label="Suivant"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
