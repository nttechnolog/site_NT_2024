import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                NT
              </div>
              NeuralTech
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['Главная', 'О компании', 'Услуги', 'Наша команда', 'Кейсы', 'Отзывы', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+7(123)456-78-90" className="text-white flex items-center gap-2">
              <Phone size={20} />
              +7 (123) 456-78-90
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
            {['Главная', 'О компании', 'Услуги', 'Наша команда', 'Кейсы', 'Отзывы', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="tel:+7(123)456-78-90"
              className="text-white flex items-center gap-2 px-3 py-2"
            >
              <Phone size={20} />
              +7 (123) 456-78-90
            </a>
          </div>
        </div>
      )}
    </header>
  );
}