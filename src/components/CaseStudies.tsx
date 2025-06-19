import React from 'react';
import { TrendingUp, DollarSign, Clock, Award, ArrowRight, ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "metalurgica",
      industry: "Metalúrgica",
      title: "Otimização de Estoque Reduziu Custos em 35%",
      challenge: "Excesso de estoque parado e falta de visibilidade sobre giro de materiais",
      solution: "Dashboard Power BI com análise ABC, previsão de demanda e alertas automáticos",
      results: [
        { metric: "Redução de Custos", value: "35%", icon: DollarSign, color: "text-accent-600" },
        { metric: "Giro de Estoque", value: "+60%", icon: TrendingUp, color: "text-primary-600" },
        { metric: "Tempo de Análise", value: "-80%", icon: Clock, color: "text-purple-600" }
      ],
      roi: "R$ 2,4 milhões economizados no primeiro ano",
      timeframe: "6 meses",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      services: ["BI para Manufatura", "Gestão de Estoque Otimizada"],
      proposalFormData: {
        subject: "Proposta para Otimização de Gestão de Estoque - Similar ao Case Metalúrgica",
        prefilledMessage: `Gostaria de receber uma proposta para implementar uma solução de BI similar ao case da Metalúrgica apresentado no site, focada em:

• Otimização de Gestão de Estoque
• Dashboard Power BI com análise ABC
• Previsão de demanda automatizada
• Alertas automáticos para baixo giro de estoque
• Redução de custos de armazenagem

Nossa empresa enfrenta desafios similares com controle de estoque e gostaria de conhecer como a Bradata pode nos ajudar a alcançar resultados semelhantes aos 35% de redução de custos apresentados no case.

Por favor, entrem em contato para agendarmos uma reunião e discutirmos os detalhes específicos da nossa operação.`
      },
      detailedInfo: {
        client: "Metalúrgica ABC Ltda",
        sector: "Produção de Aço e Ligas Metálicas",
        employees: "500+ funcionários",
        challenge_details: "A empresa enfrentava sérios problemas com excesso de estoque parado (R$ 8 milhões imobilizados), falta de visibilidade sobre giro de materiais e dificuldades para identificar itens obsoletos. O processo manual de análise levava semanas e frequentemente resultava em decisões baseadas em dados desatualizados.",
        solution_details: "Implementamos uma solução completa de BI com dashboards Power BI integrados ao ERP SAP, incluindo análise ABC automatizada, algoritmos de previsão de demanda baseados em histórico de 3 anos, alertas automáticos para itens de baixo giro e relatórios executivos em tempo real.",
        implementation_phases: [
          "Fase 1: Análise e mapeamento dos dados (2 semanas)",
          "Fase 2: Desenvolvimento dos dashboards (6 semanas)",
          "Fase 3: Integração com SAP (4 semanas)",
          "Fase 4: Treinamento e go-live (4 semanas)"
        ],
        technologies: ["Power BI", "SAP ERP", "SQL Server", "Azure Data Factory"],
        team_size: "3 especialistas Bradata + 2 analistas do cliente"
      }
    },
    {
      id: "quimica",
      industry: "Química",
      title: "Previsão de Demanda Aumentou Eficiência em 42%",
      challenge: "Dificuldade em prever demanda sazonal e planejar produção",
      solution: "Modelo preditivo com IA integrado ao Power BI para análise de tendências",
      results: [
        { metric: "Precisão Previsão", value: "94%", icon: Award, color: "text-secondary-600" },
        { metric: "Eficiência Produção", value: "+42%", icon: TrendingUp, color: "text-accent-600" },
        { metric: "Redução Desperdício", value: "-28%", icon: DollarSign, color: "text-red-600" }
      ],
      roi: "R$ 1,8 milhão em ganhos de eficiência",
      timeframe: "4 meses",
      image: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800",
      services: ["Previsão de Demanda"],
      proposalFormData: {
        subject: "Proposta para Previsão de Demanda com IA - Similar ao Case Química",
        prefilledMessage: `Gostaria de receber uma proposta para implementar uma solução de Previsão de Demanda similar ao case da empresa Química apresentado no site, incluindo:

• Modelos preditivos com Machine Learning
• Análise de sazonalidade e tendências de mercado
• Integração com Power BI para visualizações avançadas
• Previsões com até 6 meses de antecedência
• Otimização do planejamento de produção

Nossa empresa precisa melhorar a precisão das previsões de demanda para reduzir desperdícios e aumentar a eficiência operacional, buscando resultados similares aos 94% de precisão e 42% de aumento de eficiência apresentados no case.

Aguardo contato para discutirmos as especificidades do nosso negócio e como adaptar essa solução às nossas necessidades.`
      },
      detailedInfo: {
        client: "Química XYZ S.A.",
        sector: "Produtos Químicos Industriais",
        employees: "800+ funcionários",
        challenge_details: "A empresa tinha dificuldades para prever a demanda sazonal de seus produtos químicos, resultando em superprodução no inverno e falta de produtos no verão. Isso gerava desperdícios de R$ 2,5 milhões anuais e insatisfação de clientes importantes.",
        solution_details: "Desenvolvemos um modelo preditivo avançado usando machine learning integrado ao Power BI, analisando dados históricos de 5 anos, variáveis climáticas, indicadores econômicos e tendências de mercado para gerar previsões precisas com até 6 meses de antecedência.",
        implementation_phases: [
          "Fase 1: Coleta e preparação de dados históricos (3 semanas)",
          "Fase 2: Desenvolvimento do modelo de ML (6 semanas)",
          "Fase 3: Criação dos dashboards preditivos (4 semanas)",
          "Fase 4: Validação e ajustes finais (3 semanas)"
        ],
        technologies: ["Power BI", "Azure Machine Learning", "Python", "TOTVS ERP"],
        team_size: "4 especialistas Bradata + 3 analistas do cliente"
      }
    },
    {
      id: "alimenticia",
      industry: "Alimentícia",
      title: "Supply Chain Integrado Otimizou Distribuição",
      challenge: "Falta de visibilidade na cadeia de distribuição e altos custos logísticos",
      solution: "Dashboard centralizado integrando fornecedores, estoque e distribuição",
      results: [
        { metric: "Redução Custos Logísticos", value: "25%", icon: DollarSign, color: "text-accent-600" },
        { metric: "Tempo de Entrega", value: "-30%", icon: Clock, color: "text-primary-600" },
        { metric: "Satisfação Cliente", value: "+18%", icon: Award, color: "text-secondary-600" }
      ],
      roi: "R$ 3,2 milhões em otimização anual",
      timeframe: "8 meses",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      services: ["Analytics para Supply Chain"],
      proposalFormData: {
        subject: "Proposta para Supply Chain Analytics - Similar ao Case Alimentícia",
        prefilledMessage: `Gostaria de receber uma proposta para implementar uma solução de Supply Chain Analytics similar ao case da empresa Alimentícia apresentado no site, contemplando:

• Dashboard centralizado de Supply Chain
• Integração com fornecedores em tempo real
• Otimização de rotas e distribuição
• Análise preditiva de demanda regional
• Redução de custos logísticos

Nossa empresa busca maior visibilidade e controle da cadeia de suprimentos para reduzir custos e melhorar o atendimento aos clientes, almejando resultados similares aos 25% de redução de custos logísticos e 30% de melhoria no tempo de entrega apresentados no case.

Por favor, entrem em contato para agendarmos uma apresentação detalhada de como essa solução pode ser adaptada à nossa operação.`
      },
      detailedInfo: {
        client: "Alimentos DEF Ltda",
        sector: "Indústria Alimentícia",
        employees: "1200+ funcionários",
        challenge_details: "A empresa enfrentava falta de visibilidade completa em sua cadeia de distribuição, com 15 centros de distribuição e mais de 200 fornecedores. Os custos logísticos representavam 18% do faturamento e havia frequentes atrasos nas entregas.",
        solution_details: "Criamos um dashboard centralizado que integra dados de fornecedores, estoque, produção e distribuição em tempo real, com alertas automáticos, otimização de rotas e análise preditiva de demanda regional.",
        implementation_phases: [
          "Fase 1: Mapeamento da cadeia de suprimentos (4 semanas)",
          "Fase 2: Integração de dados dos fornecedores (8 semanas)",
          "Fase 3: Desenvolvimento dos dashboards (10 semanas)",
          "Fase 4: Implementação e treinamento (10 semanas)"
        ],
        technologies: ["Power BI", "Oracle ERP", "Salesforce", "Azure Synapse"],
        team_size: "5 especialistas Bradata + 4 analistas do cliente"
      }
    }
  ];

  const handleScheduleMeeting = () => {
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

  const handleRequestProposal = (caseData = null) => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-fill the form with case-specific data
      setTimeout(() => {
        if (caseData && caseData.proposalFormData) {
          const messageTextarea = document.getElementById('message');
          if (messageTextarea) {
            messageTextarea.value = caseData.proposalFormData.prefilledMessage;
          }
        }
        
        // Focus on the name input
        const nameInput = document.getElementById('name');
        if (nameInput) nameInput.focus();
      }, 500);
    }
  };

  const openCaseModal = (caseStudy) => {
    // Create modal content
    const modalContent = `
      <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" id="case-modal">
        <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div class="p-8">
            <div class="flex justify-between items-start mb-6">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-2">${caseStudy.title}</h2>
                <div class="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold">
                  ${caseStudy.industry}
                </div>
              </div>
              <button onclick="document.getElementById('case-modal').remove(); document.body.style.overflow = 'auto';" class="text-gray-400 hover:text-gray-600 text-2xl font-bold">×</button>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <img src="${caseStudy.image}" alt="Case ${caseStudy.industry}" class="w-full h-64 object-cover rounded-xl">
              </div>
              <div class="space-y-4">
                <div>
                  <h4 class="font-bold text-gray-900 mb-2">Cliente:</h4>
                  <p class="text-gray-600">${caseStudy.detailedInfo.client}</p>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-2">Setor:</h4>
                  <p class="text-gray-600">${caseStudy.detailedInfo.sector}</p>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-2">Porte:</h4>
                  <p class="text-gray-600">${caseStudy.detailedInfo.employees}</p>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-2">Equipe do Projeto:</h4>
                  <p class="text-gray-600">${caseStudy.detailedInfo.team_size}</p>
                </div>
              </div>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-3">Desafio Detalhado:</h4>
                <p class="text-gray-600 leading-relaxed">${caseStudy.detailedInfo.challenge_details}</p>
              </div>

              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-3">Solução Implementada:</h4>
                <p class="text-gray-600 leading-relaxed">${caseStudy.detailedInfo.solution_details}</p>
              </div>

              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-3">Fases de Implementação:</h4>
                <ul class="space-y-2">
                  ${caseStudy.detailedInfo.implementation_phases.map(phase => 
                    `<li class="flex items-start space-x-3">
                      <div class="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                      <span class="text-gray-600">${phase}</span>
                    </li>`
                  ).join('')}
                </ul>
              </div>

              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-3">Tecnologias Utilizadas:</h4>
                <div class="flex flex-wrap gap-2">
                  ${caseStudy.detailedInfo.technologies.map(tech => 
                    `<span class="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium">${tech}</span>`
                  ).join('')}
                </div>
              </div>

              <div class="bg-primary-50 rounded-xl p-6">
                <h4 class="text-xl font-bold text-primary-800 mb-4">Resultados Alcançados:</h4>
                <div class="grid grid-cols-3 gap-4 mb-4">
                  ${caseStudy.results.map(result => 
                    `<div class="text-center">
                      <div class="text-2xl font-bold ${result.color} mb-1">${result.value}</div>
                      <div class="text-sm text-gray-600">${result.metric}</div>
                    </div>`
                  ).join('')}
                </div>
                <div class="grid md:grid-cols-2 gap-4 pt-4 border-t border-primary-200">
                  <div>
                    <div class="text-sm text-gray-600 mb-1">ROI Alcançado</div>
                    <div class="text-lg font-bold text-primary-800">${caseStudy.roi}</div>
                  </div>
                  <div>
                    <div class="text-sm text-gray-600 mb-1">Tempo de Implementação</div>
                    <div class="text-lg font-bold text-secondary-800">${caseStudy.timeframe}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 space-y-4">
              <div class="flex flex-col sm:flex-row gap-3">
                <button onclick="window.handleFormProposal('${caseStudy.id}')" class="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-all duration-200 font-semibold flex-1">
                  Solicitar Proposta Similar
                </button>
                <button onclick="document.getElementById('case-modal').remove(); document.body.style.overflow = 'auto'; window.handleScheduleMeeting();" class="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 font-semibold flex-1">
                  Agendar Reunião
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Insert modal into DOM
    document.body.insertAdjacentHTML('beforeend', modalContent);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Make functions available globally for modal buttons
    window.handleScheduleMeeting = handleScheduleMeeting;
    window.handleFormProposal = (caseId) => {
      const selectedCase = caseStudies.find(c => c.id === caseId);
      if (selectedCase) {
        document.getElementById('case-modal').remove();
        document.body.style.overflow = 'auto';
        handleRequestProposal(selectedCase);
      }
    };
    
    // Add click outside to close
    document.getElementById('case-modal').addEventListener('click', (e) => {
      if (e.target.id === 'case-modal') {
        document.getElementById('case-modal').remove();
        document.body.style.overflow = 'auto';
      }
    });
  };

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Resultados que
            <span className="text-primary-600"> Transformam Negócios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça como nossos clientes alcançaram resultados extraordinários com nossas soluções de Business Intelligence.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              id={`case-${study.id}`}
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-500 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
                  {study.industry}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                
                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.services.map((service, serviceIndex) => (
                    <span
                      key={serviceIndex}
                      className="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
                </div>
                
                {/* Challenge & Solution */}
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Desafio:</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Solução:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center p-4 bg-gray-50 rounded-xl">
                      <result.icon className={`h-8 w-8 ${result.color} mx-auto mb-2`} />
                      <div className={`text-2xl font-bold ${result.color} mb-1`}>
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-600">{result.metric}</div>
                    </div>
                  ))}
                </div>

                {/* ROI & Timeline */}
                <div className="bg-primary-50 rounded-xl p-6 mb-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">ROI Alcançado</div>
                      <div className="text-xl font-bold text-primary-800">{study.roi}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Tempo de Implementação</div>
                      <div className="text-xl font-bold text-secondary-800">{study.timeframe}</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => openCaseModal(study)}
                      className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group flex-1"
                    >
                      Ver Caso Completo
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                    <button 
                      onClick={() => handleRequestProposal(study)}
                      className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 font-semibold flex-1"
                    >
                      Solicitar Proposta Similar
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={study.image}
                    alt={`Case study ${study.industry}`}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="text-sm font-semibold text-gray-900">Setor {study.industry}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-primary-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Pronto para Transformar Seus Resultados?</h3>
          <p className="text-xl mb-8 opacity-90">
            Vamos conversar sobre como podemos aplicar essas soluções no seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleScheduleMeeting}
              className="bg-white text-primary-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Agendar Reunião
            </button>
            <button 
              onClick={() => handleRequestProposal()}
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-200 font-semibold"
            >
              Solicitar Proposta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;