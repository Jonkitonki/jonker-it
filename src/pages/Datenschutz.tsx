import React from 'react';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-xl font-semibold mb-2">Kontaktformular</h3>
            <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Plugins und Tools</h2>
            <h3 className="text-xl font-semibold mb-2">Google reCAPTCHA</h3>
            <p>Wir nutzen "Google reCAPTCHA" (im Folgenden "reCAPTCHA") auf dieser Website. Anbieter ist die Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>
          </section>
        </div>
      </div>
    </div>
  );
}