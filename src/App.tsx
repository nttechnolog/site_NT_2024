import Header from './components/Header';
import Hero from './components/Hero';
import WhyAI from './components/WhyAI';
import LanguageModels from './components/LanguageModels';
import Platforms from './components/Platforms';
import Integration from './components/Integration';
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <WhyAI />
      <LanguageModels />
      <Platforms />
      <Integration />
      <Features />
      <Pricing />
    </div>
  );
}

export default App;