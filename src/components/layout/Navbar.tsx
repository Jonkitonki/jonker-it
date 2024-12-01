import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { ROUTES, COMPANY_INFO } from '../../utils/constants';

const NavLink = ({ to, children, onClick }: { 
  to: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link 
    to={to} 
    className="hover:text-orange-500 px-3 py-2 transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-900 text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={ROUTES.HOME} className="flex items-center space-x-3">
            <img src="/logo.png" alt={COMPANY_INFO.name} className="h-10 w-auto" />
            <span className="text-xl font-bold">{COMPANY_INFO.name}</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to={ROUTES.HOME}>Home</NavLink>
              <NavLink to={ROUTES.CONTACT}>Kontakt</NavLink>
              <NavLink to={ROUTES.IMPRESSUM}>Impressum</NavLink>
            </div>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to={ROUTES.HOME} onClick={closeMenu}>Home</NavLink>
            <NavLink to={ROUTES.CONTACT} onClick={closeMenu}>Kontakt</NavLink>
            <NavLink to={ROUTES.IMPRESSUM} onClick={closeMenu}>Impressum</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}