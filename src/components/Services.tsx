import React from 'react';
import { Factory, Truck, BarChart3, Package, TrendingUp, Zap, Target, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Factory,
      title: "BI para Manufatura",
      description: "Monitore KPIs de produção em tempo real, identifique gargalos e otimize a eficiência operacional.",
      features: ["OEE (Overall Equipment Effectiveness)", "Controle de Qualidade", "Manutenção Preditiva", "Gestão de Recursos"],
      color: "bg-primary-600 hover:bg-primary-700",
      caseId: "metalurgica"
    },
    {
      icon: Truck,
      title: "Analytics para Supply Chain",
      description: "Visibilidade completa da cadeia de suprimentos com dashboards inteligentes e alertas automáticos.",
      features: ["Rastreamento de Fornecedores", "Análise de Lead Time", "Gestão de Riscos", "Otimização de Rotas"],
      color: "bg-secondary-600 hover:bg-secondary-700",
      caseId: "alimenticia"
    },
    {
      icon: TrendingUp,
      title: "Previsão de Demanda",
      description: "Algoritmos avançados de machine learning para previsões precisas e planejamento estratégico.",
      features: ["Modelos Preditivos", "Análise Sazonal", "Cenários Futuros", "Planejamento de Capacidade"],
      color: "bg-accent-600 hover:bg-accent-700",
      caseId: "quimica"
    },
    {
      icon: Package,
      title: "Gestão de Estoque Otimizada",
      description: "Reduza custos de armazenagem e evite rupturas com inteligência artificial aplicada ao estoque.",
      features: ["Curva ABC", "Ponto de Reposição", "Análise de Giro", "Controle de Obsolescência"],
      color: "bg-purple-600 hover:bg-purple-700",
      caseId: "metalurgica"
    }
  ];

  const scrollToCase = (caseId: string) => {
    const caseElement = document.getElementById(`case-${caseId}`);
    if (caseElement) {
      caseElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
      // Add highlight effect
      caseElement.classList.add('highlight-case');
      setTimeout(() => {
        caseElement.classList.remove('highlight-case');
      }, 3000);
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Soluções Especializadas para sua
            <span className="text-primary-600"> Indústria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desenvolvemos dashboards e relatórios Power BI personalizados para resolver os desafios específicos 
            do seu segmento industrial e otimizar sua cadeia de suprimentos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 ${service.color.split(' ')[0]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 ${service.color.split(' ')[0]} rounded-full`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button 
                  onClick={() => scrollToCase(service.caseId)}
                  className={`${service.color} text-white px-6 py-3 rounded-lg transition-all duration-200 font-semibold w-full group-hover:scale-105 hover:shadow-lg`}
                >
                  Ver Case de Sucesso
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Por que Escolher a Bradata?</h3>
            <p className="text-xl text-gray-600">Especialização que gera resultados mensuráveis</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Foco Especializado</h4>
              <p className="text-gray-600">100% dedicado ao setor industrial e supply chain</p>
            </div>

            <div className="text-center group">
              <div className="bg-secondary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Implementação Rápida</h4>
              <p className="text-gray-600">Resultados visíveis em até 30 dias</p>
            </div>

            <div className="text-center group">
              <div className="bg-accent-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">ROI Comprovado</h4>
              <p className="text-gray-600">Retorno médio de 300% no primeiro ano</p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Suporte Completo</h4>
              <p className="text-gray-600">Treinamento e suporte técnico continuado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;