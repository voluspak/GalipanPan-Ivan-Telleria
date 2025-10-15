# Estándares de Accesibilidad - Galipan Pan

Esta guía documenta los estándares y mejores prácticas de accesibilidad que seguimos en el proyecto Galipan Pan.

## 📌 Objetivo

Cumplir con **WCAG 2.1 Nivel AA** como mínimo estándar de accesibilidad, asegurando que el sitio web sea usable por todas las personas, incluyendo aquellas con discapacidades.

## 🎯 Principios WCAG

### 1. Perceptible
La información y los componentes de la interfaz deben ser presentados de manera que los usuarios puedan percibirlos.

**Implementaciones:**
- ✅ Texto alternativo en todas las imágenes (`alt` descriptivo)
- ✅ Contraste de color mínimo 4.5:1 para texto normal
- ✅ Contraste de color mínimo 3:1 para texto grande y componentes UI
- ✅ Contenido adaptable a diferentes tamaños de pantalla (responsive)

### 2. Operable
Los componentes de la interfaz y la navegación deben ser operables.

**Implementaciones:**
- ✅ Toda la funcionalidad disponible desde teclado
- ✅ Skip link para saltar al contenido principal
- ✅ Navegación por teclado con indicadores visuales (focus rings)
- ✅ Tiempo suficiente para leer y usar el contenido
- ✅ Controles para pausar contenido en movimiento (carousel)

### 3. Comprensible
La información y el manejo de la interfaz deben ser comprensibles.

**Implementaciones:**
- ✅ Atributo `lang="es"` en el documento HTML
- ✅ Labels claros en todos los campos de formulario
- ✅ Mensajes de error descriptivos
- ✅ Navegación consistente en todas las páginas

### 4. Robusto
El contenido debe ser suficientemente robusto para ser interpretado por una amplia variedad de agentes de usuario, incluyendo tecnologías asistivas.

**Implementaciones:**
- ✅ HTML semántico válido
- ✅ Atributos ARIA apropiados
- ✅ Compatible con lectores de pantalla

## 🏗️ Estándares por Componente

### Header (Navegación)

```astro
<header>
  <nav aria-label="Navegación principal">
    <button
      aria-expanded="false"
      aria-controls="mobile-menu"
      aria-label="Abrir menú de navegación"
    >
    </button>

    <div id="mobile-menu" role="navigation" aria-label="Menú móvil">
      <!-- Contenido del menú -->
    </div>
  </nav>
</header>
```

**Checklist:**
- [ ] `aria-label` en navegación principal
- [ ] `aria-expanded` en botones que expanden/colapsan
- [ ] `aria-controls` vinculando botón con contenido controlado
- [ ] Focus visible en todos los elementos interactivos
- [ ] Navegación por teclado (Tab, Enter, Escape)

### Carousel (Carrusel)

```astro
<div
  role="region"
  aria-label="Carrusel de productos"
  aria-roledescription="carousel"
>
  <div aria-live="polite" aria-atomic="true" class="sr-only">
    Imagen 1 de 4
  </div>

  <button aria-label="Pausar carrusel automático">
    <!-- Icono -->
  </button>

  <button
    aria-label="Ir a imagen 1"
    aria-current="true"
  >
  </button>
</div>
```

**Checklist:**
- [ ] `role="region"` para identificar el carousel
- [ ] `aria-live="polite"` para anunciar cambios
- [ ] Botón de pausa visible (WCAG 2.2.2)
- [ ] Navegación por teclado (flechas)
- [ ] `aria-current` en indicador activo
- [ ] Pausa al hacer hover

### Formularios

```astro
<form aria-labelledby="form-title">
  <div aria-live="assertive" class="sr-only">
    <!-- Mensajes de error -->
  </div>

  <label for="nombre">
    Nombre <span aria-label="requerido">*</span>
  </label>
  <input
    id="nombre"
    type="text"
    required
    autocomplete="name"
    aria-required="true"
    aria-invalid="false"
    aria-describedby="nombre-error"
  />
  <span id="nombre-error" role="alert"></span>
</form>
```

**Checklist:**
- [ ] Asociación label/input con `for`/`id`
- [ ] `autocomplete` en campos apropiados (WCAG 1.3.5)
- [ ] `aria-required` en campos obligatorios
- [ ] `aria-invalid` para indicar errores
- [ ] `aria-describedby` vinculando con mensajes de error
- [ ] `role="alert"` en mensajes de error
- [ ] Indicadores visuales claros (*, color)

