import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Kontakt</h1>
        
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}