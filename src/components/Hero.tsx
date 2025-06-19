import React from 'react';
import { TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleDemoRequest = () => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Focus on the form
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        if (nameInput) nameInput.focus();
      }, 500);
    }
  };

  const handleCaseStudies = () => {
    const caseStudiesSection = document.getElementById('case-studies');
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-primary-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-12 scale-150"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Transforme Dados em
              <span className="text-secondary-400"> Vantagem Competitiva</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Business Intelligence especializado para Indústria e Supply Chain. 
              Otimize processos, reduza custos e maximize a eficiência operacional.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">95%</div>
                <div className="text-sm text-gray-300">Precisão em Previsões</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400">40%</div>
                <div className="text-sm text-gray-300">Redução de Custos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">24/7</div>
                <div className="text-sm text-gray-300">Suporte</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleDemoRequest}
                className="bg-secondary-600 text-white px-8 py-4 rounded-lg hover:bg-secondary-700 transition-all duration-200 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center group"
              >
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button 
                onClick={handleCaseStudies}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-800 transition-all duration-200 font-semibold"
              >
                Ver Estudos de Caso
              </button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block animate-float">
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-primary-400 rounded w-3/4"></div>
                  <div className="h-4 bg-secondary-400 rounded w-1/2"></div>
                  <div className="h-4 bg-accent-400 rounded w-2/3"></div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/5 rounded-lg p-4">
                      <TrendingUp className="h-8 w-8 text-secondary-400 mb-2" />
                      <div className="h-2 bg-secondary-400 rounded w-3/4"></div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <Users className="h-8 w-8 text-accent-400 mb-2" />
                      <div className="h-2 bg-accent-400 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-secondary-600 text-white p-3 rounded-lg shadow-xl animate-float" style={{animationDelay: '1s'}}>
                <Award className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent-600 text-white p-3 rounded-lg shadow-xl animate-float" style={{animationDelay: '2s'}}>
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;