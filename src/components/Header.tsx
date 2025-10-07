import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-orange-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 9133672662</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>balajitraders@gmail.com</span>
            </div>
          </div>
          <div className="text-center sm:text-right mt-1 sm:mt-0">
            <span>Quality Materials • Trusted Service • Competitive Prices</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-orange-600 via-amber-500 to-orange-700 text-white p-4 rounded-xl mr-4 shadow-lg border-2 border-white/20">
                <div className="flex flex-col items-center">
                  <span className="font-black text-lg leading-none">BT</span>
                  <div className="w-6 h-0.5 bg-white/60 mt-0.5"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent tracking-tight">
                  Balaji Traders
                </h1>
                <p className="text-sm font-medium text-gray-600 tracking-wide">Hardware and Doors, Electricals</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 py-2 space-y-1">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;