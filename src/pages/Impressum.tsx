import React from 'react';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p>Armin Jonker</p>
            <p>Meisburger Str. 16a</p>
            <p>54570 Densborn</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p>Telefon: +49 65949216136</p>
            <p>E-Mail: info@jonker-it.de</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
            <p>[Ihre USt-IdNr.]</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/</p>
            <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>
        </div>
      </div>
    </div>
  );
}