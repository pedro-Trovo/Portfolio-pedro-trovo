export const projects = [
  {
    slug: 'morslum',
    title: 'MORSLUM',
    subtitle: 'MORphoSyntaxis LaboratoriUM',
    description:
      'Plataforma interativa de análise morfossintática da língua portuguesa utilizando NLP.',
    image: '/images/projects/morslum.png',
    images: [
      '/images/projects/morslum.png',
      '/images/projects/morslum-quiz.png',
      '/images/projects/morslum-quiz-acerto.png',
      '/images/projects/morslum-quiz-erro.png',
      '/images/projects/morslum-analise.png',
      '/images/projects/morslum-arvore.png',
      '/images/projects/morslum-estatisticas.png',
    ],
    tags: ['Python', 'Flask', 'React', 'spaCy', 'Docker', 'Electron'],
    techStack: [
      { category: 'Frontend', items: ['React', 'Vite', 'PrimeReact'] },
      { category: 'Backend', items: ['Python', 'Flask', 'spaCy'] },
      { category: 'DevOps', items: ['Docker', 'Docker Compose'] },
      { category: 'Desktop', items: ['Electron'] },
    ],
    features: [
      'Analisador morfossintático que classifica cada palavra da frase em sua classe gramatical (substantivo, verbo, adjetivo, advérbio, etc.)',
      'Geração de árvore de dependências sintáticas em SVG para visualizar as relações entre os termos da oração',
      'Quiz educativo com questões geradas automaticamente a partir de um banco de 500 frases do português brasileiro',
      'Aplicativo desktop com Electron que empacota o backend Python + frontend em um único instalador (NSIS)',
      'Estatísticas detalhadas da análise, incluindo contagem de classes gramaticais e métricas do texto',
      'Infraestrutura completa com Docker Compose (Redis + API Flask + Frontend Nginx) para deploy simplificado',
    ],
    about:
      'O MORSLUM é uma plataforma acadêmica desenvolvida como projeto de Iniciação Científica na FATEC Ipiranga, com o objetivo de tornar o aprendizado de análise morfossintática da língua portuguesa mais interativo e acessível. Utilizando processamento de linguagem natural (NLP) com o modelo pt_core_news_sm do spaCy, a plataforma é capaz de classificar gramaticalmente cada palavra de uma frase e gerar visualizações de árvores de dependência sintática, facilitando a compreensão das relações entre os termos da oração.  Além do analisador, o sistema conta com um quiz educativo que gera automaticamente questões a partir de um banco de 500 frases do português brasileiro, desafiando o usuário a identificar classes gramaticais em diferentes contextos. O projeto foi desenvolvido ao longo de 11 meses, abrangendo desde a revisão teórica de gramática e NLP até a implementação, testes e empacotamento desktop.',
    architecture:
      'A aplicação segue uma arquitetura de três camadas: o frontend em React com PrimeReact consome uma API REST desenvolvida em Flask, que por sua vez utiliza o spaCy para o pipeline de processamento linguístico. Um banco Redis é utilizado para cache de análises frequentes. Toda a infraestrutura pode ser orquestrada com Docker Compose (Redis + Backend + Frontend servido por Nginx). Para distribuição desktop, o Electron empacota o frontend compilado juntamente com um runtime portátil do Python 3.12 que contém o Flask, spaCy e todas as dependências necessárias — eliminando a necessidade de instalação manual de Python ou pacotes pelo usuário final.',
    limitations: [
      'O modelo pt_core_news_sm do spaCy não reconhece contrações como "da", "do" e "na" como combinações de preposição + artigo — tratando-as apenas como preposições simples',
      'O modelo pode confundir adjetivos com particípios passados em certos contextos (ex: "lindo" vs "encontrado")',
      'A acurácia é reduzida em comparação com modelos maiores (pt_core_news_lg ou transformer), porém o modelo pequeno foi escolhido intencionalmente para viabilizar o empacotamento desktop com Python embutido (~50MB vs ~500MB)',
      'A análise sintática depende da qualidade da segmentação de frases — textos mal pontuados podem gerar árvores incorretas',
    ],
    links: {
      github: 'https://github.com/pedro-Trovo/MORSLUM',
      site: 'https://morslum.vercel.app',
      doi: 'https://doi.org/10.5281/zenodo.18944100',
    },
    context: 'Projeto de Iniciação Científica — FATEC Ipiranga (2025-2026)',
  },
]
