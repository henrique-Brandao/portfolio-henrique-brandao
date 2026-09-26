import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      "nav_sobre": "Sobre",
      "nav_projetos": "Projetos",
      "nav_contato": "Contato",
      "nav_cv": "Baixar CV",
      
      "hero_title_1": "Engenheiro de ",
      "hero_title_2": "Software.",
      "hero_subtitle": "Construindo o motor das aplicações. Focado em arquitetura Backend, DevOps e ecossistemas Cloud.",
      "hero_scroll": "Role para explorar",
      
      "about_eyebrow": "Sobre mim",
      "about_title": "Desenvolvimento orientado a valor.",
      "about_base_title": "A Base Técnica",
      "about_base_p1": "Sou estudante do curso técnico em Desenvolvimento de Sistemas no SENAI CIMATEC e graduando em Engenharia de Software pela Cruzeiro do Sul. Venho direcionando meus estudos para a construção de sistemas, infraestrutura em nuvem e automação.",
      "about_base_p2": "Gosto de entender como as coisas funcionam por baixo dos panos, unindo o desenvolvimento do código com as práticas necessárias para colocar e manter as aplicações rodando de forma estável.",
      "about_focus_title": "Foco de Estudos",
      "about_focus_p": "Atualmente explorando o ecossistema Cloud e infraestrutura ágil. Focado em aprender arquitetura Serverless e realizar os deploys direto na nuvem (AWS).",
      "about_exp_title": "Experiência Prática",
      "about_exp_p": "Atuei como Analista de QA (Estagiário) na TicTag, executando testes funcionais e de regressão. Essa vivência me deu uma base forte sobre como identificar bugs e garantir a estabilidade das aplicações em colaboração com o time de desenvolvimento.",
      "about_stack_title": "Stack Principal",
      
      "projects_eyebrow": "Projetos",
      "projects_title": "Algumas das minhas criações",
      "projects_featured": "Projeto Destaque",
      "projects_learning": "O que eu aprendi:",
      "projects_view_code": "Ver Código",
      "projects_view_live": "Ver Projeto",
      
      "contact_eyebrow": "Contato",
      "contact_title": "Pronto para o próximo passo.",
      "contact_p": "Estou ativamente buscando oportunidades como Engenheiro de Software Júnior ou Estágio. Sinta-se à vontade para me chamar no LinkedIn ou enviar um e-mail, seja para falar sobre vagas, trocar uma ideia técnica ou apenas compartilhar experiências.",
      
      "footer_copy": "© {{year}} Henrique Brandão.",
      
      "proj_magic_summary": "Uma API REST 100% Serverless para gerenciamento de geladeira que se conecta à API da OpenAI para sugerir receitas baseadas nos ingredientes disponíveis.",
      "proj_magic_learning": "Este projeto me ensinou a projetar infraestrutura em Cloud do zero, lidando com o ecossistema Serverless (FastAPI + Lambda) e escrevendo pipelines automatizadas de deploy.",
      "proj_task_summary": "Aplicação full-stack de gerenciamento de tarefas com foco extremo em boas práticas de backend: arquitetura em camadas, autenticação JWT robusta e Docker.",
      "proj_task_learning": "Consolidei conhecimentos profundos de Spring Security e arquitetura de software, entendendo na prática como proteger rotas e otimizar uma API para ambientes containerizados."
    }
  },
  en: {
    translation: {
      "nav_sobre": "About",
      "nav_projetos": "Projects",
      "nav_contato": "Contact",
      "nav_cv": "Resume",
      
      "hero_title_1": "Software ",
      "hero_title_2": "Engineer.",
      "hero_subtitle": "Building the engine of applications. Focused on Backend architecture, DevOps, and Cloud ecosystems.",
      "hero_scroll": "Scroll to explore",
      
      "about_eyebrow": "About me",
      "about_title": "Value-driven development.",
      "about_base_title": "The Technical Base",
      "about_base_p1": "I am a Systems Development student at SENAI CIMATEC and pursuing a Software Engineering degree at Cruzeiro do Sul. I am directing my studies towards building systems, cloud infrastructure, and automation.",
      "about_base_p2": "I like to understand how things work under the hood, bridging software development with the practices needed to deploy and keep applications running stably.",
      "about_focus_title": "Study Focus",
      "about_focus_p": "Currently exploring the Cloud ecosystem and agile infrastructure. Focused on learning Serverless architecture and deploying directly to the cloud (AWS).",
      "about_exp_title": "Hands-on Experience",
      "about_exp_p": "Worked as a QA Analyst (Intern) at TicTag, executing functional and regression tests. This gave me a strong foundation on identifying bugs and ensuring application stability alongside the dev team.",
      "about_stack_title": "Main Stack",
      
      "projects_eyebrow": "Projects",
      "projects_title": "Some of my creations",
      "projects_featured": "Featured Project",
      "projects_learning": "What I learned:",
      "projects_view_code": "Code",
      "projects_view_live": "Live App",
      
      "contact_eyebrow": "Contact",
      "contact_title": "Ready for the next step.",
      "contact_p": "I am actively looking for Junior Software Engineer or Internship opportunities. Feel free to reach out on LinkedIn or via email, whether to talk about roles, exchange technical ideas, or just share experiences.",
      
      "footer_copy": "© {{year}} Henrique Brandão.",
      
      "proj_magic_summary": "A 100% Serverless REST API for fridge management that connects to the OpenAI API to suggest recipes based on available ingredients.",
      "proj_magic_learning": "This project taught me how to design Cloud infrastructure from scratch, dealing with the Serverless ecosystem (FastAPI + Lambda) and writing automated deployment pipelines.",
      "proj_task_summary": "Full-stack task management application with extreme focus on backend best practices: layered architecture, robust JWT authentication, and Docker.",
      "proj_task_learning": "Consolidated deep knowledge of Spring Security and software architecture, practically understanding how to secure routes and optimize an API for containerized environments."
    }
  },
  it: {
    translation: {
      "nav_sobre": "Chi Sono",
      "nav_projetos": "Progetti",
      "nav_contato": "Contatti",
      "nav_cv": "Scarica CV",
      
      "hero_title_1": "Ingegnere del ",
      "hero_title_2": "Software.",
      "hero_subtitle": "Costruisco il motore delle applicazioni. Focalizzato sull'architettura Backend, DevOps e gli ecosistemi Cloud.",
      "hero_scroll": "Scorri per esplorare",
      
      "about_eyebrow": "Chi Sono",
      "about_title": "Sviluppo orientato al valore.",
      "about_base_title": "La Base Tecnica",
      "about_base_p1": "Sono uno studente di Sviluppo Sistemi al SENAI CIMATEC e sto conseguendo una laurea in Ingegneria del Software presso Cruzeiro do Sul. Sto indirizzando i miei studi verso la creazione di sistemi, l'infrastruttura cloud e l'automazione.",
      "about_base_p2": "Mi piace capire come funzionano le cose sotto il cofano, unendo lo sviluppo del codice con le pratiche necessarie per implementare e mantenere stabili le applicazioni.",
      "about_focus_title": "Focus di Studio",
      "about_focus_p": "Attualmente esploro l'ecosistema Cloud e l'infrastruttura agile. Focalizzato sull'apprendimento dell'architettura Serverless e sul rilascio direttamente sul cloud (AWS).",
      "about_exp_title": "Esperienza Pratica",
      "about_exp_p": "Ho lavorato come Analista QA (Tirocinante) presso TicTag, eseguendo test funzionali e di regressione. Questo mi ha dato una solida base per identificare bug e garantire la stabilità delle applicazioni insieme al team di sviluppo.",
      "about_stack_title": "Stack Principale",
      
      "projects_eyebrow": "Progetti",
      "projects_title": "Alcune delle mie creazioni",
      "projects_featured": "Progetto in Evidenza",
      "projects_learning": "Cosa ho imparato:",
      "projects_view_code": "Codice",
      "projects_view_live": "Progetto Live",
      
      "contact_eyebrow": "Contatti",
      "contact_title": "Pronto per il prossimo passo.",
      "contact_p": "Sto cercando attivamente opportunità come Ingegnere del Software Junior o Stage. Sentiti libero di contattarmi su LinkedIn o via email, per parlare di lavoro, scambiare idee tecniche o semplicemente condividere esperienze.",
      
      "footer_copy": "© {{year}} Henrique Brandão.",
      
      "proj_magic_summary": "Un'API REST Serverless al 100% per la gestione del frigorifero che si collega all'API OpenAI per suggerire ricette basate sugli ingredienti disponibili.",
      "proj_magic_learning": "Questo progetto mi ha insegnato a progettare l'infrastruttura Cloud da zero, affrontando l'ecosistema Serverless (FastAPI + Lambda) e scrivendo pipeline di rilascio automatizzate.",
      "proj_task_summary": "Applicazione full-stack per la gestione delle attività con focus estremo sulle migliori pratiche di backend: architettura a livelli, robusta autenticazione JWT e Docker.",
      "proj_task_learning": "Ho consolidato profonde conoscenze di Spring Security e architettura software, capendo praticamente come proteggere le rotte e ottimizzare un'API per ambienti containerizzati."
    }
  }
};

const userLang = navigator.language || navigator.userLanguage;
const defaultLang = userLang.startsWith('it') ? 'it' : (userLang.startsWith('pt') ? 'pt' : 'en');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLang, 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
