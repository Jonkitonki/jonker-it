import React from 'react';
import Button from '../ui/Button';
import { ROUTES } from '../../utils/constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professionelle IT-Lösungen
            <br />
            <span className="text-orange-500">für Ihr Unternehmen</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Maßgeschneiderte Netzwerk- und Systemlösungen für optimale Performance und Sicherheit
          </p>
          <Button to={ROUTES.CONTACT}>
            Kontaktieren Sie uns
          </Button>
        </div>
      </div>
    </section>
  );
}