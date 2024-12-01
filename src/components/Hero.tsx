import React from 'react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professionelle IT-Lösungen
            <br />
            <span className="text-orange-500">für Ihr Unternehmen</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Maßgeschneiderte Netzwerk- und Systemlösungen für optimale Performance
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Kontaktieren Sie uns
          </a>
        </div>
      </div>
    </div>
  );
}