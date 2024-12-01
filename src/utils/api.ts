import type { ContactFormPayload } from '../types';

const API_BASE_URL = import.meta.env.PROD ? '' : 'http://localhost:3000';

export async function sendContactForm(data: ContactFormPayload): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Fehler beim Senden der Nachricht');
  }
}