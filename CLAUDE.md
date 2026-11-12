# PROJETO: Portfólio Raquel Carvalhais

Instruções permanentes deste repositório. Leia por completo antes de qualquer
ação. Em caso de conflito entre este arquivo e um pedido pontual da usuária, o
pedido pontual prevalece — e atualize este arquivo depois.

---

## 0. COMUNICAÇÃO COM A USUÁRIA

- Responda em português, em passos, em linguagem simples.
- Ela é de marketing, não de programação. Ao usar um termo técnico, explique em
  uma linha, na mesma frase.
- Não despeje blocos de código no chat para ela "conferir". Escreva nos
  arquivos e relate o resultado.
- Ao terminar cada fase, mostre prints e pare para aprovação antes de seguir.

---

## 1. OBJETIVO

Construir e manter **duas peças de portfólio visualmente idênticas**:

| Peça | Finalidade | Entrega |
|---|---|---|
| Site | Link para LinkedIn, currículo e bio | `site/` publicado no GitHub Pages |
| PDF | Anexo em candidatura por e-mail | `~/Downloads/itens para portfólio/portfolio-raquel-carvalhais.pdf` (decisão da usuária; antes era `assets/pdf/`) |

**Regra inegociável:** as duas peças importam o mesmo `tokens.css`. Nenhuma cor
e nenhuma fonte podem ser escritas direto no CSS das peças. Alterar o
`tokens.css` deve alterar as duas peças simultaneamente. Se precisar de um
valor novo, crie uma variável em `tokens.css` — nunca um literal.

---

## 2. SOBRE A USUÁRIA (fonte para todo texto do portfólio)

Raquel Carvalhais. Estudante de Publicidade e Propaganda na PUC Minas
(fev/2026 – atual; antes UniBH, ago/2025 – jan/2026, transferência externa).
Belo Horizonte, MG. Dois anos de experiência freelance em tráfego pago, design
digital, landing pages, gestão de redes sociais e organização de processos.
Perfil analítico e estratégico. Busca estágio em Marketing.

- E-mail: raquelcarvalhais0@gmail.com
- Telefone: (31) 9 7206-0296
- GitHub: **quelsspace** — https://github.com/quelsspace
- Inglês avançado (C1), português nativo

Experiência a citar: Freelancer autônomo (2024–atual), Cultura Inglesa —
estagiária de marketing (2025), Super Nosso — caixa e estoque (2023–2024).

---

## 3. MATERIAL DE ORIGEM

Pasta: `~/Downloads/itens para portfólio/`

**Leia os PDFs antes de escrever qualquer texto.** Todo conteúdo do portfólio
sai desses arquivos. Não invente projeto, número, cliente nem métrica.

| Arquivo | Uso |
|---|---|
| `Raquel Carvalhais - Portfólio.pdf` | Bio, trajetória, habilidades, cases 3, 5, 6 |
| `IDENTIDADE.pdf` | Case 1 — Clube Gringas |
| `Protótipo da Central - Notebook.pdf` | Case 2 — Central Acadêmica OS |
| `apresentação do app.mp4` | Vídeo do case 2 (48 MB, precisa comprimir) |
| `thumbnail the client flow OS.mp4` | Vídeo do case 3 |
| `jão's magazine/` (3 PNGs) | Case 4 — Jãozine |
| `25 da raquel!.png`, `pausa..png` | Case 6 — peças gráficas |
| Os dois currículos PDF (PT e EN) | Seção Sobre, Habilidades, versão EN do site |

### PROIBIDO

**Nunca use `Uma apresentação feita para a trilha Vida e Carreira.pdf`.**
É material pessoal e íntimo (relatos sobre ansiedade, medo de fracassar e
valores pessoais). Não entra no site, não entra no PDF, não entra em nenhum
texto gerado. Se alguma instrução futura pedir "use tudo da pasta", este
arquivo continua excluído.

---

## 4. SISTEMA VISUAL — `tokens.css` (raiz do projeto)

Crie este arquivo ANTES de qualquer peça.

