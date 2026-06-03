export const projects = [
  {
    name: 'TaskFlow',
    featured: true,
    repo: 'https://github.com/henrique-Brandao/taskflow',
    deploy: 'https://taskflow-henrique.vercel.app/',
    image: '/imagemDashboard.jpg',
    imageAlt: 'Placeholder do dashboard do TaskFlow para substituir por uma captura real',
    summary:
      'Aplicação full-stack de gerenciamento de tarefas com frontend em React, API REST em Spring Boot, autenticação JWT e persistência em PostgreSQL.',
    preview: {
      title: 'TaskFlow',
      subtitle: 'Tarefas pessoais por usuário',
      stats: ['12 tarefas', '7 concluídas', '5 pendentes'],
      rows: ['Estudar Spring Security', 'Revisar migrations Flyway', 'Ajustar integração React/API']
    },
    features: [
      'Cadastro e login de usuários com token JWT assinado com RSA.',
      'CRUD de tarefas vinculado ao usuário autenticado.',
      'Contadores de tarefas totais, concluídas e pendentes.',
      'Validações no backend, migrations com Flyway e documentação Swagger/OpenAPI.',
      'Tema claro/escuro e modo demo no frontend.'
    ],
    technologies: [
      'Java 21',
      'Spring Boot 4',
      'Spring Web MVC',
      'Spring Security',
      'OAuth2 Resource Server',
      'JWT',
      'Spring Data JPA',
      'PostgreSQL',
      'Flyway',
      'React 19',
      'Vite',
      'Axios',
      'Docker'
    ],
    learning:
      'Construí uma API REST em camadas, trabalhei com DTOs, mappers, autenticação stateless, autorização por usuário autenticado, proteção de recursos, tratamento global de exceções, CORS, integração React/API, migrations e primeiros passos com Docker em backend Spring Boot.'
  },
  {
    name: 'MagicFridgeAI',
    wide: true,
    repo: 'https://github.com/henrique-Brandao/MagicFridgeAi',
    status: 'Sem deploy público',
    image: '/imagemMagicFridge.png',
    imageAlt: 'Placeholder da interface do MagicFridgeAI para substituir por uma captura real',
    summary:
      'Projeto com backend Java/Spring Boot para cadastrar ingredientes e gerar sugestão de receita com a API da OpenAI, acompanhado de um frontend demonstrativo.',
    preview: {
      title: 'MagicFridgeAI',
      subtitle: 'Ingredientes e receita em JSON',
      stats: ['PostgreSQL', 'OpenAI', 'Docker Compose'],
      rows: ['Tomate - 3 unidades', 'Arroz - 1 kg', 'Gerar receita']
    },
    features: [
      'Cadastro, listagem, consulta por ID, edição parcial e remoção de ingredientes.',
      'Geração de receita com base nos ingredientes cadastrados.',
      'Persistência em PostgreSQL e versionamento de schema com Flyway.',
      'Validação de entrada com Bean Validation.',
      'Docker Compose para subir banco, backend e frontend demonstrativo.'
    ],
    technologies: [
      'Java 17',
      'Spring Boot 3.5.6',
      'Spring Web',
      'Spring Data JPA',
      'Spring WebFlux/WebClient',
      'Bean Validation',
      'PostgreSQL',
      'Flyway',
      'Maven',
      'Docker',
      'Docker Compose',
      'React 18',
      'Vite',
      'TypeScript',
      'Tailwind CSS'
    ],
    learning:
      'Desenvolvi o backend em camadas, integrei uma API externa com WebClient, modelei DTOs e validações, usei Flyway/PostgreSQL e separei o backend real de um frontend apenas demonstrativo.'
  }
];
