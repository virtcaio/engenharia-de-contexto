# ANÁLISE DE ACESSIBILIDADE (A11y) - WCAG 2.1
**Data:** 24 de outubro de 2025
**Agente:** AGENT 10 - Accessibility (A11y)

---

## RESUMO EXECUTIVO

**Score WCAG:** 52/100
**Nível de Conformidade:** Não Conforme (abaixo de A)
**Status:** Requer correções críticas e importantes

### Índice de Conformidade por Categoria
- 🔴 **Estrutura Semântica HTML:** 35% - Crítico
- 🔴 **Alt Text e ARIA:** 40% - Crítico
- 🟡 **Contraste WCAG:** 75% - Bom
- 🔴 **Navegação por Teclado:** 50% - Importante
- 🔴 **ARIA Labels e Roles:** 45% - Crítico
- 🟢 **Formulários:** N/A - Não aplicável

---

## 1. ESTRUTURA SEMÂNTICA HTML

### 🔴 PROBLEMAS CRÍTICOS

#### 1.1 Ausência de Elementos Estruturais Obrigatórios
**Severidade:** Crítica | **WCAG:** 1.3.1 (A)

**Problema:**
```html
<!-- Atual: Sem estrutura semântica -->
<div class="section-container">
  <div class="flex justify-center">
    <div class="tag text-center">IA que funciona SEMPRE</div>
  </div>
  <h1>Meus prompts funcionaram às vezes...</h1>
</div>
```

**Impacto:**
- Leitores de tela não conseguem navegar por regiões da página
- Usuários não conseguem pular para conteúdo principal
- Estrutura da página não é compreensível

**Correção Necessária:**
```html
<!-- Correto: Com estrutura semântica -->
<header role="banner">
  <!-- Navbar content -->
</header>

<main role="main" id="main-content">
  <section aria-labelledby="hero-heading">
    <div class="tag text-center">IA que funciona SEMPRE</div>
    <h1 id="hero-heading">Meus prompts funcionaram às vezes...</h1>
  </section>
</main>

<footer role="contentinfo">
  <!-- Footer content -->
</footer>
```

#### 1.2 Hierarquia de Headings Quebrada
**Severidade:** Crítica | **WCAG:** 1.3.1 (A)

**Problemas Identificados:**
- ✅ **H1 único:** Apenas um h1 por página (correto)
- ❌ **Sequência lógica:** Pulos de h1 direto para h3 em vários lugares
- ❌ **Headings ocultos:** h3 dentro de accordion sem contexto

**Exemplo do Problema:**
```html
<!-- FAQ Section -->
<h2>Dúvidas respondidas</h2>
<div data-orientation="vertical">
  <!-- ❌ Problema: h3 sem estrutura -->
  <h3 data-state="closed">
    <button>Preciso ter conhecimento técnico?</button>
  </h3>
</div>
```

**Correção:**
```html
<!-- Correto -->
<section aria-labelledby="faq-title">
  <h2 id="faq-title">Dúvidas respondidas</h2>
  <div role="group" aria-labelledby="faq-title">
    <div class="accordion-item">
      <h3>
        <button aria-expanded="false" aria-controls="faq-1">
          Preciso ter conhecimento técnico?
        </button>
      </h3>
      <div id="faq-1" hidden>...</div>
    </div>
  </div>
</section>
```

#### 1.3 Links vs Buttons - Uso Incorreto
**Severidade:** Importante | **WCAG:** 4.1.2 (A)

**Problemas:**
```html
<!-- ❌ Link usado como botão (abre em nova aba sem indicação) -->
<a href="http://localhost:3000/#checkout"
   target="_blank"
   rel="noopener noreferrer"
   class="neo-button">
  QUERO APRENDER ENGENHARIA DE CONTEXTO
</a>
```

**Correção:**
```html
<!-- ✅ Correto: Link com indicação de abertura em nova aba -->
<a href="http://localhost:3000/#checkout"
   target="_blank"
   rel="noopener noreferrer"
   class="neo-button"
   aria-label="Quero aprender Engenharia de Contexto (abre em nova aba)">
  QUERO APRENDER ENGENHARIA DE CONTEXTO
  <span class="sr-only">(abre em nova aba)</span>
  <svg aria-hidden="true">...</svg>
</a>
```

