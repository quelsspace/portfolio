/* =========================================================================
   gerar-pdf.js — exporta pdf/portfolio.html para PDF (16:9, 1920 x 1080)
   Uso:  node pdf/gerar-pdf.js   (a partir da pasta meu-portfolio)

   Saída principal: ~/Downloads/itens para portfólio/portfolio-raquel-carvalhais.pdf
   Cópia para o site: assets/pdf/portfolio-raquel-carvalhais.pdf (botão de download)
   ========================================================================= */

const fs = require("fs");
const os = require("os");
const path = require("path");
const puppeteer = require("puppeteer-core");

// Chrome já instalado nesta máquina; não baixa outro navegador
const CHROME = "/usr/bin/google-chrome";

const ARQUIVO = "portfolio-raquel-carvalhais.pdf";
const SAIDA_PRINCIPAL = path.join(os.homedir(), "Downloads", "itens para portfólio", ARQUIVO);
const COPIA_SITE = path.join(__dirname, "..", "assets", "pdf", ARQUIVO);

(async () => {
  const navegador = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: ["--no-sandbox", "--allow-file-access-from-files"],
  });

  try {
    const pagina = await navegador.newPage();
    await pagina.setViewport({ width: 1920, height: 1080 });

    const arquivoHtml = path.join(__dirname, "portfolio.html");
    await pagina.goto("file://" + arquivoHtml, { waitUntil: "networkidle0" });
    await pagina.waitForFunction("window.__pronto === true", { timeout: 60000 });
    await pagina.emulateMediaType("print");

    fs.mkdirSync(path.dirname(SAIDA_PRINCIPAL), { recursive: true });
    await pagina.pdf({
      path: SAIDA_PRINCIPAL,
      width: "1920px",
      height: "1080px",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    fs.copyFileSync(SAIDA_PRINCIPAL, COPIA_SITE);

    const paginas = await pagina.evaluate(() => document.querySelectorAll(".pagina").length);
    const kb = Math.round(fs.statSync(SAIDA_PRINCIPAL).size / 1024);
    console.log(`PDF gerado: ${paginas} páginas, ${kb} KB`);
    console.log(`Principal: ${SAIDA_PRINCIPAL}`);
    console.log(`Cópia do site: ${COPIA_SITE}`);
  } finally {
    await navegador.close();
  }
})().catch((erro) => {
  console.error("Falha ao gerar o PDF:", erro);
  process.exit(1);
});
