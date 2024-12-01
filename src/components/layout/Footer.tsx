import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO, ROUTES } from '../../utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" /> {COMPANY_INFO.phone}
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" /> {COMPANY_INFO.email}
              </p>
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1" />
                <span>
                  {COMPANY_INFO.address.street}<br />
                  {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
                </span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <div className="space-y-2">
              <Link to={ROUTES.IMPRESSUM} className="block hover:text-orange-500 transition-colors">
                Impressum
              </Link>
              <Link to={ROUTES.DATENSCHUTZ} className="block hover:text-orange-500 transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Über uns</h3>
            <p className="text-gray-300">
              Professionelle IT-Dienstleistungen für Unternehmen und Privatpersonen. 
              Wir bieten maßgeschneiderte Lösungen für Ihre IT-Infrastruktur.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}