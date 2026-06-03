# Portfolio Henrique Brandao

Portfolio pessoal de Henrique Brandao, desenvolvedor backend Java em formacao.

O site foi criado com React + Vite e apresenta perfil, projetos, skills, formacao, cursos e contato. Os textos dos projetos foram escritos com base nos READMEs dos repositorios:

- TaskFlow: https://github.com/henrique-Brandao/taskflow
- MagicFridgeAI: https://github.com/henrique-Brandao/MagicFridgeAi

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- lucide-react

## Como rodar localmente

Instale as dependencias:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Gere a build de producao:

```bash
npm run build
```

Visualize a build localmente:

```bash
npm run preview
```

## Estrutura

```text
src/
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Projects.jsx
    Skills.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
  data/
    projects.js
    skills.js
  App.jsx
  main.jsx
  index.css
```

## Pontos para editar

- Detalhar certificados, cargas horarias e links na secao de cursos em `src/components/Education.jsx`.
- Revisar `src/data/projects.js` quando os projetos evoluirem, principalmente tecnologias, deploys e novas funcionalidades.
- Atualizar previews ou screenshots dos projetos quando houver novas telas.
- Para habilitar o botao de curriculo, coloque seu PDF em `public/curriculo-henrique-brandao.pdf`.

## Criar repositorio no GitHub manualmente

Depois de revisar os placeholders:

```bash
git init
git add .
git commit -m "Cria portfolio pessoal"
gh repo create portfolio-henrique-brandao --public --source=. --remote=origin --push
```

Antes de publicar, confirme se o GitHub CLI esta instalado e autenticado:

```bash
gh auth status
```
