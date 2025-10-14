# 🥐 Galipan Pan - Sitio Web con Astro

Sitio web moderno para Galipan Pan, panadería artesanal venezolana. Migración del sitio legacy HTML/CSS a **Astro + TypeScript + Tailwind CSS**.

## 📋 Fase 1: Sitio Estático (Completado)

- ✅ Migración de 5 páginas estáticas
- ✅ Componentes reutilizables (Header, Footer, Carousel)
- ✅ Layout base con SEO
- ✅ Estilos con Tailwind CSS
- ✅ Responsive design
- ✅ Optimización de imágenes

## 🚀 Estructura del Proyecto

```text
astro-app/
├── public/
│   └── assets/           # Imágenes y recursos estáticos
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Carousel.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/            # Páginas del sitio (enrutamiento automático)
│   │   ├── index.astro   # Inicio
│   │   ├── menu.astro
│   │   ├── galeria.astro
│   │   ├── contacto.astro
│   │   └── sobre-nosotros.astro
│   ├── content/          # Datos JSON
│   │   └── galeria/
│   └── styles/
│       └── global.css    # Estilos globales + Tailwind
├── astro.config.mjs      # Configuración Astro
└── package.json
```

## 🛠️ Tecnologías

- **Astro 5.14.4** - Framework web
- **TypeScript** - Tipado estático
- **Tailwind CSS 4.x** - Estilos utility-first
- **React 19** - Integración para Fase 2
- **pnpm** - Gestor de paquetes

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Instalar dependencias                            |
| `pnpm dev`                | Iniciar servidor de desarrollo en `localhost:4321` |
| `pnpm build`              | Construir sitio para producción en `./dist/`     |
| `pnpm preview`            | Previsualizar build local antes de desplegar     |
| `pnpm astro ...`          | Ejecutar comandos CLI de Astro                   |

## 📝 Desarrollo

### Iniciar el proyecto

```bash
cd astro-app
pnpm install
pnpm dev
```

El sitio estará disponible en `http://localhost:4321`

### Build para producción

```bash
pnpm build
```

Los archivos optimizados se generarán en `./dist/`

## 🔮 Fase 2: Integración App de Delivery (Pendiente)

- [ ] Migrar app React de delivery
- [ ] Integrar componentes React como Islands
- [ ] Configurar ruta `/delivery`
- [ ] Unificar estilos entre sitio estático y app
- [ ] Integrar panel administrativo

## 📦 Historial de Commits

```
b74125a - style: Configurar estilos globales con Tailwind
668ddb3 - feat: Migrar páginas contacto y galeria
3833b8d - feat: Migrar páginas menu y sobre-nosotros
b42961e - feat: Migrar página de inicio con hero, features y carousel
74555c9 - feat: Crear layout base y componentes compartidos
f9d6f23 - feat: Inicializar proyecto Astro con TypeScript, Tailwind y React
```

## 📄 Licencia

Todos los derechos reservados - Galipan Pan © 2020
