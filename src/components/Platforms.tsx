import { MessageCircle, Send, Phone, Image, Slack, Globe, MessageSquare, MessagesSquare } from 'lucide-react';

export default function Platforms() {
  const platforms = [
    {
      name: "Discord",
      description: "Идеально для игровых сообществ и бизнес-команд",
      icon: MessageCircle,
      bgColor: "bg-indigo-500"
    },
    {
      name: "Telegram",
      description: "Быстрый и удобный способ коммуникации",
      icon: Send,
      bgColor: "bg-blue-500"
    },
    {
      name: "WhatsApp",
      description: "Популярная платформа для бизнес-коммуникаций",
      icon: Phone,
      bgColor: "bg-green-500"
    },
    {
      name: "Instagram",
      description: "Для визуального контента и прямого общения с аудиторией",
      icon: Image,
      bgColor: "bg-pink-500"
    },
    {
      name: "Slack",
      description: "Оптимизация рабочих процессов и командной коммуникации",
      icon: Slack,
      bgColor: "bg-purple-500"
    },
    {
      name: "API интеграция",
      description: "Создаем API под любой ваш бизнес или приложение",
      icon: Globe,
      bgColor: "bg-gray-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Платформы, с которыми мы работаем</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Интегрируем AI-ботов в любые популярные платформы и мессенджеры
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <div 
              key={platform.name}
              className="group relative overflow-hidden bg-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all"
            >
              <div className="relative z-10">
                <div className={`inline-flex p-3 ${platform.bgColor} rounded-xl mb-6`}>
                  <platform.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{platform.name}</h3>
                <p className="text-gray-300">{platform.description}</p>
              </div>
              
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-purple-900/30 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20">
            <h4 className="text-xl font-semibold text-white mb-3">API Интеграция</h4>
            <p className="text-gray-300">
              Помимо готовых платформ, мы предоставляем возможность интеграции через API.
              Это позволяет внедрить AI-функционал в любое ваше приложение или сервис.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}