### Enlaces Externos

```astro
<a
  href="https://external.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Descripción del enlace (se abre en una nueva ventana)"
>
  Texto del enlace
</a>
```

**Checklist:**
- [ ] `rel="noopener noreferrer"` por seguridad
- [ ] `aria-label` indicando que abre en nueva ventana
- [ ] `aria-hidden="true"` en iconos decorativos

### Imágenes

```astro
<Image
  src={imagen}
  alt="Descripción clara y concisa"
  title="Título adicional si es relevante"
  loading="lazy"
/>
```

**Checklist:**
- [ ] `alt` descriptivo en todas las imágenes
- [ ] `alt=""` en imágenes puramente decorativas
- [ ] `title` solo cuando agrega información adicional
- [ ] Optimización con Astro Image component

## 🧪 Testing de Accesibilidad

### Herramientas Recomendadas

1. **Lighthouse** (Chrome DevTools)
   - Ejecutar auditoría de accesibilidad
   - Objetivo: Score > 90

2. **axe DevTools** (Extensión de navegador)
   - Detecta problemas WCAG automáticamente
   - Ejecutar en cada página

3. **NVDA/JAWS** (Lectores de pantalla)
   - Probar navegación con lector de pantalla
   - Verificar anuncios de aria-live

4. **Navegación por teclado**
   - Usar solo Tab, Enter, Escape, flechas
   - Verificar que todo sea accesible
   - Verificar visibilidad del focus

### Checklist de Testing Manual

- [ ] Navegar toda la página solo con teclado
- [ ] Verificar que el skip link funciona (Tab al cargar)
- [ ] Probar el menú móvil con teclado (Escape cierra)
- [ ] Navegar el carousel con flechas
- [ ] Pausar el carousel con espacio
- [ ] Completar el formulario con teclado
- [ ] Verificar mensajes de error con lector de pantalla
- [ ] Verificar contraste de colores con herramienta

## 📝 Convenciones de Código

### Clases de Utilidad

```css
/* Screen reader only - oculto visualmente pero accesible */
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

/* Mostrar cuando tiene focus (para skip links) */
.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  /* ... resto de propiedades */
}
```

### Atributos ARIA Comunes

| Atributo | Uso |
|----------|-----|
| `aria-label` | Etiqueta descriptiva para elementos sin texto visible |
| `aria-labelledby` | Vincular elemento con su etiqueta (por ID) |
| `aria-describedby` | Vincular elemento con descripción adicional |
| `aria-expanded` | Estado expandido/colapsado (true/false) |
| `aria-controls` | ID del elemento controlado |
| `aria-current` | Elemento actual en un conjunto (page, step, location, etc.) |
| `aria-live` | Región que anuncia cambios (polite/assertive/off) |
| `aria-atomic` | Anunciar toda la región o solo cambios (true/false) |
| `aria-hidden` | Ocultar de lectores de pantalla (true/false) |
| `aria-required` | Campo obligatorio (true/false) |
| `aria-invalid` | Campo con error de validación (true/false) |
| `role` | Rol semántico (region, navigation, alert, etc.) |

## 🚀 Flujo de Desarrollo

### Antes de Crear un Componente

1. Planificar la estructura semántica HTML
2. Identificar elementos interactivos
3. Definir navegación por teclado
4. Listar atributos ARIA necesarios

### Durante el Desarrollo

1. Usar elementos HTML semánticos (`<nav>`, `<main>`, `<button>`)
2. Agregar atributos ARIA apropiados
3. Implementar estilos de focus visibles
4. Probar con teclado continuamente

### Antes de Commit

1. Ejecutar tests de accesibilidad automatizados
2. Probar con navegación por teclado
3. Verificar con Lighthouse (score > 90)
4. Revisar con axe DevTools (0 errores críticos)

## 📚 Recursos

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [MDN - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM - Screen Reader Testing](https://webaim.org/articles/screenreader_testing/)
- [Inclusive Components](https://inclusive-components.design/)

## 🔄 Mantenimiento

Este documento debe actualizarse cuando:
- Se implementan nuevos componentes
- Se descubren nuevos patrones de accesibilidad
- Se actualizan los estándares WCAG
- Se identifican problemas en auditorías

**Última actualización:** Octubre 2025
**Responsable:** Equipo de Desarrollo