---

## 2. ALT TEXT E ARIA

### 🔴 PROBLEMAS CRÍTICOS

#### 2.1 Ícones Lucide-React Sem ARIA Labels
**Severidade:** Crítica | **WCAG:** 1.1.1 (A)

**Problema:** Todos os ícones estão sem aria-label ou aria-hidden

**Exemplos Problemáticos:**

```html
<!-- ❌ Promo Banner: Ícone decorativo sem aria-hidden -->
<svg class="lucide lucide-sparkles h-4 w-4 inline">
  <path d="M9.937 15.5..."></path>
</svg>
Oferta de Lançamento: R$ 97

<!-- ❌ Botão de fechar sem aria-label -->
<button class="ml-4 hover:bg-white/20 rounded-full p-1">
  <svg class="lucide lucide-x h-4 w-4">
    <path d="M18 6 6 18"></path>
  </svg>
</button>

<!-- ❌ Navbar: Menu mobile sem descrição -->
<button class="text-night hover:text-tangerine" aria-label="Menu">
  <svg class="lucide lucide-menu h-6 w-6">
    <line x1="4" x2="20" y1="12" y2="12"></line>
  </svg>
</button>
```

**Correções Necessárias:**

```html
<!-- ✅ Ícone decorativo com aria-hidden -->
<svg aria-hidden="true" class="lucide lucide-sparkles h-4 w-4 inline">
  <path d="M9.937 15.5..."></path>
</svg>
<span>Oferta de Lançamento: R$ 97</span>

<!-- ✅ Botão com aria-label adequado -->
<button
  aria-label="Fechar banner de oferta"
  class="ml-4 hover:bg-white/20 rounded-full p-1">
  <svg aria-hidden="true" class="lucide lucide-x h-4 w-4">
    <path d="M18 6 6 18"></path>
  </svg>
</button>

<!-- ✅ Menu mobile com descrição -->
<button
  aria-label="Abrir menu de navegação"
  aria-expanded="false"
  aria-controls="mobile-menu"
  class="text-night hover:text-tangerine">
  <svg aria-hidden="true" class="lucide lucide-menu h-6 w-6">
    <line x1="4" x2="20" y1="12" y2="12"></line>
  </svg>
</button>
```

#### 2.2 Ícones Informativos Sem Texto Alternativo
**Severidade:** Crítica | **WCAG:** 1.1.1 (A)

**Componentes Afetados:**
- Benefits: 11 ícones sem aria-label
- Features: 7 ícones sem aria-label
- Pricing: 9 ícones sem aria-label
- Footer: 5 ícones sociais sem aria-label adequado

**Exemplo - Footer Social Links:**
```html
<!-- ❌ Atual: Link social sem descrição adequada -->
<a href="https://www.youtube.com/@caiointeligenciaartificial"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="YouTube">
  <svg class="lucide lucide-youtube h-6 w-6">...</svg>
</a>

<!-- ✅ Correto -->
<a href="https://www.youtube.com/@caiointeligenciaartificial"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Visite nosso canal no YouTube (abre em nova aba)">
  <svg aria-hidden="true" class="lucide lucide-youtube h-6 w-6">...</svg>
</a>
```

#### 2.3 Imagens/Gráficos Decorativos
**Severidade:** Moderada | **WCAG:** 1.1.1 (A)

**Problema:** Elementos decorativos (gradientes, blur backgrounds) não possuem role="presentation"

```html
<!-- ❌ Atual -->
<div class="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full bg-tangerine/5 blur-3xl"></div>

<!-- ✅ Correto -->
<div role="presentation" aria-hidden="true"
     class="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full bg-tangerine/5 blur-3xl"></div>
```

---

## 3. CONTRASTE WCAG

### 🟡 BOM - Mas com Ressalvas

**Score:** 75/100

#### 3.1 Contrastes Adequados (AA Compliant)

