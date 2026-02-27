import React, { useState, useEffect } from 'react';

type Formule = 'standard' | 'autonomie' | 'premium' | null;
type VideoChoice = 'oui' | 'non' | null;
type ContentType = 'shooting' | 'photos' | null;
type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const formules = [
  { id: 'standard' as const, name: 'Standard', price: 1500 },
  { id: 'autonomie' as const, name: 'Autonomie', price: 2100 },
  { id: 'premium' as const, name: 'Premium', price: 3000 },
];

export default function DevisForm() {
  const [step, setStep] = useState(1);
  const [formule, setFormule] = useState<Formule>(null);
  const [wantsVideo, setWantsVideo] = useState<VideoChoice>(null);
  const [contentType, setContentType] = useState<ContentType>(null);
  const [teamCount, setTeamCount] = useState<number | null>(null);
  const [showQuote, setShowQuote] = useState(false);

  // Infos contact (étape finale)
  const [contactInfo, setContactInfo] = useState({
    nom: '',
    prenom: '',
    email: '',
    club: '',
  });
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
      if (contentType === 'shooting') {
        total += 1000 + (teamCount - 1) * 500;
      } else {
        total += 500 + (teamCount - 1) * 250;
      }
    }

    return total;
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formule !== null;
      case 2: return wantsVideo !== null;
      case 3: return contentType !== null;
      case 4: return teamCount !== null;
      default: return false;
    }
  };

  const totalSteps = wantsVideo === 'oui' ? 4 : 2;

  const handleNext = () => {
    if (step === totalSteps) {
      setShowQuote(true);
    } else if (wantsVideo === 'non' && step === 2) {
      setShowQuote(true);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (showQuote) {
      setShowQuote(false);
      if (wantsVideo === 'non') setStep(2);
      else setStep(totalSteps);
    } else if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const handleSubmitDevis = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const res = await fetch('/api/devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...contactInfo,
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

  const selectionClass = (selected: boolean) =>
    `text-left p-8 md:p-10 rounded-[20px] border-2 transition-colors cursor-pointer min-h-[100px] ${
      selected
        ? 'border-[#81e3bc] bg-[#81e3bc]/5'
        : 'border-gray-200 bg-white hover:border-gray-300'
    }`;

  const inputClasses =
    'w-full bg-white border border-gray-200 rounded-[10px] px-5 py-3 text-[#101828] outline-none focus:border-[#81e3bc] transition-colors';

  // Quote view (récap)
  if (showQuote) {
    if (submitStatus === 'success') {
      return (
        <section className="min-h-screen pt-32 pb-20 px-5 bg-[#f8f9fa]">
          <div className="max-w-[700px] mx-auto text-center">
            <div className="bg-[#81e3bc]/20 border border-[#81e3bc] rounded-[20px] p-12">
              <p className="text-[#101828] text-[28px] font-bold mb-4">Devis envoye !</p>
              <p className="text-[#4a5565] text-[16px] mb-8">
                Vous recevrez un recapitulatif par email. Notre equipe vous contactera dans les plus brefs delais.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-full px-[30px] py-[10px] font-medium text-[18px] bg-[#101828] text-white hover:bg-[#1d2939] transition-colors"
              >
                Retour a l'accueil
              </a>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="min-h-screen pt-32 pb-20 px-5 bg-[#f8f9fa]">
        <div className="max-w-[700px] mx-auto">
          <h1 className="text-[32px] md:text-[48px] font-bold mb-2">
            <span className="font-['Playfair_Display'] italic">Votre</span> devis
          </h1>

          <div className="bg-[#2f3935] rounded-[20px] p-8 mt-8 text-white">
            <div className="flex justify-between py-3 border-b border-white/10">
              <span className="text-white/70">Formule</span>
              <span className="font-bold capitalize">
                {formule} — {formules.find((f) => f.id === formule)?.price} EUR
              </span>
            </div>
            {wantsVideo === 'oui' && (
              <>
                <div className="flex justify-between py-3 border-b border-white/10">
                  <span className="text-white/70">Production videos</span>
                  <span className="font-bold">
                    {contentType === 'shooting' ? 'Avec shooting' : 'Sans shooting'} —{' '}
                    {contentType === 'shooting' ? '1 000' : '500'} EUR
                  </span>
                </div>
                {teamCount && teamCount > 1 && (
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span className="text-white/70">
                      Equipes supplementaires ({teamCount - 1})
                    </span>
                    <span className="font-bold">
                      +{contentType === 'shooting' ? (teamCount - 1) * 500 : (teamCount - 1) * 250}{' '}
                      EUR
                    </span>
                  </div>
                )}
              </>
            )}
            <div className="flex justify-between py-4 pt-6">
              <span className="text-[20px] font-bold">Total TTC</span>
              <span className="text-[28px] font-bold text-[#81e3bc]">{calculatePrice()} EUR</span>
            </div>
          </div>

          <div className="bg-[#fff4a3] rounded-[12px] p-5 mt-6">
            <p className="text-[14px] text-[#101828]">
              Ce devis n'est pas definitif. Quelqu'un de notre equipe vous contactera dans les plus brefs delais.
            </p>
          </div>

          {/* Formulaire contact */}
          <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmitDevis}>
            <h3 className="text-[20px] font-bold">Vos coordonnees</h3>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Nom"
                required
                value={contactInfo.nom}
                onChange={(e) => setContactInfo((p) => ({ ...p, nom: e.target.value }))}
                className={inputClasses}
              />
              <input
                type="text"
                placeholder="Prenom"
                required
                value={contactInfo.prenom}
                onChange={(e) => setContactInfo((p) => ({ ...p, prenom: e.target.value }))}
                className={inputClasses}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              required
              value={contactInfo.email}
              onChange={(e) => setContactInfo((p) => ({ ...p, email: e.target.value }))}
              className={inputClasses}
            />
            <input
              type="text"
              placeholder="Nom du club"
              value={contactInfo.club}
              onChange={(e) => setContactInfo((p) => ({ ...p, club: e.target.value }))}
              className={inputClasses}
            />

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handleBack}
                className="text-[#4a5565] font-medium hover:text-[#101828] transition-colors cursor-pointer"
              >
                &#8592; Retour
              </button>
              <button
                type="submit"
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
              <p className="text-red-500 text-[14px] text-center">
                Une erreur est survenue. Veuillez reessayer.
              </p>
            )}
          </form>
        </div>
      </section>
    );
  }

  // Steps view
  return (
    <section className="min-h-screen pt-32 pb-20 px-5 bg-[#f8f9fa]">
      <div className="max-w-[700px] mx-auto">
        <h1 className="text-[32px] md:text-[60px] font-bold mb-2">
          <span className="font-['Playfair_Display'] italic">Obtenez</span> votre devis
        </h1>
        <p className="text-[#4a5565] mb-12">
          Repondez a quelques questions pour obtenir une estimation personnalisee
        </p>

        {/* Progress */}
        <div className="flex gap-2 mb-12">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors ${
                i < step ? 'bg-[#81e3bc]' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Step 1: Formule */}
        {step === 1 && (
          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold mb-8">
              Sur quelle formule voulez-vous partir ?
            </h2>
            <div className="flex flex-col gap-4">
              {formules.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFormule(f.id)}
                  className={selectionClass(formule === f.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-[20px] font-bold">{f.name}</h3>
                    <span className="text-[24px] font-bold">{f.price} EUR</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Video */}
        {step === 2 && (
          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold mb-8">
              Voulez-vous que l'on produise le package de videos ? (en option)
            </h2>
            <div className="flex flex-col gap-4">
              <button onClick={() => setWantsVideo('oui')} className={selectionClass(wantsVideo === 'oui')}>
                <h3 className="text-[20px] font-bold">Oui</h3>
              </button>
              <button
                onClick={() => { setWantsVideo('non'); setContentType(null); setTeamCount(null); }}
                className={selectionClass(wantsVideo === 'non')}
              >
                <h3 className="text-[20px] font-bold">Non</h3>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Content type */}
        {step === 3 && (
          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold mb-8">
              Avec quel contenu de joueurs voulez-vous que l'on produise votre package de videos ?
            </h2>
            <div className="flex flex-col gap-4">
              <button onClick={() => setContentType('shooting')} className={selectionClass(contentType === 'shooting')}>
                <h3 className="text-[20px] font-bold">Shooting Neopro (photo + video)</h3>
              </button>
              <button onClick={() => setContentType('photos')} className={selectionClass(contentType === 'photos')}>
                <h3 className="text-[20px] font-bold">Photos du club</h3>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Number of teams */}
        {step === 4 && (
          <div>
            <h2 className="text-[24px] md:text-[32px] font-bold mb-8">
              Pour combien d'equipes voulez-vous produire ces videos ?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  onClick={() => setTeamCount(n)}
                  className={`p-8 rounded-[20px] border-2 transition-colors cursor-pointer text-center ${
                    teamCount === n ? 'border-[#81e3bc] bg-[#81e3bc]/5' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <span className="text-[24px] font-bold">{n}</span>
                  <p className="text-[14px] text-[#4a5565]">equipe{n > 1 ? 's' : ''}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          {step > 1 ? (
            <button
              onClick={handleBack}
              className="text-[#4a5565] font-medium hover:text-[#101828] transition-colors cursor-pointer"
            >
              &#8592; Retour
            </button>
          ) : (
            <div />
          )}
          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`inline-flex items-center gap-2 rounded-full px-[30px] py-[10px] font-medium text-[18px] bg-[#81e3bc] text-[#101828] hover:bg-[#6dd4a8] transition-colors ${
              !canProceed() ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
          >
            {step === totalSteps || (wantsVideo === 'non' && step === 2) ? 'Voir mon devis' : 'Suivant'}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M0.8 5.46667H10.1333M10.1333 5.46667L5.46667 0.8M10.1333 5.46667L5.46667 10.1333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
