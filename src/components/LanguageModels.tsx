import { Cpu, Star, Zap } from 'lucide-react';

export default function LanguageModels() {
  const models = [
    {
      name: "Claude 3.5 Sonnet",
      tokens: "200K токенов",
      description: "Флагманская модель от Anthropic. Идеальна для сложных аналитических задач и генерации высококачественного контента.",
      icon: Star
    },
    {
      name: "GPT-4 Turbo",
      tokens: "125K токенов",
      description: "Улучшенная версия GPT-4 с повышенной скоростью обработки и более точными ответами.",
      icon: Zap
    },
    {
      name: "Gemini 1.5 Pro",
      tokens: "200K токенов",
      description: "Продвинутая модель от Google с расширенными возможностями мультимодального анализа.",
      icon: Cpu
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Языковые модели, которые мы используем</h2>
          <p className="text-xl text-purple-200 mb-8">Три гиганта AI</p>
          <p className="text-gray-300 max-w-3xl mx-auto">
            На рынке искусственного интеллекта сегодня доминируют три ключевых игрока:
            Anthropic, OpenAI и Google. Каждая из этих компаний предлагает уникальные решения.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model) => (
            <div key={model.name} className="bg-purple-900/30 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="mb-6">
                <model.icon className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">{model.name}</h3>
              <p className="text-purple-300 mb-4">{model.tokens}</p>
              <p className="text-gray-300">{model.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-purple-900/30 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20">
            <h4 className="text-xl font-semibold text-white mb-3">Что такое токены?</h4>
            <p className="text-gray-300">
              Токены - это единицы измерения в LLM моделях. В среднем, 1 токен соответствует примерно 
              4 символам текста. Модель с 200K токенов может обрабатывать тексты объемом около 800 000 символов.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}