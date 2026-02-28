import React, { useState, useEffect } from 'react';

type Formule = 'standard' | 'autonomie' | 'premium' | null;
type VideoChoice = 'oui' | 'non' | null;
type ContentType = 'shooting' | 'photos' | null;
type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const formules = [
  {
    id: 'standard' as const,
    name: 'Standard',
    price: 1500,
    priceAnnual: '1 500',
    priceMonthly: '190',
    features: [
      'Mise à jour de vidéos',
      'Support 72h',
      '1 seule boucle par défaut',
      'Sponsors illimités',
      'Rotation aléatoire des partenaires',
      'Rapport de diffusion basique',
    ],
  },
  {
    id: 'autonomie' as const,
    name: 'Autonomie',
    price: 2100,
    priceAnnual: '2 100',
    priceMonthly: '250',
    features: [
      'Accès admin club (pour ajouter des visuels/vidéos de votre côté)',
      'Mise à jour de vidéos',
      'Support 48h',
      '2 boucles par défaut (ex : break / match)',
      'Sponsors illimités',
      'Rotation aléatoire des partenaires',
      'Rapport de diffusion basique',
    ],
  },
  {
    id: 'premium' as const,
    name: 'Premium',
    price: 3000,
    priceAnnual: '3 000',
    priceMonthly: '350',
    features: [
      'Accès admin club',
      'Mise à jour de vidéos',
      'Support 24h',
      'Nombre de boucles par défaut illimité',
      'Intégration score',
      'Sponsors illimités',
      'Rotation contrôlée des partenaires',
      'Rapport de diffusion premium',
    ],
  },
];

const videoOptions = [
  {
    id: 'photos' as const,
    name: 'Sans shooting',
    price: 500,
    priceLabel: '500',
    priceExtra: 250,
    priceExtraLabel: '250',
    description: "On intègre vos photos à nos templates d'annonce de joueurs.",
    features: [
      'Package Classique',
      'Vidéos Annonce de joueurs (avec photo uniquement)',
    ],
  },
  {
    id: 'shooting' as const,
    name: 'Avec shooting',
    price: 1000,
    priceLabel: '1 000',
    priceExtra: 500,
    priceExtraLabel: '500',
    description: 'On shoote vos joueurs et on les intègre à nos templates.',
    features: [
      'Package Classique',
      'Vidéos Annonce de joueurs (avec vidéo et photo)',
      "1 shooting vidéo et photo d'1h par équipe",
      'Toutes les photos et vidéos disponibles en HD à dispo',
    ],
  },
];