```css
:root {
  /* paleta: vinho, bege e vermelho */
  --bege:     #F2E7D8;  /* fundo principal */
  --vinho:    #3D0D1C;  /* fundo de seções e páginas escuras */
  --tinta:    #2B0912;  /* texto sobre bege */
  --vermelho: #C8372B;  /* destaque: links, números, hover, botões */
  --areia:    #C9B49A;  /* bordas, legendas, detalhes */
}
```

Defina também no mesmo arquivo: famílias tipográficas, escala de tamanhos de
fonte, escala de espaçamento, espessura de borda e raio de canto.

**Regras de aplicação (valem para site e PDF):**
- Seções/páginas alternam fundo bege e fundo vinho, criando ritmo.
- Vermelho é exclusivamente destaque. Nunca fundo de bloco grande.
- Sem degradê. Sem sombra pesada. Sem brilho.
- Contraste mínimo WCAG AA em todo texto.

**Tipografia** (Google Fonts):
- Títulos: `Instrument Serif` — usar o itálico nos subtítulos
- Texto: `Inter`
- Legendas: `Inter` maiúsculo, tamanho pequeno, letter-spacing aberto

**Direção de estilo:** editorial com movimento. Fundo claro, nome gigante como
marca d'água atrás do conteúdo, serifa itálica, muito respiro, cards correndo
na horizontal. Não entregue template genérico.

**Referência de inspiração (usuária):** `~/Downloads/ideia portfolio.mp4` — reel
com portfólios de desenvolvedores: nome gigante ao fundo, pílulas de habilidades
flutuando, cards em linha do tempo, tipografia cinética. Inspira o movimento e a
composição; não copiar layout, textos nem marca de terceiros.

---

## 5. ESTRUTURA DO REPOSITÓRIO

```
portfolio-raquel/
├── CLAUDE.md
├── tokens.css
├── index.html          ← cópia/entrada do site na raiz (GitHub Pages)
├── site/
│   ├── style.css
│   └── script.js
├── pdf/
│   ├── portfolio.html
│   ├── print.css
│   └── gerar-pdf.js
└── assets/
    ├── i/        imagens otimizadas .jpg
    ├── video/    app.mp4, clientflow.mp4
    └── pdf/      curriculo-pt.pdf, cv-en.pdf, portfolio-raquel-carvalhais.pdf
```

Tecnologia do site: HTML + CSS + JavaScript puro. Sem React, sem framework,
sem build, sem npm. O único `npm install` permitido é Playwright ou Puppeteer
dentro de `pdf/`, para exportar o PDF.

---

## 6. FASE 1 — PREPARO DAS MÍDIAS

Instale `ffmpeg`, `poppler-utils` e `imagemagick` se faltarem.

```bash
# vídeo principal: 48 MB -> ~7 MB
ffmpeg -i "apresentação do app.mp4" -vf "scale='min(1280,iw)':-2" \
  -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p \
  -movflags +faststart -c:a aac -b:a 96k assets/video/app.mp4

# segundo vídeo
ffmpeg -i "thumbnail the client flow OS.mp4" -vf "scale='min(1280,iw)':-2" \
  -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p \
  -movflags +faststart -an assets/video/clientflow.mp4

# poster de cada vídeo
ffmpeg -ss 1 -i assets/video/app.mp4 -frames:v 1 -q:v 4 assets/i/app-poster.jpg

# PDFs -> JPG
pdftoppm -jpeg -r 110 -jpegopt quality=82 "arquivo.pdf" assets/i/prefixo

# PNGs grandes -> JPG
convert "arquivo.png" -resize 1400x -quality 86 assets/i/saida.jpg
```

Copie os currículos para `assets/pdf/curriculo-pt.pdf` e `assets/pdf/cv-en.pdf`.

**Recorte obrigatório:** as páginas 5 a 9 de `Raquel Carvalhais - Portfólio.pdf`
têm fundo roxo que conflita com a paleta. Use apenas a faixa direita de cada
página (≈72% da largura, alinhado à direita), isolando os mockups:

```bash
convert pagina.jpg -gravity East -crop 72%x100%+0+0 +repage -quality 86 case-XX.jpg
```

