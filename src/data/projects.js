export const projects = [
  {
    name: 'TaskFlow',
    featured: true,
    repo: 'https://github.com/henrique-Brandao/taskflow',
    summary:
      'Aplicação full-stack de gerenciamento de tarefas com frontend em React, API REST em Spring Boot, autenticação JWT e persistência em PostgreSQL.',
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
      'Construí uma API REST em camadas, trabalhei com DTOs, mappers, autenticação stateless, proteção de recursos por usuário, CORS, integração React/API e primeiros passos com Docker em backend Spring Boot.',
    note:
      'O README informa que a parte de Docker pode evoluir com Docker Compose para backend, PostgreSQL e frontend.'
  },
  {
    name: 'Sprint3 API Gestão Escolar',
    repo: 'https://github.com/henrique-Brandao/sprint3-api-gestao-escolar',
    summary:
      'API de gestão escolar desenvolvida como projeto de estudo do curso Ford Enter Backend, com foco em API REST, banco relacional, JWT, camadas e regras de acesso por perfil.',
    features: [
      'Login com email e senha retornando token JWT.',
      'CRUD de alunos, professores, diretores, disciplinas, matrículas, notas e usuários.',
      'Controle de acesso por roles: Admin, Diretor, Professor e Aluno.',
      'Solicitações públicas de acesso para Aluno e Professor, com aprovação ou recusa por Admin/Diretor.',
      'Swagger/OpenAPI em desenvolvimento e testes iniciais com xUnit.'
    ],
    technologies: [
      'C#',
      'ASP.NET Core Web API',
      '.NET 10',
      'Entity Framework Core',
      'MySQL',
      'JWT Bearer Authentication',
      'Swagger/OpenAPI',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'xUnit'
    ],
    learning:
      'Usei o projeto para estudar fundamentos de backend em outra stack e comparar conceitos com Java/Spring Boot, como controllers, services, repositories, DTOs, ORM, migrations, autenticação e autorização.'
  },
  {
    name: 'MagicFridgeAI',
    repo: 'https://github.com/henrique-Brandao/MagicFridgeAi',
    summary:
      'API backend em Java/Spring Boot para cadastrar ingredientes disponíveis na geladeira e gerar sugestão de receita usando a API da OpenAI.',
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
      'Desenvolvi o backend em camadas, integrei uma API externa com WebClient, modelei DTOs e validações, usei Flyway/PostgreSQL e separei o backend real de um frontend apenas demonstrativo.',
    note:
      'O README informa que o projeto não possui autenticação ou autorização implementada.'
  }
];
