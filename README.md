# 🥐 Galipan Pan - Sitio Web con Astro

Sitio web moderno para Galipan Pan, panadería artesanal venezolana. Proyecto completo migrado de HTML/CSS legacy a **Astro + React + TypeScript + Tailwind CSS v4**.

## ✨ Estado del Proyecto

### ✅ Fase 1: Sitio Estático (Completado)
- ✅ Migración de 5 páginas estáticas a Astro
- ✅ Componentes reutilizables (Header, Footer, Carousel)
- ✅ Layout base con SEO optimizado
- ✅ Estilos con Tailwind CSS v4
- ✅ Responsive design para mobile, tablet y desktop
- ✅ Optimización de imágenes con WebP
- ✅ Paleta de colores Blaze Orange (50-950)
- ✅ Accesibilidad (ARIA labels, skip links, focus management)

### ✅ Fase 2: App de Delivery con React (Completado)
- ✅ Integración completa de la app de delivery
- ✅ Carrito de compras funcional con localStorage
- ✅ Filtrado por categorías (Roles, Panadería, Tortas y Cupcakes)
- ✅ Modal del carrito con gestión de productos
- ✅ React Router para navegación cliente
- ✅ Context API para state management
- ✅ Migración completa a TypeScript
- ✅ Tests unitarios y de integración (141 tests)
- ✅ Build optimizado con code splitting

## 🚀 Estructura del Proyecto

```text
astro-app/
├── public/
│   └── assets/              # Imágenes optimizadas (WebP)
├── src/
│   ├── components/
│   │   ├── Header.astro     # Barra de navegación principal
│   │   ├── Footer.astro     # Pie de página
│   │   ├── Carousel.astro   # Carrusel de imágenes
│   │   ├── Loader.astro     # Componente de carga (migrado de React)
│   │   └── delivery/        # Componentes React de delivery
│   │       ├── DeliveryAppClient.tsx
│   │       ├── Navbar.tsx
│   │       ├── ProductsList.tsx
│   │       ├── Counter.tsx
│   │       ├── CartWidget.tsx
│   │       ├── ModalCart.tsx
│   │       ├── CartItem.tsx
│   │       ├── ListContainer.tsx
│   │       └── Loader.tsx
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout base con SEO
│   ├── pages/               # Páginas (enrutamiento automático)
│   │   ├── index.astro      # Inicio
│   │   ├── menu.astro       # Menú (carrusel con carta)
│   │   ├── galeria.astro    # Galería de fotos
│   │   ├── contacto.astro   # Formulario de contacto
│   │   ├── sobre-nosotros.astro
│   │   └── delivery.astro   # App de delivery (React Island)
│   ├── content/
│   │   └── galeria/
│   │       └── data.json    # Datos de la galería
│   ├── context/             # React Context providers
│   │   ├── CartProvider.tsx
│   │   ├── cartContext.ts
│   │   └── Modal/
│   │       ├── ModalProvider.tsx
│   │       └── modalContext.ts
│   ├── hooks/               # Custom React hooks (TypeScript)
│   │   ├── useCart.ts
│   │   ├── useCartReducer.ts
│   │   ├── useCartWidget.ts
│   │   ├── useModal.ts
│   │   ├── useProducts.ts
│   │   └── useTotals.ts
│   ├── reducers/
│   │   └── cartReducer.ts   # Reducer del carrito (TypeScript)
│   ├── services/            # Servicios de API (TypeScript)
│   │   ├── products.ts
│   │   ├── findItem.ts
│   │   └── login.js
│   ├── types/               # Definiciones de tipos TypeScript
│   │   ├── product.types.ts
│   │   ├── cart.types.ts
│   │   ├── cartActions.types.ts
│   │   └── index.ts
│   ├── constants/           # Constantes de la aplicación
│   │   ├── api.constants.ts
│   │   ├── cartActions.constants.ts
│   │   └── index.ts
│   ├── mocks/
│   │   └── productsData.json # Datos mock de productos
│   ├── tests/               # Tests con Vitest
│   │   ├── routes.test.ts
│   │   ├── components.test.ts
│   │   ├── cartReducer.test.ts
│   │   ├── delivery.test.ts
│   │   ├── pages.test.ts
│   │   └── accessibility.test.ts
│   └── styles/
│       └── global.css       # Estilos globales + Tailwind + Paleta Blaze Orange
├── scripts/
│   └── run-dev.sh           # Script para correr tests antes del dev server
├── astro.config.mjs         # Configuración Astro
├── tailwind.config.mjs      # Configuración Tailwind v4
├── tsconfig.json            # Configuración TypeScript
├── vitest.config.ts         # Configuración de tests
└── package.json
```

