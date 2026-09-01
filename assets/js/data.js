export const services = [
  {
    id: 'web-fullstack',
    icon: '🌐',
    title: { pt: 'Aplicações web full stack', en: 'Full stack web applications' },
    description: {
      pt: 'Sistemas web completos, do banco de dados à interface, usando Python/Django ou .NET.',
      en: 'End-to-end web systems, from database to interface, using Python/Django or .NET.'
    }
  },
  {
    id: 'mobile',
    icon: '📱',
    title: { pt: 'Apps mobile', en: 'Mobile apps' },
    description: {
      pt: 'Aplicativos Android/iOS com React Native e Expo, integrados a APIs próprias.',
      en: 'Android/iOS apps with React Native and Expo, integrated with custom APIs.'
    }
  },
  {
    id: 'db-systems',
    icon: '🗄️',
    title: { pt: 'Sistemas com banco de dados', en: 'Database-driven systems' },
    description: {
      pt: 'Cadastro, gestão e dashboards com PostgreSQL ou SQLite, modelados sob medida.',
      en: 'Registration, management and dashboards with PostgreSQL or SQLite, custom-modeled.'
    }
  },
  {
    id: 'automation',
    icon: '⚙️',
    title: { pt: 'Automações simples em Python', en: 'Simple Python automations' },
    description: {
      pt: 'Scripts para automatizar tarefas repetitivas — nível inicial, ideal para pequenas demandas.',
      en: 'Scripts to automate repetitive tasks — entry level, ideal for small requests.'
    }
  }
];

export const projects = [
  {
    id: 'flanelinha-app',
    name: 'flanelinha-app',
    image: 'assets/img/projects/placeholder.svg',
    description: {
      pt: 'App mobile e API para cadastro de flanelinhas e emissão de carteira digital, inspirado na regulamentação da atividade em Teresina-PI.',
      en: 'Mobile app and API for registering informal parking attendants and issuing a digital ID card, inspired by local regulation in Teresina, Brazil.'
    },
    tags: ['React Native', 'Expo', 'ASP.NET Core', 'PostgreSQL', 'TypeScript'],
    status: { pt: 'Projeto de treinamento — completo', en: 'Training project — complete', tone: 'green' },
    link: 'https://github.com/NicolasDamasceno/flanelinha-app'
  },
  {
    id: 'projeto-heimdall',
    name: 'Projeto Heimdall',
    image: 'assets/img/projects/placeholder.svg',
    description: {
      pt: 'Sistema de controle de acesso do IFPI, com identificação por CPF ou matrícula. Projeto em dupla — contribuí com caso de uso, mockups, design de front-end, back-end, banco de dados e relatório.',
      en: 'Access control system for IFPI, identifying people by ID or enrollment number. Built with a partner — I contributed use-case design, mockups, front-end design, back-end, database and report.'
    },
    tags: ['Python', 'Django', 'SQLite'],
    status: { pt: 'Projeto em dupla — Projeto Integrador', en: 'Pair project — capstone', tone: 'blue' },
    link: 'https://github.com/NicolasDamasceno/Projeto-Heimdall'
  },
  {
    id: 'finshark',
    name: 'FinShark',
    image: 'assets/img/projects/placeholder.svg',
    description: {
      pt: 'Aplicação de análise financeira: consulta de ações, balanços e portfólios. Backend completo (autenticação JWT, PostgreSQL); frontend em React ainda em desenvolvimento.',
      en: 'Financial analysis application: stock lookup, balance sheets and portfolios. Backend complete (JWT auth, PostgreSQL); React frontend still in progress.'
    },
    tags: ['.NET', 'C#', 'React', 'TypeScript', 'PostgreSQL'],
    status: { pt: '🚧 Em desenvolvimento — backend concluído', en: '🚧 In progress — backend complete', tone: 'yellow' },
    link: 'https://github.com/NicolasDamasceno/DotNet-Project-Workout'
  }
];

export const certificates = [
  {
    id: 'freecodecamp-js',
    name: 'JavaScript Algorithms and Data Structures',
    image: 'assets/img/certificates/placeholder.svg',
    issuer: 'freeCodeCamp',
    year: null,
    link: null
  }
];
