import React, { useState, useEffect } from 'react';
import { ui, defaultLocale, type Locale, type TranslationKey } from '@/i18n/ui';

function t(locale: Locale, key: TranslationKey): string {
  return ui[locale][key] ?? ui[defaultLocale][key] ?? key;
}

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const sports = [
  'Football',
  'Rugby',
  'Handball',
  'Basketball',
  'Volleyball',
  'Futsal',
];

const sportsByLocale: Record<Locale, string[]> = {
  fr: [...sports, 'Rink Hockey', 'Hockey sur glace', 'Badminton', 'Tennis de table', 'Autre'],
  en: [...sports, 'Rink Hockey', 'Ice Hockey', 'Badminton', 'Table Tennis', 'Other'],
  es: [...sports, 'Rink Hockey', 'Hockey sobre hielo', 'Bádminton', 'Tenis de mesa', 'Otro'],
  de: [...sports, 'Rollhockey', 'Eishockey', 'Badminton', 'Tischtennis', 'Andere'],
  da: [...sports, 'Rullehockey', 'Ishockey', 'Badminton', 'Bordtennis', 'Andet'],
  it: [...sports, 'Hockey su pista', 'Hockey su ghiaccio', 'Badminton', 'Tennis tavolo', 'Altro'],
  pl: [...sports, 'Hokej na rolkach', 'Hokej na lodzie', 'Badminton', 'Tenis stołowy', 'Inne'],
  nl: [...sports, 'Rolhockey', 'IJshockey', 'Badminton', 'Tafeltennis', 'Anders'],
  pt: [...sports, 'Hóquei em patins', 'Hóquei no gelo', 'Badminton', 'Ténis de mesa', 'Outro'],
};

const offresByLocale: Record<Locale, string[]> = {
  fr: ['Play', 'Club', 'Pro', 'Premium', 'Flotte (multi-clubs)', 'Production de contenu', 'Options à la carte', 'Je ne sais pas encore'],
  en: ['Play', 'Club', 'Pro', 'Premium', 'Fleet (multi-clubs)', 'Content production', 'Add-on options', "I don't know yet"],
  es: ['Play', 'Club', 'Pro', 'Premium', 'Flota (multi-clubes)', 'Producción de contenido', 'Opciones a la carta', 'Aún no lo sé'],
  de: ['Play', 'Club', 'Pro', 'Premium', 'Flotte (Multi-Vereine)', 'Content-Produktion', 'Einzeloptionen', 'Weiß ich noch nicht'],
  da: ['Play', 'Club', 'Pro', 'Premium', 'Flåde (multi-klubber)', 'Indholdsproduktion', 'Tilvalg', 'Ved det ikke endnu'],
  it: ['Play', 'Club', 'Pro', 'Premium', 'Flotta (multi-club)', 'Produzione contenuti', 'Opzioni à la carte', 'Non lo so ancora'],
  pl: ['Play', 'Club', 'Pro', 'Premium', 'Flota (multi-kluby)', 'Produkcja treści', 'Opcje à la carte', 'Jeszcze nie wiem'],
  nl: ['Play', 'Club', 'Pro', 'Premium', 'Vloot (multi-clubs)', 'Contentproductie', 'Opties à la carte', 'Weet ik nog niet'],
  pt: ['Play', 'Club', 'Pro', 'Premium', 'Frota (multi-clubes)', 'Produção de conteúdo', 'Opções à la carte', 'Ainda não sei'],
};

