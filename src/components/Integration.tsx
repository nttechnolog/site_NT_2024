import { Code, Database, Lock, Zap } from 'lucide-react';

export default function Integration() {
  const steps = [
    {
      title: "Публикация бота",
      description: "Мы публикуем вашего бота в API с учетом всех необходимых настроек безопасности",
      icon: Code
    },
    {
      title: "Настройка доступа",
      description: "Добавляем API Personal Access Token для безопасного доступа к функциям",
      icon: Lock
    },
    {
      title: "Интеграция",
      description: "Создаем приложение и настраиваем авторизацию для доступа к ресурсам",
      icon: Database
    },
    {
      title: "Активация",
      description: "Запускаем бота и проводим финальное тестирование всех функций",
      icon: Zap
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Процесс интеграции</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Прозрачный и эффективный процесс внедрения AI-решений в ваш бизнес
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative bg-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20"
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="mb-6">
                <step.icon className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}