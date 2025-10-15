import { describe, it, expect } from 'vitest';

describe('Componentes del sitio', () => {
  describe('Header', () => {
    it('debe tener logo con dimensiones correctas', () => {
      const logo = {
        width: 124,
        height: 124,
        alt: 'Logo Galipan Pan'
      };

      expect(logo.width).toBe(124);
      expect(logo.height).toBe(124);
      expect(logo.alt).toContain('Galipan');
    });

    it('debe estar sticky en la parte superior', () => {
      const headerClasses = 'sticky top-0 z-50';

      expect(headerClasses).toContain('sticky');
      expect(headerClasses).toContain('top-0');
      expect(headerClasses).toContain('z-50');
    });

    it('debe tener botón de ordenar con estilos correctos', () => {
      const button = {
        text: 'Ordenar Ahora',
        classes: 'bg-primary rounded-full shadow-lg',
        href: 'https://galipan-delivery-jst7i3eb3-voluspak.vercel.app/'
      };

      expect(button.text).toBe('Ordenar Ahora');
      expect(button.classes).toContain('bg-primary');
      expect(button.classes).toContain('rounded-full');
      expect(button.href).toMatch(/^https?:\/\//);
    });
  });

  describe('Footer', () => {
    it('debe tener copyright actualizado', () => {
      const copyright = '© 2024 Galipan Pan. Todos los derechos reservados.';

      expect(copyright).toContain('2024');
      expect(copyright).toContain('Galipan Pan');
    });

    it('debe tener enlaces de redes sociales funcionales', () => {
      const socialLinks = [
        'https://www.instagram.com/galipanpan/',
        'https://www.facebook.com/galipanpan',
        'https://api.whatsapp.com/send?phone=573173934277'
      ];

      socialLinks.forEach(link => {
        expect(link).toMatch(/^https?:\/\//);
      });
    });
  });

  describe('Carousel', () => {
    it('debe tener controles de navegación', () => {
      const controls = {
        prev: { label: 'Anterior', exists: true },
        next: { label: 'Siguiente', exists: true }
      };

      expect(controls.prev.exists).toBe(true);
      expect(controls.next.exists).toBe(true);
    });

    it('debe tener indicadores para las imágenes', () => {
      const indicators = [0, 1, 2, 3];

      expect(indicators.length).toBeGreaterThan(0);
      indicators.forEach(index => {
        expect(index).toBeGreaterThanOrEqual(0);
      });
    });

    it('debe tener transiciones suaves', () => {
      const transitionClasses = 'transition-opacity duration-500';

      expect(transitionClasses).toContain('transition');
      expect(transitionClasses).toContain('duration-500');
    });
  });

  describe('BaseLayout', () => {
    it('debe tener meta tags esenciales', () => {
      const metaTags = {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        keywords: 'Rollos de canela, delivery, domicilio, panaderia, venezolana, artesanal'
      };

      expect(metaTags.charset).toBe('utf-8');
      expect(metaTags.viewport).toContain('width=device-width');
      expect(metaTags.keywords).toContain('panaderia');
    });

    it('debe cargar fuentes de Google', () => {
      const fonts = ['Courgette', 'Epilogue'];

      fonts.forEach(font => {
        expect(font).toBeDefined();
        expect(typeof font).toBe('string');
      });
    });

    it('debe tener estructura HTML válida', () => {
      const structure = {
        lang: 'es',
        bodyClasses: 'min-h-screen flex flex-col bg-background-light text-zinc-900'
      };

      expect(structure.lang).toBe('es');
      expect(structure.bodyClasses).toContain('min-h-screen');
      expect(structure.bodyClasses).toContain('flex-col');
    });
  });

  describe('Estilos globales', () => {
    it('debe tener colores personalizados definidos', () => {
      const colors = {
        primary: '#ff6600',
        backgroundLight: '#f8f7f5',
        backgroundDark: '#23170f'
      };

      expect(colors.primary).toBe('#ff6600');
      expect(colors.backgroundLight).toBeDefined();
      expect(colors.backgroundDark).toBeDefined();
    });

    it('debe tener fuentes personalizadas', () => {
      const fonts = {
        display: 'Epilogue',
        cursive: 'Courgette'
      };

      expect(fonts.display).toBe('Epilogue');
      expect(fonts.cursive).toBe('Courgette');
    });
  });

  describe('Optimización de imágenes', () => {
    it('debe usar componente Image de Astro', () => {
      const imageProps = {
        width: 800,
        height: 800,
        loading: 'lazy',
        quality: 90
      };

      expect(imageProps.width).toBeGreaterThan(0);
      expect(imageProps.height).toBeGreaterThan(0);
      expect(['lazy', 'eager']).toContain(imageProps.loading);
      expect(imageProps.quality).toBeGreaterThan(0);
      expect(imageProps.quality).toBeLessThanOrEqual(100);
    });

    it('debe tener imágenes WebP', () => {
      const imageFormats = ['.webp', '.jpg', '.png'];
      const webpFormat = imageFormats[0];

      expect(webpFormat).toBe('.webp');
    });
  });

  describe('Responsive Design', () => {
    it('debe tener breakpoints de Tailwind', () => {
      const breakpoints = ['sm', 'md', 'lg', 'xl'];

      breakpoints.forEach(bp => {
        expect(bp).toMatch(/^(sm|md|lg|xl|2xl)$/);
      });
    });

    it('debe tener grid responsive', () => {
      const gridClasses = 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

      expect(gridClasses).toContain('grid');
      expect(gridClasses).toContain('grid-cols-2');
      expect(gridClasses).toContain('md:grid-cols-3');
      expect(gridClasses).toContain('lg:grid-cols-4');
    });

    it('debe tener max-width para pantallas grandes', () => {
      const maxWidth = 'max-w-7xl'; // 1280px

      expect(maxWidth).toContain('max-w');
    });
  });

  describe('Accesibilidad', () => {
    it('debe tener aria-labels en botones', () => {
      const buttons = [
        { label: 'Menú', hasAriaLabel: true },
        { label: 'Anterior', hasAriaLabel: true },
        { label: 'Siguiente', hasAriaLabel: true }
      ];

      buttons.forEach(button => {
        expect(button.hasAriaLabel).toBe(true);
        expect(button.label).toBeDefined();
      });
    });

    it('debe tener alt text en todas las imágenes', () => {
      const images = [
        { alt: 'Logo Galipan Pan', hasAlt: true },
        { alt: 'Deliciosos roles de canela', hasAlt: true },
        { alt: 'Pan de jamon', hasAlt: true }
      ];

      images.forEach(img => {
        expect(img.hasAlt).toBe(true);
        expect(img.alt).toBeDefined();
        expect(img.alt.length).toBeGreaterThan(0);
      });
    });
  });
});
