import { Brain, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export default function WhyAI() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Почему AI в тренде?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Искусственный интеллект стал неотъемлемой частью современного бизнеса. Вы наверняка слышали о множестве компаний, 
            внедряющих AI, но, возможно, сомневаетесь в эффективности.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-600 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Наша цель</h3>
                <p className="text-gray-300">
                  Мы создаем уникальные быстрые интеграции чат-ботов под ваш бизнес для любых целей: 
                  будь то ваше мобильное приложение, чат или соцсеть.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-600 rounded-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Уникальный подход</h3>
                <p className="text-gray-300">
                  Сначала создаем, тестируем, и только потом вы платите. 
                  Убедитесь сами в преимуществах AI для вашего бизнеса!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}