// src/pages/SolucoesPage.jsx
import React from 'react';

const SolucoesPage = () => {
  // Array de objetos para suas soluções
  // Você pode adicionar mais aqui
  const solucoes = [
    {
      id: 'typmann-crm',
      title: 'CRM Typmann',
      description: 'Nosso avançado sistema de CRM da Typmann para gestão de clientes e vendas.',
      link: 'https://crmbradata.netlify.app/',
    },
    {
      id: 'bradata-erp',
      title: 'ERP Bradata',
      description: 'Conheça o sistema ERP da Bradata para otimizar seus processos de negócios.',
      link: 'https://erpbradata.com.br/', // Exemplo de outro link
    },
    {
      id: 'logistica-inteligente',
      title: 'Solução Logística Inteligente',
      description: 'Uma solução completa para otimização da cadeia de suprimentos e logística.',
      link: 'https://logistica.bradata.com.br/', // Exemplo de outro link
    },
    // Adicione mais soluções conforme necessário
  ];

  const handleSolutionClick = (link) => {
    // Abre o link em uma nova aba para não sair do seu site principal
    window.open(link, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nossas Soluções</h1>

      <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
        Explore as diversas ferramentas e plataformas que a Bradata oferece para impulsionar a eficiência e o crescimento do seu negócio. Clique para saber mais!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solucoes.map((solucao) => (
          <div
            key={solucao.id}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleSolutionClick(solucao.link)}
          >
            <h2 className="text-2xl font-semibold text-primary-700 mb-3">{solucao.title}</h2>
            <p className="text-gray-600 mb-4 flex-grow">{solucao.description}</p>
            <button
              className="mt-auto bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium shadow-md"
            >
              Acessar Solução
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolucoesPage;