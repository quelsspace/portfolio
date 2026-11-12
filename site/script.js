/* =========================================================================
   script.js — comportamento do site
   1. Cards e lightbox (os textos dos cases ficam em cases.js)
   2. Troca PT / EN
   3. Carrossel arrastável
   4. Lightbox (galeria com setas e ESC)
   5. Entrada suave dos blocos ao rolar
   ========================================================================= */

/* ---------- 2. PT / EN ---------- */
const TEXTOS_UI = {
  pt: { ver: "ver detalhes", fechar: "Fechar", anterior: "Anterior", proximo: "Próximo", contexto: "Contexto", desafio: "Desafio", fiz: "O que fiz", entregas: "Entregas", video: "Ver o vídeo" },
  en: { ver: "view details", fechar: "Close", anterior: "Previous", proximo: "Next", contexto: "Context", desafio: "Challenge", fiz: "What I did", entregas: "Deliverables", video: "Watch the video" }
};

let idioma = "pt";

function lerIdiomaSalvo() {
  try {
    return localStorage.getItem("idioma") === "en" ? "en" : "pt";
  } catch (erro) {
    return "pt"; // navegador sem armazenamento: segue em português
  }
}

function salvarIdioma(valor) {
  try {
    localStorage.setItem("idioma", valor);
  } catch (erro) {
    // sem armazenamento disponível: a escolha vale só nesta visita
  }
}

function aplicarIdioma(novo) {
  idioma = novo;
  document.documentElement.lang = novo === "en" ? "en" : "pt-BR";

  // textos simples: troca o conteúdo de cada elemento marcado
  document.querySelectorAll("[data-pt][data-en]").forEach((el) => {
    el.textContent = novo === "en" ? el.dataset.en : el.dataset.pt;
  });
  // rótulos de acessibilidade marcados com data-pt-aria / data-en-aria
  document.querySelectorAll("[data-en-aria]").forEach((el) => {
    el.setAttribute("aria-label", novo === "en" ? el.dataset.enAria : el.dataset.ptAria);
  });

  const botao = document.getElementById("alternar-idioma");
  if (botao) {
    botao.textContent = novo === "en" ? "PT" : "EN";
    botao.setAttribute("aria-label", novo === "en" ? "Mudar para português" : "Switch to English");
  }

  renderizarCases();
  salvarIdioma(novo);
}

/* ---------- 3. CASES NA TELA ---------- */
function criarCard(caso, indice) {
  const ui = TEXTOS_UI[idioma];
  const article = document.createElement("article");
  article.className = "card reveal";
  article.innerHTML = `
    <button class="card__abrir" type="button" data-indice="${indice}" aria-haspopup="dialog">
      <div class="card__imagem">
        <img src="${caso.capa}" alt="" draggable="false">
      </div>
      <div class="card__texto">
        <span class="card__numero">${caso.numero}</span>
        <h3 class="card__titulo">${caso.titulo[idioma]}</h3>
        <p class="card__disciplina">${caso.disciplina[idioma]}</p>
        <span class="card__ver">${ui.ver} <span aria-hidden="true">→</span></span>
      </div>
    </button>`;
  return article;
}

function renderizarCases() {
  const trilho = document.getElementById("trilho-cases");
  if (!trilho) return;
  trilho.innerHTML = "";
  CASES.forEach((caso, indice) => trilho.appendChild(criarCard(caso, indice)));
  observarReveal(trilho.querySelectorAll(".reveal"));
}

/* ---------- 4. CARROSSEL ARRASTÁVEL ----------
   Mouse e toque: arrastar com o dedo/mouse. Teclado: setas. */
function ativarCarrossel() {
  const trilho = document.getElementById("trilho-cases");
  if (!trilho) return;

  let arrastando = false;
  let inicioX = 0;
  let scrollInicial = 0;
  let moveu = false;

  trilho.addEventListener("pointerdown", (evento) => {
    if (evento.pointerType === "touch") return; // toque usa a rolagem nativa
    arrastando = true;
    moveu = false;
    inicioX = evento.clientX;
    scrollInicial = trilho.scrollLeft;
    trilho.classList.add("is-arrastando");
  });

  window.addEventListener("pointermove", (evento) => {
    if (!arrastando) return;
    const deslocamento = evento.clientX - inicioX;
    if (Math.abs(deslocamento) > 5) moveu = true;
    trilho.scrollLeft = scrollInicial - deslocamento;
  });

  window.addEventListener("pointerup", () => {
    if (!arrastando) return;
    arrastando = false;
    trilho.classList.remove("is-arrastando");
  });

  // evita que um arrastar termine como clique no card
  trilho.addEventListener("click", (evento) => {
    if (moveu) {
      evento.preventDefault();
      evento.stopPropagation();
      moveu = false;
    }
  }, true);

  trilho.addEventListener("keydown", (evento) => {
    const passo = trilho.clientWidth * 0.7;
    if (evento.key === "ArrowRight") trilho.scrollBy({ left: passo, behavior: "smooth" });
    if (evento.key === "ArrowLeft") trilho.scrollBy({ left: -passo, behavior: "smooth" });
  });
}

