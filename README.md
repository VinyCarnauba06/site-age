# AGE – Aliança Gestão Empresarial

Website profissional de alta performance para administração de condomínios em Maceió.

## 🚀 Stack Técnico

- **React 18** - Framework UI moderna
- **Vite** - Build tool ultra-rápido
- **Framer Motion** - Animações suaves
- **CSS Modules** - Estilos isolados por componente

## 📦 Instalação

```bash
npm install
```

## 🏃 Desenvolvimento

```bash
npm run dev
```

Abre automaticamente em `http://localhost:3000`

## 🏗️ Build para Produção

```bash
npm run build
```

Gera a pasta `dist/` pronta para deploy.

## 📁 Estrutura

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── TrustBar.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── styles/
│   └── globals.css      # Estilos globais
├── App.jsx              # Componente raiz
└── main.jsx            # Entrada React
```

## ✨ Características

✅ Design responsivo mobile-first  
✅ Animações suaves com Framer Motion  
✅ Otimizado para SEO (meta tags, estrutura semântica)  
✅ Menu mobile automático  
✅ Header sticky com efeito scroll  
✅ Scroll suave entre seções  
✅ 100% acessível (WCAG 2.1)  

## 🎨 Paleta de Cores

- Navy Dark: `#06111C`
- Navy Main: `#0B2239`
- Accent Blue: `#4A8BBA`
- Gray Text: `#6B7280`
- Background: `#F3F4F6`

## 📱 Responsividade

- Desktop: 1240px (container)
- Tablet: 992px break
- Mobile: 768px break
- Extra small: < 480px

## 🚢 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Push para GitHub
2. Conecta o repositório em netlify.com
3. Build: `npm run build`
4. Publish directory: `dist`

### Tradicional
Build localmente e upload a pasta `dist/` para seu servidor.

## 📄 Licença

© 2026 AGE – Aliança Gestão Empresarial. Todos os direitos reservados.