## 🛠️ Stack Tecnológico

### Framework y Lenguajes
- **Astro 5.14.4** - Framework web estático con Islands Architecture
- **TypeScript 5.x** - Tipado estático completo
- **React 19.2.0** - Componentes interactivos (delivery app)
- **React Router DOM 7.9.4** - Enrutamiento cliente en delivery app

### Estilos
- **Tailwind CSS 4.x** - Framework utility-first con `@theme` directive
- **Paleta Blaze Orange** - Colores personalizados (50-950)
- **PostCSS** - Procesamiento de CSS

### State Management
- **React Context API** - Estado global del carrito
- **React Hooks** - Lógica de negocio
- **useReducer** - Gestión compleja del carrito
- **localStorage** - Persistencia del carrito

### Testing
- **Vitest 3.2.4** - Test runner (141 tests)
- **@testing-library/react** - Tests de componentes React
- **happy-dom** - Entorno DOM para tests

### Herramientas
- **npm** - Gestor de paquetes
- **Vite** - Build tool y dev server
- **ESLint** - Linter de código

## 🎨 Sistema de Diseño

### Paleta de Colores Blaze Orange

```css
--color-blaze-orange-50:  #fff8ec  /* Fondos sutiles */
--color-blaze-orange-100: #fff0d3
--color-blaze-orange-200: #ffdca5  /* Bordes suaves */
--color-blaze-orange-300: #ffc26d
--color-blaze-orange-400: #ff9d32  /* Texto secundario */
--color-blaze-orange-500: #ff7f0a
--color-blaze-orange-600: #ff6600  /* Color primario */
--color-blaze-orange-700: #cc4902  /* Hover states */
--color-blaze-orange-800: #a1390b  /* Texto enfatizado */
--color-blaze-orange-900: #82310c
--color-blaze-orange-950: #461604  /* Headings */
```

### Tipografía
- **Epilogue** - Font principal (sans-serif)
- **Courgette** - Font para títulos decorativos (cursive)

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instalar dependencias                            |
| `npm run dev`             | Ejecutar tests + iniciar dev server en `localhost:4321` |
| `npm test`                | Ejecutar todos los tests (141 tests)            |
| `npm run build`           | Construir sitio para producción en `./dist/`     |
| `npm run preview`         | Previsualizar build local antes de desplegar     |
| `npm run astro ...`       | Ejecutar comandos CLI de Astro                   |

## 📝 Desarrollo

### Iniciar el proyecto

```bash
cd astro-app
npm install
npm run dev
```

El comando `npm run dev` ejecuta automáticamente:
1. ✅ Tests de validación (141 tests)
2. 🚀 Servidor de desarrollo en `http://localhost:4321`

### Ejecutar tests

```bash
npm test                    # Todos los tests
npm run test:ui            # Tests con UI interactiva
npm run test:watch         # Tests en modo watch
```

### Build para producción

```bash
npm run build
```

Los archivos optimizados se generarán en `./dist/`:
- HTML estático pre-renderizado
- JavaScript minificado y code-split
- CSS optimizado y purgado
- Imágenes optimizadas (WebP)

