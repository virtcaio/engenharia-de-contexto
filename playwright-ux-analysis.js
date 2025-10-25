import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações
const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = './analysis-output';

// Dispositivos para testar
const DEVICES = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 667 },
  { name: 'mobile-large', width: 414, height: 896 }
];

// Seções da landing page
const SECTIONS = [
  { id: 'promo-banner', name: 'PromoBanner', selector: '.sticky.top-0.z-50' },
  { id: 'navbar', name: 'NavBar', selector: 'nav' },
  { id: 'header', name: 'Header/Hero', selector: 'section:has(h1)' },
  { id: 'problem', name: 'Problem', selector: '#problema' },
  { id: 'insight', name: 'Insight', selector: '#insight' },
  { id: 'solution', name: 'Solution', selector: '#solucao' },
  { id: 'features', name: 'Features/Modules', selector: '#modulos' },
  { id: 'benefits', name: 'Benefits', selector: '#diferenciais' },
  { id: 'target', name: 'Target', selector: '#para-quem' },
  { id: 'pricing', name: 'Pricing', selector: '#investimento' },
  { id: 'faq', name: 'FAQ', selector: '#faq' },
  { id: 'cta', name: 'CallToAction', selector: 'section.bg-tangerine' },
  { id: 'footer', name: 'Footer', selector: 'footer' }
];

// Criar diretórios
function setupDirectories() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
  }

  DEVICES.forEach(device => {
    const dir = path.join(OUTPUT_DIR, device.name);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  });

  const codeDir = path.join(OUTPUT_DIR, 'extracted-code');
  if (!fs.existsSync(codeDir)) {
    fs.mkdirSync(codeDir);
  }
}

// Extrair código HTML/CSS de um elemento
async function extractCode(page, selector, sectionName) {
  try {
    const element = await page.$(selector);
    if (!element) return null;

    const html = await element.innerHTML();
    const styles = await page.evaluate((sel) => {
      const elem = document.querySelector(sel);
      if (!elem) return '';
      const computedStyle = window.getComputedStyle(elem);
      return Array.from(computedStyle).reduce((acc, prop) => {
        return acc + `${prop}: ${computedStyle.getPropertyValue(prop)};\n`;
      }, '');
    }, selector);

    return { html, styles };
  } catch (error) {
    console.error(`Erro ao extrair código de ${sectionName}:`, error.message);
    return null;
  }
}

// Capturar métricas de performance
async function captureMetrics(page) {
  return await page.evaluate(() => {
    const timing = performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;

    return {
      loadTime,
      domReady,
      timestamp: new Date().toISOString()
    };
  });
}

// Função principal
async function analyzeUX() {
  console.log('🚀 Iniciando análise UX/UI com Playwright...\n');

  setupDirectories();

  const browser = await chromium.launch({ headless: true });
  const allMetrics = {};

  for (const device of DEVICES) {
    console.log(`\n📱 Analisando ${device.name} (${device.width}x${device.height})...`);

    const context = await browser.newContext({
      viewport: { width: device.width, height: device.height },
      deviceScaleFactor: 2
    });

    const page = await context.newPage();

    try {
      // Navegar para a página
      console.log(`   ⏳ Carregando ${BASE_URL}...`);
      await page.goto(BASE_URL, { waitUntil: 'networkidle' });

      // Capturar métricas
      const metrics = await captureMetrics(page);
      allMetrics[device.name] = metrics;
      console.log(`   ✅ Carregamento: ${metrics.loadTime}ms | DOM Ready: ${metrics.domReady}ms`);

      // Screenshot full page
      console.log(`   📸 Capturando página completa...`);
      await page.screenshot({
        path: path.join(OUTPUT_DIR, device.name, '00-full-page.png'),
        fullPage: true
      });

      // Capturar cada seção
      for (const section of SECTIONS) {
        try {
          const element = await page.$(section.selector);

          if (element) {
            console.log(`   📸 Capturando: ${section.name}...`);

            // Screenshot da seção
            await element.screenshot({
              path: path.join(OUTPUT_DIR, device.name, `${section.id}.png`)
            });

            // Extrair código (apenas no desktop para não duplicar)
            if (device.name === 'desktop') {
              const code = await extractCode(page, section.selector, section.name);
              if (code) {
                const codePath = path.join(OUTPUT_DIR, 'extracted-code', `${section.id}.json`);
                fs.writeFileSync(codePath, JSON.stringify(code, null, 2));
              }
            }
          } else {
            console.log(`   ⚠️  Seção não encontrada: ${section.name}`);
          }
        } catch (error) {
          console.error(`   ❌ Erro ao capturar ${section.name}:`, error.message);
        }
      }

    } catch (error) {
      console.error(`❌ Erro ao analisar ${device.name}:`, error.message);
    }

    await context.close();
  }

  await browser.close();

  // Salvar métricas
  const metricsPath = path.join(OUTPUT_DIR, 'metrics.json');
  fs.writeFileSync(metricsPath, JSON.stringify(allMetrics, null, 2));

  console.log('\n✅ Capturas concluídas!');
  console.log(`📁 Arquivos salvos em: ${OUTPUT_DIR}/`);
  console.log(`\n📊 Resumo:`);
  console.log(`   - ${DEVICES.length} dispositivos testados`);
  console.log(`   - ${SECTIONS.length} seções capturadas por dispositivo`);
  console.log(`   - ${DEVICES.length * SECTIONS.length + DEVICES.length} screenshots totais`);
  console.log(`   - ${SECTIONS.length} códigos HTML/CSS extraídos`);

  return {
    success: true,
    outputDir: OUTPUT_DIR,
    devices: DEVICES.length,
    sections: SECTIONS.length,
    metrics: allMetrics
  };
}

// Executar
analyzeUX().catch(console.error);
