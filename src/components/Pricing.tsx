import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Легкий старт",
      price: "от 5 000 ₽",
      features: [
        "Быстрый проект за 2 дня",
        "Базовая интеграция бота",
        "Доступ к основным функциям",
        "Поддержка по email"
      ],
      highlight: false
    },
    {
      name: "Бот база",
      price: "от 10 000 ₽",
      features: [
        "Работа с проектом до недели",
        "Расширенная интеграция",
        "Ваш персональный консультант",
        "Базовая настройка под ваши задачи",
        "Приоритетная поддержка"
      ],
      highlight: true
    },
    {
      name: "Бот средний бизнес",
      price: "от 50 000 ₽",
      features: [
        "Полный кейс для вашего бизнеса",
        "Глубокая интеграция с вашими системами",
        "Персональный менеджер проекта",
        "Тонкая настройка бота под ваши процессы",
        "Расширенное тестирование и оптимизация",
        "Обучение вашей команды",
        "Доступ к продвинутым моделям AI",
        "Ежемесячные отчеты об эффективности"
      ],
      highlight: false
    },
    {
      name: "Бот крупный бизнес",
      price: "от 150 000 ₽",
      features: [
        "Включая работу с моделью llama 3.1",
        "Полная кастомизация под ваш бренд",
        "Интеграция с корпоративными системами",
        "Команда разработчиков и AI-специалистов",
        "Возможность дообучения модели на ваших данных",
        "Расширенная аналитика и BI-интеграции",
        "SLA с гарантированным временем отклика",
        "Регулярные стратегические сессии",
        "Приоритетный доступ к новым функциям"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Тарифы интеграции бота</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Выберите оптимальное решение для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border 
                ${plan.highlight 
                  ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                  : 'border-purple-500/20'}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                  Популярный выбор
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">{plan.price}</div>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full mt-8 px-6 py-3 rounded-lg transition-colors
                ${plan.highlight 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-purple-900/50 hover:bg-purple-900 text-white border border-purple-500/50'}`}>
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}