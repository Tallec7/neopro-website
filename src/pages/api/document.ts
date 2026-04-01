export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  let body: { email?: string; documentUrl?: string };

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Corps de requête invalide.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { email, documentUrl } = body;

  if (!email) {
    return new Response(
      JSON.stringify({ error: 'Email requis.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({ error: 'Adresse email invalide.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  if (!documentUrl) {
    return new Response(
      JSON.stringify({ error: 'Aucun document configuré. Contactez-nous directement.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const contactEmail = import.meta.env.CONTACT_EMAIL || 'contact@neopro-communication.fr';

  if (!resendApiKey) {
    console.error('[document] RESEND_API_KEY manquante');
    return new Response(
      JSON.stringify({ error: 'Configuration email manquante.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    // Télécharger le PDF depuis Sanity pour l'envoyer en pièce jointe
    const pdfResponse = await fetch(documentUrl);
    if (!pdfResponse.ok) {
      throw new Error(`Impossible de télécharger le PDF: ${pdfResponse.status}`);
    }
    const pdfBuffer = Buffer.from(await pdfResponse.arrayBuffer());

    // Email au demandeur avec le PDF en pièce jointe
    await resend.emails.send({
      from: 'Neopro <noreply@neopro-communication.fr>',
      to: email,
      subject: 'Neopro — Document explicatif partenaires',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2f3935; padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #81e3bc; margin: 0; font-size: 24px;">Votre document Neopro</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Finançable par vos partenaires</p>
          </div>
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
            <p style="color: #4a5565; line-height: 1.6;">
              Bonjour,<br><br>
              Merci pour votre intérêt ! Vous trouverez en pièce jointe notre document explicatif
              à partager avec vos partenaires.<br><br>
              Ce document présente notre solution de régie digitale et explique comment vos partenaires
              peuvent financer l'installation dans votre club.<br><br>
              N'hésitez pas à nous contacter si vous avez des questions.
            </p>
          </div>
          <div style="background: #f8f9fa; padding: 20px 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="color: #6b7280; font-size: 13px; margin: 0;">
              Une question ? Contactez-nous à
              <a href="mailto:${contactEmail}" style="color: #51b28b;">${contactEmail}</a>
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'Neopro-Document-Partenaires.pdf',
          content: pdfBuffer,
        },
      ],
    });

    // Notification à l'équipe
    await resend.emails.send({
      from: 'Neopro <noreply@neopro-communication.fr>',
      to: contactEmail,
      replyTo: email,
      subject: `Document demandé par ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2f3935; padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #81e3bc; margin: 0; font-size: 24px;">Nouveau téléchargement</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Document explicatif partenaires</p>
          </div>
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <p style="color: #4a5565;">
              <strong>${email}</strong> a demandé à recevoir le document explicatif partenaires.
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
    console.error('[document] Erreur:', err);
    return new Response(
      JSON.stringify({ error: "Erreur lors de l'envoi du document." }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
