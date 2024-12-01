import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +49 65949216136</p>
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> info@jonker-it.de</p>
              <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> Meisburger Str. 16a<br />54570 Densborn</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-2">
              <Link to="/impressum" className="block hover:text-orange-500">Impressum</Link>
              <Link to="/datenschutz" className="block hover:text-orange-500">Datenschutz</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Über uns</h3>
            <p>Professionelle IT-Dienstleistungen für Unternehmen und Privatpersonen. Wir bieten maßgeschneiderte Lösungen für Ihre IT-Infrastruktur.</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Jonker IT. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}