import { Resend } from "resend";

const FROM = "Digibly Group <noreply@digiblygroup.com.au>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "hello@digiblygroup.com.au";

const CLIMATE_FOOTER = `
<p style="font-size: 11px; color: #7a7468; margin-top: 16px; border-top: 1px solid rgba(201,168,76,0.2); padding-top: 12px;">
  🌿 Digibly Group Climate Pledge — 5% of net revenue donated annually to Australian climate organisations.
  <a href="https://digiblygroup.com.au/climate-pledge" style="color: #c9a84c;">Learn more</a>
</p>
`;

export async function sendContactEmail(data: {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}) {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_placeholder_key") {
    console.log("Email skipped — no valid Resend API key");
    return { success: true };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: FROM,
      to: ADMIN_EMAIL,
      subject: `[Contact] ${data.subject} — ${data.fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ""}
        ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
        <p><strong>Subject:</strong> ${data.subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        ${CLIMATE_FOOTER}
      `,
    });

    await resend.emails.send({
      from: FROM,
      to: data.email,
      subject: "We've received your message — Digibly Group",
      html: `
        <h2>Thank you, ${data.fullName}.</h2>
        <p>We've received your message and will be in touch within one business day.</p>
        <p>In the meantime, feel free to explore our work at <a href="https://digiblygroup.com.au">digiblygroup.com.au</a>.</p>
        <br/>
        <p>— The Digibly Group Team</p>
        ${CLIMATE_FOOTER}
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error };
  }
}

export async function sendQuoteEmail(data: Record<string, unknown>, clientEmail: string, clientName: string) {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "re_placeholder_key") {
    console.log("Quote email skipped — no valid Resend API key");
    return { success: true };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const rows = Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => `<tr><td><strong>${k}</strong></td><td>${Array.isArray(v) ? v.join(", ") : String(v)}</td></tr>`)
    .join("");

  try {
    await resend.emails.send({
      from: FROM,
      to: ADMIN_EMAIL,
      subject: `[New Quote Request] ${clientName}`,
      html: `<h2>New Project Brief from ${clientName}</h2><table border="1" cellpadding="8">${rows}</table>${CLIMATE_FOOTER}`,
    });

    await resend.emails.send({
      from: FROM,
      to: clientEmail,
      subject: "Your project brief has been received — Digibly Group",
      html: `
        <h2>Thank you, ${clientName}.</h2>
        <p>We've received your project brief and will be in touch within 24 hours to discuss next steps.</p>
        <p>Here's a summary of what you submitted:</p>
        <table border="1" cellpadding="8">${rows}</table>
        <br/>
        <p>— The Digibly Group Team<br/>hello@digiblygroup.com.au</p>
        ${CLIMATE_FOOTER}
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Quote email error:", error);
    return { success: false, error };
  }
}
