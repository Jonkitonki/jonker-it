import { useState } from 'react';
import type { ContactFormData } from '../types';
import { sendContactForm } from '../utils/api';

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (recaptchaToken: string | null) => {
    if (!recaptchaToken) {
      setStatus('Bitte bestätigen Sie das Captcha');
      return;
    }

    setLoading(true);
    try {
      await sendContactForm({
        ...formData,
        recaptchaToken
      });
      setStatus('Nachricht erfolgreich gesendet!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Fehler beim Senden der Nachricht.');
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    setFormData,
    status,
    loading,
    handleSubmit
  };
}