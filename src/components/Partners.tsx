import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
      description: "Parceiro Gold em Power BI e Azure Analytics",
      certifications: ["Power BI Certified", "Azure Data Engineer", "Microsoft Partner"]
    },
    {
      name: "SAP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/512px-SAP_2011_logo.svg.png",
      description: "Especialista em integração SAP com soluções BI",
      certifications: ["SAP Certified", "SAP Analytics Cloud", "SAP Integration"]
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png",
      description: "Parceiro certificado em Salesforce Analytics",
      certifications: ["Salesforce Certified", "Tableau Specialist", "CRM Analytics"]
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Microsoft Gold Partner",
      description: "Reconhecimento pela excelência em soluções Power BI"
    },
    {
      icon: CheckCircle,
      title: "SAP Certified Partner",
      description: "Certificação oficial para integrações SAP"
    },
    {
      icon: Award,
      title: "Salesforce Partner",
      description: "Parceiro oficial em soluções de analytics"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Parceiros
            <span className="text-primary-600"> Oficiais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabalhamos com as principais plataformas de tecnologia do mercado para oferecer 
            as melhores soluções de Business Intelligence para sua empresa.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              {/* Logo */}
              <div className="mb-6 flex justify-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{partner.description}</p>

              {/* Certifications */}
              <div className="space-y-2">
                {partner.certifications.map((cert, certIndex) => (
                  <div key={certIndex} className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent-600" />
                    <span className="text-sm text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Reconhecimentos e Certificações</h3>
            <p className="text-xl text-gray-600">Validação oficial da nossa expertise técnica</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Benefits */}
        <div className="mt-16 bg-primary-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Integração Completa com Seus Sistemas</h3>
          <p className="text-xl mb-8 opacity-90">
            Conectamos suas ferramentas existentes para criar uma visão unificada dos seus dados.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-xl font-bold mb-4">Sistemas Suportados:</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-400" />
                  <span>ERP SAP, Oracle, TOTVS</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-400" />
                  <span>CRM Salesforce, HubSpot</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-400" />
                  <span>Bancos de Dados SQL Server, MySQL</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary-400" />
                  <span>Planilhas Excel e Google Sheets</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Benefícios da Integração:</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400" />
                  <span>Dados em tempo real</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400" />
                  <span>Eliminação de silos de informação</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400" />
                  <span>Automação de relatórios</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400" />
                  <span>Visão 360° do negócio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;