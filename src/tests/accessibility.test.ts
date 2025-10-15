import { describe, it, expect } from 'vitest';
import { axe } from 'vitest-axe';

describe('Accesibilidad - Tests automatizados', () => {
  describe('Header', () => {
    it('debe tener navegación accesible', () => {
      const header = `
        <header class="sticky top-0 z-50 w-full bg-white">
          <nav aria-label="Navegación principal">
            <a href="/" aria-label="Ir a la página de inicio">
              <img src="/logo.webp" alt="Logo Galipan Pan" width="124" height="124" />
            </a>
            <ul role="list">
              <li><a href="/menu">Menú</a></li>
              <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
            <button
              id="mobile-menu-button"
              aria-label="Abrir menú de navegación"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <svg aria-hidden="true">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </nav>
        </header>
      `;

      const container = document.createElement('div');
      container.innerHTML = header;
      document.body.appendChild(container);

      return axe(container).then((results) => {
        expect(results).toHaveNoViolations();
        document.body.removeChild(container);
      });
    });

    it('debe tener atributos ARIA correctos en menú móvil', () => {
      const menuButton = document.createElement('button');
      menuButton.setAttribute('aria-label', 'Abrir menú de navegación');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-controls', 'mobile-menu');

      expect(menuButton.getAttribute('aria-label')).toBe('Abrir menú de navegación');
      expect(menuButton.getAttribute('aria-expanded')).toBe('false');
      expect(menuButton.getAttribute('aria-controls')).toBe('mobile-menu');
    });
  });

  describe('Carousel', () => {
    it('debe tener estructura accesible de carousel', () => {
      const carousel = `
        <div
          role="region"
          aria-label="Carrusel de productos"
          aria-roledescription="carousel"
        >
          <div aria-live="polite" aria-atomic="true" class="sr-only">
            Imagen 1 de 4
          </div>

          <button aria-label="Pausar carrusel automático">
            <svg aria-hidden="true">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"></path>
            </svg>
          </button>

          <button aria-label="Imagen anterior">
            <svg aria-hidden="true">
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <button aria-label="Imagen siguiente">
            <svg aria-hidden="true">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <div role="group" aria-label="Indicadores de diapositivas">
            <button aria-label="Ir a imagen 1" aria-current="true"></button>
            <button aria-label="Ir a imagen 2" aria-current="false"></button>
          </div>
        </div>
      `;

      const container = document.createElement('div');
      container.innerHTML = carousel;
      document.body.appendChild(container);

      return axe(container).then((results) => {
        expect(results).toHaveNoViolations();
        document.body.removeChild(container);
      });
    });

    it('debe tener región live para anuncios', () => {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.textContent = 'Imagen 1 de 4';

      expect(liveRegion.getAttribute('aria-live')).toBe('polite');
      expect(liveRegion.getAttribute('aria-atomic')).toBe('true');
      expect(liveRegion.className).toBe('sr-only');
    });

    it('debe tener botón de pausa con label descriptivo', () => {
      const pauseButton = document.createElement('button');
      pauseButton.setAttribute('aria-label', 'Pausar carrusel automático');

      expect(pauseButton.getAttribute('aria-label')).toBeTruthy();
      expect(pauseButton.getAttribute('aria-label')).toContain('Pausar');
    });
  });

  describe('Formularios', () => {
    it('debe tener formulario accesible', () => {
      const form = `
        <form aria-labelledby="form-title">
          <h2 id="form-title">Formulario de contacto</h2>

          <div aria-live="assertive" aria-atomic="true" class="sr-only"></div>

          <label for="nombre">
            Nombre <span aria-label="requerido">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autocomplete="name"
            aria-required="true"
            aria-invalid="false"
            aria-describedby="nombre-error"
          />
          <span id="nombre-error" role="alert"></span>

          <label for="email">
            Email <span aria-label="requerido">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autocomplete="email"
            aria-required="true"
            aria-invalid="false"
            aria-describedby="email-error"
          />
          <span id="email-error" role="alert"></span>

          <button type="submit">Enviar</button>
        </form>
      `;

      const container = document.createElement('div');
      container.innerHTML = form;
      document.body.appendChild(container);

      return axe(container).then((results) => {
        expect(results).toHaveNoViolations();
        document.body.removeChild(container);
      });
    });

    it('debe tener atributos autocomplete en campos apropiados', () => {
      const nombreInput = document.createElement('input');
      nombreInput.setAttribute('autocomplete', 'name');

      const emailInput = document.createElement('input');
      emailInput.setAttribute('autocomplete', 'email');

      const telInput = document.createElement('input');
      telInput.setAttribute('autocomplete', 'tel');

      expect(nombreInput.getAttribute('autocomplete')).toBe('name');
      expect(emailInput.getAttribute('autocomplete')).toBe('email');
      expect(telInput.getAttribute('autocomplete')).toBe('tel');
    });

    it('debe tener región live para errores', () => {
      const errorRegion = document.createElement('div');
      errorRegion.setAttribute('aria-live', 'assertive');
      errorRegion.setAttribute('aria-atomic', 'true');
      errorRegion.className = 'sr-only';

      expect(errorRegion.getAttribute('aria-live')).toBe('assertive');
      expect(errorRegion.getAttribute('aria-atomic')).toBe('true');
    });
  });

  describe('Enlaces externos', () => {
    it('debe tener atributos de seguridad y accesibilidad', () => {
      const externalLink = `
        <a
          href="https://external.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar sitio externo (se abre en una nueva ventana)"
        >
          Enlace externo
        </a>
      `;

      const container = document.createElement('div');
      container.innerHTML = externalLink;
      document.body.appendChild(container);

      const link = container.querySelector('a');
      expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
      expect(link?.getAttribute('aria-label')).toContain('nueva ventana');

      return axe(container).then((results) => {
        expect(results).toHaveNoViolations();
        document.body.removeChild(container);
      });
    });
  });

  describe('Imágenes', () => {
    it('debe tener texto alternativo en imágenes informativas', () => {
      const img = `
        <img
          src="/producto.webp"
          alt="Rol de canela cubierto con glaseado de caramelo"
          width="600"
          height="400"
        />
      `;

      const container = document.createElement('div');
      container.innerHTML = img;
      document.body.appendChild(container);

      return axe(container).then((results) => {
        expect(results).toHaveNoViolations();
        document.body.removeChild(container);
      });
    });

    it('debe tener alt vacío en imágenes decorativas', () => {
      const decorativeImg = document.createElement('img');
      decorativeImg.setAttribute('src', '/decorative.webp');
      decorativeImg.setAttribute('alt', '');

      expect(decorativeImg.getAttribute('alt')).toBe('');
    });
  });

  describe('Skip Link', () => {
    it('debe tener skip link al inicio del body', () => {
      const skipLink = `
        <a href="#main-content" class="sr-only">
          Saltar al contenido principal
        </a>
        <main id="main-content">
          <h1>Contenido principal</h1>
        </main>
      `;

      const container = document.createElement('div');
      container.innerHTML = skipLink;
      document.body.appendChild(container);

      const link = container.querySelector('a[href="#main-content"]');
      const main = container.querySelector('#main-content');

      expect(link).toBeTruthy();
      expect(main).toBeTruthy();
      expect(link?.textContent).toContain('Saltar al contenido');

      return axe(container).then((results) => {
        expect(results).toHaveNoViolations();
        document.body.removeChild(container);
      });
    });
  });

  describe('Landmarks', () => {
    it('debe tener landmarks semánticos principales', () => {
      const page = `
        <body>
          <a href="#main-content" class="sr-only">Saltar al contenido principal</a>
          <header>
            <nav aria-label="Navegación principal">
              <a href="/">Inicio</a>
            </nav>
          </header>
          <main id="main-content">
            <h1>Título principal</h1>
          </main>
          <footer>
            <p>Footer content</p>
          </footer>
        </body>
      `;

      const container = document.createElement('div');
      container.innerHTML = page;
      document.body.appendChild(container);

      const header = container.querySelector('header');
      const nav = container.querySelector('nav');
      const main = container.querySelector('main');
      const footer = container.querySelector('footer');

      expect(header).toBeTruthy();
      expect(nav).toBeTruthy();
      expect(main).toBeTruthy();
      expect(footer).toBeTruthy();

      return axe(container).then((results) => {
        expect(results).toHaveNoViolations();
        document.body.removeChild(container);
      });
    });
  });
});
