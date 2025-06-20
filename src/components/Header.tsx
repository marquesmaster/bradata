import React, { useState } from 'react';
import { Menu, X, BarChart3, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isHomePage = location.pathname === '/';

  const handleContactClick = () => {
    if (isHomePage) {
      // If on home page, scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const nameInput = document.getElementById('name');
          if (nameInput) nameInput.focus();
        }, 500);
      }
    } else {
      // If on other page, redirect to home with contact
      window.location.href = '/#contact';
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-primary-600 p-2 rounded-lg">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bradata</h1>
              <p className="text-sm text-gray-600">Indústria e Supply</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
              Início
            </Link>
            <Link to="/sobre" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
              Sobre
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
              Blog
            </Link>
            {isHomePage && (
              <>
                <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                  Serviços
                </a>
                <a href="#partners" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                  Parceiros
                </a>
                <a href="#case-studies" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                  Estudos de Caso
                </a>
                <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                  Contato
                </a>
              </>
            )}

            {/* NOVO BOTÃO: Soluções */}
            <Link
              to="/solucoes" // Leva para a nova página de soluções
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              onClick={() => setIsMenuOpen(false)} // Garante que o menu mobile feche
            >
              Soluções
            </Link>

            <button
              onClick={handleContactClick}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Fale Conosco
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                Início
              </Link>
              <Link to="/sobre" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              {isHomePage && (
                <>
                  <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                    Serviços
                  </a>
                  <a href="#partners" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                    Parceiros
                  </a>
                  <a href="#case-studies" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                    Estudos de Caso
                  </a>
                  <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium px-2 py-1" onClick={() => setIsMenuOpen(false)}>
                    Contato
                  </a>
                </>
              )}
              {/* NOVO BOTÃO: Soluções (Mobile) */}
              <Link
                to="/solucoes" // Leva para a nova página de soluções
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg mx-2 mt-2"
                onClick={() => setIsMenuOpen(false)} // Fecha o menu mobile
              >
                Soluções
              </Link>
              <button
                onClick={handleContactClick}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-all duration-200 font-medium shadow-lg mx-2 mt-2"
              >
                Fale Conosco
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;