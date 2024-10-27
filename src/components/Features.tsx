import { Bot, Puzzle, Lock, Sliders, Workflow, Bell, Database, Image, Brain, Boxes } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "Боты-дирижеры",
      description: "Создаем и управляем сразу несколькими личностями в одном боте, настраивая сложную логику взаимодействия.",
      icon: Bot,
      details: [
        "Многозадачность и гибкость",
        "Персонализированное взаимодействие",
        "Эффективное управление сложными запросами"
      ]
    },
    {
      title: "Установка Plugins",
      description: "Автоматический подбор функций и возможностей для вашего бота. От Википедии до систем аналитики.",
      icon: Puzzle
    },
    {
      title: "Настройки приватности",
      description: "Полный контроль над историей диалогов и данными пользователей.",
      icon: Lock
    },
    {
      title: "Гибкие ограничения",
      description: "Установка лимитов на объем текста и количество вопросов для каждого пользователя.",
      icon: Sliders
    }
  ];

  const advancedFeatures = [
    {
      name: "Workflows",
      description: "Визуальный интерфейс для создания сложных бизнес-процессов",
      icon: Workflow
    },
    {
      name: "Triggers",
      description: "Создание запланированных действий во время чата",
      icon: Bell
    },
    {
      name: "Knowledge Base",
      description: "Интеграция с внешними источниками данных",
      icon: Database
    },
    {
      name: "Image Processing",
      description: "Автоматическая обработка изображений",
      icon: Image
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Уникальные особенности наших ботов</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Передовые технологии и инновационные решения для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600 rounded-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.details && (
                    <ul className="space-y-2">
                      {feature.details.map((detail) => (
                        <li key={detail} className="text-purple-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {advancedFeatures.map((feature) => (
            <div
              key={feature.name}
              className="bg-purple-900/20 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20"
            >
              <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">{feature.name}</h4>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}