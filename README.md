# 🚀 Crescendo Digital Marketing – Landing Page (Clon Educativo)

![React](https://img.shields.io/badge/React-19.2.7-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.1-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.1.0-646CFF?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

> **Landing page** que replica visualmente el sitio de [Crescendo Digital Marketing Agency](https://crescendodigitalmarketingagency.com) con fines educativos .  
> Desarrollada con **React**, **TypeScript**, **Tailwind CSS** y **Bootstrap**, utilizando **Vite** como bundler.

---

## 📖 Acerca del proyecto

Este proyecto consiste en una **landing page** moderna y responsive, inspirada en la agencia de marketing digital **Crescendo**. Se ha construido desde cero para demostrar habilidades en:

- Desarrollo frontend con React y TypeScript.
- Estilización rápida y eficiente con Tailwind CSS (complementado con Bootstrap para algunos componentes).
- Organización de código modular y escalable.
- Buenas prácticas de comentarios y documentación.

**Nota**: Todas las **imágenes, logos y videos** utilizados pertenecen a **Crescendo Digital Marketing Agency** y se emplean únicamente con fines **demostrativos y educativos**. No se comercializan ni se usan para lucro.

---

## 🛠️ Tecnologías utilizadas (versiones reales)

| Tecnología           | Versión   | Propósito                              |
|----------------------|-----------|----------------------------------------|
| React                | 19.2.7    | Biblioteca para construir la interfaz  |
| React DOM            | 19.2.7    | Renderizado en el navegador            |
| TypeScript           | 6.0.2     | Tipado estático y mejor mantenimiento  |
| Vite                 | 8.1.0     | Bundler rápido y desarrollo ágil       |
| Tailwind CSS         | 4.3.1     | Framework de utilidades CSS            |
| Bootstrap            | 5.3.8     | Componentes y grid (uso complementario)|
| React Bootstrap      | 2.10.10   | Componentes Bootstrap para React       |
| Font Awesome         | 7.3.0     | Íconos vectoriales                     |
| react-scroll         | 1.9.3     | Navegación suave entre secciones       |
| Oxlint               | 1.69.0    | Linter rápido (alternativa a ESLint)   |
| PostCSS              | 8.5.16    | Procesador CSS con Tailwind            |
| Autoprefixer         | 10.5.2    | Prefijos CSS automáticos               |

---


---

## ⚙️ Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/crescendo-landing.git

# Entrar en la carpeta
cd crescendo-landing

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar la versión construida
npm run preview

# Ejecutar el linter (Oxlint)
npm run lint

---

## 📁 Estructura de archivos (actualizada)

crescendo-landing/
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── public/
│ └── images/
│ ├── favicon.svg
│ └── icons.svg
├── README.md
├── src/
│ ├── App.tsx
│ ├── main.tsx
│ ├── assets/
│ │ ├── fonts/ # Fuentes personalizadas
│ │ ├── icons/ # Iconos en .svg
│ │ ├── images/ # Todas las imágenes (.png, .jpg)
│ │ │ ├── caso1.png
│ │ │ ├── caso3.png
│ │ │ ├── caso5.png
│ │ │ ├── foot-page-crescendo.png
│ │ │ ├── googleads.png
│ │ │ ├── localseo.png
│ │ │ ├── logodorado.png
│ │ │ └── teamwork.png
│ │ └── videos/
│ │ └── hero-background.mp4
│ ├── components/
│ │ ├── layout/
│ │ │ ├── Header.tsx
│ │ │ ├── Footer.tsx
│ │ │ └── index.ts
│ │ └── ui/
│ │ ├── AccessibilityButton.tsx
│ │ ├── FloatingSocialButtons.tsx
│ │ └── index.ts
│ ├── constants/ # Datos estáticos (antes en utils)
│ │ ├── clientes.ts
│ │ ├── comparativa.ts
│ │ ├── contacto.ts
│ │ ├── cta.ts
│ │ ├── faq.ts
│ │ ├── footer.ts
│ │ ├── hero.ts
│ │ ├── porque.ts
│ │ ├── proceso.ts
│ │ ├── reviews.ts
│ │ └── services.ts
│ ├── hooks/ # Hooks personalizados
│ ├── pages/
│ │ └── HomePage.tsx
│ ├── sections/ # Cada sección de la landing
│ │ ├── ClientesLogosSection/
│ │ ├── ComparativaSection/
│ │ ├── ContactoSection/
│ │ ├── CtaFinalSection/
│ │ ├── FaqSection/
│ │ ├── HeroSection/
│ │ ├── PorQueSection/
│ │ ├── ProcesoSection/
│ │ ├── ReviewsSection/
│ │ └── ServicesSection/
│ ├── styles/
│ │ └── globals.css # Variables, animaciones y utilidades globales
│ ├── types/ # Definiciones de tipos TypeScript
│ └── utils/ # Funciones helper (no constantes)
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