/* ---------- 5. LIGHTBOX ---------- */
let casoAtual = 0;
let imagemAtual = 0;

function montarGaleria(caso) {
  // o vídeo entra como primeiro item, quando existir
  const itens = [];
  if (caso.video) itens.push({ tipo: "video", src: caso.video.src, poster: caso.video.poster });
  return itens.concat(caso.galeria);
}

function mostrarItem() {
  const caso = CASES[casoAtual];
  const itens = montarGaleria(caso);
  const ui = TEXTOS_UI[idioma];
  const item = itens[imagemAtual];
  const palco = document.getElementById("palco");
  const dialogo = document.getElementById("lightbox");

  if (item.tipo === "video") {
    palco.innerHTML = `<video controls playsinline preload="none" poster="${item.poster}" src="${item.src}"></video>`;
  } else {
    palco.innerHTML = `<img src="${item.src}" alt="${item.alt[idioma]}">`;
  }

  document.getElementById("lb-numero").textContent = caso.numero;
  document.getElementById("lb-titulo").textContent = caso.titulo[idioma];
  document.getElementById("lb-disciplina").textContent = caso.disciplina[idioma];
  document.getElementById("lb-contexto").textContent = caso.contexto[idioma];
  document.getElementById("lb-desafio").textContent = caso.desafio[idioma];
  document.getElementById("lb-entregas").textContent = caso.entregas[idioma];

  const lista = document.getElementById("lb-fiz");
  lista.innerHTML = "";
  caso.fiz[idioma].forEach((texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
  });

  document.getElementById("lb-contador").textContent = `${imagemAtual + 1} / ${itens.length}`;
  document.getElementById("lb-anterior").setAttribute("aria-label", ui.anterior);
  document.getElementById("lb-proximo").setAttribute("aria-label", ui.proximo);
  document.getElementById("lb-fechar").setAttribute("aria-label", ui.fechar);
  document.getElementById("lb-rotulo-contexto").textContent = ui.contexto;
  document.getElementById("lb-rotulo-desafio").textContent = ui.desafio;
  document.getElementById("lb-rotulo-fiz").textContent = ui.fiz;
  document.getElementById("lb-rotulo-entregas").textContent = ui.entregas;

  const temVarios = itens.length > 1;
  document.getElementById("lb-anterior").hidden = !temVarios;
  document.getElementById("lb-proximo").hidden = !temVarios;

  if (!dialogo.open) dialogo.showModal();
}

function abrirLightbox(indice) {
  casoAtual = indice;
  imagemAtual = 0;
  mostrarItem();
}

function mudarItem(passo) {
  const total = montarGaleria(CASES[casoAtual]).length;
  imagemAtual = (imagemAtual + passo + total) % total;
  mostrarItem();
}

function ativarLightbox() {
  const dialogo = document.getElementById("lightbox");
  if (!dialogo) return;

  document.getElementById("trilho-cases").addEventListener("click", (evento) => {
    const botao = evento.target.closest(".card__abrir");
    if (botao) abrirLightbox(Number(botao.dataset.indice));
  });

  document.getElementById("lb-anterior").addEventListener("click", () => mudarItem(-1));
  document.getElementById("lb-proximo").addEventListener("click", () => mudarItem(1));
  document.getElementById("lb-fechar").addEventListener("click", () => dialogo.close());

  // clicar no fundo escuro fecha o lightbox
  dialogo.addEventListener("click", (evento) => {
    if (evento.target === dialogo) dialogo.close();
  });

  // setas funcionam mesmo sem o foco no botão
  dialogo.addEventListener("keydown", (evento) => {
    if (evento.key === "ArrowRight") mudarItem(1);
    if (evento.key === "ArrowLeft") mudarItem(-1);
  });

  // ao fechar, pausa o vídeo para não continuar tocando
  dialogo.addEventListener("close", () => {
    const video = document.querySelector("#palco video");
    if (video) video.pause();
    document.getElementById("palco").innerHTML = "";
  });
}

/* ---------- 6. ENTRADA AO ROLAR ---------- */
const sensivelMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");
let observador = null;

function observarReveal(elementos) {
  if (sensivelMovimento.matches || !("IntersectionObserver" in window)) {
    elementos.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  if (!observador) {
    observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("is-visible");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.15 });
  }
  elementos.forEach((el) => observador.observe(el));
}

/* ---------- INICIALIZAÇÃO ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // troca de idioma
  const botaoIdioma = document.getElementById("alternar-idioma");
  botaoIdioma.addEventListener("click", () => {
    aplicarIdioma(idioma === "pt" ? "en" : "pt");
  });

  ativarCarrossel();
  ativarLightbox();

  // blocos estáticos entram ao rolar
  observarReveal(document.querySelectorAll(".reveal:not(#trilho-cases .reveal)"));

  aplicarIdioma(lerIdiomaSalvo());
});
