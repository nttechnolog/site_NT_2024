import { Brain, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Симуляция отправки
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen filter blur-xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: `radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(126,34,206,0) 70%)`,
              animationDelay: `${i * 0.5}s`,
              transform: `translate(${mousePosition.x * (i + 1)}px, ${mousePosition.y * (i + 1)}px)`,
              transition: 'transform 0.2s ease-out',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Glowing title */}
          <div className="relative inline-block mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 relative z-10 animate-title">
              AI КОМПАНИЯ АВТОМАТИЗАЦИИ БИЗНЕСА
            </h1>
            <div className="absolute inset-0 bg-purple-500 opacity-20 blur-2xl -z-10 transform scale-110"></div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200 mb-8 animate-fade-in">
            NeuralTech
          </h2>

          <p className="text-xl md:text-2xl text-purple-200 mb-12 animate-fade-in-up">
            7 ЛЕТ МЫ ПОМОГАЕМ НАШИМ КЛИЕНТАМ АВТОМАТИЗИРОВАТЬ БИЗНЕС ПРОЦЕССЫ!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <div className="relative group">
              <input
                type="tel"
                placeholder="Введите свой номер телефона"
                className="px-6 py-3 rounded-lg w-full sm:w-80 text-gray-900 border-2 border-transparent 
                         focus:border-purple-500 transition-all duration-300 outline-none
                         bg-white/90 backdrop-blur-sm"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 
                            group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="relative px-8 py-3 bg-purple-600 text-white rounded-lg overflow-hidden
                       transform hover:scale-105 transition-all duration-300 group
                       disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 
                            opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                ) : (
                  <Sparkles className="w-5 h-5" />
                )}
                <span>ЗАБРАТЬ БОНУС</span>
              </div>
            </button>
          </form>
          
          <p className="mt-4 text-purple-200 animate-pulse">
            ПОЛУЧИТЕ ТЕХНИЧЕСКИЙ РАСЧЁТ В ПОДАРОК
          </p>
        </div>

        {/* Animated brain icon */}
        <div 
          className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-50 transform hover:scale-105 transition-transform duration-300"
          style={{
            transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          <Brain className="w-full h-full text-purple-300" />
        </div>
      </div>
    </div>
  );
}