## 🎯 Características Principales

### Sitio Estático
- ✅ **SEO Optimizado**: Meta tags, Open Graph, structured data
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Accesibilidad**: WCAG 2.1 AA compliant
- ✅ **Performance**: Lighthouse score 95+
- ✅ **Imágenes Optimizadas**: WebP format, lazy loading

### App de Delivery
- ✅ **Carrito de Compras**: Agregar, remover, actualizar cantidades
- ✅ **Persistencia**: localStorage para mantener carrito entre sesiones
- ✅ **Filtrado por Categorías**: Roles, Panadería, Tortas y Cupcakes
- ✅ **Modal del Carrito**: Vista detallada con totales
- ✅ **Type Safety**: TypeScript completo con interfaces y types
- ✅ **Tests Completos**: 141 tests unitarios y de integración

## 🔧 Arquitectura

### Astro Islands
La app utiliza **Islands Architecture**:
- Páginas estáticas renderizadas en servidor (Astro)
- Componentes React hidratados solo cuando son necesarios
- Delivery app como una "isla" interactiva (`client:only="react"`)

### Type Safety
- **Tipos separados**: `src/types/` con barrel exports
- **Constantes tipadas**: `src/constants/` con `as const`
- **Props tipadas**: Todas las interfaces de componentes
- **Services tipados**: Retornos y parámetros explícitos

### State Management
```
CartProvider (Context)
    ├── useCartReducer (Hook)
    │   └── cartReducer (Reducer con TypeScript)
    └── useCart (Consumer Hook)
```

## 🧪 Testing

### Cobertura de Tests (141 tests)
- ✅ **40 tests** - Routing y navegación
- ✅ **20 tests** - Componentes React
- ✅ **20 tests** - Cart Reducer (lógica del carrito)
- ✅ **37 tests** - Delivery app completa
- ✅ **11 tests** - Páginas Astro
- ✅ **13 tests** - Accesibilidad

### Ejecutar Tests
```bash
npm test                    # Todos los tests
npm run test:coverage      # Con reporte de cobertura
```

## 📦 Migraciones Realizadas

### 1. HTML/CSS Legacy → Astro (Fase 1)
- Migración de 5 páginas estáticas
- Creación de componentes reutilizables
- Implementación de layout base con SEO

### 2. Integración App Delivery (Fase 2)
- Integración de app React existente
- Configuración de React Router en Astro
- Unificación de estilos con Tailwind

### 3. JavaScript → TypeScript (Migración Completa)
- **30 archivos migrados** a TypeScript
- Creación de tipos y constantes separados
- Type safety completo en toda la aplicación

### 4. Paleta de Colores
- Aplicación de paleta Blaze Orange en todo el sitio
- Reemplazo de colores legacy por sistema de diseño
- Consistencia visual completa

### 5. Limpieza de Código
- Eliminación de 28 archivos duplicados y no utilizados
- Remoción de código legacy (JavaScript antiguo)
- Estructura de proyecto optimizada

## 🚀 Mejoras de Performance

- **Imágenes optimizadas**: Formato WebP con dimensiones correctas
- **Code splitting**: Bundles separados para delivery app
- **Tree shaking**: Eliminación de código no utilizado
- **CSS purgado**: Solo estilos utilizados en producción
- **Lazy loading**: Carga diferida de imágenes
- **Prefetching**: Pre-carga de navegación

## 📊 Métricas

- **Build time**: ~1 segundo
- **Bundle size**:
  - Main bundle: ~187KB (gzipped: ~59KB)
  - Delivery app: ~50KB (gzipped: ~17KB)
- **Tests**: 141 tests en ~680ms
- **Páginas generadas**: 6 páginas estáticas
- **Líneas de código**: ~3,000 líneas TypeScript

## 📄 Licencia

Todos los derechos reservados - Galipan Pan © 2020
