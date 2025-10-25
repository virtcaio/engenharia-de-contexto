import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function analyzeSpacing() {
  console.log('🔍 Iniciando análise de espaçamento...\n');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });
  const page = await context.newPage();

  // Criar diretório de output
  const outputDir = path.join(__dirname, 'spacing-analysis');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000); // Aguarda animações e scripts

  console.log('📊 Coletando métricas de espaçamento...\n');

  // Lista de seções para analisar
  const sections = [
    { id: 'promo-banner', name: 'Promo Banner' },
    { id: 'navbar', name: 'NavBar' },
    { id: 'header', name: 'Header (Hero)' },
    { id: 'problema', name: 'Problema' },
    { id: 'insight', name: 'Insight' },
    { id: 'solucao', name: 'Solução' },
    { id: 'modulos', name: 'Módulos (Features)' },
    { id: 'diferenciais', name: 'Diferenciais (Benefits)' },
    { id: 'para-quem', name: 'Para Quem (Target)' },
    { id: 'investimento', name: 'Investimento (Pricing)' },
    { id: 'faq', name: 'FAQ' },
    { id: 'cta-final', name: 'CTA Final' },
    { id: 'footer', name: 'Footer' },
  ];

  const spacingData = [];

  // Analisar cada seção
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const selector = `#${section.id}, section[id="${section.id}"], [data-section="${section.id}"]`;

    try {
      const element = await page.locator(selector).first();
      const isVisible = await element.isVisible().catch(() => false);

      if (!isVisible) {
        console.log(`⚠️  Seção não encontrada: ${section.name}`);
        continue;
      }

      // Obter métricas de padding/margin
      const metrics = await element.evaluate((el) => {
        const styles = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();

        return {
          paddingTop: parseInt(styles.paddingTop),
          paddingBottom: parseInt(styles.paddingBottom),
          marginTop: parseInt(styles.marginTop),
          marginBottom: parseInt(styles.marginBottom),
          height: rect.height,
          top: rect.top + window.scrollY,
        };
      });

      spacingData.push({
        section: section.name,
        id: section.id,
        ...metrics,
        totalVerticalSpace: metrics.paddingTop + metrics.paddingBottom,
      });

      console.log(`✓ ${section.name}:`);
      console.log(`  Padding: ${metrics.paddingTop}px (top) / ${metrics.paddingBottom}px (bottom)`);
      console.log(`  Margin: ${metrics.marginTop}px (top) / ${metrics.marginBottom}px (bottom)`);
      console.log(`  Altura total: ${Math.round(metrics.height)}px`);
      console.log(`  Espaçamento vertical total: ${metrics.totalVerticalSpace}px\n`);

    } catch (error) {
      console.log(`❌ Erro ao analisar ${section.name}: ${error.message}\n`);
    }
  }

  // Calcular espaços entre seções
  console.log('\n📏 ANÁLISE DE GAPS ENTRE SEÇÕES:\n');
  const gaps = [];

  for (let i = 0; i < spacingData.length - 1; i++) {
    const current = spacingData[i];
    const next = spacingData[i + 1];

    const gap = next.top - (current.top + current.height);
    gaps.push({
      from: current.section,
      to: next.section,
      gap: Math.round(gap),
    });

    console.log(`${current.section} → ${next.section}: ${Math.round(gap)}px`);
  }

  // Análise e recomendações
  console.log('\n\n🎯 ANÁLISE E RECOMENDAÇÕES:\n');

  const avgPadding = spacingData.reduce((sum, s) => sum + s.totalVerticalSpace, 0) / spacingData.length;
  const avgGap = gaps.reduce((sum, g) => sum + g.gap, 0) / gaps.length;

  console.log(`Padding vertical médio: ${Math.round(avgPadding)}px`);
  console.log(`Gap médio entre seções: ${Math.round(avgGap)}px\n`);

  // Boas práticas (referência)
  const bestPractices = {
    minPadding: 32,    // 2rem = 32px
    maxPadding: 96,    // 6rem = 96px
    minGap: 0,
    maxGap: 64,        // 4rem = 64px
    idealPadding: 64,  // 4rem = 64px
  };

  // Identificar problemas
  const issues = [];
  const recommendations = [];

  spacingData.forEach((section) => {
    if (section.totalVerticalSpace > bestPractices.maxPadding) {
      issues.push({
        type: 'PADDING_EXCESSIVO',
        section: section.section,
        value: section.totalVerticalSpace,
        severity: 'alta',
      });
    }
    if (section.totalVerticalSpace < bestPractices.minPadding) {
      issues.push({
        type: 'PADDING_INSUFICIENTE',
        section: section.section,
        value: section.totalVerticalSpace,
        severity: 'média',
      });
    }
  });

  gaps.forEach((gap) => {
    if (Math.abs(gap.gap) > bestPractices.maxGap) {
      issues.push({
        type: 'GAP_EXCESSIVO',
        from: gap.from,
        to: gap.to,
        value: gap.gap,
        severity: 'alta',
      });
    }
  });

  // Mostrar problemas
  if (issues.length > 0) {
    console.log('❌ PROBLEMAS IDENTIFICADOS:\n');
    issues.forEach((issue, idx) => {
      console.log(`${idx + 1}. ${issue.type}:`);
      if (issue.section) {
        console.log(`   Seção: ${issue.section}`);
        console.log(`   Valor: ${issue.value}px (recomendado: ${bestPractices.minPadding}-${bestPractices.maxPadding}px)`);
      } else {
        console.log(`   Entre: ${issue.from} → ${issue.to}`);
        console.log(`   Gap: ${issue.value}px (máximo recomendado: ${bestPractices.maxGap}px)`);
      }
      console.log(`   Severidade: ${issue.severity.toUpperCase()}\n`);
    });
  } else {
    console.log('✅ Nenhum problema crítico de espaçamento encontrado!\n');
  }

  // Gerar recomendações
  if (issues.filter(i => i.type === 'PADDING_EXCESSIVO').length > 2) {
    recommendations.push({
      priority: 'ALTA',
      issue: 'Múltiplas seções com padding excessivo',
      solution: 'Reduzir py-16 ou py-20 para py-12 (3rem = 48px) na maioria das seções',
      files: ['src/components/*.tsx', 'src/index.css'],
    });
  }

  if (issues.filter(i => i.type === 'GAP_EXCESSIVO').length > 0) {
    recommendations.push({
      priority: 'ALTA',
      issue: 'Gaps excessivos entre seções',
      solution: 'Verificar margins negativas ou positivas não intencionais. Considerar usar py-8 ou py-10 em vez de py-16/py-20',
      files: ['tailwind.config.ts', 'src/components/*.tsx'],
    });
  }

  console.log('\n💡 RECOMENDAÇÕES:\n');
  if (recommendations.length > 0) {
    recommendations.forEach((rec, idx) => {
      console.log(`${idx + 1}. [${rec.priority}] ${rec.issue}`);
      console.log(`   Solução: ${rec.solution}`);
      console.log(`   Arquivos: ${rec.files.join(', ')}\n`);
    });
  } else {
    console.log('✅ O espaçamento está dentro das boas práticas!\n');
  }

  // Capturar screenshots das seções com highlighting
  console.log('\n📸 Capturando screenshots com análise visual...\n');

  await page.evaluate(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .spacing-highlight {
        outline: 3px solid #D45E0A !important;
        outline-offset: -3px !important;
        position: relative !important;
      }
      .spacing-label {
        position: absolute !important;
        top: 10px !important;
        left: 10px !important;
        background: rgba(212, 94, 10, 0.95) !important;
        color: white !important;
        padding: 8px 12px !important;
        border-radius: 4px !important;
        font-size: 14px !important;
        font-weight: bold !important;
        font-family: monospace !important;
        z-index: 999999 !important;
      }
    `;
    document.head.appendChild(style);
  });

  // Screenshot da página completa com todas as seções destacadas
  await page.evaluate(() => {
    const sections = document.querySelectorAll('section, header, footer');
    sections.forEach((section, idx) => {
      section.classList.add('spacing-highlight');
      const label = document.createElement('div');
      label.className = 'spacing-label';
      const styles = window.getComputedStyle(section);
      label.textContent = `py: ${styles.paddingTop} / ${styles.paddingBottom}`;
      section.style.position = 'relative';
      section.appendChild(label);
    });
  });

  await page.screenshot({
    path: path.join(outputDir, 'full-page-spacing-highlighted.png'),
    fullPage: true,
  });
  console.log('✓ Screenshot salvo: full-page-spacing-highlighted.png');

  // Salvar dados em JSON
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      avgPadding: Math.round(avgPadding),
      avgGap: Math.round(avgGap),
      totalSections: spacingData.length,
      totalIssues: issues.length,
    },
    sections: spacingData,
    gaps,
    issues,
    recommendations,
    bestPractices,
  };

  fs.writeFileSync(
    path.join(outputDir, 'spacing-report.json'),
    JSON.stringify(report, null, 2)
  );
  console.log('✓ Relatório salvo: spacing-report.json\n');

  // Gerar relatório Markdown
  let markdown = `# Análise de Espaçamento - Engenharia de Contexto\n\n`;
  markdown += `**Data**: ${new Date().toLocaleString('pt-BR')}\n\n`;
  markdown += `## 📊 Resumo Executivo\n\n`;
  markdown += `- **Seções analisadas**: ${spacingData.length}\n`;
  markdown += `- **Padding vertical médio**: ${Math.round(avgPadding)}px\n`;
  markdown += `- **Gap médio entre seções**: ${Math.round(avgGap)}px\n`;
  markdown += `- **Problemas identificados**: ${issues.length}\n\n`;

  markdown += `## 🎯 Boas Práticas (Referência)\n\n`;
  markdown += `- **Padding mínimo**: ${bestPractices.minPadding}px (2rem)\n`;
  markdown += `- **Padding máximo**: ${bestPractices.maxPadding}px (6rem)\n`;
  markdown += `- **Padding ideal**: ${bestPractices.idealPadding}px (4rem)\n`;
  markdown += `- **Gap máximo**: ${bestPractices.maxGap}px (4rem)\n\n`;

  if (issues.length > 0) {
    markdown += `## ❌ Problemas Identificados\n\n`;
    issues.forEach((issue, idx) => {
      markdown += `### ${idx + 1}. ${issue.type.replace(/_/g, ' ')}\n\n`;
      if (issue.section) {
        markdown += `- **Seção**: ${issue.section}\n`;
        markdown += `- **Valor atual**: ${issue.value}px\n`;
        markdown += `- **Recomendado**: ${bestPractices.minPadding}-${bestPractices.maxPadding}px\n`;
      } else {
        markdown += `- **Entre**: ${issue.from} → ${issue.to}\n`;
        markdown += `- **Gap**: ${issue.value}px\n`;
        markdown += `- **Máximo recomendado**: ${bestPractices.maxGap}px\n`;
      }
      markdown += `- **Severidade**: ${issue.severity.toUpperCase()}\n\n`;
    });
  }

  if (recommendations.length > 0) {
    markdown += `## 💡 Recomendações\n\n`;
    recommendations.forEach((rec, idx) => {
      markdown += `### ${idx + 1}. [${rec.priority}] ${rec.issue}\n\n`;
      markdown += `**Solução**: ${rec.solution}\n\n`;
      markdown += `**Arquivos**: \`${rec.files.join('`, `')}\`\n\n`;
    });
  }

  markdown += `## 📏 Detalhes das Seções\n\n`;
  markdown += `| Seção | Padding Top | Padding Bottom | Total | Altura |\n`;
  markdown += `|-------|-------------|----------------|-------|--------|\n`;
  spacingData.forEach((section) => {
    markdown += `| ${section.section} | ${section.paddingTop}px | ${section.paddingBottom}px | ${section.totalVerticalSpace}px | ${Math.round(section.height)}px |\n`;
  });

  markdown += `\n## 📊 Gaps Entre Seções\n\n`;
  markdown += `| De | Para | Gap |\n`;
  markdown += `|----|------|-----|\n`;
  gaps.forEach((gap) => {
    markdown += `| ${gap.from} | ${gap.to} | ${gap.gap}px |\n`;
  });

  fs.writeFileSync(
    path.join(outputDir, 'spacing-report.md'),
    markdown
  );
  console.log('✓ Relatório Markdown salvo: spacing-report.md\n');

  console.log('\n✅ Análise concluída! Verifique a pasta spacing-analysis/\n');

  await browser.close();
}

analyzeSpacing().catch(console.error);
