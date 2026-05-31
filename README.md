<h1 align="center">
  <img src="public/svg/logo-header.svg" width="400" alt="Pedro Trovo">
</h1>

<p align="center">
<strong>Portfolio pessoal</strong><br>
SPA desenvolvida com React + Vite — tema dark/light — deploy no Vercel
</p>

---

<h2 align="center">Sobre</h2>

Portfolio desenvolvido para apresentar projetos, experiências e habilidades como desenvolvedor backend. A aplicação conta com navegação SPA, tema dinâmico claro/escuro persistido no localStorage e design system próprio com variáveis CSS.

---

<h2 align="center">Páginas</h2>

- <strong>Home</strong> — hero com foto, bio, skills, CTAs e botões de currículo
- <strong>Projetos</strong> — grid de cards com imagem, descrição e tags; clique abre página de detalhe com galeria, funcionalidades, stack e limitações
- <strong>Experiências</strong> — <em>em breve</em>

---

<h2 align="center">Arquitetura</h2>

```
React + Vite (SPA)
     ↓
React Router DOM (Rotas)
     ↓
Componentes → CSS global com design tokens
     ↓
Vercel (Deploy SPA com rewrites)
```

---

<h2 align="center">Tecnologias</h2>

<table align="center">
  <tr>
    <th></th>
    <th>Frontend</th>
    <th>Ícones</th>
    <th>Infra</th>
  </tr>

  <tr>
    <th>Frameworks</th>
    <td>
      <a href="https://react.dev/"><img alt="React" src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black"/></a>
      <a href="https://vitejs.dev/"><img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"/></a>
    </td>
    <td>-</td>
    <td>-</td>
  </tr>

  <tr>
    <th>Dependências</th>
    <td>
      <a href="https://reactrouter.com/"><img alt="React Router" src="https://img.shields.io/badge/react%20router-%23CA4245.svg?style=for-the-badge&logo=reactrouter&logoColor=white"/></a>
    </td>
    <td>
      <a href="https://fontawesome.com/"><img alt="Font Awesome" src="https://img.shields.io/badge/font%20awesome-%23528DD7.svg?style=for-the-badge&logo=fontawesome&logoColor=white"/></a>
    </td>
    <td>-</td>
  </tr>

  <tr>
    <th>Ferramentas</th>
    <td>
      <a href="https://eslint.org/"><img alt="ESLint" src="https://img.shields.io/badge/eslint-%234B32C3.svg?style=for-the-badge&logo=eslint&logoColor=white"/></a>
    </td>
    <td>-</td>
    <td>
      <a href="https://vercel.com/"><img alt="Vercel" src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/></a>
    </td>
  </tr>
</table>

> **Frontend** — Construído com **React 19** + **Vite 8**, utilizando **React Router DOM 7** para navegação SPA. O design system é baseado em **variáveis CSS** com paletas dark e light, sem dependências externas de UI. **Font Awesome** fornece os ícones de redes sociais e ações.
>
> **Infraestrutura** — Deploy contínuo via **Vercel** com regras de rewrite para suporte a rotas SPA. O build otimizado gera assets com hash no filename para cache eficiente.

---

<h2 align="center">Scripts</h2>

```bash
npm run dev       # Iniciar servidor de desenvolvimento (localhost:5173)
npm run build     # Gerar build de produção
npm run preview   # Preview do build localmente
npm run lint      # Verificar lint com ESLint
```

---

<h2 align="center">Estrutura</h2>

```
src/
├── components/     # Componentes reutilizáveis (Header, Footer, ProjectCard, ThemeToggle)
├── data/           # Dados estruturados (projetos)
├── pages/          # Páginas (Home, Projects, ProjectDetail, Experiences)
├── styles/         # Design tokens (palette.css)
├── App.css         # Estilos globais dos componentes
├── App.jsx         # Rotas
└── main.jsx        # Entry point
```

---

<h2 align="center">Deploy</h2>

O projeto está publicado no Vercel com deploy automático a partir da branch `main`.

---

<h2 align="center">Licença</h2>

Este projeto está sob a licença <strong>MIT</strong>.
