type SendEmailInput = {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const contactNotificationEmail = process.env.CONTACT_NOTIFICATION_EMAIL;
const contactFromEmail =
  process.env.CONTACT_FROM_EMAIL || "YADA Website <onboarding@resend.dev>";
const newsletterNotificationEmail = process.env.NEWSLETTER_NOTIFICATION_EMAIL;
const newsletterFromEmail =
  process.env.NEWSLETTER_FROM_EMAIL || contactFromEmail;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendEmail({
  from,
  to,
  subject,
  html,
  replyTo,
}: SendEmailInput & { from: string }) {
  if (!resendApiKey) {
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      reply_to: replyTo,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Failed to send email with Resend.");
  }
}

export async function sendContactNotification(input: {
  fullName: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}) {
  if (!contactNotificationEmail) {
    return;
  }

  await sendEmail({
    from: contactFromEmail,
    to: contactNotificationEmail,
    replyTo: input.email,
    subject: `Nouveau message YADA: ${input.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1b1408;">
        <h2 style="margin-bottom: 16px;">Nouveau message depuis le site YADA</h2>
        <p><strong>Nom :</strong> ${escapeHtml(input.fullName)}</p>
        <p><strong>Email :</strong> ${escapeHtml(input.email)}</p>
        <p><strong>Telephone :</strong> ${escapeHtml(input.phone || "Non renseigne")}</p>
        <p><strong>Sujet :</strong> ${escapeHtml(input.subject)}</p>
        <p><strong>Message :</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(input.message)}</p>
      </div>
    `,
  });
}

export async function sendNewsletterNotification(input: { email: string }) {
  if (!newsletterNotificationEmail) {
    return;
  }

  await sendEmail({
    from: newsletterFromEmail,
    to: newsletterNotificationEmail,
    subject: "Nouvelle inscription newsletter YADA",
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1b1408;">
        <h2 style="margin-bottom: 16px;">Nouvelle inscription newsletter</h2>
        <p><strong>Email :</strong> ${escapeHtml(input.email)}</p>
      </div>
    `,
  });
}

