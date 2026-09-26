export const projects = [
  {
    name: 'MagicFridge AI',
    featured: true,
    repo: 'https://github.com/henrique-Brandao/MagicFridgeAi',
    deploy: 'https://magicfridge.vercel.app/',
    image: '/imagemMagicFridge.png',
    imageAlt: 'Interface do MagicFridge AI',
    summary:
      'Uma API REST 100% Serverless para gerenciamento de geladeira que se conecta à API da OpenAI para sugerir receitas baseadas nos ingredientes disponíveis.',
    preview: {
      title: 'MagicFridge AI',
      subtitle: 'Receitas inteligentes (AWS + AI)',
      stats: ['Python/FastAPI', 'OpenAI', 'DynamoDB'],
      rows: ['Input: Ingredientes locais', 'Flat Architecture', 'Output: Receita gerada via IA']
    },
    features: [
      'Integração nativa com a API da OpenAI para geração inteligente de receitas.',
      'Arquitetura Flat focada no padrão AWS Lambda, mantendo o código simples e focado no domínio.',
      'Pipeline completo de CI/CD automatizado via GitHub Actions para deploy direto na AWS.',
      'Banco de dados NoSQL (Amazon DynamoDB) escalável.'
    ],
    technologies: [
      'Python 3.11',
      'FastAPI',
      'AWS Lambda',
      'Serverless Framework',
      'Amazon DynamoDB',
      'OpenAI API',
      'Docker',
      'GitHub Actions'
    ],
    learning:
      'Este projeto me ensinou a projetar infraestrutura em Cloud do zero, lidando com o ecossistema Serverless (FastAPI + Lambda) e escrevendo pipelines automatizadas de deploy.'
  },
  {
    name: 'TaskFlow',
    featured: false,
    repo: 'https://github.com/henrique-Brandao/taskflow',
    deploy: '#', // TODO: Update com o link real
    image: '/imagemDashboard.jpg',
    imageAlt: 'Interface do TaskFlow',
    summary:
      'Aplicação full-stack de gerenciamento de tarefas com foco extremo em boas práticas de backend: arquitetura em camadas, autenticação JWT robusta e Docker.',
    preview: {
      title: 'TaskFlow',
      subtitle: 'Gerenciador Pessoal',
      stats: ['Java 21', 'Spring Boot', 'React 19'],
      rows: ['JWT (RSA Keys)', 'Migrations via Flyway', 'Multi-stage Docker']
    },
    features: [
      'Separação estrita em camadas (Controller, Service, Repository, DTOs).',
      'Autenticação stateless com JWT usando criptografia assimétrica (chaves públicas/privadas RSA).',
      'Controle rigoroso de autorização (usuários só acessam/alteram as próprias tarefas).',
      'Migrations de banco versionadas com Flyway e validações com Jakarta Validation.',
      'Dockerfile Multi-stage para otimização de imagem da API.'
    ],
    technologies: [
      'Java 21',
      'Spring Boot',
      'Spring Security (OAuth2)',
      'PostgreSQL',
      'Flyway',
      'React 19',
      'Docker'
    ],
    learning:
      'Consolidei conhecimentos profundos de Spring Security e arquitetura de software, entendendo na prática como proteger rotas e otimizar uma API para ambientes containerizados.'
  }
];
