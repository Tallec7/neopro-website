export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

interface DevisBody {
  nom?: string;
  prenom?: string;
  email?: string;
  club?: string;
  formule?: string;
  wantsVideo?: string;
  contentType?: string | null;
  teamCount?: number | null;
  total?: number;
}

const formuleLabels: Record<string, string> = {
  standard: 'Standard',
  autonomie: 'Autonomie',
  premium: 'Premium',
};

export const POST: APIRoute = async ({ request }) => {
  // ── Validation ────────────────────────────────────────────────
  let body: DevisBody;

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Corps de requete invalide.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { nom, prenom, email, club, formule, wantsVideo, contentType, teamCount, total } = body;

  if (!nom || !prenom || !email || !formule) {
    return new Response(
      JSON.stringify({ error: 'Champs requis manquants (nom, prenom, email, formule).' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({ error: 'Adresse email invalide.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // ── Envoi emails via Resend ───────────────────────────────────
  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const contactEmail = import.meta.env.CONTACT_EMAIL || 'contact@neopro-communication.fr';

  if (!resendApiKey) {
    console.error('[devis] RESEND_API_KEY manquante');
    return new Response(
      JSON.stringify({ error: 'Configuration email manquante.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const resend = new Resend(resendApiKey);
  const formuleName = formuleLabels[formule] || formule;
  const totalFormatted = total ? `${total} EUR` : 'Non calcule';

  // ── Lignes du récapitulatif ───────────────────────────────────
  let videoLine = '';
  if (wantsVideo === 'oui' && contentType) {
    const typeLabel = contentType === 'shooting' ? 'Avec shooting' : 'Sans shooting (photos du club)';
    const videoPrice = contentType === 'shooting' ? '1 000' : '500';
    videoLine = `
      <tr>
        <td style="padding: 10px 16px; color: #6b7280;">Production videos</td>
        <td style="padding: 10px 16px; font-weight: bold; text-align: right;">${typeLabel} — ${videoPrice} EUR</td>
      </tr>
    `;
    if (teamCount && teamCount > 1) {
      const extraPrice = contentType === 'shooting' ? (teamCount - 1) * 500 : (teamCount - 1) * 250;
      videoLine += `
        <tr>
          <td style="padding: 10px 16px; color: #6b7280;">Equipes supp. (${teamCount - 1})</td>
          <td style="padding: 10px 16px; font-weight: bold; text-align: right;">+${extraPrice} EUR</td>
        </tr>
      `;
    }
  }

  // ── Template HTML partagé ─────────────────────────────────────
  const recapHtml = `
    <table style="width: 100%; border-collapse: collapse; background: #2f3935; border-radius: 12px; overflow: hidden;">
      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
        <td style="padding: 10px 16px; color: rgba(255,255,255,0.7);">Formule</td>
        <td style="padding: 10px 16px; color: #fff; font-weight: bold; text-align: right;">${formuleName}</td>
      </tr>
      ${videoLine}
      <tr>
        <td style="padding: 16px; color: #fff; font-size: 18px; font-weight: bold;">Total TTC</td>
        <td style="padding: 16px; color: #81e3bc; font-size: 24px; font-weight: bold; text-align: right;">${totalFormatted}</td>
      </tr>
    </table>
  `;

  try {
    // ── Email 1 : récapitulatif au client ─────────────────────
    await resend.emails.send({
      from: 'Neopro <noreply@neopro-communication.fr>',
      to: email,
      subject: `Votre devis Neopro — ${formuleName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2f3935; padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #81e3bc; margin: 0; font-size: 24px;">Votre devis Neopro</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Merci ${prenom} !</p>
          </div>
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="color: #4a5565; line-height: 1.6; margin-bottom: 20px;">
              Voici le recapitulatif de votre demande de devis. Ce devis n'est pas definitif,
              quelqu'un de notre equipe vous contactera dans les plus brefs delais.
            </p>
            ${recapHtml}
          </div>
          <div style="background: #f8f9fa; padding: 20px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="color: #6b7280; font-size: 13px; margin: 0;">
              Une question ? Contactez-nous a
              <a href="mailto:${contactEmail}" style="color: #51b28b;">${contactEmail}</a>
            </p>
          </div>
        </div>
      `,
    });

    // ── Email 2 : notification à l'équipe ─────────────────────
    await resend.emails.send({
      from: 'Neopro <noreply@neopro-communication.fr>',
      to: contactEmail,
      replyTo: email,
      subject: `Nouveau devis — ${prenom} ${nom} (${formuleName})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2f3935; padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #81e3bc; margin: 0; font-size: 24px;">Nouvelle demande de devis</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Depuis le formulaire du site</p>
          </div>
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
            <h3 style="color: #101828; margin: 0 0 16px;">Coordonnees</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 6px 0; color: #6b7280; width: 120px;">Nom</td>
                <td style="padding: 6px 0; font-weight: bold;">${nom}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #6b7280;">Prenom</td>
                <td style="padding: 6px 0; font-weight: bold;">${prenom}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #6b7280;">Email</td>
                <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #51b28b;">${email}</a></td>
              </tr>
              ${club ? `
              <tr>
                <td style="padding: 6px 0; color: #6b7280;">Club</td>
                <td style="padding: 6px 0; font-weight: bold;">${club}</td>
              </tr>
              ` : ''}
            </table>
            <h3 style="color: #101828; margin: 0 0 16px;">Recapitulatif</h3>
            ${recapHtml}
            <div style="margin-top: 20px; padding: 12px; background: #fffbeb; border-radius: 8px;">
              <p style="color: #92400e; font-size: 13px; margin: 0;">
                <strong>Options selectionnees :</strong><br>
                Video : ${wantsVideo === 'oui' ? 'Oui' : 'Non'}<br>
                ${wantsVideo === 'oui' && contentType ? `Type de contenu : ${contentType === 'shooting' ? 'Avec shooting' : 'Photos du club'}<br>` : ''}
                ${wantsVideo === 'oui' && teamCount ? `Nombre d'equipes : ${teamCount}` : ''}
              </p>
            </div>
          </div>
          <div style="background: #f8f9fa; padding: 20px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="color: #6b7280; font-size: 13px; margin: 0;">
              Repondre directement a cet email contactera le client.
            </p>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[devis] Erreur Resend:', err);
    return new Response(
      JSON.stringify({ error: "Erreur lors de l'envoi des emails." }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
