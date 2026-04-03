import React, { useState, useEffect } from 'react';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';

const sports = [
  'Football',
  'Rugby',
  'Handball',
  'Basketball',
  'Volleyball',
  'Futsal',
  'Rink Hockey',
  'Hockey sur glace',
  'Badminton',
  'Tennis de table',
  'Autre',
];

const offres = ['Essentiel', 'Autonomie', 'Premium', 'Je ne sais pas encore'];
const packagesVideo = ['Classique (inclus)', 'Sans shooting', 'Avec shooting', 'Je ne sais pas encore'];
const nbEquipes = ['1', '2', '3', '4', '5+'];

const inputClass =
  'w-full h-[50px] bg-white border border-[#d1d5dc] rounded-[10px] px-5 text-[#101828] outline-none focus:border-[#81e3bc] transition-colors';
const selectClass =
  'w-full h-[50px] bg-white border border-[#d1d5dc] rounded-[10px] px-4 text-[#101828] outline-none focus:border-[#81e3bc] transition-colors appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%234a5565%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E")] bg-no-repeat bg-[right_1rem_center]';
const labelClass = 'text-[16px] font-medium text-[#101828] block mb-2';

export default function DevisForm() {
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const offreParam = params.get('offre');
    if (offreParam) {
      const match = offres.find(
        (o) => o.toLowerCase() === offreParam.toLowerCase()
      );
      if (match) setOffre(match);
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
              Demande envoyée !
            </p>
            <p className="text-[#4a5565] text-[16px] mb-8">
              Merci pour votre intérêt. Notre équipe vous contactera dans les
              plus brefs délais.
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

  return (
    <section className="min-h-screen pt-32 pb-20 px-5">
      <div className="max-w-[800px] mx-auto">
        {/* Title */}
        <div className="mb-[50px]">
          <h1 className="text-[32px] md:text-[60px] font-bold mb-2">
            <span className="font-['Playfair_Display'] italic">Parlez-nous</span> de
            votre club
          </h1>
          <p className="text-[#4a5565] text-[18px]">
            Remplissez ce formulaire et notre équipe vous recontactera rapidement.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[30px]">
          {/* Row 1: Club + Sport */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div>
              <label className={labelClass}>
                Nom du club <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
                placeholder="Nom de votre club"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                Sport <span className="text-red-500">*</span>
              </label>
              <select
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                required
                className={selectClass}
              >
                <option value="" disabled>
                  Sélectionnez un sport
                </option>
                {sports.map((s) => (
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
                Nom et prénom du contact <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Jean Dupont"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@monclub.fr"
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 3: Téléphone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div>
              <label className={labelClass}>Téléphone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="06 12 34 56 78"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Nombre d'équipes</label>
              <select
                value={nbEquipe}
                onChange={(e) => setNbEquipe(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>
                  Sélectionnez
                </option>
                {nbEquipes.map((n) => (
                  <option key={n} value={n}>
                    {n} équipe{n !== '1' ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Offre + Package */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div>
              <label className={labelClass}>Offre qui vous intéresse</label>
              <select
                value={offre}
                onChange={(e) => setOffre(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>
                  Sélectionnez une offre
                </option>
                {offres.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Package vidéo</label>
              <select
                value={packageVideo}
                onChange={(e) => setPackageVideo(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>
                  Sélectionnez un package
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
            <label className={labelClass}>Message (optionnel)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Précisez vos besoins, vos questions..."
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
              {submitStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer ma demande'}
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
              Une erreur est survenue. Veuillez réessayer.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
