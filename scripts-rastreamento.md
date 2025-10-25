# Scripts de Rastreamento - Produtividade com IA

Este documento contém todos os scripts de rastreamento e analytics utilizados no projeto.

---

## 1. Utmify Script

```html
<script
  src="https://cdn.utmify.com.br/scripts/utms/latest.js"
  data-utmify-prevent-xcod-sck
  data-utmify-prevent-subids
  async
  defer
></script>
```

---

## 2. PageTest.ai Script

```html
<script>window.ptaiParams = { team: '89bkpi' };</script>
<script src='https://app.pagetest.ai/build/snippet/ptai.js?v=1.0.5'></script>
```

---

## 3. Facebook Pixel (Meta Pixel)

```html
<script defer>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '937862385123781');
  fbq('track', 'PageView');
</script>
```

### Facebook Pixel Noscript

```html
<noscript><img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=937862385123781&ev=PageView&noscript=1" /></noscript>
```

---

## 4. Google Analytics (gtag.js)

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VF8ZV2SBMX"></script>
<script defer>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-VF8ZV2SBMX');
</script>
```

---

## 5. Plerdy

```html
<script type="text/javascript" defer data-plerdy_code='1'>
    var _protocol="https:"==document.location.protocol?"https://":"http://";
    _site_hash_code = "ace0297e120b8f564acd4a873f89e574",_suid=60456, plerdyScript=document.createElement("script");
    plerdyScript.setAttribute("defer",""),plerdyScript.dataset.plerdymainscript="plerdymainscript",
    plerdyScript.src="https://d.plerdy.com/public/js/click/main.js?v="+Math.random();
    var plerdymainscript=document.querySelector("[data-plerdymainscript='plerdymainscript']");
    plerdymainscript&&plerdymainscript.parentNode.removeChild(plerdymainscript);
    try{document.head.appendChild(plerdyScript)}catch(t){console.log(t,"unable add script tag")}
</script>
```

---

## 6. Encharge

```html
<script type="text/javascript">!function(){if(!window.EncTracking||!window.EncTracking.started){window.EncTracking=Object.assign({}, window.EncTracking, {queue:window.EncTracking&&window.EncTracking.queue?window.EncTracking.queue:[],track:function(t){this.queue.push({type:"track",props:t})},identify:function(t){this.queue.push({type:"identify",props:t})},started:!0});var t=window.EncTracking;t.writeKey="HcWJgerubiGo3Z7LfLAMZrW7B",t.hasOptedIn=true,t.shouldGetConsent=true,t.hasOptedIn&&(t.shouldGetConsent=!1),t.optIn=function(){t.hasOptedIn=!0,t&&t.init&&t.init()},t.optOut=function(){t.hasOptedIn=!1,t&&t.setOptOut&&t.setOptOut(!0)};var n=function(t){var n=document.createElement("script");n.type="text/javascript",n.async=void 0===t||t,n.src="https://resources-app.encharge.io/encharge-tracking.min.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};"complete"===document.readyState?n():window.attachEvent?window.attachEvent("onload",n):window.addEventListener("load",n,!1)}}();</script>
```

---

## 7. GPTEngineer Script

```html
<script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
```

---

## Instruções de Uso

### No HTML (index.html)

Adicione os scripts na seção `<head>` do seu HTML, respeitando a seguinte ordem:

1. **Utmify** - Primeiro, para capturar UTMs
2. **PageTest.ai** - Testes A/B
3. **Facebook Pixel** - Analytics do Facebook
4. **Google Analytics** - Analytics do Google
5. **Plerdy** - Heatmaps e analytics
6. **Encharge** - Marketing automation

### Preconnect e DNS Prefetch (Recomendado)

Para melhor performance, adicione antes dos scripts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://connect.facebook.net">
<link rel="dns-prefetch" href="https://www.googletagmanager.com">
<link rel="dns-prefetch" href="https://d.plerdy.com">
<link rel="dns-prefetch" href="https://resources-app.encharge.io">
```

---

## IDs e Credenciais do Projeto

- **Facebook Pixel ID**: `937862385123781`
- **Google Analytics ID**: `G-VF8ZV2SBMX`
- **PageTest.ai Team**: `89bkpi`
- **Plerdy Site Hash**: `ace0297e120b8f564acd4a873f89e574`
- **Plerdy UID**: `60456`
- **Encharge Write Key**: `HcWJgerubiGo3Z7LfLAMZrW7B`

---

## Observações

- Todos os scripts estão configurados com `defer` ou `async` para não bloquear o carregamento da página
- O Facebook Pixel inclui tanto a versão script quanto noscript para máxima compatibilidade
- Os scripts devem ser adicionados em TODAS as páginas do site para rastreamento completo

---

**Data de Compilação**: Outubro 2024
