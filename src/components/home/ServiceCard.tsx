import React from 'react';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { Icon, title, description } = service;
  
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group">
      <Icon className="h-12 w-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}