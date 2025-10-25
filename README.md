# Engenharia de Contexto - Landing Page

Landing page para o curso "Engenharia de Contexto" - Domine Claude + MCP + Automação.

## 🚀 Stack Tecnológico

- **React 18.3.1** - Framework principal
- **Vite 5.4.1** - Build tool e dev server
- **TypeScript 5.5.3** - Tipagem estática
- **Tailwind CSS 3.4.11** - Estilização
- **shadcn/ui** - Componentes UI (Radix UI)
- **React Router DOM 6.26.2** - Roteamento
- **TanStack Query 5.56.2** - State management
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🎨 Branding

### Cores Principais
- **Tangerine** (#D45E0A) - Cor principal (CTAs, destaques)
- **Night** (#141312) - Textos fortes
- **Seasalt** (#FAF9F7) - Background principal
- **Viridian** (#664869) - Detalhes/gradientes

### Tipografia
- **Plus Jakarta Sans** (Google Fonts)
- Pesos: 400, 500, 600, 700

## 📋 Estrutura da Página

1. **PromoBanner** - Banner promocional (R$ 97)
2. **NavBar** - Navegação fixa
3. **Header** - Hero section
4. **Problem** - Seção do problema
5. **Insight** - Comparação Claude vs ChatGPT
6. **Solution** - Apresentação do produto
7. **Features** - 4 módulos do curso
8. **Benefits** - Diferenciais + Transformação
9. **Target** - Para quem é/não é
10. **Pricing** - Investimento
11. **FAQ** - Perguntas frequentes
12. **CallToAction** - CTA final
13. **Footer** - Rodapé

## ⚙️ Configurações Necessárias

### 1. Link de Checkout
Editar `/src/lib/utm-utils.ts`:
```typescript
const CHECKOUT_URL = 'SEU_LINK_AQUI' // Substituir por link real
```

### 2. Facebook Pixel
Editar `/index.html`:
```javascript
fbq('init', 'SEU_PIXEL_ID'); // Descomentar e substituir
```

### 3. Google Analytics
Editar `/index.html`:
```javascript
gtag('config', 'G-XXXXXXXXXX'); // Descomentar e substituir
```

### 4. Meta Tags
Editar `/index.html`:
- `og:url` - URL do site
- `og:image` - URL da imagem OpenGraph
- `twitter:image` - URL da imagem Twitter

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1400px

## 🎭 Animações

Todas as seções possuem animações de entrada:
- `fade-up` - Fade in com movimento para cima
- `fade-in` - Fade in simples
- `scale-in` - Fade in com escala

## 📊 Tracking e Analytics

Placeholders configurados para:
- ✅ Facebook Pixel
- ✅ Google Analytics
- ✅ UTM tracking
- ✅ Utmify (opcional)

## 🔧 Customização

### Alterar Preços
Editar `/src/components/Pricing.tsx`:
- Preço original: R$ 297
- Preço promocional: R$ 97
- Economia: R$ 200

### Alterar Conteúdo
Cada componente é independente e pode ser editado em:
`/src/components/[NomeDoComponente].tsx`

### Alterar Cores
Editar `/tailwind.config.ts` na seção `colors`.

## 📂 Estrutura de Arquivos

```
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   ├── Header.tsx
│   │   ├── Problem.tsx
│   │   └── ...
│   ├── pages/
│   │   └── Index.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── utm-utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.ts
└── package.json
```

## 🚀 Deploy

Para fazer deploy:

1. Build do projeto:
```bash
npm run build
```

2. A pasta `dist/` conterá todos os arquivos para deploy

3. Fazer upload para:
- Vercel
- Netlify
- GitHub Pages
- Ou qualquer hosting de sua escolha

## 📝 Notas Importantes

- ⚠️ **Substituir placeholders** de tracking antes do deploy
- ⚠️ **Adicionar link de checkout** real
- ⚠️ **Criar imagem OpenGraph** (1200x630px)
- ⚠️ **Adicionar favicon** real

## 📧 Contato

- Email: contato@caioia.com
- YouTube: [@caiointeligenciaartificial](https://www.youtube.com/@caiointeligenciaartificial)
- Instagram: [@caiointeligenciaartificial](https://www.instagram.com/caiointeligenciaartificial)

---

**Versão:** 1.0
**Data de Criação:** Outubro 2024
**Autor:** Caio IA
