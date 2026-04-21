import React, { useState } from 'react';
import { ui, defaultLocale, type Locale, type TranslationKey } from '@/i18n/ui';

function t(locale: Locale, key: TranslationKey): string {
  return ui[locale][key] ?? ui[defaultLocale][key] ?? key;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

interface Props {
  locale?: Locale;
}

export default function ContactForm({ locale = 'fr' }: Props) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    organisation: '',
    objet: '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
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
        setFormData({ nom: '', prenom: '', email: '', telephone: '', organisation: '', objet: '', message: '', consent: false });
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
            {t(locale, 'contact.title')}{' '}
            <span className="font-['Playfair_Display'] italic font-normal">{t(locale, 'contact.titleItalic')}</span>
          </h2>
          <p className="text-[16px] leading-[24px]">
            {t(locale, 'contact.subtitle')}
          </p>
        </div>

        {/* White form card */}
        {status === 'success' ? (
          <div className="bg-white rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-full p-[30px]">
            <div className="text-center py-8">
              <p className="text-[#81e3bc] text-[18px] font-bold mb-2">{t(locale, 'contact.success.title')}</p>
              <p className="text-[#4a5565]">{t(locale, 'contact.success.text')}</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-full">
            <form className="flex flex-col gap-[24px] items-end p-[30px]" onSubmit={handleSubmit}>
              {/* Honeypot anti-spam */}
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="flex flex-col md:flex-row gap-[24px] w-full">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="font-medium text-[16px] text-black leading-[24px]">
                    {t(locale, 'contact.nom')} <span className="text-red-500">*</span>
                  </label>
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
                  <label className="font-medium text-[16px] text-black leading-[24px]">
                    {t(locale, 'contact.prenom')} <span className="text-red-500">*</span>
                  </label>
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

              <div className="flex flex-col md:flex-row gap-[24px] w-full">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="font-medium text-[16px] text-black leading-[24px]">
                    {t(locale, 'contact.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="font-medium text-[16px] text-black leading-[24px]">
                    {t(locale, 'contact.telephone')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    required
                    value={formData.telephone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[24px] w-full">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="font-medium text-[16px] text-black leading-[24px]">
                    {t(locale, 'contact.organisation')}
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder={t(locale, 'contact.placeholder.organisation')}
                    className={inputClasses}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className="font-medium text-[16px] text-black leading-[24px]">
                    {t(locale, 'contact.objet')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="objet"
                    required
                    value={formData.objet}
                    onChange={handleChange}
                    className={`${inputClasses} appearance-none bg-white`}
                  >
                    <option value="">{t(locale, 'contact.objet.select')}</option>
                    <option value="demo">{t(locale, 'contact.objet.demo')}</option>
                    <option value="devis">{t(locale, 'contact.objet.devis')}</option>
                    <option value="info">{t(locale, 'contact.objet.info')}</option>
                    <option value="autre">{t(locale, 'contact.objet.autre')}</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-[8px] w-full">
                <label className="font-medium text-[16px] text-black leading-[24px]">{t(locale, 'contact.message')}</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[146px] border border-[#d1d5dc] px-4 py-3 text-black outline-none focus:border-[#81e3bc] transition-colors text-[16px] resize-none"
                />
              </div>

              {/* RGPD consent */}
              <div className="flex items-start gap-3 w-full">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 accent-[#81e3bc] cursor-pointer"
                />
                <label className="text-[14px] text-[#4a5565] leading-[20px]">
                  {t(locale, 'contact.consent')}{' '}
                  <a
                    href="/politique-de-confidentialite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[#51b28b] hover:text-[#81e3bc]"
                  >
                    {t(locale, 'contact.privacyLink')}
                  </a>
                  {' '}<span className="text-red-500">*</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`inline-flex items-center gap-2 rounded-full px-[30px] py-[10px] font-medium text-[18px] leading-[28px] transition-colors duration-200 bg-[#81e3bc] text-[#101828] hover:bg-[#6dd4a8] ${
                  status === 'sending' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                {status === 'sending' ? t(locale, 'contact.sending') : t(locale, 'contact.send')}
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-[14px] w-full text-right">
                  {t(locale, 'contact.error')}
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