// Mapping slug d'URL → libellé d'offre
const slugToOffreLabel: Record<Locale, Record<string, string>> = {
  fr: {
    play: 'Play', club: 'Club', pro: 'Pro', premium: 'Premium',
    flotte: 'Flotte (multi-clubs)', production: 'Production de contenu', options: 'Options à la carte',
  },
  en: {
    play: 'Play', club: 'Club', pro: 'Pro', premium: 'Premium',
    flotte: 'Fleet (multi-clubs)', production: 'Content production', options: 'Add-on options',
  },
  es: {
    play: 'Play', club: 'Club', pro: 'Pro', premium: 'Premium',
    flotte: 'Flota (multi-clubes)', production: 'Producción de contenido', options: 'Opciones a la carta',
  },
  de: {
    play: 'Play', club: 'Club', pro: 'Pro', premium: 'Premium',
    flotte: 'Flotte (Multi-Vereine)', production: 'Content-Produktion', options: 'Einzeloptionen',
  },
  da: {
    play: 'Play', club: 'Club', pro: 'Pro', premium: 'Premium',
    flotte: 'Flåde (multi-klubber)', production: 'Indholdsproduktion', options: 'Tilvalg',
  },
  it: {
    play: 'Play', club: 'Club', pro: 'Pro', premium: 'Premium',
    flotte: 'Flotta (multi-club)', production: 'Produzione contenuti', options: 'Opzioni à la carte',
  },
  pl: {
    play: 'Play', club: 'Club', pro: 'Pro', premium: 'Premium',
    flotte: 'Flota (multi-kluby)', production: 'Produkcja treści', options: 'Opcje à la carte',
  },
  nl: {
    play: 'Play', club: 'Club', pro: 'Pro', premium: 'Premium',
    flotte: 'Vloot (multi-clubs)', production: 'Contentproductie', options: 'Opties à la carte',
  },
  pt: {
    play: 'Play', club: 'Club', pro: 'Pro', premium: 'Premium',
    flotte: 'Frota (multi-clubes)', production: 'Produção de conteúdo', options: 'Opções à la carte',
  },
};

const packagesByLocale: Record<Locale, string[]> = {
  fr: ['Classique (inclus)', 'Sans shooting', 'Avec shooting', 'Je ne sais pas encore'],
  en: ['Standard (included)', 'Without shoot', 'With shoot', "I don't know yet"],
  es: ['Estándar (incluido)', 'Sin sesión de fotos', 'Con sesión de fotos', 'Aún no lo sé'],
  de: ['Standard (inklusive)', 'Ohne Fotoshooting', 'Mit Fotoshooting', 'Weiß ich noch nicht'],
  da: ['Standard (inkluderet)', 'Uden fotoshoot', 'Med fotoshoot', 'Ved det ikke endnu'],
  it: ['Standard (incluso)', 'Senza shooting', 'Con shooting', 'Non lo so ancora'],
  pl: ['Standard (w cenie)', 'Bez sesji zdjęciowej', 'Z sesją zdjęciową', 'Jeszcze nie wiem'],
  nl: ['Standaard (inbegrepen)', 'Zonder fotoshoot', 'Met fotoshoot', 'Weet ik nog niet'],
  pt: ['Padrão (incluído)', 'Sem sessão fotográfica', 'Com sessão fotográfica', 'Ainda não sei'],
};

const nbEquipes = ['1', '2', '3', '4', '5+'];

const inputClass =
  'w-full h-[50px] bg-white border border-[#d1d5dc] rounded-[10px] px-5 text-[#101828] outline-none focus:border-[#81e3bc] transition-colors';
const selectClass =
  'w-full h-[50px] bg-white border border-[#d1d5dc] rounded-[10px] px-4 text-[#101828] outline-none focus:border-[#81e3bc] transition-colors appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234a5565%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E")] bg-no-repeat bg-[right_1rem_center]';
const labelClass = 'text-[16px] font-medium text-[#101828] block mb-2';

interface Props {
  locale?: Locale;
}

