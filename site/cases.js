/* =========================================================================
   cases.js — textos e imagens dos cases.
   FONTE ÚNICA: usada pelo site (site/script.js) e pelo PDF (pdf/portfolio.html).
   Escreva o texto aqui uma vez. Estrutura fixa: contexto, desafio, o que fiz (3), entregas.
   ========================================================================= */

/* ---------- 1. CASES ----------
   Estrutura fixa: contexto, desafio, o que fiz (3 itens), entregas.
   Nenhum número foi inventado: onde não há métrica, descrevemos a entrega. */
const CASES = [
  {
    numero: "01",
    titulo: { pt: "Clube Gringas", en: "Clube Gringas" },
    disciplina: { pt: "Identidade Visual", en: "Visual Identity" },
    capa: "assets/i/clube-gringas-p01.jpg",
    galeria: [
      { tipo: "imagem", src: "assets/i/clube-gringas-p01.jpg", alt: { pt: "Capa do manual de identidade do Clube Gringas", en: "Cover of the Clube Gringas identity manual" } },
      { tipo: "imagem", src: "assets/i/clube-gringas-p06.jpg", alt: { pt: "Direção visual do Clube Gringas", en: "Clube Gringas visual direction" } },
      { tipo: "imagem", src: "assets/i/clube-gringas-p07.jpg", alt: { pt: "Paleta de cores do Clube Gringas", en: "Clube Gringas colour palette" } },
      { tipo: "imagem", src: "assets/i/clube-gringas-p08.jpg", alt: { pt: "Tipografia do Clube Gringas", en: "Clube Gringas typography" } },
      { tipo: "imagem", src: "assets/i/clube-gringas-p09.jpg", alt: { pt: "Logomarca do Clube Gringas", en: "Clube Gringas logo" } },
      { tipo: "imagem", src: "assets/i/clube-gringas-p10.jpg", alt: { pt: "Sistema gráfico do Clube Gringas", en: "Clube Gringas graphic system" } }
    ],
    contexto: {
      pt: "O Clube Gringas é uma comunidade de desenvolvimento pessoal e profissional para mulheres brasileiras, especialmente as que vivem fora do Brasil.",
      en: "Clube Gringas is a personal and professional development community for Brazilian women, especially those living outside Brazil."
    },
    desafio: {
      pt: "Traduzir em identidade visual a essência da marca: acolhimento, sofisticação e leveza.",
      en: "Turn the brand's essence (warmth, sophistication and lightness) into a visual identity."
    },
    fiz: {
      pt: [
        "Diagnostiquei o público e a persona “A Gringa” para orientar cada escolha visual.",
        "Defini a essência, a direção visual, uma paleta de cinco cores e duas tipografias.",
        "Desenvolvi a logomarca e o sistema gráfico, com elementos de movimento e organização."
      ],
      en: [
        "Diagnosed the audience and the “A Gringa” persona to guide every visual choice.",
        "Defined the essence, the visual direction, a five-colour palette and two typefaces.",
        "Developed the logo and the graphic system, with elements of movement and organisation."
      ]
    },
    entregas: {
      pt: "Manual de identidade visual de 10 páginas: diagnóstico, essência, público-alvo, direção visual, paleta, tipografia, logomarca e sistema gráfico.",
      en: "10-page visual identity manual: diagnosis, essence, target audience, visual direction, palette, typography, logo and graphic system."
    }
  },
  {
    numero: "02",
    titulo: { pt: "Central Acadêmica OS", en: "Central Acadêmica OS" },
    disciplina: { pt: "Design de Produto", en: "Product Design" },
    capa: "assets/i/central-p09.jpg",
    video: { src: "assets/video/app.mp4", poster: "assets/i/app-poster.jpg" },
    galeria: [
      { tipo: "imagem", src: "assets/i/central-p09.jpg", alt: { pt: "Componentes da Central Acadêmica OS", en: "Central Acadêmica OS components" } },
      { tipo: "imagem", src: "assets/i/central-p12.jpg", alt: { pt: "Interface da Central Acadêmica OS", en: "Central Acadêmica OS interface" } },
      { tipo: "imagem", src: "assets/i/central-p17.jpg", alt: { pt: "Telas da Central Acadêmica OS", en: "Central Acadêmica OS screens" } },
      { tipo: "imagem", src: "assets/i/central-p20.jpg", alt: { pt: "Hierarquia visual da Central Acadêmica OS", en: "Central Acadêmica OS visual hierarchy" } }
    ],
    contexto: {
      pt: "Um sistema de estudos em Python e SQLite, com inteligência artificial e automações, precisava de uma interface clara para acompanhar o progresso dia a dia.",
      en: "A study system built in Python and SQLite, with artificial intelligence and automations, needed a clear interface to track daily progress."
    },
    desafio: {
      pt: "Organizar muitos dados (cursos, módulos e sessões) em telas fáceis de ler e de operar, também no tablet.",
      en: "Organise a lot of data (courses, modules and sessions) into screens that are easy to read and use, including on a tablet."
    },
    fiz: {
      pt: [
        "Organizei a hierarquia de títulos, textos e indicadores de cada aba do sistema.",
        "Criei a biblioteca de componentes (cards, botões, etiquetas e campos) com regras de estado.",
        "Especifiquei como a interface reage a carregamento, sucesso e erro, incluindo o registro com IA."
      ],
      en: [
        "Organised the hierarchy of titles, text and indicators on every tab of the system.",
        "Built the component library (cards, buttons, tags and fields) with clear state rules.",
        "Specified how the interface responds to loading, success and error, including AI-assisted logging."
      ]
    },
    entregas: {
      pt: "Manual de design de 29 páginas com blueprint, interfaces por aba, comportamento do sistema e componentes.",
      en: "29-page design manual with blueprint, interfaces for each tab, system behaviour and components."
    }
  },
  {
    numero: "03",
    titulo: { pt: "The Client Flow OS", en: "The Client Flow OS" },
    disciplina: { pt: "Infoproduto", en: "Digital Product" },
    capa: "assets/i/clientflow-poster.jpg",
    video: { src: "assets/video/clientflow.mp4", poster: "assets/i/clientflow-poster.jpg" },
    galeria: [],
    contexto: {
      pt: "Um infoproduto para freelancers: um centro de comando em Notion para organizar clientes, projetos e receitas.",
      en: "A digital product for freelancers: a Notion command centre to organise clients, projects and revenue."
    },
    desafio: {
      pt: "Explicar o benefício do produto em poucos segundos, para quem decide comprar em um clique.",
      en: "Explain the product's benefit in a few seconds, to someone deciding to buy in one click."
    },
    fiz: {
      pt: [
        "Planejei o lançamento do produto na plataforma Gumroad.",
        "Estruturei a landing page com proposta de valor clara e chamada para ação.",
        "Organizei a apresentação visual do produto em tons escuros e tipografia de impacto."
      ],
      en: [
        "Planned the product launch on Gumroad.",
        "Structured the landing page with a clear value proposition and call to action.",
        "Organised the product's visual presentation with dark tones and high-impact typography."
      ]
    },
    entregas: {
      pt: "Landing page de venda + lançamento do produto na Gumroad.",
      en: "Sales landing page + product launch on Gumroad."
    }
  },
  {
    numero: "04",
    titulo: { pt: "Jãozine", en: "Jãozine" },
    disciplina: { pt: "Editorial", en: "Editorial" },
    capa: "assets/i/jaozine-1.jpg",
    galeria: [
      { tipo: "imagem", src: "assets/i/jaozine-1.jpg", alt: { pt: "Página 1 do Jãozine", en: "Jãozine page 1" } },
      { tipo: "imagem", src: "assets/i/jaozine-2.jpg", alt: { pt: "Página 2 do Jãozine", en: "Jãozine page 2" } },
      { tipo: "imagem", src: "assets/i/jaozine-3.jpg", alt: { pt: "Página 3 do Jãozine", en: "Jãozine page 3" } }
    ],
    contexto: {
      pt: "Série editorial “Descascando o álbum”, em formato de revista, com páginas dedicadas a discos.",
      en: "“Descascando o álbum” (Peeling the album), an editorial series in magazine format with pages dedicated to music albums."
    },
    desafio: {
      pt: "Dar a cada página cara de revista impressa, com hierarquia de títulos, colunas de leitura e imagens fortes.",
      en: "Give every page the feel of a printed magazine, with clear headline hierarchy, reading columns and strong images."
    },
    fiz: {
      pt: [
        "Diagramei as páginas com títulos de destaque e colunas de leitura.",
        "Organizei as fotos em grade, com legendas e pequenos destaques de cor.",
        "Mantive a série coesa com a mesma tipografia e a mesma lógica de página."
      ],
      en: [
        "Laid out the pages with bold headlines and reading columns.",
        "Arranged the photos in a grid, with captions and small colour accents.",
        "Kept the series consistent with the same typography and page logic."
      ]
    },
    entregas: {
      pt: "3 páginas de editorial em formato de revista.",
      en: "3 editorial magazine pages."
    }
  },
  {
    numero: "05",
    titulo: { pt: "Arcana Pessoal", en: "Arcana Pessoal" },
    disciplina: { pt: "Design de App", en: "App Design" },
    capa: "assets/i/arcana-hoje.jpg",
    galeria: [
      { tipo: "imagem", src: "assets/i/arcana-hoje.jpg", alt: { pt: "Tela Hoje do Arcana Pessoal, com hábitos do dia", en: "Today screen of Arcana Pessoal, with the day's habits" } },
      { tipo: "imagem", src: "assets/i/arcana-metas.jpg", alt: { pt: "Tela de metas do Arcana Pessoal, com formulário SMART", en: "Goals screen of Arcana Pessoal, with the SMART form" } },
      { tipo: "imagem", src: "assets/i/arcana-roda.jpg", alt: { pt: "Roda da Vida do Arcana Pessoal", en: "Wheel of Life in Arcana Pessoal" } }
    ],
    contexto: {
      pt: "Aplicativo pessoal para organizar hábitos, metas e o equilíbrio entre as áreas da vida, em uma só rotina.",
      en: "A personal app to organise habits, goals and the balance between life areas in one routine."
    },
    desafio: {
      pt: "Transformar hábitos e metas, que costumam ser abstratos, em telas simples de acompanhar no celular.",
      en: "Turn habits and goals, which tend to be abstract, into simple screens to follow on a phone."
    },
    fiz: {
      pt: [
        "Organizei a tela Hoje, com os hábitos do dia, o modo dia difícil e as versões micro dos hábitos.",
        "Estruturei o formulário de metas no método SMART, com um campo para cada critério.",
        "Desenhei a Roda da Vida, com a média por área e a evolução ao longo do tempo."
      ],
      en: [
        "Organised the Today screen, with the day's habits, a hard-day mode and micro versions of habits.",
        "Structured the goal form on the SMART method, with one field for each criterion.",
        "Designed the Wheel of Life, with the average per area and its evolution over time."
      ]
    },
    entregas: {
      pt: "Telas de hábitos, metas SMART e Roda da Vida para celular, em layout de aplicativo.",
      en: "Habit, SMART goal and Wheel of Life screens for mobile, in app layout."
    }
  },
  {
    numero: "06",
    titulo: { pt: "Peças gráficas", en: "Graphic pieces" },
    disciplina: { pt: "Design Gráfico", en: "Graphic Design" },
    capa: "assets/i/pecas-25-raquel.jpg",
    galeria: [
      { tipo: "imagem", src: "assets/i/pecas-25-raquel.jpg", alt: { pt: "Convite do meu aniversário, criado por mim", en: "Invitation to my birthday, made by me" } },
      { tipo: "imagem", src: "assets/i/pecas-pausa.jpg", alt: { pt: "Série “pausa.”", en: "“pausa.” series" } }
    ],
    contexto: {
      pt: "Peças gráficas criadas por mim, incluindo o convite do meu aniversário e a série “pausa.” para redes sociais.",
      en: "Graphic pieces created by me, including the invitation to my birthday and the “pausa.” social media series."
    },
    desafio: {
      pt: "Chamar atenção em poucos segundos no feed, com identidade própria em cada peça.",
      en: "Stop the scroll in seconds on the feed, with a distinct identity in each piece."
    },
    fiz: {
      pt: [
        "Criei o convite do meu aniversário, com tipografia de destaque e data em evidência.",
        "Desenvolvi a série “pausa.”, com textos curtos e ilustrações para reflexão.",
        "Adaptei as peças para o formato vertical das redes sociais."
      ],
      en: [
        "Created the invitation to my birthday, with bold typography and a highlighted date.",
        "Developed the “pausa.” series, with short texts and illustrations for reflection.",
        "Adapted the pieces to the vertical format of social media."
      ]
    },
    entregas: {
      pt: "Convite digital do meu aniversário, criado por mim, e a série de peças “pausa.” para redes sociais.",
      en: "Digital invitation to my birthday, made by me, and the “pausa.” series of social media pieces."
    }
  },
  {
    numero: "07",
    titulo: { pt: "Central Financeira", en: "Central Financeira" },
    disciplina: { pt: "Design de App", en: "App Design" },
    capa: "assets/i/financeira-lancamentos.jpg",
    galeria: [
      { tipo: "imagem", src: "assets/i/financeira-lancamentos.jpg", alt: { pt: "Tela de lançamentos da Central Financeira, com entradas e saídas", en: "Transactions screen of Central Financeira, with income and expenses" } },
      { tipo: "imagem", src: "assets/i/financeira-metas.jpg", alt: { pt: "Tela de metas da Central Financeira", en: "Goals screen of Central Financeira" } },
      { tipo: "imagem", src: "assets/i/financeira-agenda.jpg", alt: { pt: "Calendário de vencimentos da Central Financeira", en: "Due-date calendar of Central Financeira" } },
      { tipo: "imagem", src: "assets/i/financeira-menu.jpg", alt: { pt: "Menu da Central Financeira, com orçamento, contas e gastos fixos", en: "Menu of Central Financeira, with budget, accounts and fixed expenses" } }
    ],
    contexto: {
      pt: "Aplicativo para acompanhar entradas, saídas, metas de economia e vencimentos em um só lugar.",
      en: "An app to follow income, expenses, savings goals and due dates in one place."
    },
    desafio: {
      pt: "Organizar entradas, saídas e vencimentos em telas que se leem de relance, no celular.",
      en: "Organise income, expenses and due dates into screens that can be read at a glance, on a phone."
    },
    fiz: {
      pt: [
        "Organizei a tela de lançamentos, com o saldo do mês e filtros por tipo, categoria e conta.",
        "Desenhei as metas de economia, com o valor a guardar por mês para cumprir o prazo.",
        "Estruturei o calendário de vencimentos, recebimentos e faturas, com marcações por cor."
      ],
      en: [
        "Organised the transactions screen, with the month's balance and filters by type, category and account.",
        "Designed the savings goals, with the amount to set aside each month to meet the deadline.",
        "Structured the calendar of due dates, incomes and invoices, with colour-coded markers."
      ]
    },
    entregas: {
      pt: "Telas de início, lançamentos, metas, calendário e menu, em layout de aplicativo para celular.",
      en: "Home, transactions, goals, calendar and menu screens, in app layout for mobile."
    }
  }
];
