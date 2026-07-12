# Sofía Ruiz — Portfolio

Portfolio personal (one-page, bilingüe ES/EN) de Sofía Ruiz — Fullstack Developer
especializada en backend (Node.js · NestJS · TypeScript · PostgreSQL) y desarrollo
asistido por IA (RAG · chatbots · LLMs).

Sitio estático sin dependencias ni build step: HTML + CSS + JS puro. Listo para desplegar en GitHub Pages.

## 🗂 Estructura

```
portfolio/
├── index.html          # Estructura y contenido (bilingüe vía data-i18n)
├── assets/
│   ├── styles.css      # Estilos (dark theme, responsive)
│   ├── main.js         # Toggle ES/EN, animaciones, navegación
│   └── docs/           # Certificados, carta de recomendación y CVs (PDF)
└── README.md
```

## 🚀 Desplegar en GitHub Pages

1. Creá un repositorio público en GitHub, por ejemplo `portfolio` (o `sofiaruiz1801.github.io` para que quede en la URL raíz).
2. Subí el contenido de esta carpeta a la raíz del repo:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/sofiaruiz1801/portfolio.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Source: `main` / root** y guardá.
4. En ~1 minuto estará online en:
   - `https://sofiaruiz1801.github.io/portfolio/` (repo `portfolio`), o
   - `https://sofiaruiz1801.github.io/` (si el repo se llama `sofiaruiz1801.github.io`).

## ✏️ Pendientes rápidos antes de publicar

- [ ] **LinkedIn**: reemplazar el `href="#"` de los enlaces `linkedinLink` / `linkedinLink2` en `index.html` por tu URL real.
- [ ] **E-commerce**: apuntar el enlace de GitHub del proyecto al repo específico (ahora va al perfil).
- [ ] Revisar el email de contacto (usa `sofiaruiz.1505@gmail.com`).

## 🌐 Idiomas

El contenido por defecto está en español dentro del HTML. Las traducciones al inglés
viven en el diccionario `I18N.en` de `assets/main.js`. El botón **ES / EN** las
intercambia y recuerda la elección en `localStorage`.

---
Hecho con ❤️ y sin frameworks.
