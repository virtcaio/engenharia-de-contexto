# GUIA COMPLETO DE BRANDING E ESTRUTURA - PRODUTIVIDADE COM IA

Este documento contém todos os detalhes necessários para criar uma nova página de vendas mantendo o mesmo padrão de branding, estrutura e design do projeto "Produtividade com IA".

---

## ÍNDICE

1. [Paleta de Cores](#1-paleta-de-cores)
2. [Tipografia](#2-tipografia)
3. [Estrutura Técnica](#3-estrutura-técnica)
4. [Sistema de Design e Classes CSS](#4-sistema-de-design-e-classes-css)
5. [Estrutura da Página de Vendas](#5-estrutura-da-página-de-vendas)
6. [Componentes da Página](#6-componentes-da-página)
7. [Animações e Transições](#7-animações-e-transições)
8. [Scripts de Rastreamento](#8-scripts-de-rastreamento)
9. [SEO e Meta Tags](#9-seo-e-meta-tags)
10. [Padrões de CTA (Call-to-Action)](#10-padrões-de-cta-call-to-action)
11. [Layout e Responsividade](#11-layout-e-responsividade)
12. [Checklist de Implementação](#12-checklist-de-implementação)

---

## 1. PALETA DE CORES

### Cores Principais

```css
/* Cores do Sistema (HSL) */
--primary: 24.6 95% 43.1%;        /* Laranja principal */
--primary-foreground: 60 9.1% 97.8%;
--secondary: 60 4.8% 95.9%;       /* Cinza claro */
--secondary-foreground: 24 9.8% 10%;
```

### Cores Customizadas da Marca

```javascript
// Definidas no tailwind.config.ts
colors: {
  night: "#141312",       // Preto/Cinza escuro - usado no footer e textos fortes
  jet: "#272726",         // Cinza escuro - usado em elementos secundários
  tangerine: "#D45E0A",   // LARANJA PRINCIPAL DA MARCA - usado em CTAs, destaques, ícones
  viridian: "#664869",    // Roxo/Vinho - usado em gradientes e detalhes
  platinum: "#E9E5DE",    // Bege claro - usado em backgrounds secundários
  seasalt: "#FAF9F7",     // Branco/Creme - COR DE FUNDO PRINCIPAL
}
```

### Uso das Cores

- **Tangerine (#D45E0A)**: Cor primária para:
  - Botões de CTA (Call-to-Action)
  - Palavras-chave destacadas em títulos
  - Ícones de destaque
  - Links hover
  - Elementos de ênfase
  - Badges e tags importantes

- **Night (#141312)**: Usado para:
  - Textos principais
  - Footer
  - Botões secundários importantes
  - Contraste alto quando necessário

- **Seasalt (#FAF9F7)**: Cor de fundo principal
  - Background da página
  - Cards e seções claras

- **Viridian (#664869)**: Cor de suporte
  - Gradientes em conjunto com tangerine
  - Detalhes visuais
  - Elementos decorativos

### Gradientes Comuns

```css
/* Gradiente principal (laranja para roxo) */
bg-gradient-to-r from-tangerine to-viridian

/* Gradiente suave para backgrounds */
bg-gradient-to-b from-tangerine/5 to-seasalt

/* Gradiente de destaques */
bg-gradient-to-r from-tangerine/10 to-viridian/10
```

---

## 2. TIPOGRAFIA

### Fonte Principal

**Plus Jakarta Sans** - Google Fonts

```html
<!-- No HTML -->
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
/* No CSS/Tailwind */
font-family: {
  sentient: ["Plus Jakarta Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
  jakarta: ["Plus Jakarta Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
}
```

### Hierarquia de Títulos

```css
/* H1 - Hero/Título Principal */
.text-4xl sm:text-5xl md:text-6xl lg:text-7xl
font-bold
leading-tight

/* H2 - Títulos de Seção */
.section-title
/* Equivale a: */
.text-4xl sm:text-5xl
.font-bold
.mb-6
.tracking-tight

/* H3 - Sub-títulos */
.text-2xl
.font-bold
.mb-3 ou .mb-6

/* Subtítulos/Descrições de Seção */
.section-subtitle
/* Equivale a: */
.text-xl
.text-muted-foreground
.mb-12
.max-w-3xl
.mx-auto
```

### Pesos de Fonte

- **400 (Regular)**: Texto corpo, parágrafos
- **500 (Medium)**: Tags, labels, textos de destaque leve
- **600 (Semi-Bold)**: Sub-títulos, cards
- **700 (Bold)**: Títulos principais, CTAs

---

## 3. ESTRUTURA TÉCNICA

### Stack Tecnológico

```json
{
  "framework": "React 18.3.1",
  "bundler": "Vite 5.4.1",
  "linguagem": "TypeScript 5.5.3",
  "styling": "Tailwind CSS 3.4.11",
  "ui-components": "shadcn-ui (Radix UI primitives)",
  "routing": "React Router DOM 6.26.2",
  "state-management": "TanStack Query 5.56.2",
  "animations": "tailwindcss-animate",
  "icons": "lucide-react 0.462.0"
}
```

### Estrutura de Pastas

```
/
├── public/
│   ├── fonts/
│   ├── images/
│   ├── favicon.ico
│   ├── opengraph.png
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── hero.png
│   │       ├── prints/           # Screenshots do curso
│   │       └── tools/            # Logos das ferramentas
│   │
│   ├── components/
│   │   ├── ui/                   # Componentes shadcn
│   │   ├── Header.tsx
│   │   ├── NavBar.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── Features.tsx
│   │   ├── Benefits.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── CallToAction.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx            # Componente customizado de botão
│   │   ├── OptimizedImage.tsx
│   │   ├── ActiveVisitors.tsx
│   │   ├── PromoBanner.tsx
│   │   └── TimeCalculator.tsx
│   │
│   ├── pages/
│   │   ├── Index.tsx             # Página principal
│   │   └── NotFound.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts              # Utilitários (cn, etc)
│   │   └── utm-utils.ts          # Gestão de UTMs
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css                 # Estilos globais
│   └── App.css
│
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. SISTEMA DE DESIGN E CLASSES CSS

### Classes Customizadas Reutilizáveis

#### Glass Card
```css
.glass-card {
  @apply backdrop-blur-md bg-white/30 border border-white/40 shadow-sm;
}
```

#### Botão Neo/CTA
```css
.neo-button {
  @apply relative overflow-hidden transition-all duration-300
         bg-tangerine text-white font-bold px-8 py-4
         rounded-md shadow-md hover:shadow-lg hover:bg-tangerine/90;
}
```

#### Container de Seção
```css
.section-container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24;
}
```

#### Card de Feature
```css
.feature-card {
  @apply rounded-xl p-6 shadow-sm transition-all duration-300
         hover:shadow-md bg-white;
}
```

#### Tag/Badge
```css
.tag {
  @apply inline-block bg-secondary px-3 py-1
         rounded-full text-xs font-semibold;
}
```

#### Título de Seção
```css
.section-title {
  @apply text-4xl sm:text-5xl font-bold mb-6 tracking-tight;
}
```

#### Subtítulo de Seção
```css
.section-subtitle {
  @apply text-xl text-muted-foreground mb-12 max-w-3xl mx-auto;
}
```

### Border Radius Padrão

```css
--radius: 0.75rem; /* 12px */

/* Aplicações: */
.rounded-lg  /* var(--radius) */
.rounded-md  /* calc(var(--radius) - 2px) */
.rounded-sm  /* calc(var(--radius) - 4px) */
```

---

## 5. ESTRUTURA DA PÁGINA DE VENDAS

### Ordem dos Componentes (Anatomia da Landing Page)

```tsx
<div className="min-h-screen bg-seasalt">
  {/* 1. Banner Promocional (sticky top) */}
  <PromoBanner />

  {/* 2. Indicador de Visitantes Ativos */}
  <ActiveVisitors />

  {/* 3. Navegação */}
  <NavBar />

  {/* 4. Hero/Header - Proposta de Valor Principal */}
  <Header />

  {/* 5. Problema - Dor do cliente */}
  <Problem />

  {/* 6. Calculadora de Tempo (Engajamento) */}
  <TimeCalculator />

  {/* 7. Solução - Apresentação do Método */}
  <Solution />

  {/* 8. Features/Módulos - Conteúdo do Programa */}
  <Features />

  {/* 9. Prova Real - Screenshots/Evidências */}
  <ProvaReal />

  {/* 10. Benefícios - Transformação */}
  <Benefits />

  {/* 11. Depoimentos - Prova Social */}
  <TestimonialsCarousel />

  {/* 12. Preço - Investimento */}
  <Pricing />

  {/* 13. FAQ - Objeções */}
  <FAQ />

  {/* 14. CTA Final - Última chance */}
  <CallToAction />

  {/* 15. Footer */}
  <Footer />
</div>
```

### Padrão de Seções

Toda seção segue este padrão visual:

```tsx
<section id="section-id" className="py-8 bg-[background-color] relative">
  <div className="section-container">
    {/* Tag identificadora */}
    <div className="flex justify-center w-full mb-8">
      <div className="tag text-center animate-fade-up opacity-0"
           style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        Nome da Seção
      </div>
    </div>

    {/* Título principal */}
    <h2 className="section-title text-center animate-fade-up opacity-0 mt-6"
        style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
      Título com <span className="text-tangerine">Destaque</span>
    </h2>

    {/* Subtítulo/Descrição */}
    <p className="section-subtitle text-center animate-fade-up opacity-0"
       style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
      Descrição da seção
    </p>

    {/* Conteúdo da seção */}
    <div className="mt-16">
      {/* Conteúdo específico */}
    </div>
  </div>
</section>
```

---

## 6. COMPONENTES DA PÁGINA

### 6.1 NavBar

**Características:**
- Fixa no topo (sticky)
- Background semi-transparente com blur
- Links de navegação âncora
- Logo à esquerda

```tsx
<nav className="sticky top-0 z-50 bg-seasalt/80 backdrop-blur-md border-b border-muted">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    {/* Logo + Links */}
  </div>
</nav>
```

### 6.2 Header (Hero)

**Elementos:**
1. Tag de categoria (.tag)
2. Título principal (H1) com números em destaque
3. Subtítulo explicativo
4. Duplo CTA (primário + secundário)
5. Imagem hero com animação fade-up

**Padrão do Título:**
```tsx
<h1>
  Método <span className="text-tangerine">777</span>:
  Domine <span className="text-tangerine">7</span> ferramentas...
</h1>
```

### 6.3 Problem (Problema)

**Estrutura:**
1. Tag "O Problema"
2. Título impactante
3. Citação de autoridade (McKinsey, Harvard, etc)
4. Grid de 3 cards com ícones (Clock, XCircle, BrainCircuit)
5. Lista de sintomas (checkmarks)
6. Pergunta reflexiva
7. Dados estatísticos com fontes

**Padrão de Cards:**
```tsx
<div className="feature-card animate-fade-up opacity-0"
     style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
  <div className="mb-4 p-2 bg-muted inline-block rounded-lg">
    <Icon className="h-8 w-8 text-tangerine" />
  </div>
  <h3 className="text-xl font-bold mb-2">Título do Card</h3>
  <p className="text-muted-foreground">Descrição</p>
</div>
```

### 6.4 Solution (Solução)

**Elementos:**
1. Carrossel de imagens (auto-play, 3s)
2. Apresentação do método (Método 7-7-7)
3. Framework FFF explicado em 3 cards
4. CTA para investimento

**Framework FFF:**
```tsx
<div className="grid grid-cols-3 gap-4">
  {/* Fluxos */}
  {/* Ferramentas */}
  {/* Fundamentos */}
</div>
```

### 6.5 Features (Módulos)

**Estrutura:**
- Array de 7 módulos (Dia 1 a Dia 7)
- Cada módulo tem:
  - day: número do dia
  - title: nome da ferramenta
  - description: promessa de valor
  - icon: logo da ferramenta
  - details: array de benefícios (com uma "AÇÃO IMEDIATA")

**Layout:**
- Grid alternado (imagem esquerda/direita)
- Círculo decorativo para o ícone
- Card secundário com detalhes

```tsx
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
  {/* Coluna 1: Ícone circular */}
  <div className="lg:col-span-2">
    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-tangerine/10 to-viridian/10">
      <div className="w-36 h-36 rounded-full bg-white shadow-lg">
        {icon}
      </div>
    </div>
  </div>

  {/* Coluna 2: Conteúdo */}
  <div className="lg:col-span-3">
    <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium mb-4">
      Dia {day}
    </div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-muted-foreground mb-5">{description}</p>

    <div className="bg-secondary/50 rounded-lg p-4">
      <ul className="space-y-2">
        {details.map((detail) => (
          <li className="flex items-start space-x-2">
            <span className="text-tangerine mt-1">•</span>
            <span dangerouslySetInnerHTML={{ __html: detail }}></span>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
```

### 6.6 Benefits (Benefícios)

**Componentes:**
1. **Calculadora Interativa**
   - Input: valor da hora
   - Slider: horas recuperadas (1-15h)
   - Output: valor anual, ROI, dias para payback

2. **Lista de Benefícios Não-Financeiros**
   - 6 benefícios com ícones (Users, HeartHandshake, Clock, TrendingUp, Briefcase, Wallet)
   - Layout flex com ícones à esquerda

### 6.7 TestimonialsCarousel (Depoimentos)

**Características:**
- Componente Carousel do shadcn
- Auto-rotate a cada 5 segundos
- Indicadores de navegação (dots)
- Botões prev/next

**Estrutura de cada depoimento:**
```tsx
{
  name: "Nome",
  title: "Cargo/Empresa (opcional)",
  quote: "Depoimento completo",
  rating: 5,
  highlight: "Frase de destaque"
}
```

**Visual:**
- Aspas decorativas
- Avatar circular com inicial
- 5 estrelas
- Badge com highlight

### 6.8 Pricing (Preço)

**Layout:**
- Grid 2 colunas (lg:grid-cols-3)
- Coluna esquerda (lg:col-span-2): Breakdown de valor
- Coluna direita: Card de investimento

**Elementos do Card de Preço:**
1. Badge "Oferta de Lançamento"
2. Preço riscado (valor original)
3. Preço em destaque (parcelado e à vista)
4. Botão CTA principal
5. Ícone de segurança
6. **Box de Garantia 777:**
   - 3 ícones (Shield, Check, Clock)
   - 7 dias de garantia
   - 7 ferramentas dominadas
   - 7 horas recuperadas
7. Lista de inclusões (checkmarks)
8. Box de bônus limitados

**Padrão de Preço:**
```tsx
<div className="flex flex-col items-center justify-center">
  <span className="text-lg line-through text-muted-foreground mb-2">
    R$1.626,00
  </span>
  <span className="text-4xl font-bold text-tangerine mb-2">
    12x de R$42,28
  </span>
  <span className="text-lg text-tangerine">
    ou R$397,00 à vista
  </span>
</div>
```

### 6.9 FAQ

**Componente:** Accordion do shadcn

**Estrutura:**
- Array de FAQs (question + answer)
- Accordion collapsible
- Estilo minimalista

**Categorias de Perguntas:**
- Requisitos técnicos
- Tempo de resultados
- Custo das ferramentas
- Aplicabilidade
- Atualização do conteúdo
- Suporte
- Acesso

### 6.10 CallToAction (CTA Final)

**Características:**
- Background tangerine
- Texto branco
- Gradientes decorativos com blur
- Pergunta final persuasiva
- Botão CTA escuro (night)
- 3 ícones de confiança (Shield, CreditCard, ArrowRight)
- P.S. com cálculo de tempo

**Background:**
```tsx
<section className="py-8 bg-tangerine text-white relative overflow-hidden">
  <div className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full bg-viridian/20 blur-3xl"></div>
  <div className="absolute -bottom-64 -left-64 w-[500px] h-[500px] rounded-full bg-viridian/20 blur-3xl"></div>
  {/* Conteúdo */}
</section>
```

### 6.11 Footer

**Estrutura:**
- Background night (#141312)
- Grid 3 colunas
- Coluna 1-2: Sobre + Redes Sociais (YouTube, Instagram, LinkedIn)
- Coluna 3: Contato + Links Rápidos
- Copyright no final

**Padrão de Links:**
```tsx
<a href="https://..." target="_blank" rel="noopener noreferrer"
   className="text-white/70 hover:text-tangerine transition-colors">
```

### 6.12 Button (Componente Customizado)

**Variantes:**
- `default`: Botão padrão
- `outline`: Botão com borda
- `ghost`: Botão sem fundo
- `link`: Link estilizado
- `cta`: **Botão principal de conversão** (neo-button)

**Tamanhos:**
- `sm`: h-9 px-3 text-sm
- `md`: h-10 px-4 py-2
- `lg`: h-12 px-8 py-4 text-lg

**Tracking:**
- Integração com Facebook Pixel
- Rastreamento automático de cliques
- Props: `trackEvent`, `eventName`

**Uso do CTA:**
```tsx
<Button variant="cta" size="lg">
  Quero Recuperar Meu Tempo
</Button>
```

---

## 7. ANIMAÇÕES E TRANSIÇÕES

### Animações Tailwind Customizadas

```javascript
// tailwind.config.ts - keyframes
keyframes: {
  "fade-in": {
    "0%": { opacity: "0", transform: "translateY(10px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  "fade-up": {
    "0%": { opacity: "0", transform: "translateY(20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  "fade-down": {
    "0%": { opacity: "0", transform: "translateY(-20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" },
  },
  "fade-right": {
    "0%": { opacity: "0", transform: "translateX(-20px)" },
    "100%": { opacity: "1", transform: "translateX(0)" },
  },
  "fade-left": {
    "0%": { opacity: "0", transform: "translateX(20px)" },
    "100%": { opacity: "1", transform: "translateX(0)" },
  },
  "scale-in": {
    "0%": { opacity: "0", transform: "scale(0.95)" },
    "100%": { opacity: "1", transform: "scale(1)" },
  },
}

animation: {
  "fade-in": "fade-in 0.6s ease-out",
  "fade-up": "fade-up 0.6s ease-out",
  "fade-down": "fade-down 0.6s ease-out",
  "fade-right": "fade-right 0.6s ease-out",
  "fade-left": "fade-left 0.6s ease-out",
  "scale-in": "scale-in 0.6s ease-out",
  "pulse-slow": "pulse 3s infinite",
}
```

### Animação Float (CSS puro)

```css
.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
```

### Padrão de Animação por Seção

Cada elemento animado usa:

```tsx
className="animate-fade-up opacity-0"
style={{
  animationDelay: '100ms',  // Incrementado em +200ms por elemento
  animationFillMode: 'forwards'
}}
```

**Sequência típica:**
- Tag: 100ms
- Título: 300ms
- Subtítulo: 500ms
- Conteúdo 1: 700ms
- Conteúdo 2: 900ms
- etc.

### Intersection Observer (Scroll Animations)

```tsx
// No Index.tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
}, []);
```

### Transições em Hover

```css
/* Botões */
transition-all duration-300

/* Cards */
transition-all duration-300 hover:shadow-md

/* Links */
transition-colors
```

---

## 8. SCRIPTS DE RASTREAMENTO

### Facebook Pixel

```html
<script defer>
  !function(f,b,e,v,n,t,s) {
    if(f.fbq)return;
    n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
  }(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id=SEU_PIXEL_ID&ev=PageView&noscript=1" />
</noscript>
```

### Google Analytics (gtag.js)

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script defer>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Utmify (Gestão de UTMs)

```html
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-xcod-sck
  data-utmify-prevent-subids
  async
  defer
></script>
```

### PageTest.ai

```html
<script>window.ptaiParams = { team: 'SEU_TEAM_ID' };</script>
<script src='https://app.pagetest.ai/build/snippet/ptai.js?v=1.0.5'></script>
```

### Plerdy

```html
<script type="text/javascript" defer data-plerdy_code='1'>
  var _protocol="https:"==document.location.protocol?"https://":"http://";
  _site_hash_code = "SEU_HASH_CODE",_suid=SEU_UID, plerdyScript=document.createElement("script");
  plerdyScript.setAttribute("defer",""),plerdyScript.dataset.plerdymainscript="plerdymainscript",
  plerdyScript.src="https://d.plerdy.com/public/js/click/main.js?v="+Math.random();
  var plerdymainscript=document.querySelector("[data-plerdymainscript='plerdymainscript']");
  plerdymainscript&&plerdymainscript.parentNode.removeChild(plerdymainscript);
  try{document.head.appendChild(plerdyScript)}catch(t){console.log(t,"unable add script tag")}
</script>
```

### Encharge

```html
<script type="text/javascript">
  !function(){
    if(!window.EncTracking||!window.EncTracking.started){
      window.EncTracking=Object.assign({}, window.EncTracking, {
        queue:window.EncTracking&&window.EncTracking.queue?window.EncTracking.queue:[],
        track:function(t){this.queue.push({type:"track",props:t})},
        identify:function(t){this.queue.push({type:"identify",props:t})},
        started:!0
      });
      var t=window.EncTracking;
      t.writeKey="SEU_WRITE_KEY",t.hasOptedIn=true,t.shouldGetConsent=true;
      // ... resto do código
    }
  }();
</script>
```

### Vercel Analytics & Speed Insights

```tsx
// No App.tsx
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Dentro do componente:
<SpeedInsights />
<Analytics />
```

---

## 9. SEO E META TAGS

### Meta Tags Obrigatórias

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Título e Descrição -->
  <title>Título do Curso/Produto</title>
  <meta name="description" content="Descrição persuasiva do produto (máx 160 chars)" />
  <meta name="author" content="Seu Nome" />

  <!-- Open Graph (Facebook) -->
  <meta property="og:title" content="Título do Curso/Produto" />
  <meta property="og:description" content="Descrição persuasiva" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://seu-site.com/opengraph.png" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@seu_usuario" />
  <meta name="twitter:image" content="https://seu-site.com/opengraph.png" />

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />

  <!-- Preconnect para performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="dns-prefetch" href="https://connect.facebook.net">
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
</head>
```

### Robots.txt

```txt
User-agent: *
Allow: /
Sitemap: https://seu-site.com/sitemap.xml
```

---

## 10. PADRÕES DE CTA (CALL-TO-ACTION)

### Texto Principal do CTA

**Fórmula:** Ação + Benefício

Exemplos do projeto:
- "Quero Recuperar Meu Tempo"
- "QUERO RECUPERAR MEU TEMPO" (uppercase para CTA final)

### Posicionamento dos CTAs

1. **Header** (above the fold)
   - CTA primário: Leva para #investimento
   - CTA secundário: Leva para #modulos

2. **Solution** (após problema)
   - CTA: Leva para #investimento

3. **Pricing** (principal)
   - CTA no card de preço
   - CTA final após o breakdown

4. **CallToAction** (última chance)
   - CTA final com botão escuro (night)

### Link de Checkout

Usar função de UTMs:

```tsx
import { useUTMs } from '@/lib/utm-utils';

const { getLastLinkWithUTMs } = useUTMs();

<a href={getLastLinkWithUTMs()} target="_blank" rel="noopener noreferrer">
  <Button variant="cta" size="lg">
    Texto do CTA
  </Button>
</a>
```

### Elementos de Confiança Próximos ao CTA

```tsx
<div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
  <Shield className="h-4 w-4 mr-1" /> Pagamento seguro
</div>
```

---

## 11. LAYOUT E RESPONSIVIDADE

### Breakpoints Tailwind

```javascript
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1400px',  // customizado
}
```

### Container Principal

```css
.section-container {
  max-width: 7xl;     /* 1280px */
  margin: 0 auto;
  padding: 1rem 1.5rem;
  padding-top: 4rem;
  padding-bottom: 6rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}
```

### Grid Layouts Comuns

#### Grid 2 Colunas (lg+)
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
```

#### Grid 3 Colunas (md+)
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
```

#### Grid 5 Colunas com Split 2-3
```tsx
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
  <div className="lg:col-span-2">{/* Imagem/Ícone */}</div>
  <div className="lg:col-span-3">{/* Conteúdo */}</div>
</div>
```

### Mobile-First Approach

Sempre começar com a versão mobile:

```tsx
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
```

### Padding/Spacing Responsivo

```tsx
className="px-4 sm:px-6"        // Horizontal
className="py-16 sm:py-24"      // Vertical
```

### Media Queries Customizadas (CSS)

```css
@media (max-width: 640px) {
  h1, h2, h3 {
    font-size: 1.25rem;
  }

  .section-title {
    font-size: 1.75rem;
  }
}
```

---

## 12. CHECKLIST DE IMPLEMENTAÇÃO

### 🎨 Branding e Design

- [ ] Cores customizadas definidas no tailwind.config.ts
  - [ ] night, tangerine, viridian, seasalt
- [ ] Google Fonts carregadas (Plus Jakarta Sans)
- [ ] Classes CSS customizadas criadas em index.css
  - [ ] .glass-card
  - [ ] .neo-button
  - [ ] .section-container
  - [ ] .feature-card
  - [ ] .tag
  - [ ] .section-title
  - [ ] .section-subtitle
- [ ] Animações configuradas no tailwind.config.ts
- [ ] Border radius padrão definido (0.75rem)

### 📄 Estrutura de Componentes

- [ ] Componente Header criado
  - [ ] Tag + Título + Subtítulo
  - [ ] CTAs (primário + secundário)
  - [ ] Imagem hero
- [ ] Componente Problem criado
  - [ ] Grid de 3 cards com ícones
  - [ ] Lista de sintomas
  - [ ] Dados estatísticos
- [ ] Componente Solution criado
  - [ ] Carrossel de imagens
  - [ ] Framework explicado (FFF ou similar)
  - [ ] CTA
- [ ] Componente Features criado
  - [ ] Array de módulos/ferramentas
  - [ ] Layout alternado
  - [ ] Ícones das ferramentas
- [ ] Componente Benefits criado
  - [ ] Calculadora (opcional mas recomendado)
  - [ ] Lista de benefícios com ícones
- [ ] Componente Testimonials criado
  - [ ] Carousel configurado
  - [ ] Auto-rotate
  - [ ] Array de depoimentos
- [ ] Componente Pricing criado
  - [ ] Breakdown de valor
  - [ ] Card de preço
  - [ ] Garantia destacada
  - [ ] Bônus
- [ ] Componente FAQ criado
  - [ ] Accordion do shadcn
  - [ ] Array de perguntas
- [ ] Componente CallToAction criado
  - [ ] Background tangerine
  - [ ] Gradientes decorativos
  - [ ] CTA final
- [ ] Componente Footer criado
  - [ ] Redes sociais
  - [ ] Links rápidos
  - [ ] Copyright
- [ ] Componente Button customizado
  - [ ] Variante CTA
  - [ ] Tracking integrado

### 🛠️ Funcionalidades Técnicas

- [ ] React Router configurado
- [ ] TanStack Query configurado
- [ ] Lazy loading de componentes implementado
- [ ] Intersection Observer para animações no scroll
- [ ] Smooth scrolling para links âncora
- [ ] Gestão de UTMs implementada
- [ ] OptimizedImage component para performance

### 📊 Tracking e Analytics

- [ ] Facebook Pixel instalado
- [ ] Google Analytics instalado
- [ ] Utmify configurado (se usar)
- [ ] PageTest.ai configurado (opcional)
- [ ] Plerdy configurado (opcional)
- [ ] Encharge configurado (opcional)
- [ ] Vercel Analytics adicionado
- [ ] Speed Insights adicionado
- [ ] Tracking em botões CTA

### 🔍 SEO

- [ ] Meta title otimizado
- [ ] Meta description otimizada (máx 160 chars)
- [ ] Open Graph tags configuradas
- [ ] Twitter Card configurada
- [ ] Imagem og:image criada (1200x630px)
- [ ] Favicon adicionado
- [ ] robots.txt criado
- [ ] Preconnect para recursos externos

### 📱 Responsividade

- [ ] Mobile-first approach usado
- [ ] Breakpoints testados (sm, md, lg, xl)
- [ ] Grids responsivos configurados
- [ ] Imagens otimizadas para mobile
- [ ] Fontes ajustadas para mobile
- [ ] Espaçamento responsivo
- [ ] Navegação mobile funcionando

### 🎭 Animações

- [ ] Animações de entrada configuradas
- [ ] Delays escalonados por seção
- [ ] animationFillMode: 'forwards' em todos os elementos
- [ ] Intersection Observer funcionando
- [ ] Hover states em botões e links
- [ ] Transições suaves (transition-all duration-300)

### 🎯 Conversão

- [ ] CTAs posicionados estrategicamente
  - [ ] Header
  - [ ] Solution
  - [ ] Pricing (principal)
  - [ ] CallToAction final
- [ ] Texto dos CTAs orientado a ação + benefício
- [ ] Links de checkout configurados com UTMs
- [ ] Garantia destacada visualmente
- [ ] Bônus com senso de urgência
- [ ] Prova social (depoimentos) estrategicamente posicionada
- [ ] Elementos de confiança (Shield, Pagamento seguro)
- [ ] P.S. persuasivo no CTA final

### ✅ Conteúdo

- [ ] Títulos persuasivos e orientados a benefícios
- [ ] Problema claramente definido
- [ ] Solução apresentada como resposta ao problema
- [ ] Benefícios > Features
- [ ] Prova social autêntica
- [ ] Objeções respondidas no FAQ
- [ ] Senso de urgência criado
- [ ] Garantia explícita
- [ ] Dados e estatísticas citados com fontes

### 🚀 Performance

- [ ] Lazy loading de componentes
- [ ] Imagens otimizadas
- [ ] Scripts com defer/async
- [ ] DNS prefetch para recursos externos
- [ ] Preconnect para fontes
- [ ] Build otimizado (Vite)

### 🧪 Testes

- [ ] Teste em Chrome
- [ ] Teste em Safari
- [ ] Teste em Firefox
- [ ] Teste em mobile (iOS)
- [ ] Teste em mobile (Android)
- [ ] Links funcionando
- [ ] Âncoras funcionando
- [ ] CTAs direcionando para checkout correto
- [ ] Formulários funcionando (se houver)
- [ ] Tracking funcionando

---

## NOTAS FINAIS

### Filosofia de Design

Este projeto segue uma filosofia de **persuasão visual** onde:

1. **Cor laranja (tangerine)** é usada estrategicamente para guiar o olhar
2. **Espaçamento generoso** cria sensação de qualidade premium
3. **Animações sutis** engajam sem distrair
4. **Hierarquia clara** guia o leitor pela jornada de vendas
5. **Prova social** validada com depoimentos reais
6. **Números e dados** criam credibilidade
7. **Garantia destacada** remove risco

### Copywriting

O copy segue o framework **AIDA**:
- **Atenção**: Header com promessa clara (Método 777)
- **Interesse**: Problema relatable + dados convincentes
- **Desejo**: Solução + Benefícios + Prova social
- **Ação**: CTAs estratégicos + Garantia + Urgência

### Adaptação para Novo Produto

Para adaptar para um novo curso/produto:

1. **Substitua números-chave**: 7-7-7 por seu próprio framework
2. **Atualize array de features**: 7 módulos → seus módulos
3. **Personalize problema/solução**: Dor específica do seu público
4. **Adapte calculadora**: Benefício mensurável do seu produto
5. **Colete depoimentos**: Prova social real do seu produto
6. **Ajuste preços**: Investimento e breakdown de valor
7. **Reescreva FAQs**: Objeções específicas do seu produto
8. **Atualize tracking IDs**: Seus próprios pixels e analytics

### Recursos Adicionais

- **Ícones**: [Lucide Icons](https://lucide.dev)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com)
- **Tailwind**: [Documentação oficial](https://tailwindcss.com)
- **React**: [Documentação oficial](https://react.dev)

---

## CONTATO E SUPORTE

Para dúvidas sobre implementação ou adaptação deste guia:
- Email: contato@caioia.com
- YouTube: [@caiointeligenciaartificial](https://www.youtube.com/@caiointeligenciaartificial)
- Instagram: [@caiointeligenciaartificial](https://www.instagram.com/caiointeligenciaartificial)

---

**Versão do Guia:** 1.0
**Data de Criação:** Outubro 2024
**Última Atualização:** Outubro 2024

---

**Licença:** Este guia é proprietário e destinado ao uso interno. Não distribuir sem autorização.