export default function DevisForm({ locale = 'fr' }: Props) {
  const [clubName, setClubName] = useState('');
  const [sport, setSport] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [offre, setOffre] = useState('');
  const [packageVideo, setPackageVideo] = useState('');
  const [nbEquipe, setNbEquipe] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const offres = offresByLocale[locale];
  const packagesVideo = packagesByLocale[locale];
  const localSports = sportsByLocale[locale];
  const homeUrl = locale === 'fr' ? '/' : `/${locale}/`;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const offreParam = params.get('offre');
    if (offreParam) {
      const slugMatch = slugToOffreLabel[locale]?.[offreParam.toLowerCase()];
      if (slugMatch) {
        setOffre(slugMatch);
      } else {
        const match = offres.find(
          (o) => o.toLowerCase() === offreParam.toLowerCase()
        );
        if (match) setOffre(match);
      }
    }
  }, []);

  const canSubmit = () =>
    clubName.trim() && sport && contactName.trim() && email.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit()) return;

    setSubmitStatus('sending');
    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clubName,
          sport,
          contactName,
          email,
          phone,
          offre,
          packageVideo,
          nbEquipe,
          message,
        }),
      });
      if (res.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <section className="min-h-screen pt-32 pb-20 px-5">
        <div className="max-w-[700px] mx-auto text-center">
          <div className="bg-[#81e3bc]/20 border border-[#81e3bc] rounded-[20px] p-12">
            <p className="text-[#101828] text-[28px] font-bold mb-4">
              {t(locale, 'devisForm.success.title')}
            </p>
            <p className="text-[#4a5565] text-[16px] mb-8">
              {t(locale, 'devisForm.success.text')}
            </p>
            <a
              href={homeUrl}
              className="inline-flex items-center gap-2 rounded-full px-[30px] py-[10px] font-medium text-[18px] bg-[#101828] text-white hover:bg-[#1d2939] transition-colors"
            >
              {t(locale, 'devisForm.success.cta')}
            </a>
          </div>
        </div>
      </section>
    );
  }

  const teamLabel = (n: string) => {
    const word = n !== '1' ? t(locale, 'devisForm.equipes') : t(locale, 'devisForm.equipe');
    return `${n} ${word}`;
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-5">
      <div className="max-w-[800px] mx-auto">
        {/* Title */}
        <div className="mb-[50px]">
          <h1 className="text-[32px] md:text-[60px] font-bold mb-2">
            <span className="font-['Playfair_Display'] italic">{t(locale, 'devisForm.heading')}</span> {t(locale, 'devisForm.headingSuffix')}
          </h1>
          <p className="text-[#4a5565] text-[18px]">
            {t(locale, 'devisForm.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[30px]">
          {/* Row 1: Club + Sport */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div>
              <label className={labelClass}>
                {t(locale, 'devisForm.clubName')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
                placeholder={t(locale, 'devisForm.clubPlaceholder')}
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                {t(locale, 'devisForm.sport')} <span className="text-red-500">*</span>
              </label>
              <select
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                required
                className={selectClass}
              >
                <option value="" disabled>
                  {t(locale, 'devisForm.sportPlaceholder')}
                </option>
                {localSports.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Contact + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div>
              <label className={labelClass}>
                {t(locale, 'devisForm.contactName')} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder={t(locale, 'devisForm.contactPlaceholder')}
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                {t(locale, 'devisForm.email')} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(locale, 'devisForm.emailPlaceholder')}
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 3: Téléphone + Nb équipes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div>
              <label className={labelClass}>{t(locale, 'devisForm.phone')}</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t(locale, 'devisForm.phonePlaceholder')}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>{t(locale, 'devisForm.nbEquipes')}</label>
              <select
                value={nbEquipe}
                onChange={(e) => setNbEquipe(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>
                  {t(locale, 'devisForm.nbEquipesPlaceholder')}
                </option>
                {nbEquipes.map((n) => (
                  <option key={n} value={n}>
                    {teamLabel(n)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Offre + Package */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div>
              <label className={labelClass}>{t(locale, 'devisForm.offre')}</label>
              <select
                value={offre}
                onChange={(e) => setOffre(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>
                  {t(locale, 'devisForm.offrePlaceholder')}
                </option>
                {offres.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>{t(locale, 'devisForm.package')}</label>
              <select
                value={packageVideo}
                onChange={(e) => setPackageVideo(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>
                  {t(locale, 'devisForm.packagePlaceholder')}
                </option>
                {packagesVideo.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className={labelClass}>{t(locale, 'devisForm.message')}</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t(locale, 'devisForm.messagePlaceholder')}
              rows={4}
              className="w-full bg-white border border-[#d1d5dc] rounded-[10px] px-5 py-4 text-[#101828] outline-none focus:border-[#81e3bc] transition-colors resize-y"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={!canSubmit() || submitStatus === 'sending'}
              className={`inline-flex items-center gap-2 rounded-full px-[30px] py-[12px] font-medium text-[18px] bg-[#81e3bc] text-[#101828] hover:bg-[#6dd4a8] transition-colors ${
                !canSubmit() || submitStatus === 'sending'
                  ? 'opacity-50 cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
            >
              {submitStatus === 'sending' ? t(locale, 'devisForm.submitting') : t(locale, 'devisForm.submit')}
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M0.8 5.46667H10.1333M10.1333 5.46667L5.46667 0.8M10.1333 5.46667L5.46667 10.1333"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {submitStatus === 'error' && (
            <p className="text-red-500 text-[14px]">
              {t(locale, 'devisForm.error')}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
