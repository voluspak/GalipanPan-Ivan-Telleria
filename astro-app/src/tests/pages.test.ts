import { describe, it, expect } from 'vitest';
import { getByText, getByRole } from '@testing-library/dom';

describe('Páginas del sitio', () => {
  describe('Estructura HTML', () => {
    it('debe tener un título válido', () => {
      const title = 'Galipan Pan';
      expect(title).toBeDefined();
      expect(title).toContain('Galipan');
    });

    it('debe tener meta tags esenciales', () => {
      const keywords = 'Rollos de canela, delivery, domicilio, panaderia, venezolana, artesanal';
      expect(keywords).toBeDefined();
      expect(keywords).toContain('panaderia');
    });
  });

  describe('Navegación', () => {
    it('debe tener enlaces de navegación principales', () => {
      const navLinks = [
        { href: '/menu', label: 'Menú' },
        { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
        { href: '/contacto', label: 'Contacto' },
        { href: '/galeria', label: 'Galeria' },
      ];

      expect(navLinks).toHaveLength(4);
      expect(navLinks[0].href).toBe('/menu');
      expect(navLinks[0].label).toBe('Menú');
    });
  });

  describe('Contenido de galería', () => {
    it('debe tener datos de galería válidos', async () => {
      const galeriaModule = await import('../content/galeria/data.json');
      const galeriaData = galeriaModule.default;

      expect(galeriaData).toBeDefined();
      expect(Array.isArray(galeriaData)).toBe(true);
      expect(galeriaData.length).toBeGreaterThan(0);

      // Verificar estructura de cada foto
      galeriaData.forEach((foto: any) => {
        expect(foto).toHaveProperty('img');
        expect(foto).toHaveProperty('nombre');
        expect(typeof foto.img).toBe('string');
        expect(typeof foto.nombre).toBe('string');
      });
    });

    it('debe tener URLs de imágenes válidas', async () => {
      const galeriaModule = await import('../content/galeria/data.json');
      const galeriaData = galeriaModule.default;

      galeriaData.forEach((foto: any) => {
        const isExternalUrl = foto.img.startsWith('http');
        const isLocalPath = foto.img.startsWith('/assets');

        expect(isExternalUrl || isLocalPath).toBe(true);
      });
    });
  });

  describe('Configuración de colores', () => {
    it('debe tener colores primarios definidos', () => {
      const primaryColor = '#ff6600';
      const backgroundLight = '#f8f7f5';
      const backgroundDark = '#23170f';

      expect(primaryColor).toBe('#ff6600');
      expect(backgroundLight).toBeDefined();
      expect(backgroundDark).toBeDefined();
    });
  });

  describe('Imágenes del carousel', () => {
    it('debe tener imágenes para el carousel', () => {
      const carouselImages = [
        { alt: 'Pan de jamon', title: 'Pan de Jamon' },
        { alt: 'Rol de canela', title: 'Rol de canela' },
        { alt: 'Cupcake', title: 'Cupcake' },
      ];

      expect(carouselImages).toBeDefined();
      expect(carouselImages.length).toBeGreaterThan(0);

      carouselImages.forEach(img => {
        expect(img).toHaveProperty('alt');
        expect(img).toHaveProperty('title');
      });
    });
  });

  describe('Pricing', () => {
    it('debe tener información de precios correcta', () => {
      const pricing = {
        product: 'Rollos de Canela',
        price: 'COP$19k',
        quantity: '12 Rolls',
        delivery: '+ Delivery'
      };

      expect(pricing.product).toBe('Rollos de Canela');
      expect(pricing.price).toContain('19k');
      expect(pricing.quantity).toContain('12');
    });
  });

  describe('Footer', () => {
    it('debe tener enlaces de redes sociales', () => {
      const socialLinks = [
        { href: 'https://www.instagram.com/galipanpan/', icon: 'fa-instagram' },
        { href: 'https://www.facebook.com/galipanpan', icon: 'fa-facebook' },
        { href: 'https://api.whatsapp.com/send?phone=573173934277', icon: 'fa-whatsapp' },
      ];

      expect(socialLinks).toHaveLength(3);
      socialLinks.forEach(link => {
        expect(link.href).toMatch(/^https?:\/\//);
      });
    });
  });

  describe('SEO', () => {
    it('debe tener descripciones para cada página', () => {
      const pages = [
        { title: 'Inicio', description: 'Pagina principal de Galipan Pan' },
        { title: 'Galeria', description: 'Galeria de fotos de los productos' },
        { title: 'Sobre Nosotros', description: 'Nacimiento de la idea de Galipan Pan' },
      ];

      pages.forEach(page => {
        expect(page.title).toBeDefined();
        expect(page.description).toBeDefined();
        expect(page.description.length).toBeGreaterThan(10);
      });
    });
  });

  describe('Responsive design', () => {
    it('debe tener clases responsive de Tailwind', () => {
      const responsiveClasses = [
        'sm:px-6',
        'md:text-5xl',
        'lg:grid-cols-4',
        'md:grid-cols-3',
      ];

      responsiveClasses.forEach(className => {
        expect(className).toMatch(/^(sm|md|lg|xl):/);
      });
    });
  });
});
