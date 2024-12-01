import { createTransporter } from '../config/email.js';
import { verifyRecaptcha } from '../utils/recaptcha.js';

export async function handleContactForm(req, res) {
  let transporter = null;
  
  try {
    const { name, email, message, recaptchaToken } = req.body;

    // Verify reCAPTCHA
    const recaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaValid) {
      return res.status(400).json({ error: 'reCAPTCHA Verifizierung fehlgeschlagen' });
    }

    // Create transporter only when needed
    transporter = await createTransporter();

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nNachricht:\n${message}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Nachricht:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Fehler beim Senden der Nachricht' });
  } finally {
    if (transporter) {
      transporter.close();
    }
  }
}