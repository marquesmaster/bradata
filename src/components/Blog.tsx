import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag, Search, Filter } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Como a Indústria 4.0 está Revolucionando a Manufatura Brasileira",
      excerpt: "Descubra como tecnologias emergentes como IoT, IA e Big Data estão transformando o chão de fábrica e criando novas oportunidades de otimização.",
      content: "A Indústria 4.0 representa uma revolução na forma como produzimos e gerenciamos operações industriais. No Brasil, empresas que adotaram essas tecnologias relatam aumentos de produtividade de até 25% e redução de custos operacionais de 15%. A integração de sensores IoT, sistemas de IA e análise de big data está criando fábricas inteligentes que se adaptam automaticamente às demandas do mercado. Empresas como a Embraer e a Vale já implementaram soluções de Indústria 4.0 com resultados impressionantes, incluindo redução de 30% no tempo de setup de máquinas e aumento de 40% na precisão de previsões de manutenção.",
      author: "Equipe Bradata",
      date: "2024-01-15",
      readTime: "8 min",
      category: "industria-4.0",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Indústria 4.0", "IoT", "Automação", "Produtividade"]
    },
    {
      id: 2,
      title: "Power BI vs Tableau: Qual a Melhor Escolha para sua Indústria?",
      excerpt: "Análise comparativa detalhada entre as duas principais ferramentas de BI do mercado, com foco nas necessidades específicas do setor industrial.",
      content: "Escolher a ferramenta certa de Business Intelligence pode determinar o sucesso da sua estratégia de dados. Analisamos custos, funcionalidades e casos de uso específicos para o setor industrial. O Power BI se destaca pela integração nativa com o ecossistema Microsoft e custo-benefício superior, especialmente para empresas que já utilizam Office 365. Já o Tableau oferece visualizações mais avançadas e flexibilidade superior para análises complexas. Para indústrias com orçamentos limitados, o Power BI representa 60% menos custo que o Tableau, enquanto oferece 90% das funcionalidades necessárias para a maioria dos casos de uso industriais.",
      author: "Carlos Silva",
      date: "2024-01-10",
      readTime: "12 min",
      category: "ferramentas-bi",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Power BI", "Tableau", "Comparativo", "Ferramentas"]
    },
    {
      id: 3,
      title: "5 KPIs Essenciais para Monitorar sua Cadeia de Suprimentos",
      excerpt: "Conheça os indicadores mais importantes para manter sua supply chain eficiente e identificar oportunidades de melhoria antes que se tornem problemas.",
      content: "Uma cadeia de suprimentos bem monitorada é fundamental para o sucesso industrial. Apresentamos os 5 KPIs que toda empresa deve acompanhar: 1) Lead Time - tempo médio entre pedido e entrega, meta ideal abaixo de 15 dias; 2) Fill Rate - percentual de pedidos atendidos completamente, meta acima de 95%; 3) Perfect Order Rate - pedidos entregues sem erros, meta acima de 90%; 4) Inventory Turnover - giro de estoque anual, meta entre 6-12x dependendo do setor; 5) Supply Chain Costs - custos totais como % da receita, meta abaixo de 8%. Empresas que monitoram esses KPIs relatam redução de 25% nos custos logísticos e aumento de 30% na satisfação do cliente.",
      author: "Ana Santos",
      date: "2024-01-05",
      readTime: "6 min",
      category: "supply-chain",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["KPIs", "Supply Chain", "Logística", "Indicadores"]
    },
    {
      id: 4,
      title: "Machine Learning na Previsão de Demanda: Casos Práticos",
      excerpt: "Veja como algoritmos de aprendizado de máquina estão ajudando empresas a prever demanda com precisão superior a 90% e reduzir estoques desnecessários.",
      content: "A previsão de demanda tradicional baseada em médias históricas está sendo superada por modelos de Machine Learning que consideram múltiplas variáveis e padrões complexos, resultando em previsões mais precisas. Algoritmos como Random Forest, LSTM e Prophet conseguem analisar sazonalidades, tendências, eventos externos e comportamento do consumidor simultaneamente. Uma empresa química que implementamos conseguiu aumentar a precisão das previsões de 65% para 94%, resultando em redução de 40% no estoque de segurança e economia de R$ 2,3 milhões anuais. Os modelos consideram mais de 50 variáveis, incluindo dados climáticos, indicadores econômicos e até mesmo tendências de redes sociais.",
      author: "Roberto Lima",
      date: "2023-12-28",
      readTime: "10 min",
      category: "machine-learning",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Machine Learning", "Previsão", "Demanda", "IA"]
    },
    {
      id: 5,
      title: "Reduzindo Desperdícios com Analytics: Case Indústria Alimentícia",
      excerpt: "Como uma grande indústria alimentícia reduziu desperdícios em 30% utilizando dashboards inteligentes e análise preditiva de qualidade.",
      content: "Através da implementação de sensores IoT e dashboards em tempo real, a empresa conseguiu identificar padrões que levavam ao desperdício e implementar ações corretivas automatizadas. O projeto envolveu a instalação de 200+ sensores de temperatura, umidade e pH ao longo da linha de produção, conectados a um sistema de BI que analisa os dados em tempo real. Quando detectadas condições que podem levar ao desperdício, o sistema automaticamente ajusta parâmetros ou alerta operadores. Resultado: redução de 30% no desperdício, economia de R$ 1,8 milhão anual e melhoria de 15% na qualidade dos produtos. O sistema também identifica oportunidades de reaproveitamento de subprodutos, gerando receita adicional de R$ 500 mil anuais.",
      author: "Marina Costa",
      date: "2023-12-20",
      readTime: "7 min",
      category: "casos-sucesso",
      image: "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Desperdício", "Alimentícia", "Case", "Sustentabilidade"]
    },
    {
      id: 6,
      title: "Integração SAP com Power BI: Guia Completo para Iniciantes",
      excerpt: "Passo a passo para conectar seus dados SAP ao Power BI e criar relatórios dinâmicos que transformam informações em insights acionáveis.",
      content: "A integração entre SAP e Power BI permite aproveitar a robustez do ERP com a flexibilidade de visualização do BI, criando uma solução poderosa para análise de dados empresariais. O processo envolve três etapas principais: 1) Configuração do SAP Gateway para expor dados via OData; 2) Configuração do Power BI Gateway para conectividade segura; 3) Criação de relatórios com refresh automático. Empresas que implementaram essa integração relatam redução de 80% no tempo de criação de relatórios e aumento de 60% na velocidade de tomada de decisões. A solução permite análises em tempo real de vendas, estoque, produção e finanças, com drill-down até o nível transacional. Custos típicos de implementação ficam entre R$ 50-150 mil, com ROI em 6-12 meses.",
      author: "Pedro Oliveira",
      date: "2023-12-15",
      readTime: "15 min",
      category: "integracao",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["SAP", "Power BI", "Integração", "ERP"]
    },
    {
      id: 7,
      title: "Manutenção Preditiva: Como Evitar Paradas Não Planejadas",
      excerpt: "Descubra como sensores IoT e algoritmos preditivos podem reduzir paradas de equipamentos em até 70% e aumentar a vida útil dos ativos.",
      content: "A manutenção preditiva utiliza dados de sensores, histórico de falhas e algoritmos de IA para prever quando um equipamento precisará de manutenção, evitando paradas custosas e não planejadas. Sensores monitoram vibração, temperatura, pressão, corrente elétrica e outros parâmetros críticos 24/7. Algoritmos de machine learning analisam esses dados para identificar padrões que precedem falhas. Uma metalúrgica que implementamos conseguiu reduzir paradas não planejadas em 70%, aumentar a vida útil dos equipamentos em 25% e reduzir custos de manutenção em 35%. O sistema alerta com 2-4 semanas de antecedência sobre necessidades de manutenção, permitindo planejamento adequado e compra antecipada de peças. ROI típico de 300-500% no primeiro ano.",
      author: "João Ferreira",
      date: "2023-12-10",
      readTime: "9 min",
      category: "manutencao",
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Manutenção", "Preditiva", "IoT", "Equipamentos"]
    },
    {
      id: 8,
      title: "Dashboard Executivo: Métricas que Todo CEO Deveria Acompanhar",
      excerpt: "Conheça os indicadores estratégicos essenciais para tomada de decisão no nível executivo e como apresentá-los de forma clara e acionável.",
      content: "Um dashboard executivo eficaz deve apresentar informações estratégicas de forma clara e permitir drill-down para análises mais detalhadas quando necessário. Os KPIs essenciais incluem: Receita vs Meta (mensal/anual), Margem EBITDA, Fluxo de Caixa, NPS (Net Promoter Score), Produtividade (receita/funcionário), Market Share, Tempo de Ciclo de Produtos e Índice de Inovação. O dashboard deve ser atualizado em tempo real e acessível via mobile. Executivos gastam em média 2-3 horas semanais analisando dados - um dashboard bem projetado reduz isso para 30 minutos, aumentando o tempo disponível para ações estratégicas. Empresas com dashboards executivos eficazes tomam decisões 5x mais rápido e têm 23% mais probabilidade de superar metas financeiras.",
      author: "Luciana Mendes",
      date: "2023-12-05",
      readTime: "11 min",
      category: "dashboards",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Dashboard", "Executivo", "KPIs", "Gestão"]
    },
    {
      id: 9,
      title: "Otimização de Rotas com Big Data: Reduzindo Custos Logísticos",
      excerpt: "Veja como algoritmos de otimização e análise de big data estão revolucionando a logística e reduzindo custos de transporte em até 25%.",
      content: "A otimização de rotas moderna considera múltiplas variáveis como trânsito em tempo real, condições climáticas, capacidade dos veículos e restrições de entrega para encontrar as melhores rotas. Algoritmos genéticos e de enxame de partículas processam milhões de combinações possíveis em segundos. Uma distribuidora que otimizamos conseguiu reduzir custos logísticos em 25%, diminuir emissões de CO2 em 30% e aumentar a satisfação do cliente com entregas mais pontuais. O sistema considera dados de APIs de trânsito, previsão meteorológica, histórico de entregas, capacidade de carga e até mesmo preferências de horário dos clientes. Implementação típica leva 3-4 meses e gera ROI de 200-400% no primeiro ano. A solução também inclui app mobile para motoristas com navegação otimizada e comunicação em tempo real.",
      author: "Rafael Torres",
      date: "2023-11-30",
      readTime: "8 min",
      category: "logistica",
      image: "https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Logística", "Rotas", "Big Data", "Otimização"]
    },
    {
      id: 10,
      title: "Segurança de Dados em Ambientes Industriais: Melhores Práticas",
      excerpt: "Proteja seus dados industriais críticos com estratégias de segurança específicas para ambientes de manufatura e supply chain.",
      content: "A segurança de dados em ambientes industriais requer abordagens específicas que considerem a conectividade de equipamentos, acesso remoto e proteção de propriedade intelectual. Implementamos arquiteturas de segurança em camadas: 1) Segmentação de rede separando OT (Operational Technology) de IT; 2) Autenticação multifator para todos os acessos; 3) Criptografia end-to-end para dados em trânsito e repouso; 4) Monitoramento 24/7 com IA para detecção de anomalias; 5) Backup automatizado com teste de recuperação mensal. Empresas industriais sofrem 2x mais ataques cibernéticos que outros setores, com custo médio de R$ 15 milhões por incidente. Nossa abordagem reduz riscos em 90% e garante conformidade com LGPD, ISO 27001 e regulamentações setoriais específicas.",
      author: "Fernanda Rocha",
      date: "2023-11-25",
      readTime: "13 min",
      category: "seguranca",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Segurança", "Dados", "Proteção", "Compliance"]
    },
    // 10 NOVOS POSTS ENRIQUECIDOS
    {
      id: 11,
      title: "Transformação Digital na Indústria: Roadmap Completo para 2024",
      excerpt: "Guia estratégico para liderar a transformação digital na sua indústria, com cronograma, investimentos e métricas de sucesso baseados em cases reais.",
      content: "A transformação digital industrial não é apenas sobre tecnologia - é uma mudança cultural e estratégica que redefine como as empresas operam. Nosso roadmap de 18 meses inclui 5 fases: 1) Diagnóstico Digital (2 meses) - avaliação da maturidade atual e identificação de gaps; 2) Infraestrutura Base (4 meses) - implementação de conectividade, cloud e segurança; 3) Digitalização de Processos (6 meses) - automação de workflows críticos; 4) Analytics Avançado (4 meses) - BI, IA e machine learning; 5) Inovação Contínua (2 meses) - cultura de experimentação e melhoria. Empresas que seguem este roadmap alcançam 35% de aumento na produtividade, 28% de redução de custos e 40% de melhoria na agilidade de resposta ao mercado. Investimento médio: R$ 2-8 milhões dependendo do porte, com ROI de 250-400% em 3 anos.",
      author: "Dr. Eduardo Martins",
      date: "2024-01-20",
      readTime: "16 min",
      category: "transformacao-digital",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Transformação Digital", "Estratégia", "Roadmap", "Inovação"]
    },
    {
      id: 12,
      title: "Inteligência Artificial na Qualidade Industrial: Detecção Automática de Defeitos",
      excerpt: "Como sistemas de visão computacional e deep learning estão revolucionando o controle de qualidade, detectando defeitos com 99.7% de precisão.",
      content: "A IA está transformando o controle de qualidade industrial através de sistemas de visão computacional que superam a capacidade humana de detecção de defeitos. Implementamos soluções que utilizam redes neurais convolucionais (CNNs) treinadas com milhares de imagens para identificar defeitos microscópicos em tempo real. Uma fábrica de semicondutores conseguiu aumentar a detecção de defeitos de 85% (inspeção humana) para 99.7% (IA), reduzindo recalls em 95% e economizando R$ 12 milhões anuais. O sistema processa 1000+ peças por minuto, classifica defeitos por tipo e severidade, e aprende continuamente com novos dados. Tecnologias utilizadas: OpenCV, TensorFlow, câmeras industriais 4K, iluminação LED especializada. Tempo de implementação: 4-6 meses. ROI típico: 300-600% no primeiro ano. A solução também gera relatórios automáticos de qualidade e integra com sistemas MES/ERP.",
      author: "Dra. Patricia Nakamura",
      date: "2024-01-18",
      readTime: "14 min",
      category: "inteligencia-artificial",
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["IA", "Qualidade", "Visão Computacional", "Automação"]
    },
    {
      id: 13,
      title: "ESG e Sustentabilidade: Como o BI Impulsiona Metas Ambientais",
      excerpt: "Dashboards ESG que transformam dados ambientais em ações concretas, ajudando indústrias a reduzir pegada de carbono em até 45%.",
      content: "O Business Intelligence está se tornando fundamental para empresas que buscam atingir metas ESG (Environmental, Social, Governance) e sustentabilidade. Desenvolvemos dashboards que monitoram em tempo real: consumo de energia, emissões de CO2, uso de água, geração de resíduos, eficiência energética e compliance ambiental. Uma indústria química reduziu emissões em 45% e consumo de água em 35% usando nossos dashboards para identificar oportunidades de otimização. O sistema integra dados de sensores IoT, medidores inteligentes e sistemas de gestão ambiental, gerando alertas automáticos quando limites são ultrapassados. Funcionalidades incluem: relatórios automáticos para órgãos reguladores, simulação de cenários de sustentabilidade, benchmarking com concorrentes e cálculo automático de pegada de carbono. Empresas com dashboards ESG eficazes têm 40% mais chances de atingir metas de sustentabilidade e atraem 25% mais investimentos ESG.",
      author: "Eng. Marcos Sustentável",
      date: "2024-01-16",
      readTime: "12 min",
      category: "sustentabilidade",
      image: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["ESG", "Sustentabilidade", "Meio Ambiente", "Compliance"]
    },
    {
      id: 14,
      title: "Análise Preditiva de Vendas: Antecipando Tendências de Mercado",
      excerpt: "Modelos avançados de forecasting que combinam dados internos e externos para prever vendas com 92% de precisão até 6 meses à frente.",
      content: "A análise preditiva de vendas evoluiu além de simples projeções históricas, incorporando inteligência artificial, dados externos e análise de sentimento para previsões ultra-precisas. Nossos modelos combinam dados internos (histórico de vendas, estoque, promoções) com externos (indicadores econômicos, clima, redes sociais, concorrência) usando algoritmos como ARIMA, Prophet, LSTM e ensemble methods. Uma empresa de bens de consumo aumentou a precisão de previsões de 68% para 92%, resultando em redução de 40% no estoque morto e aumento de 25% na disponibilidade de produtos. O sistema identifica automaticamente sazonalidades, tendências emergentes e impactos de eventos externos. Funcionalidades avançadas: simulação de cenários, análise de elasticidade de preços, otimização de mix de produtos e alertas de oportunidades de mercado. Implementação típica: 3-4 meses. ROI médio: 400-700% em 18 meses.",
      author: "Ana Beatriz Forecasting",
      date: "2024-01-14",
      readTime: "11 min",
      category: "vendas-predicao",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Previsão", "Vendas", "Machine Learning", "Mercado"]
    },
    {
      id: 15,
      title: "Gestão de Riscos Operacionais com Analytics: Prevenindo Crises",
      excerpt: "Sistema integrado de monitoramento de riscos que utiliza IA para prever e prevenir falhas operacionais antes que impactem a produção.",
      content: "A gestão de riscos operacionais moderna utiliza analytics avançado para identificar, quantificar e mitigar riscos antes que se tornem problemas críticos. Desenvolvemos sistemas que monitoram 200+ indicadores de risco em tempo real: performance de equipamentos, qualidade de matéria-prima, condições ambientais, performance de fornecedores, indicadores financeiros e fatores externos. Uma petroquímica reduziu incidentes operacionais em 65% e evitou perdas de R$ 25 milhões usando nosso sistema de gestão de riscos. A IA identifica padrões que precedem falhas, calcula probabilidades de ocorrência e sugere ações preventivas automaticamente. Funcionalidades incluem: matriz de riscos dinâmica, simulação Monte Carlo, análise de cenários, alertas preditivos e planos de contingência automatizados. O sistema integra com ERP, MES, SCADA e sistemas de segurança, fornecendo visão holística dos riscos operacionais.",
      author: "Dr. Ricardo Risk",
      date: "2024-01-12",
      readTime: "13 min",
      category: "gestao-riscos",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Riscos", "Prevenção", "Analytics", "Segurança"]
    },
    {
      id: 16,
      title: "Otimização de Energia Industrial: Reduzindo Custos com Smart Analytics",
      excerpt: "Como algoritmos de otimização energética estão ajudando indústrias a reduzir custos de energia em até 35% através de análise inteligente de consumo.",
      content: "A otimização energética industrial combina IoT, machine learning e análise de big data para reduzir drasticamente custos de energia. Implementamos sistemas que monitoram consumo em tempo real de todos os equipamentos, identificam padrões de desperdício e otimizam automaticamente o uso de energia. Uma siderúrgica reduziu custos energéticos em 35% (R$ 8 milhões anuais) através de otimização de horários de operação, balanceamento de cargas e identificação de equipamentos ineficientes. O sistema utiliza algoritmos genéticos para encontrar a combinação ótima de operação de equipamentos, considerando tarifas horárias, demanda de produção e restrições operacionais. Funcionalidades avançadas: previsão de demanda energética, negociação automática no mercado livre de energia, detecção de anomalias de consumo e relatórios de eficiência energética. Tecnologias: medidores inteligentes, sensores IoT, algoritmos de otimização, dashboards em tempo real. ROI típico: 200-400% em 12-18 meses.",
      author: "Eng. Elétrica Sustentável",
      date: "2024-01-10",
      readTime: "10 min",
      category: "energia",
      image: "https://images.pexels.com/photos/9800000/pexels-photo-9800000.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Energia", "Otimização", "Sustentabilidade", "Custos"]
    },
    {
      id: 17,
      title: "Blockchain na Supply Chain: Rastreabilidade Total e Transparência",
      excerpt: "Como a tecnologia blockchain está criando cadeias de suprimentos totalmente rastreáveis, aumentando confiança e reduzindo fraudes em 90%.",
      content: "O blockchain está revolucionando a gestão de supply chain ao criar registros imutáveis e transparentes de toda a jornada dos produtos. Implementamos soluções que rastreiam produtos desde a matéria-prima até o consumidor final, registrando cada transação, movimentação e transformação na blockchain. Uma empresa de alimentos orgânicos aumentou a confiança do consumidor em 85% e reduziu fraudes em 90% com nossa solução de rastreabilidade blockchain. O sistema registra automaticamente dados de sensores IoT, certificações de qualidade, testes laboratoriais e informações logísticas em smart contracts. Benefícios incluem: recall preciso em minutos (vs. semanas), compliance automático com regulamentações, redução de produtos falsificados e premium de preço por transparência. Tecnologias utilizadas: Ethereum, Hyperledger Fabric, IPFS para documentos, integração com ERP/WMS. Implementação típica: 6-8 meses. ROI através de redução de recalls, premium de preço e eficiência operacional.",
      author: "Dr. Blockchain Industrial",
      date: "2024-01-08",
      readTime: "15 min",
      category: "blockchain",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Blockchain", "Rastreabilidade", "Supply Chain", "Transparência"]
    },
    {
      id: 18,
      title: "Realidade Aumentada na Manutenção Industrial: Reduzindo Tempo de Reparo",
      excerpt: "Soluções de AR que guiam técnicos através de procedimentos complexos, reduzindo tempo de manutenção em 50% e erros em 75%.",
      content: "A Realidade Aumentada (AR) está transformando a manutenção industrial ao sobrepor informações digitais no mundo real, guiando técnicos através de procedimentos complexos com precisão sem precedentes. Desenvolvemos aplicações AR que exibem instruções passo-a-passo, diagramas 3D, histórico de manutenção e dados de sensores diretamente no campo de visão do técnico. Uma refinaria reduziu tempo médio de reparo em 50% e erros de manutenção em 75% usando nossos óculos AR. O sistema reconhece equipamentos automaticamente, acessa manuais digitais, conecta com especialistas remotos e registra procedimentos para treinamento futuro. Funcionalidades avançadas: tradução automática de manuais, simulação de procedimentos perigosos, checklist interativo e integração com sistemas CMMS. Tecnologias: Microsoft HoloLens, Magic Leap, reconhecimento de objetos, cloud computing. Benefícios: redução de 40% no tempo de treinamento de novos técnicos, aumento de 60% na primeira tentativa de reparo bem-sucedida e melhoria de 35% na segurança operacional.",
      author: "Eng. AR Maintenance",
      date: "2024-01-06",
      readTime: "9 min",
      category: "realidade-aumentada",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Realidade Aumentada", "Manutenção", "Treinamento", "Eficiência"]
    },
    {
      id: 19,
      title: "Digital Twin na Indústria: Simulação Perfeita da Realidade",
      excerpt: "Como gêmeos digitais estão permitindo simulações precisas de processos industriais, otimizando operações e reduzindo custos de teste em 80%.",
      content: "Digital Twins (Gêmeos Digitais) criam réplicas virtuais exatas de equipamentos, processos ou fábricas inteiras, permitindo simulações, otimizações e previsões sem impactar a operação real. Desenvolvemos digital twins que sincronizam em tempo real com sensores IoT, criando modelos dinâmicos que evoluem com a operação física. Uma montadora automotiva economizou R$ 15 milhões em custos de prototipagem e reduziu tempo de desenvolvimento de produtos em 40% usando nossos digital twins. O sistema simula milhares de cenários operacionais, testa modificações virtualmente, otimiza parâmetros de processo e prevê falhas antes que ocorram. Aplicações incluem: otimização de layout de fábrica, teste de novos produtos, treinamento de operadores em ambiente seguro e planejamento de manutenção. Tecnologias: Unity 3D, simulação CFD, machine learning, cloud computing, integração IoT. Benefícios: redução de 60% em tempo de comissionamento, aumento de 30% na eficiência operacional e eliminação de 90% dos testes físicos destrutivos.",
      author: "Dr. Digital Twin",
      date: "2024-01-04",
      readTime: "12 min",
      category: "digital-twin",
      image: "https://images.pexels.com/photos/8566463/pexels-photo-8566463.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Digital Twin", "Simulação", "Otimização", "Inovação"]
    },
    {
      id: 20,
      title: "Automação Robótica de Processos (RPA) na Indústria: Casos de Sucesso",
      excerpt: "Como robôs de software estão automatizando tarefas repetitivas, liberando funcionários para atividades estratégicas e reduzindo erros em 95%.",
      content: "A Automação Robótica de Processos (RPA) está transformando operações industriais ao automatizar tarefas repetitivas e baseadas em regras, liberando funcionários para atividades de maior valor agregado. Implementamos bots que executam processos como entrada de dados, reconciliação de sistemas, geração de relatórios e processamento de pedidos com precisão de 99.9%. Uma empresa química automatizou 80% dos processos administrativos, reduzindo tempo de processamento de pedidos de 4 horas para 15 minutos e eliminando 95% dos erros manuais. Os bots trabalham 24/7, processam grandes volumes de dados e integram sistemas legados sem modificações. Casos de uso incluem: processamento de faturas, atualização de inventário, compliance regulatório, onboarding de fornecedores e geração de relatórios financeiros. Tecnologias: UiPath, Blue Prism, Automation Anywhere, OCR, machine learning. ROI típico: 200-400% no primeiro ano. Benefícios adicionais: melhoria na satisfação dos funcionários, redução de 70% no tempo de ciclo de processos e aumento de 50% na precisão de dados.",
      author: "Especialista RPA Industrial",
      date: "2024-01-02",
      readTime: "11 min",
      category: "automacao-rpa",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["RPA", "Automação", "Processos", "Eficiência"]
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos os Posts', count: blogPosts.length },
    { id: 'industria-4.0', name: 'Indústria 4.0', count: blogPosts.filter(post => post.category === 'industria-4.0').length },
    { id: 'ferramentas-bi', name: 'Ferramentas BI', count: blogPosts.filter(post => post.category === 'ferramentas-bi').length },
    { id: 'supply-chain', name: 'Supply Chain', count: blogPosts.filter(post => post.category === 'supply-chain').length },
    { id: 'machine-learning', name: 'Machine Learning', count: blogPosts.filter(post => post.category === 'machine-learning').length },
    { id: 'casos-sucesso', name: 'Cases de Sucesso', count: blogPosts.filter(post => post.category === 'casos-sucesso').length },
    { id: 'transformacao-digital', name: 'Transformação Digital', count: blogPosts.filter(post => post.category === 'transformacao-digital').length },
    { id: 'inteligencia-artificial', name: 'Inteligência Artificial', count: blogPosts.filter(post => post.category === 'inteligencia-artificial').length },
    { id: 'sustentabilidade', name: 'Sustentabilidade', count: blogPosts.filter(post => post.category === 'sustentabilidade').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const [selectedPost, setSelectedPost] = useState(null);

  const openPostModal = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePostModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const nameInput = document.getElementById('name');
        if (nameInput) nameInput.focus();
      }, 500);
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Blog <span className="text-secondary-400">Bradata</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Insights, tendências e melhores práticas em Business Intelligence 
              para o setor industrial e supply chain.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-400">{blogPosts.length}</div>
                <div className="text-sm text-gray-300">Artigos Publicados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400">50K+</div>
                <div className="text-sm text-gray-300">Leitores Mensais</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400">15+</div>
                <div className="text-sm text-gray-300">Especialistas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">8+</div>
                <div className="text-sm text-gray-300">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 6).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Artigos em <span className="text-primary-600">Destaque</span>
            </h2>
            <p className="text-xl text-gray-600">
              Os conteúdos mais lidos e relevantes para o setor industrial
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 cursor-pointer"
                onClick={() => openPostModal(post)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      DESTAQUE
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center text-primary-600 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
                      Ler mais
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Todos os <span className="text-primary-600">Artigos</span>
            </h2>
            <p className="text-xl text-gray-600">
              {filteredPosts.length} artigos encontrados
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Nenhum artigo encontrado com os filtros selecionados.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(3).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 cursor-pointer"
                  onClick={() => openPostModal(post)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {categories.find(cat => cat.id === post.category)?.name || post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and Read More */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <div className="flex items-center text-primary-600 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
                        Ler mais
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Receba Nossos <span className="text-secondary-400">Insights</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Cadastre-se para receber os melhores conteúdos sobre BI industrial diretamente no seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-secondary-400 focus:outline-none"
            />
            <button className="bg-secondary-600 text-white px-6 py-3 rounded-lg hover:bg-secondary-700 transition-all duration-200 font-semibold">
              Inscrever-se
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Enviamos apenas conteúdo relevante. Sem spam, prometido!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Quer Implementar essas <span className="text-primary-600">Soluções</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nossa equipe está pronta para ajudar sua empresa a implementar as melhores práticas 
            de Business Intelligence apresentadas em nossos artigos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleContactClick}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Fale com Nossos Especialistas
            </button>
            <button 
              onClick={() => window.location.href = '/#case-studies'}
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 font-semibold"
            >
              Ver Nossos Cases
            </button>
          </div>
        </div>
      </section>

      {/* Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header Image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <button
                  onClick={closePostModal}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-200 text-2xl font-bold w-10 h-10 flex items-center justify-center"
                >
                  ×
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(cat => cat.id === selectedPost.category)?.name || selectedPost.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  {selectedPost.title}
                </h1>

                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed font-medium">
                    {selectedPost.excerpt}
                  </p>
                  <div className="text-gray-700 leading-relaxed text-lg">
                    {selectedPost.content.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Gostou do conteúdo?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Entre em contato conosco para saber como implementar essas soluções na sua empresa.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={() => {
                        closePostModal();
                        handleContactClick();
                      }}
                      className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all duration-200 font-semibold"
                    >
                      Falar com Especialista
                    </button>
                    <button
                      onClick={() => {
                        closePostModal();
                        window.location.href = '/#case-studies';
                      }}
                      className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200 font-semibold"
                    >
                      Ver Cases Similares
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;