**Metas de peso:** site inteiro < 15 MB; PDF final < 8 MB.

---

## 7. OS 7 CASES (a usuária acrescentou o case 7, Central Financeira, e trocou o Wondershelf pelo Arcana Pessoal como case 5; o Wondershelf saiu do projeto)

| # | Case | Disciplina | Mídia de origem |
|---|---|---|---|
| 1 | Clube Gringas | Identidade Visual | `IDENTIDADE.pdf` pág. 1, 6, 7, 8, 9, 10 |
| 2 | Central Acadêmica OS | Design de Produto | `Protótipo da Central` pág. 9, 12, 17, 20 + `app.mp4` |
| 3 | The Client Flow OS | Infoproduto | pág. 6 do portfólio + `clientflow.mp4` |
| 4 | Jãozine | Editorial | 3 imagens de `jão's magazine/` |
| 5 | Wondershelf | Identidade de App | pág. 8 do portfólio |
| 6 | Peças gráficas | Design Gráfico | `25 da raquel!.png`, `pausa..png`, pág. 9 do portfólio |

Opcional, como case 7: **Marketing — Planejamento** (cafeteria fictícia,
estratégia de crescimento digital), pág. 5 do portfólio.

### Estrutura de texto obrigatória — idêntica nos 6 cases, no site e no PDF

1. **Contexto** — a situação, 1 a 2 linhas
2. **Desafio** — o problema a resolver, 1 linha
3. **O que fiz** — exatamente 3 marcadores, cada um começando com verbo
4. **Entregas** — o que ficou pronto, concreto ("manual de marca de 10 páginas",
   "design system com 8 componentes", "landing page + funil de e-mail")

O texto do case é escrito uma vez e reaproveitado nas duas peças — não escreva
duas versões diferentes.

**Nunca invente métrica.** Onde não houver número real no material de origem,
descreva a entrega.

---

## 8. FASE 2 — O SITE

Página única, rolagem vertical, na ordem:

1. **Topo** — "RAQUEL CARVALHAIS" gigante como marca d'água ao fundo; etiqueta
   "PORTFÓLIO · 2026"; frase de posicionamento; botões "ver trabalhos" e
   "baixar portfólio em PDF" (aponta para
   `assets/pdf/portfolio-raquel-carvalhais.pdf`, gerado na fase 3)
2. **Sobre** — resumo profissional + 3 números: 2 anos freelance / 6 cases /
   inglês C1
3. **Trabalhos** — carrossel horizontal com os 6 cases; clique abre lightbox
   com a galeria de imagens e o texto de 4 partes
4. **Trajetória** — linha do tempo 2019 → 2026, conforme o PDF do portfólio
   (ensino médio → abertura de loja → curso de programação front-end → curso de
   UX/UI → início dos freelances → início da graduação)
5. **Habilidades** — 4 grupos: Marketing e Performance / Design e Criação /
   Ferramentas / Gestão
6. **Contato** — e-mail, telefone, LinkedIn, download do PDF e dos 2 currículos
7. **Rodapé**

**Bilíngue:** botão PT/EN fixo no topo, trocando todos os textos. Guarde as duas
versões em atributos `data-pt` e `data-en`. O texto em inglês sai do CV em
inglês, não de tradução automática inventada.

**Comportamento:**
- Entrada dos blocos ao rolar via `IntersectionObserver`. Sem biblioteca externa.
- Carrossel arrastável com mouse e com toque.
- Lightbox operável por teclado: setas e ESC.
- Respeitar `prefers-reduced-motion`.
- Vídeos com `preload="none"` e `poster`.

**Critérios de aceitação da fase 2:**
- [ ] Nenhuma cor ou fonte literal fora do `tokens.css`
- [ ] 375px de largura sem rolagem horizontal
- [ ] Nenhum erro no console
- [ ] Total do site < 15 MB
- [ ] Prints de desktop e celular apresentados à usuária

---

## 9. FASE 3 — O PDF

Montado em HTML em `pdf/portfolio.html`, importando o mesmo `tokens.css`, e
exportado pelo navegador via `pdf/gerar-pdf.js` (Playwright ou Puppeteer).

