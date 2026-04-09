export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const MEET_LINK = 'https://meet.google.com/aje-pzis-rqm';
const N8N_WEBHOOK = 'https://n8n.srv1531715.hstgr.cloud/webhook/webinar-inscription';

const buildIcs = (attendeeName: string, attendeeEmail: string) => [
  'BEGIN:VCALENDAR',
  'VERSION:2.0',
  'PRODID:-//NEOPRO//Webinar//FR',
  'CALSCALE:GREGORIAN',
  'METHOD:REQUEST',
  'BEGIN:VEVENT',
  'UID:webinar-neopro-20260416@neopro-communication.fr',
  'DTSTAMP:20260408T000000Z',
  'DTSTART:20260416T090000Z',
  'DTEND:20260416T094500Z',
  'SUMMARY:Webinar NEOPRO : Et si votre gymnase rapportait à votre club ?',
  `DESCRIPTION:Rejoindre le webinar : ${MEET_LINK}`,
  `LOCATION:${MEET_LINK}`,
  'ORGANIZER;CN=NEOPRO:mailto:contact@neopro-communication.fr',
  `ATTENDEE;CN=${attendeeName};RSVP=TRUE:mailto:${attendeeEmail}`,
  'STATUS:CONFIRMED',
  'SEQUENCE:0',
  'END:VEVENT',
  'END:VCALENDAR',
].join('\r\n');

export const POST: APIRoute = async ({ request }) => {
  let body: {
    prenom?: string;
    email?: string;
    telephone?: string;
    club?: string;
    sport?: string;
    a_ecran?: string;
  };

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Corps de requête invalide.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { prenom, email, telephone, club, sport, a_ecran } = body;

  if (!prenom || !email) {
    return new Response(JSON.stringify({ error: 'Prénom et email requis.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Adresse email invalide.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error('[webinar] RESEND_API_KEY manquante');
    return new Response(JSON.stringify({ error: 'Configuration email manquante.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resend = new Resend(resendApiKey);

  // ── Envoi en parallèle : email de confirmation + n8n ──────────
  const [emailResult] = await Promise.allSettled([
    resend.emails.send({
      from: 'Gwenvael — NEOPRO <contact@neopro-communication.fr>',
      to: email,
      replyTo: 'contact@neopro-communication.fr',
      subject: 'Votre inscription au webinar du 16 avril',
      headers: {
        'List-Unsubscribe': '<mailto:contact@neopro-communication.fr?subject=unsubscribe>',
        'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
      },
      text: `Bonjour ${prenom},

Votre inscription au webinar NEOPRO est bien enregistrée.

Date : jeudi 16 avril 2026
Horaire : 11h00 - 11h45
Format : en ligne via Google Meet
Lien pour rejoindre : ${MEET_LINK}

Un fichier .ics est joint à cet email pour ajouter l'événement à votre calendrier (Apple Calendar, Outlook, Google Calendar).

Pas disponible le 16 ? Nous vous enverrons le replay par email dans les 24h après le webinar.

À jeudi,
L'équipe NEOPRO
https://www.neopro-communication.fr

---
Pour vous désinscrire, répondez à cet email avec "unsubscribe" en objet.`,
      attachments: [
        {
          filename: 'webinar-neopro-16-avril.ics',
          content: Buffer.from(buildIcs(prenom, email)).toString('base64'),
          contentType: 'text/calendar; method=REQUEST; charset=UTF-8',
        },
      ],
      html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f6f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f4;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:600px;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#101828;padding:32px 40px;text-align:center;">
            <p style="margin:0;color:#81e3bc;font-size:28px;font-weight:900;letter-spacing:-0.5px;">neopro.</p>
          </td>
        </tr>

        <!-- Confirmation badge -->
        <tr>
          <td style="background:#2f3935;padding:32px 40px;text-align:center;border-bottom:1px solid rgba(255,255,255,0.08);">
            <div style="display:inline-block;background:rgba(129,227,188,0.15);border-radius:50%;width:64px;height:64px;line-height:64px;font-size:28px;margin-bottom:20px;">✅</div>
            <h1 style="margin:0 0 8px;color:#ffffff;font-size:24px;font-weight:900;">Vous êtes inscrit(e), ${prenom}&nbsp;!</h1>
            <p style="margin:0;color:rgba(255,255,255,0.65);font-size:16px;">On vous attend jeudi 16 avril à 11h00.</p>
          </td>
        </tr>

        <!-- Meet link -->
        <tr>
          <td style="background:#2f3935;padding:0 40px 32px;text-align:center;">
            <p style="margin:0 0 16px;color:rgba(255,255,255,0.5);font-size:13px;text-transform:uppercase;letter-spacing:1px;">Votre lien pour rejoindre le webinar</p>
            <a href="${MEET_LINK}" style="display:inline-block;background:#81e3bc;color:#101828;font-weight:900;font-size:18px;padding:16px 32px;border-radius:50px;text-decoration:none;">
              Rejoindre Google Meet →
            </a>
            <p style="margin:16px 0 0;color:rgba(255,255,255,0.4);font-size:13px;">${MEET_LINK}</p>
          </td>
        </tr>

        <!-- Infos pratiques -->
        <tr>
          <td style="background:#ffffff;padding:32px 40px;">
            <h2 style="margin:0 0 20px;color:#101828;font-size:18px;font-weight:900;">Infos pratiques</h2>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;width:120px;vertical-align:top;">📅 Date</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#101828;font-weight:bold;">Jeudi 16 avril 2026</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#6b7280;vertical-align:top;">🕙 Heure</td>
                <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#101828;font-weight:bold;">11h00 – 11h45</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#6b7280;vertical-align:top;">💻 Format</td>
                <td style="padding:10px 0;color:#101828;font-weight:bold;">En ligne — Google Meet</td>
              </tr>
            </table>

            <div style="margin-top:24px;background:#f8faf8;border-left:4px solid #81e3bc;border-radius:4px;padding:16px 20px;">
              <p style="margin:0;color:#4a5565;font-size:14px;line-height:1.6;">
                <strong>Pas disponible le 16 ?</strong> Inscrivez-vous quand même — on vous envoie le replay par email dans les 24h après le webinar.
              </p>
            </div>

            <p style="margin:24px 0 0;color:#6b7280;font-size:13px;">Un fichier <strong>.ics</strong> est joint à cet email pour ajouter l'événement à votre calendrier (Apple Calendar, Outlook…).</p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f4f6f4;padding:24px 40px;text-align:center;">
            <p style="margin:0;color:#9ca3af;font-size:12px;">
              NEOPRO — La régie des clubs sportifs<br>
              <a href="https://www.neopro-communication.fr" style="color:#51b28b;text-decoration:none;">neopro-communication.fr</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    }),

    // n8n pour le CRM/suivi
    fetch(N8N_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prenom, email, telephone, club, sport, a_ecran }),
    }).catch((err) => console.error('[webinar] n8n webhook error:', err)),
  ]);

  if (emailResult.status === 'rejected') {
    console.error('[webinar] Erreur Resend:', emailResult.reason);
    return new Response(JSON.stringify({ error: "Erreur lors de l'envoi de l'email." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