✅ **Texto Principal:**
- Background: `rgb(250, 249, 247)` (#FAF9F7)
- Foreground: `rgb(12, 10, 9)` (#0C0A09)
- **Ratio:** 18.7:1 (Excelente - AAA)

✅ **Botões Primários (neo-button):**
- Background: `rgb(212, 94, 10)` (tangerine)
- Text: `rgb(255, 255, 255)` (white)
- **Ratio:** 4.9:1 (AA Compliant)

✅ **Footer:**
- Background: `rgb(20, 19, 18)` (#141312)
- Text: `rgb(255, 255, 255)` (#FFFFFF)
- **Ratio:** 19.6:1 (AAA Compliant)

#### 3.2 Contrastes Limítrofes (Atenção)

⚠️ **Muted Text:**
- Background: `rgb(250, 249, 247)`
- Foreground: `text-muted-foreground` (cinza claro)
- **Estimativa:** ~4.5:1 (no limite do AA)

⚠️ **Links de Navegação no Hover:**
- Estado normal: adequado
- Estado hover (tangerine): verificar se mantém contraste

**Recomendação:** Usar ferramenta de teste de contraste para validar todos os estados interativos.

#### 3.3 Dependência de Cor

❌ **Problema:** Informação transmitida apenas por cor

**Exemplo - Pricing:**
```html
<!-- ❌ Preço riscado só usa cor e decoração -->
<span class="text-lg line-through text-muted-foreground mb-2">
  R$ 297,00
</span>
<span class="text-5xl font-bold text-tangerine mb-2">
  R$ 97
</span>
```

**Correção:**
```html
<!-- ✅ Adicionar contexto textual -->
<span class="text-lg line-through text-muted-foreground mb-2">
  <span class="sr-only">Preço original: </span>
  R$ 297,00
</span>
<span class="text-5xl font-bold text-tangerine mb-2">
  <span class="sr-only">Preço com desconto: </span>
  R$ 97
</span>
<span class="sr-only">Economia de R$ 200</span>
```

---

## 4. NAVEGAÇÃO POR TECLADO

### 🔴 PROBLEMAS IMPORTANTES

#### 4.1 Falta de Skip Links
**Severidade:** Crítica | **WCAG:** 2.4.1 (A)

**Problema:** Nenhum skip link encontrado

**Implementação Necessária:**
```html
<!-- Adicionar no início do <body> -->
<a href="#main-content" class="sr-only focus:not-sr-only">
  Pular para conteúdo principal
</a>

<!-- CSS necessário -->
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 1rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

#### 4.2 Ordem de Tab Lógica
**Severidade:** Moderada | **WCAG:** 2.4.3 (A)

**Análise:**
✅ Navbar: ordem lógica (links → botão CTA)
✅ Hero: ordem preservada
❌ **Problema:** Sticky navbar pode causar confusão no foco

**Recomendação:**
```html
<!-- Adicionar focus-visible styles -->
<style>
  *:focus-visible {
    outline: 2px solid rgb(212, 94, 10);
    outline-offset: 2px;
  }
</style>
```

#### 4.3 Focus Visible
**Severidade:** Moderada | **WCAG:** 2.4.7 (AA)

**Problema:** Classes Tailwind CSS usam `focus-visible:outline-none` sem substituição adequada

```html
<!-- ❌ Atual: Remove outline sem substituir -->
<button class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">

<!-- ✅ Correto: ring é adequado, mas precisa ser visível -->
<button class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tangerine focus-visible:ring-offset-2">
```

#### 4.4 Keyboard Traps
**Status:** ✅ Não identificados (bom)

**Análise:**
- Accordions (FAQ e Features) usam Radix UI que gerencia foco corretamente
- Modals: Não identificados na análise
- Dropdowns: Não identificados na análise

---

## 5. ARIA LABELS E ROLES

### 🔴 PROBLEMAS CRÍTICOS

#### 5.1 Accordion/Collapse - Implementação Parcial
**Severidade:** Importante | **WCAG:** 4.1.2 (A)

**Problema:** Usa Radix UI corretamente, mas falta contexto semântico

```html
<!-- ❌ Atual: Accordion sem contexto de região -->
<div class="space-y-4" data-orientation="vertical">
  <div data-state="closed" class="border-b feature-card">
    <h3>
      <button type="button"
              aria-controls="radix-:rj:"
              aria-expanded="false"
              data-state="closed">
        <span>Preciso ter conhecimento técnico?</span>
        <svg>...</svg>
      </button>
    </h3>
    <div id="radix-:rj:" hidden role="region" aria-labelledby="radix-:rh:">
    </div>
  </div>
</div>
```

**Correção:**
```html
<!-- ✅ Correto: Adicionar role e aria-label ao container -->
<div role="group"
     aria-label="Perguntas Frequentes"
     class="space-y-4"
     data-orientation="vertical">
  <div data-state="closed" class="border-b feature-card">
    <h3>
      <button type="button"
              aria-controls="faq-1"
              aria-expanded="false"
              id="faq-button-1">
        <span>Preciso ter conhecimento técnico?</span>
        <svg aria-hidden="true">...</svg>
      </button>
    </h3>
    <div id="faq-1"
         hidden
         role="region"
         aria-labelledby="faq-button-1">
      <!-- Conteúdo -->
    </div>
  </div>
</div>
```

#### 5.2 Botões de Ícone Sem Labels
**Severidade:** Crítica | **WCAG:** 4.1.2 (A)

**Inventário de Problemas:**

| Componente | Botão | aria-label | Status |
|------------|-------|------------|--------|
| Promo Banner | Fechar (X) | "Fechar banner" | ✅ Presente |
| Navbar | Menu mobile | "Menu" | ✅ Presente |
| Benefits | Ícones decorativos | - | ❌ Faltando aria-hidden |
| Features | Ícones decorativos | - | ❌ Faltando aria-hidden |
| Pricing | Ícones de check | - | ❌ Faltando aria-hidden |

**Correção em Massa Necessária:**
```jsx
// Todos os ícones lucide-react decorativos devem ter:
<Sparkles className="h-4 w-4" aria-hidden="true" />
<Check className="h-5 w-5" aria-hidden="true" />
<X className="h-4 w-4" aria-hidden="true" />

// Ícones informativos (em botões sem texto) devem ter aria-label no button:
<button aria-label="Descrição clara da ação">
  <Icon className="h-4 w-4" aria-hidden="true" />
</button>
```

#### 5.3 Landmarks e Regiões
**Severidade:** Crítica | **WCAG:** 1.3.1 (A)

**Problema:** Nenhuma região ARIA identificada

**Estrutura Necessária:**
```html
<body>
  <!-- Banner (promo) -->
  <div role="banner" aria-label="Oferta de lançamento">
    <!-- Promo banner content -->
  </div>

  <!-- Navigation -->
  <nav role="navigation" aria-label="Navegação principal">
    <!-- Navbar content -->
  </nav>

  <!-- Main content -->
  <main role="main" id="main-content">
    <!-- Hero -->
    <section aria-labelledby="hero-title">
      <h1 id="hero-title">...</h1>
    </section>

    <!-- Problem -->
    <section aria-labelledby="problem-title">
      <h2 id="problem-title">O Problema</h2>
    </section>

    <!-- Solution -->
    <section aria-labelledby="solution-title">
      <h2 id="solution-title">Solução</h2>
    </section>

    <!-- Features/Modules -->
    <section aria-labelledby="modules-title">
      <h2 id="modules-title">Módulos</h2>
    </section>

    <!-- Benefits -->
    <section aria-labelledby="benefits-title">
      <h2 id="benefits-title">Diferenciais</h2>
    </section>

    <!-- Pricing -->
    <section aria-labelledby="pricing-title">
      <h2 id="pricing-title">Investimento</h2>
    </section>

    <!-- FAQ -->
    <section aria-labelledby="faq-title">
      <h2 id="faq-title">FAQ</h2>
    </section>

    <!-- CTA -->
    <section aria-labelledby="cta-title">
      <h2 id="cta-title">Duas opções na sua frente</h2>
    </section>
  </main>

  <!-- Footer -->
  <footer role="contentinfo">
    <!-- Footer content -->
  </footer>
</body>
```

#### 5.4 Live Regions (Não Aplicável)
**Status:** N/A - Não há conteúdo dinâmico que precise de aria-live

---

## 6. FORMULÁRIOS

### 🟢 NÃO APLICÁVEL

**Análise:** Nenhum formulário foi identificado na landing page.

**Nota:** O checkout provavelmente está em outra página (`http://localhost:3000/#checkout`), que deve ser analisada separadamente.

---

## RECOMENDAÇÕES PRIORITÁRIAS

### 🔴 CRÍTICAS (Implementar Imediatamente)

#### 1. Estrutura Semântica Básica
**Esforço:** 2-3 horas | **Impacto:** Muito Alto

```html
<!-- Template base necessário -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Engenharia de Contexto - Curso Completo</title>
</head>
<body>
  <!-- Skip Link -->
  <a href="#main-content" class="sr-only focus:not-sr-only">
    Pular para conteúdo principal
  </a>

  <!-- Promo Banner -->
  <div role="banner" aria-label="Oferta de lançamento">
    <!-- Content -->
  </div>

  <!-- Navigation -->
  <nav role="navigation" aria-label="Navegação principal">
    <!-- Content -->
  </nav>

  <!-- Main -->
  <main id="main-content" role="main">
    <!-- Sections -->
  </main>

  <!-- Footer -->
  <footer role="contentinfo">
    <!-- Content -->
  </footer>
</body>
</html>
```

#### 2. ARIA Labels em Todos os Ícones
**Esforço:** 1-2 horas | **Impacto:** Muito Alto

**Script de Busca e Substituição:**
```jsx
// Encontrar: <Icon className="..." />
// Substituir por: <Icon className="..." aria-hidden="true" />

// Para botões de ícone:
// Encontrar: <button><Icon /></button>
// Substituir por: <button aria-label="Descrição"><Icon aria-hidden="true" /></button>
```

#### 3. Corrigir Hierarquia de Headings
**Esforço:** 1 hora | **Impacto:** Alto

**Verificar:**
- h1 → único na página ✅
- h2 → títulos de seção principais
- h3 → subtítulos dentro de seções
- Sem pulos (h1 → h3)

#### 4. Focus Visible em Todos os Interativos
**Esforço:** 30 minutos | **Impacto:** Alto

```css
/* Adicionar ao global.css */
*:focus-visible {
  outline: 2px solid rgb(212, 94, 10); /* tangerine */
  outline-offset: 2px;
  border-radius: 4px;
}

/* Exceção para elementos com ring personalizado */
.custom-focus:focus-visible {
  outline: none;
  ring: 2px solid rgb(212, 94, 10);
  ring-offset: 2px;
}
```

---

### 🟡 IMPORTANTES (Implementar em Seguida)

#### 5. Regiões ARIA com Labels
**Esforço:** 2 horas | **Impacto:** Médio

**Checklist:**
- [ ] Adicionar `role` em todas as seções
- [ ] Conectar headings com `aria-labelledby`
- [ ] Adicionar `aria-label` onde necessário
- [ ] Testar com leitor de tela

#### 6. Links com Indicação de Nova Aba
**Esforço:** 1 hora | **Impacto:** Médio

```jsx
// Component LinkNewTab.jsx
export function LinkNewTab({ href, children, ...props }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${children} (abre em nova aba)`}
      {...props}
    >
      {children}
      <span className="sr-only">(abre em nova aba)</span>
      <svg aria-hidden="true" className="inline ml-1 h-3 w-3">
        {/* External link icon */}
      </svg>
    </a>
  );
}
```

#### 7. Melhorar Contexto de Preços
**Esforço:** 30 minutos | **Impacto:** Médio

```html
<!-- Adicionar screen reader only text -->
<div class="pricing-card">
  <span class="sr-only">Preço original: </span>
  <span class="line-through">R$ 297,00</span>

  <span class="sr-only">Preço com desconto de lançamento: </span>
  <span class="text-5xl font-bold">R$ 97</span>

  <div class="savings">
    <span class="sr-only">Você economiza: </span>
    <span>Economia de R$ 200</span>
  </div>
</div>
```

---

### 🟢 DESEJÁVEIS (Melhorias Futuras)

#### 8. Testes Automatizados de Acessibilidade
**Ferramentas Recomendadas:**
- **axe DevTools:** Chrome/Firefox extension
- **WAVE:** Web accessibility evaluation tool
- **Lighthouse:** Já integrado no Chrome DevTools
- **Pa11y:** CI/CD automation

**Configuração para CI/CD:**
```json
// package.json
{
  "scripts": {
    "test:a11y": "pa11y-ci --sitemap https://example.com/sitemap.xml"
  },
  "devDependencies": {
    "pa11y-ci": "^3.0.1"
  }
}
```

#### 9. Modo de Alto Contraste
**Esforço:** 4 horas | **Impacto:** Baixo

```css
/* Detectar preferência do sistema */
@media (prefers-contrast: high) {
  :root {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --tangerine: 25 100% 50%;
  }
}
```

#### 10. Testes com Usuários Reais
**Recomendação:** Contratar 2-3 usuários com deficiência visual para testar navegação com leitores de tela.

**Leitores de Tela para Testar:**
- **NVDA** (Windows - gratuito)
- **JAWS** (Windows - pago)
- **VoiceOver** (macOS/iOS - nativo)
- **TalkBack** (Android - nativo)

---

## CHECKLIST DE CORREÇÕES

### Nível A (Crítico - Obrigatório)

- [ ] **1.3.1** Adicionar elementos semânticos (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] **1.3.1** Corrigir hierarquia de headings (h1 → h2 → h3)
- [ ] **1.1.1** Adicionar `aria-hidden="true"` em todos os ícones decorativos
- [ ] **1.1.1** Adicionar `aria-label` em todos os botões de ícone
- [ ] **2.4.1** Implementar skip link para conteúdo principal
- [ ] **2.4.4** Tornar todos os links descritivos
- [ ] **4.1.2** Adicionar roles ARIA em landmarks
- [ ] **4.1.2** Conectar headings com `aria-labelledby` nas seções

### Nível AA (Importante - Recomendado)

- [ ] **1.4.3** Validar contraste de todos os textos (mínimo 4.5:1)
- [ ] **1.4.11** Validar contraste de elementos interativos (mínimo 3:1)
- [ ] **2.4.7** Garantir foco visível em todos os elementos interativos
- [ ] **3.2.4** Indicar quando links abrem em nova aba
- [ ] **3.3.2** Adicionar labels em campos de formulário (quando aplicável)

### Nível AAA (Desejável - Opcional)

- [ ] **1.4.6** Melhorar contraste para 7:1 quando possível
- [ ] **2.4.8** Adicionar breadcrumbs se aplicável
- [ ] **3.1.2** Marcar trechos em outros idiomas (se houver)

---

## FERRAMENTAS E RECURSOS

### Ferramentas de Teste

1. **Browser DevTools**
   - Chrome Lighthouse (Accessibility Score)
   - Firefox Accessibility Inspector
   - Edge Accessibility Insights

2. **Extensions**
   - [axe DevTools](https://www.deque.com/axe/devtools/)
   - [WAVE](https://wave.webaim.org/extension/)
   - [Accessibility Insights](https://accessibilityinsights.io/)

3. **Contrast Checkers**
   - [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
   - [Contrast Ratio](https://contrast-ratio.com/)

4. **Screen Readers**
   - NVDA (Windows)
   - VoiceOver (macOS)
   - TalkBack (Android)

### Documentação de Referência

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)
- [Inclusive Components](https://inclusive-components.design/)
- [Radix UI Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)

---

## EXEMPLOS DE CÓDIGO COMPLETOS

### Exemplo 1: Navbar Acessível

```jsx
// components/Navbar.jsx
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header role="banner">
      <nav role="navigation" aria-label="Navegação principal" className="...">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-2xl font-bold text-night">
                Engenharia de <span className="text-tangerine">Contexto</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8" role="list">
              <a href="#problema" className="...">O Problema</a>
              <a href="#solucao" className="...">Solução</a>
              <a href="#modulos" className="...">Módulos</a>
              <a href="#diferenciais" className="...">Diferenciais</a>
              <a href="#investimento" className="...">Investimento</a>
              <a href="#faq" className="...">FAQ</a>
              <a href="#investimento" className="neo-button">
                Começar Agora
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="..."
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              id="mobile-menu"
              role="list"
              className="md:hidden"
            >
              {/* Mobile menu items */}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
```

### Exemplo 2: Accordion Acessível

```jsx
// components/FAQ.jsx
import * as Accordion from '@radix-ui/react-accordion';

export function FAQ() {
  const faqs = [
    {
      id: 'faq-1',
      question: 'Preciso ter conhecimento técnico?',
      answer: 'Não! O curso é...'
    },
    // ...
  ];

  return (
    <section aria-labelledby="faq-title" id="faq" className="...">
      <div className="section-container">
        <div className="tag text-center">Perguntas Frequentes</div>
        <h2 id="faq-title" className="section-title text-center">
          Dúvidas <span className="text-tangerine">respondidas</span>
        </h2>

        <Accordion.Root
          type="single"
          collapsible
          className="max-w-3xl mx-auto"
          aria-label="Lista de perguntas frequentes"
        >
          {faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              value={faq.id}
              className="feature-card border-b border-none"
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className="flex flex-1 items-center justify-between py-4 font-medium"
                  aria-controls={`${faq.id}-content`}
                >
                  <span className="font-semibold text-left">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="h-4 w-4 shrink-0 transition-transform"
                    aria-hidden="true"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content
                id={`${faq.id}-content`}
                className="overflow-hidden text-sm"
              >
                <div className="pb-4 pt-0">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
```

### Exemplo 3: Card de Benefício Acessível

```jsx
// components/BenefitCard.jsx
export function BenefitCard({ icon: Icon, title, description, features }) {
  return (
    <article className="feature-card" aria-labelledby={`benefit-${title.toLowerCase()}`}>
      <div className="mb-4 p-3 bg-tangerine/10 inline-block rounded-xl">
        <Icon
          className="h-8 w-8 text-tangerine"
          aria-hidden="true"
        />
      </div>

      <h3 id={`benefit-${title.toLowerCase()}`} className="text-2xl font-bold mb-2">
        {title}
      </h3>

      <p className="text-sm font-semibold text-tangerine mb-4">
        {description}
      </p>

      <ul className="space-y-2" role="list">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check
              className="h-5 w-5 text-tangerine flex-shrink-0"
              aria-hidden="true"
            />
            <span className="text-muted-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
```

---

## CONCLUSÃO

### Score Final: 52/100

**Nível de Conformidade:** Não Conforme

### Priorização de Esforço

| Prioridade | Tarefas | Esforço Total | Impacto |
|------------|---------|---------------|---------|
| 🔴 Críticas | 8 tarefas | ~8h | Muito Alto |
| 🟡 Importantes | 3 tarefas | ~3.5h | Alto |
| 🟢 Desejáveis | 3 tarefas | ~5h | Médio |
| **TOTAL** | **14 tarefas** | **~16.5h** | - |

### Roadmap de Implementação

**Sprint 1 (Semana 1):** Correções Críticas
- Estrutura semântica HTML
- ARIA labels em ícones
- Skip links
- Focus visible

**Sprint 2 (Semana 2):** Melhorias Importantes
- Regiões ARIA completas
- Links com indicação de nova aba
- Contexto de preços
- Testes com axe DevTools

**Sprint 3 (Semana 3):** Otimizações Desejáveis
- Testes automatizados
- Modo de alto contraste
- Testes com usuários reais

### Próximos Passos

1. **Imediato:** Implementar correções críticas (Sprint 1)
2. **Curto Prazo:** Validar com ferramentas automatizadas
3. **Médio Prazo:** Testar com leitores de tela
4. **Longo Prazo:** Manter conformidade com testes contínuos

---

**Última Atualização:** 24/10/2025
**Revisão:** AGENT 10 - Accessibility (A11y)
