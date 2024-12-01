import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Jonker IT" className="h-10 w-auto" />
            <span className="text-xl font-bold">Jonker IT</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-orange-500 px-3 py-2">Home</Link>
              <Link to="/services" className="hover:text-orange-500 px-3 py-2">Services</Link>
              <Link to="/contact" className="hover:text-orange-500 px-3 py-2">Kontakt</Link>
              <Link to="/impressum" className="hover:text-orange-500 px-3 py-2">Impressum</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:text-orange-500 px-3 py-2">Home</Link>
            <Link to="/services" className="block hover:text-orange-500 px-3 py-2">Services</Link>
            <Link to="/contact" className="block hover:text-orange-500 px-3 py-2">Kontakt</Link>
            <Link to="/impressum" className="block hover:text-orange-500 px-3 py-2">Impressum</Link>
          </div>
        </div>
      )}
    </nav>
  );
}