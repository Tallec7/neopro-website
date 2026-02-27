export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  // ── Validation ────────────────────────────────────────────────
  let body: { nom?: string; prenom?: string; email?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Corps de requete invalide.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { nom, prenom, email, message } = body;

  if (!nom || !prenom || !email || !message) {
    return new Response(
      JSON.stringify({ error: 'Tous les champs sont requis (nom, prenom, email, message).' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // Validation email basique
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(
      JSON.stringify({ error: 'Adresse email invalide.' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // ── Envoi email via Resend ────────────────────────────────────
  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const contactEmail = import.meta.env.CONTACT_EMAIL || 'contact@neopro-communication.fr';

  if (!resendApiKey) {
    console.error('[contact] RESEND_API_KEY manquante');
    return new Response(
      JSON.stringify({ error: 'Configuration email manquante.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: 'Neopro <noreply@neopro-communication.fr>',
      to: contactEmail,
      replyTo: email,
      subject: `Nouveau message de ${prenom} ${nom}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2f3935; padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #81e3bc; margin: 0; font-size: 24px;">Nouveau message</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Via le formulaire de contact du site</p>
          </div>
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 100px;">Nom</td>
                <td style="padding: 8px 0; font-weight: bold;">${nom}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Prenom</td>
                <td style="padding: 8px 0; font-weight: bold;">${prenom}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #51b28b;">${email}</a></td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <h3 style="margin: 0 0 12px; color: #101828;">Message :</h3>
            <p style="color: #4a5565; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[contact] Erreur Resend:', err);
    return new Response(
      JSON.stringify({ error: "Erreur lors de l'envoi de l'email." }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};
