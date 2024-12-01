import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <Services />
    </div>
  );
}