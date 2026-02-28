import React, { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ nom: '', prenom: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClasses =
    'bg-transparent border border-[#4a5565] rounded-[10px] px-5 py-3 text-white placeholder:text-[#6b7280] outline-none focus:border-[#81e3bc] transition-colors';

  return (
    <section className="bg-[#2f3935] py-20 px-5">
      <div className="max-w-[600px] mx-auto">
        <h2 className="text-white text-[40px] md:text-[48px] font-bold leading-tight mb-2">
          Intéressé ?{' '}
          <span className="font-['Playfair_Display'] italic text-[#81e3bc]">Écrivez-nous !</span>
        </h2>
        <p className="text-[#a0a8a3] mb-10 text-[16px]">
          On peut organiser une démo ou se rencontrer...
        </p>

        {status === 'success' ? (
          <div className="bg-[#81e3bc]/20 border border-[#81e3bc] rounded-[12px] p-6 text-center">
            <p className="text-[#81e3bc] text-[18px] font-bold mb-2">Message envoyé !</p>
            <p className="text-white/70">Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex gap-5">
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                required
                value={formData.nom}
                onChange={handleChange}
                className={`flex-1 ${inputClasses}`}
              />
              <input
                type="text"
                name="prenom"
                placeholder="Prenom"
                required
                value={formData.prenom}
                onChange={handleChange}
                className={`flex-1 ${inputClasses}`}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClasses}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`self-start inline-flex items-center gap-2 rounded-full px-[30px] py-[10px] font-medium text-[18px] leading-[28px] transition-colors duration-200 bg-[#81e3bc] text-[#101828] hover:bg-[#6dd4a8] ${
                status === 'sending' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {status === 'sending' ? 'Envoi...' : 'Envoyer'}
            </button>
            {status === 'error' && (
              <p className="text-red-400 text-[14px]">
                Une erreur est survenue. Veuillez reessayer.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
