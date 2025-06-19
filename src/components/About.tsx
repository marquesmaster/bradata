import React from 'react';
import { Users, Calendar, Database, Award, Target, TrendingUp, Shield, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Calendar,
      number: "8+",
      label: "Anos de Expertise",
      description: "Mais de 8 anos especializados em BI industrial"
    },
    {
      icon: Users,
      number: "30+",
      label: "Clientes Atendidos",
      description: "Empresas da indústria brasileira transformadas"
    },
    {
      icon: Target,
      number: "1000+",
      label: "Processos Entregues",
      description: "Soluções implementadas com sucesso"
    },
    {
      icon: Database,
      number: "5TB+",
      label: "Dados Processados",
      description: "Volume de dados trabalhados e analisados"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Especialização",
      description: "Foco exclusivo em Business Intelligence para indústria e supply chain, garantindo conhecimento profundo dos desafios específicos do setor."
    },
    {
      icon: TrendingUp,
      title: "Resultados Mensuráveis",
      description: "Todas as nossas soluções são desenvolvidas com foco em ROI, gerando resultados tangíveis e mensuráveis para nossos clientes."
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Parceria de longo prazo com nossos clientes, oferecendo suporte contínuo e evolução constante das soluções implementadas."
    },
    {
      icon: Zap,
      title: "Inovação",
      description: "Utilizamos as mais modernas tecnologias de BI e analytics, sempre atualizados com as últimas tendências do mercado."
    }
  ];

  const timeline = [
    {
      year: "2016",
      title: "Fundação da Bradata",
      description: "Início das atividades com foco em Business Intelligence para o setor industrial brasileiro."
    },
    {
      year: "2018",
      title: "Parceria Microsoft",
      description: "Tornamo-nos parceiros oficiais Microsoft, especializando-nos em Power BI e Azure Analytics."
    },
    {
      year: "2020",
      title: "Expansão SAP",
      description: "Certificação SAP e início das integrações avançadas com sistemas ERP empresariais."
    },
    {
      year: "2022",
      title: "Salesforce Partner",
      description: "Parceria oficial Salesforce, expandindo nossas capacidades em CRM Analytics."
    },
    {
      year: "2024",
      title: "Liderança de Mercado",
      description: "Consolidação como referência em BI industrial no Brasil, com mais de 30 clientes ativos."
    }
  ];

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
    } else {
      // If on About page, redirect to home with contact
      window.location.href = '/#contact';
    }
  };

  const handleCaseStudies = () => {
    // If on About page, redirect to home with case studies
    window.location.href = '/#case-studies';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sobre a <span className="text-secondary-400">Bradata</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Especialistas em Business Intelligence para Indústria e Supply Chain. 
              Transformamos dados em vantagem competitiva há mais de 8 anos.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nossa <span className="text-primary-600">Trajetória</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Números que refletem nossa experiência e compromisso com a excelência em Business Intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-xl font-bold text-gray-900 mb-3">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nossa <span className="text-primary-600">Missão</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Democratizar o acesso a insights de dados para empresas industriais brasileiras, 
                transformando informações complexas em decisões estratégicas que impulsionam 
                o crescimento e a competitividade.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg mt-1">
                    <Target className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Visão</h3>
                    <p className="text-gray-600">Ser a referência em Business Intelligence para o setor industrial no Brasil.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary-100 p-2 rounded-lg mt-1">
                    <Award className="h-5 w-5 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Valores</h3>
                    <p className="text-gray-600">Excelência técnica, transparência, inovação e foco no resultado do cliente.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe Bradata"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">8+ Anos</div>
                <div className="text-sm opacity-90">de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-primary-600">Diferenciais</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O que nos torna únicos no mercado de Business Intelligence industrial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-primary-600 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nossa <span className="text-primary-600">História</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma jornada de crescimento e inovação no mercado de Business Intelligence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Transformar seus <span className="text-secondary-400">Dados</span>?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Junte-se aos mais de 30 clientes que já transformaram seus negócios com nossas soluções de BI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleDemoRequest}
              className="bg-secondary-600 text-white px-8 py-4 rounded-lg hover:bg-secondary-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Solicitar Demonstração
            </button>
            <button 
              onClick={handleCaseStudies}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200 font-semibold"
            >
              Ver Nossos Cases
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;