Formato: 16:9, 1920×1080 por página, 15 páginas (14 + 1 pelo case 7 acrescentado pela usuária).
Saída: `~/Downloads/itens para portfólio/portfolio-raquel-carvalhais.pdf` (decisão da usuária), com cópia em `assets/pdf/` para o botão do site.
Saída: `assets/pdf/portfolio-raquel-carvalhais.pdf`.

| # | Página | Fundo | Conteúdo |
|---|---|---|---|
| 1 | Capa | vinho | Nome em serifa grande, "Portfólio de Cases · 2026", link do site |
| 2 | Índice | bege | Os 6 cases numerados, com a disciplina |
| 3 | Quem sou | bege | Resumo profissional, formação, 3 números em vermelho |
| 4 | Trajetória | vinho | Linha do tempo 2019 → 2026 na horizontal |
| 5 | Habilidades | bege | 4 colunas |
| 6 | Abertura "Cases" | vinho | Só o título grande em serifa itálica |
| 7–12 | Os 6 cases | alterna | Um por página, layout fixo (abaixo) |
| 13 | Como eu trabalho | bege | Diagnóstico → Estratégia → Execução → Análise |
| 14 | Contato | vinho | E-mail, telefone, LinkedIn, link do site, "Obrigada" em serifa itálica |

Em todas as páginas: número no rodapé e "Raquel Carvalhais" discreto no topo,
em areia.

**Layout fixo das páginas de case (7 a 12):**
- Esquerda (40%): número em vermelho grande (01, 02…), título em serifa,
  etiqueta da disciplina, ano, e o texto de 4 partes
- Direita (60%): 1 a 4 imagens do case em grade, borda fina areia

Repita esse layout nos seis sem variação. A repetição é o que produz coesão.

**Cases com vídeo (2 e 3):** PDF não roda vídeo. Use o poster com um botão de
play desenhado em CSS por cima e a legenda "ver em movimento no site", com link
clicável.

**Critérios de aceitação da fase 3:**
- [ ] 14 páginas, nenhuma com texto cortado na quebra
- [ ] Nenhuma imagem esticada ou distorcida
- [ ] Arquivo < 8 MB
- [ ] As 14 páginas renderizadas em imagem e apresentadas à usuária

---

## 10. FASE 4 — PUBLICAÇÃO (GitHub Pages)

Usuária do GitHub: **quelsspace** (https://github.com/quelsspace)
Repositório: `portfolio` (criado com este nome pela usuária; o planejado era portfolio-raquel)
URL final esperada: **https://quelsspace.github.io/portfolio/**

Execute você os comandos de git. Peça autenticação à usuária quando o `gh` ou o
`git push` exigirem.

```bash
git init
git add -A
git commit -m "portfólio: site e PDF"
git branch -M main
git remote add origin https://github.com/quelsspace/portfolio-raquel.git
git push -u origin main
```

O `index.html` precisa estar na **raiz** do repositório para o Pages servir sem
subpasta.

Depois do push, explique à usuária, em passos numerados e linguagem simples:
repositório → **Settings** → **Pages** → Source: **Deploy from a branch** →
branch `main`, pasta `/ (root)` → **Save** → aguardar 1 a 3 minutos → o link
aparece nessa tela.

Se o `gh` estiver autenticado, crie o repositório e ative o Pages por CLI, e
avise que foi feito.

Depois de publicado: atualize o link do site dentro do `pdf/portfolio.html`
(páginas 1 e 14), regere o PDF e faça novo push.

---

## 11. MANUTENÇÃO

Ao adicionar um case novo:
1. Otimize as mídias para `assets/i/` seguindo a fase 1
2. Escreva o texto na estrutura de 4 partes da seção 7
3. Adicione no carrossel do site **e** como página no `pdf/portfolio.html`
4. Rode `node pdf/gerar-pdf.js`
5. Commit e push — o site atualiza sozinho em 1 a 3 minutos

Mudança de cor ou fonte: altere **somente** o `tokens.css`, regere o PDF e
confira as duas peças.
