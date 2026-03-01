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
    'w-full h-[50px] border border-[#d1d5dc] px-4 text-black outline-none focus:border-[#81e3bc] transition-colors text-[16px]';

  return (
    <section className="bg-[#2f3935] py-16 md:py-[96px] px-5">
      <div className="max-w-[896px] mx-auto flex flex-col items-center gap-[45px] px-4 md:px-[32px]">
        {/* Title */}
        <div className="text-center text-white">
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-[15px]">
            Intéressé ?{' '}
            <span className="font-['Playfair_Display'] italic font-normal">Écrivez-nous !</span>
          </h2>
          <p className="text-[16px] leading-[24px]">
            On peut organiser une démo ou se rencontrer...
          </p>
        </div>

        {/* White form card */}
        {status === 'success' ? (
          <div className="bg-white rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-full p-[30px]">
            <div className="text-center py-8">
              <p className="text-[#81e3bc] text-[18px] font-bold mb-2">Message envoyé !</p>
              <p className="text-[#4a5565]">Nous vous répondrons dans les plus brefs délais.</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-full">
            <form className="flex flex-col gap-[24px] items-end p-[30px]" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-[24px] w-full">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="font-medium text-[16px] text-black leading-[24px]">Nom</label>
                  <input
                    type="text"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="font-medium text-[16px] text-black leading-[24px]">Prénom</label>
                  <input
                    type="text"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] w-full">
                <label className="font-medium text-[16px] text-black leading-[24px]">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
              <div className="flex flex-col gap-[8px] w-full">
                <label className="font-medium text-[16px] text-black leading-[24px]">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[146px] border border-[#d1d5dc] px-4 py-3 text-black outline-none focus:border-[#81e3bc] transition-colors text-[16px] resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`inline-flex items-center gap-2 rounded-full px-[30px] py-[10px] font-medium text-[18px] leading-[28px] transition-colors duration-200 bg-[#81e3bc] text-[#101828] hover:bg-[#6dd4a8] ${
                  status === 'sending' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                {status === 'sending' ? 'Envoi...' : 'Envoyer'}
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-[14px] w-full text-right">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