export default function DevisForm() {
  const [formule, setFormule] = useState<Formule>(null);
  const [wantsVideo, setWantsVideo] = useState<VideoChoice>(null);
  const [contentType, setContentType] = useState<ContentType>(null);
  const [teamCount, setTeamCount] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [showQuote, setShowQuote] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const offre = params.get('offre');
    if (offre === 'standard' || offre === 'autonomie' || offre === 'premium') {
      setFormule(offre);
    }
  }, []);

  const calculatePrice = () => {
    if (!formule) return 0;
    const formuleObj = formules.find((f) => f.id === formule);
    let total = formuleObj?.price || 0;
    if (wantsVideo === 'oui' && contentType && teamCount) {
      const opt = videoOptions.find((v) => v.id === contentType);
      if (opt) {
        total += opt.price + (teamCount - 1) * opt.priceExtra;
      }
    }
    return total;
  };

  const canSubmit = () => {
    if (!formule || !email.trim()) return false;
    if (wantsVideo === null) return false;
    if (wantsVideo === 'oui' && (!contentType || !teamCount)) return false;
    return true;
  };

  const handleShowQuote = () => {
    if (canSubmit()) setShowQuote(true);
  };

  const handleSubmitDevis = async () => {
    setSubmitStatus('sending');
    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          formule,
          wantsVideo,
          contentType,
          teamCount,
          total: calculatePrice(),
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

  const cardClass = (selected: boolean) =>
    `text-left p-[30px] rounded-[20px] border-2 transition-colors cursor-pointer ${
      selected
        ? 'border-[#81e3bc] bg-[#81e3bc]/5'
        : 'border-[#d9d9d9] bg-white hover:border-gray-300'
    }`;

  const selectedBorder = (active: boolean) =>
    active ? 'border-[#81e3bc] bg-[#81e3bc]/5' : 'border-[#d9d9d9] bg-white hover:border-gray-300';

  // ── Quote view ─────────────────────────────────────────────────
  if (showQuote) {
    if (submitStatus === 'success') {
      return (
        <section className="min-h-screen pt-32 pb-20 px-5">
          <div className="max-w-[700px] mx-auto text-center">
            <div className="bg-[#81e3bc]/20 border border-[#81e3bc] rounded-[20px] p-12">
              <p className="text-[#101828] text-[28px] font-bold mb-4">Devis envoyé !</p>
              <p className="text-[#4a5565] text-[16px] mb-8">
                Vous recevrez un récapitulatif par email. Notre équipe vous contactera dans les plus brefs délais.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full px-[30px] py-[10px] font-medium text-[18px] bg-[#101828] text-white hover:bg-[#1d2939] transition-colors"
              >
                Retour à l'accueil
              </a>
            </div>
          </div>
        </section>
      );
    }

    const selectedFormule = formules.find((f) => f.id === formule);
    const selectedVideo = videoOptions.find((v) => v.id === contentType);

    return (
      <section className="min-h-screen pt-32 pb-20 px-5">
        <div className="max-w-[700px] mx-auto">
          <h1 className="text-[32px] md:text-[48px] font-bold mb-2">
            <span className="font-['Playfair_Display'] italic">Votre</span> devis
          </h1>

          <div className="bg-[#2f3935] rounded-[20px] p-8 mt-8 text-white">
            <div className="flex justify-between py-3 border-b border-white/10">
              <span className="text-white/70">Formule</span>
              <span className="font-bold">
                {selectedFormule?.name} — {selectedFormule?.priceAnnual} €
              </span>
            </div>
            {wantsVideo === 'oui' && selectedVideo && (
              <>
                <div className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-white/70">Production vidéos</span>
                  <span className="font-bold">
                    {selectedVideo.name} — {selectedVideo.priceLabel} €
                  </span>
                </div>
                {teamCount && teamCount > 1 && (
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span className="text-white/70">
                      Équipes supplémentaires ({teamCount - 1})
                    </span>
                    <span className="font-bold">
                      +{(teamCount - 1) * selectedVideo.priceExtra} €
                    </span>
                  </div>
                )}
              </>
            )}
            <div className="flex justify-between py-4 pt-6">
              <span className="text-[20px] font-bold">Total TTC</span>
              <span className="text-[28px] font-bold text-[#81e3bc]">{calculatePrice()} €</span>
            </div>
          </div>

          <div className="bg-[#fff4a3] rounded-[12px] p-5 mt-6">
            <p className="text-[14px] text-[#101828]">
              Ce devis n'est pas définitif. Quelqu'un de notre équipe vous contactera dans les plus brefs délais.
            </p>
          </div>

          <div className="flex justify-between mt-10">
            <button
              type="button"
              onClick={() => setShowQuote(false)}
              className="text-[#4a5565] font-medium hover:text-[#101828] transition-colors cursor-pointer"
            >
              &#8592; Modifier
            </button>
            <button
              onClick={handleSubmitDevis}
              disabled={submitStatus === 'sending'}
              className={`inline-flex items-center gap-2 rounded-full px-[30px] py-[10px] font-medium text-[18px] bg-[#81e3bc] text-[#101828] hover:bg-[#6dd4a8] transition-colors ${
                submitStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {submitStatus === 'sending' ? 'Envoi...' : 'Envoyer mon devis'}
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M0.8 5.46667H10.1333M10.1333 5.46667L5.46667 0.8M10.1333 5.46667L5.46667 10.1333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          {submitStatus === 'error' && (
            <p className="text-red-500 text-[14px] text-center mt-4">
              Une erreur est survenue. Veuillez réessayer.
            </p>
          )}
        </div>
      </section>
    );
  }

  // ── Main form (all sections visible) ───────────────────────────
  return (
    <section className="min-h-screen pt-32 pb-20 px-5">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-[60px]">
        {/* Title */}
        <div>
          <h1 className="text-[32px] md:text-[60px] font-bold mb-2">
            <span className="font-['Playfair_Display'] italic">Obtenez</span> votre devis
          </h1>
          <p className="text-[#4a5565] text-[18px]">
            Répondez à quelques questions pour obtenir une estimation personnalisée
          </p>
        </div>

        {/* Q1: Formule */}
        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[28px] font-bold text-[#101828]">
            Sur quelle formule voulez-vous partir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {formules.map((f) => (
              <button key={f.id} onClick={() => setFormule(f.id)} className={cardClass(formule === f.id)}>
                <div className="flex flex-col gap-5">
                  <div className="flex gap-5 items-start">
                    <h3 className="text-[28px] font-bold shrink-0">{f.name}</h3>
                    <div className="flex-1 text-right">
                      <p className="text-[20px] font-bold">{f.priceAnnual}€ TTC/an</p>
                      <p className="text-[14px] text-black/80">(ou {f.priceMonthly}€ TTC/mois*)</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[18px] font-bold mb-[5px]">Inclus :</p>
                    <ul className="list-disc pl-6 flex flex-col gap-[3px]">
                      {f.features.map((feat, i) => (
                        <li key={i} className="text-[16px] text-black/80">{feat}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Q2: Video */}
        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[28px] font-bold text-[#101828]">
            Voulez-vous que l'on produise le package de vidéos ? (en option)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <button onClick={() => setWantsVideo('oui')} className={cardClass(wantsVideo === 'oui')}>
              <h3 className="text-[28px] font-bold">Oui</h3>
            </button>
            <button
              onClick={() => { setWantsVideo('non'); setContentType(null); setTeamCount(null); }}
              className={cardClass(wantsVideo === 'non')}
            >
              <h3 className="text-[28px] font-bold">Non</h3>
            </button>
          </div>
        </div>

        {/* Q3: Content type (shown when video = oui) */}
        {wantsVideo === 'oui' && (
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-[28px] font-bold text-[#101828]">
              Avec quel contenu de joueurs voulez-vous que l'on produise votre package de vidéos ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {videoOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setContentType(opt.id)}
                  className={cardClass(contentType === opt.id)}
                >
                  <div className="flex flex-col gap-5">
                    <h3 className="text-[28px] font-bold">{opt.name}</h3>
                    <div>
                      <p className="text-[#51b28b] font-bold text-[18px]">
                        {opt.priceLabel}€ TTC/équipe
                      </p>
                      <p className="text-[13px] text-black/60 mt-1">
                        ({opt.priceExtraLabel}€ TTC/extra équipe)
                      </p>
                    </div>
                    <p className="text-black/80 text-[15px]">{opt.description}</p>
                    <div>
                      <p className="text-[18px] font-bold mb-[5px]">Inclus :</p>
                      <ul className="list-disc pl-6 flex flex-col gap-[3px]">
                        {opt.features.map((feat, i) => (
                          <li key={i} className="text-[16px] text-black/80">{feat}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Q4: Team count (shown when video = oui) */}
        {wantsVideo === 'oui' && (
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-[28px] font-bold text-[#101828]">
              Pour combien d'équipes voulez-vous produire ces vidéos ?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[1, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  onClick={() => setTeamCount(n)}
                  className={`rounded-[20px] border-2 transition-colors cursor-pointer flex flex-col items-center justify-center h-[100px] ${selectedBorder(teamCount === n)}`}
                >
                  <span className="text-[28px] font-bold">{n}</span>
                  <p className="text-[14px] text-black/60">équipe{n > 1 ? 's' : ''}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Email */}
        <div className="flex flex-col gap-[30px]">
          <h2 className="text-[28px] font-bold text-[#101828]">
            Renseignez votre adresse e-mail pour voir et recevoir votre devis
          </h2>
          <div>
            <label className="text-[16px] font-medium text-black block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full max-w-[656px] h-[50px] bg-white border border-[#d1d5dc] rounded-[10px] px-5 text-[#101828] outline-none focus:border-[#81e3bc] transition-colors"
            />
          </div>
        </div>

        {/* Submit */}
        <div>
          <button
            onClick={handleShowQuote}
            disabled={!canSubmit()}
            className={`inline-flex items-center gap-2 rounded-full px-[30px] py-[10px] font-medium text-[18px] bg-[#81e3bc] text-black hover:bg-[#6dd4a8] transition-colors ${
              !canSubmit() ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            Voir le devis
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M0.8 5.46667H10.1333M10.1333 5.46667L5.46667 0.8M10.1333 5.46667L5.46667 10.1333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
