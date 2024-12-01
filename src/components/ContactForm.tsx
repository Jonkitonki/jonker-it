import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useContactForm } from '../hooks/useContactForm';

export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { formData, setFormData, status, loading, handleSubmit } = useContactForm();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = recaptchaRef.current?.getValue() || null;
    await handleSubmit(token);
    recaptchaRef.current?.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          E-Mail
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Nachricht
        </label>
        <textarea
          id="message"
          required
          rows={6}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        theme="dark"
      />

      {status && (
        <div className={`text-sm ${status.includes('Fehler') ? 'text-red-500' : 'text-green-500'}`}>
          {status}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
      >
        {loading ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>
    </form>
  );
}