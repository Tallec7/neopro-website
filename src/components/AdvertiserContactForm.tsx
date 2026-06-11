import React, { useState } from 'react';
import { ui, defaultLocale, type Locale, type TranslationKey } from '@/i18n/ui';

function t(locale: Locale, key: TranslationKey): string {
  return ui[locale][key] ?? ui[defaultLocale][key] ?? key;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

interface Props {
  locale?: Locale;
}

export default function AdvertiserContactForm({ locale = 'fr' }: Props) {
  const [formData, setFormData] = useState({
    entreprise: '',
    nom: '',
    poste: '',
    email: '',
    telephone: '',
    type: '',
    objectif: '',
    zone: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const typeOptions = [
    t(locale, 'ads.contact.type.brand_national'),
    t(locale, 'ads.contact.type.brand_regional'),
    t(locale, 'ads.contact.type.agency'),
    t(locale, 'ads.contact.type.dooh'),
    t(locale, 'ads.contact.type.other'),
  ];

  const objectifOptions = [
    t(locale, 'ads.contact.obj.discover'),
    t(locale, 'ads.contact.obj.media'),
    t(locale, 'ads.contact.obj.partner'),
    t(locale, 'ads.contact.obj.other'),
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: formData.nom,
          prenom: '',
          email: formData.email,
          message: `[ANNONCEUR — RDV]\nEntreprise : ${formData.entreprise}\nPoste : ${formData.poste}\nType : ${formData.type}\nObjectif : ${formData.objectif}\nZone : ${formData.zone}\nTéléphone : ${formData.telephone}\nLocale : ${locale}\n\n${formData.message}`,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ entreprise: '', nom: '', poste: '', email: '', telephone: '', type: '', objectif: '', zone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClasses =
    'w-full h-[50px] border border-[#d1d5dc] rounded-lg px-4 text-black outline-none focus:border-[#0e578e] transition-colors text-[16px]';
  const selectClasses =
    'w-full h-[50px] border border-[#d1d5dc] rounded-lg px-4 text-black outline-none focus:border-[#0e578e] transition-colors text-[16px] bg-white appearance-none';
  const labelClasses = 'font-medium text-[16px] text-black leading-[24px]';

  return (
    <section className="bg-[#0a0b0d] py-16 md:py-[96px] px-5">
      <div className="max-w-[896px] mx-auto flex flex-col items-center gap-[45px] px-4 md:px-[32px]">
        <div className="text-center text-white">
          <p className="text-[14px] tracking-[2px] text-[#0e578e] uppercase font-bold mb-[16px]">
            {t(locale, 'ads.contact.tag')}
          </p>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-[15px]">
            {t(locale, 'ads.contact.h2a')}
            <span className="font-display font-normal">{t(locale, 'ads.contact.h2b')}</span>
          </h2>
          <p className="text-[16px] text-white/70 leading-[24px]">
            {t(locale, 'ads.contact.sub')}
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-white rounded-[10px] shadow-lg w-full p-[30px]">
            <div className="text-center py-8">
              <p className="text-[#0e578e] text-[18px] font-bold mb-2">{t(locale, 'ads.contact.success.title')}</p>
              <p className="text-[#4a5565]">{t(locale, 'ads.contact.success.desc')}</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[10px] shadow-lg w-full">
            <form className="flex flex-col gap-[24px] p-[30px]" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-[24px]">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className={labelClasses}>
                    {t(locale, 'ads.contact.entreprise')} <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="entreprise" required value={formData.entreprise} onChange={handleChange} placeholder={t(locale, 'ads.contact.placeholder.entreprise')} className={inputClasses} />
                </div>
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className={labelClasses}>
                    {t(locale, 'ads.contact.type')} <span className="text-red-500">*</span>
                  </label>
                  <select name="type" required value={formData.type} onChange={handleChange} className={selectClasses}>
                    <option value="">{t(locale, 'ads.contact.select')}</option>
                    {typeOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[24px]">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className={labelClasses}>
                    {t(locale, 'ads.contact.nom')} <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="nom" required value={formData.nom} onChange={handleChange} placeholder={t(locale, 'ads.contact.placeholder.nom')} className={inputClasses} />
                </div>
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className={labelClasses}>{t(locale, 'ads.contact.poste')}</label>
                  <input type="text" name="poste" value={formData.poste} onChange={handleChange} placeholder={t(locale, 'ads.contact.placeholder.poste')} className={inputClasses} />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[24px]">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className={labelClasses}>
                    {t(locale, 'ads.contact.email')} <span className="text-red-500">*</span>
                  </label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={t(locale, 'ads.contact.placeholder.email')} className={inputClasses} />
                </div>
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className={labelClasses}>{t(locale, 'ads.contact.tel')}</label>
                  <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} placeholder={t(locale, 'ads.contact.placeholder.tel')} className={inputClasses} />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[24px]">
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className={labelClasses}>{t(locale, 'ads.contact.objectif')}</label>
                  <select name="objectif" value={formData.objectif} onChange={handleChange} className={selectClasses}>
                    <option value="">{t(locale, 'ads.contact.select')}</option>
                    {objectifOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                  </select>
                </div>
                <div className="flex-1 flex flex-col gap-[8px]">
                  <label className={labelClasses}>{t(locale, 'ads.contact.zone')}</label>
                  <input type="text" name="zone" value={formData.zone} onChange={handleChange} placeholder={t(locale, 'ads.contact.placeholder.zone')} className={inputClasses} />
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className={labelClasses}>{t(locale, 'ads.contact.message')}</label>
                <textarea name="message" rows={3} value={formData.message} onChange={handleChange} placeholder={t(locale, 'ads.contact.placeholder.message')} className="w-full border border-[#d1d5dc] rounded-lg px-4 py-3 text-black outline-none focus:border-[#0e578e] transition-colors text-[16px] resize-none" />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`inline-flex items-center gap-2 rounded-full px-[30px] py-[10px] font-medium text-[18px] leading-[28px] transition-colors duration-200 bg-[#0e578e] text-white hover:bg-[#e85a96] ${
                    status === 'sending' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                  }`}
                >
                  {status === 'sending' ? t(locale, 'ads.contact.sending') : t(locale, 'ads.contact.submit')}
                </button>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-[14px] text-right">{t(locale, 'ads.contact.error')}</p>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
