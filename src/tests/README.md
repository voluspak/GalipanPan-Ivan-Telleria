# Tests del Sitio Web

Este directorio contiene los tests automatizados para verificar que el sitio web se renderiza correctamente.

## 🧪 Tecnologías

- **Vitest**: Framework de testing rápido y moderno
- **Happy DOM**: Implementación ligera del DOM para tests
- **Testing Library DOM**: Utilidades para testing

## 📋 Estructura de Tests

### `pages.test.ts`
Tests para verificar el contenido y estructura de las páginas:
- ✅ Estructura HTML y meta tags
- ✅ Enlaces de navegación
- ✅ Contenido de galería (data.json)
- ✅ Configuración de colores
- ✅ Imágenes del carousel
- ✅ Información de precios
- ✅ Footer y redes sociales
- ✅ SEO (títulos y descripciones)
- ✅ Diseño responsive

### `components.test.ts`
Tests para verificar los componentes principales:
- ✅ Header (logo, navegación, botones)
- ✅ Footer (copyright, redes sociales)
- ✅ Carousel (controles, indicadores, transiciones)
- ✅ BaseLayout (meta tags, fuentes)
- ✅ Estilos globales (colores, fuentes)
- ✅ Optimización de imágenes (WebP, dimensiones)
- ✅ Responsive design (breakpoints, grid)
- ✅ Accesibilidad (aria-labels, alt text)

## 🚀 Comandos

```bash
# Ejecutar todos los tests
pnpm test

# Ejecutar tests en modo watch
pnpm test:watch

# Abrir interfaz visual de tests
pnpm test:ui
```

## ✅ Cobertura

Total de tests: **31 tests**
- 20 tests de componentes
- 11 tests de páginas

Todos los tests verifican:
- Estructura correcta del HTML
- Contenido válido y presente
- Configuración de estilos
- Optimización de imágenes
- Responsive design
- Accesibilidad
- SEO

## 📊 Resultados

Los tests verifican que:
1. El sitio tiene todos los meta tags necesarios
2. La navegación funciona correctamente
3. Las imágenes están optimizadas (WebP, lazy loading)
4. El diseño es responsive en todos los breakpoints
5. Los componentes tienen la estructura correcta
6. El contenido de galería es válido
7. Los enlaces externos funcionan
8. El sitio es accesible (aria-labels, alt text)
