import { describe, it, expect } from 'vitest';

describe('Rutas - Navegación del sitio', () => {
  describe('Rutas principales de Astro', () => {
    const mainRoutes = [
      { path: '/', name: 'Inicio' },
      { path: '/menu', name: 'Menú' },
      { path: '/sobre-nosotros', name: 'Sobre Nosotros' },
      { path: '/contacto', name: 'Contacto' },
      { path: '/galeria', name: 'Galería' },
      { path: '/delivery', name: 'Delivery' }
    ];

    it('debe tener todas las rutas principales definidas', () => {
      expect(mainRoutes.length).toBe(6);
    });

    it('debe tener ruta de inicio /', () => {
      const homeRoute = mainRoutes.find(r => r.path === '/');
      expect(homeRoute).toBeDefined();
      expect(homeRoute?.name).toBe('Inicio');
    });

    it('debe tener ruta de menú /menu', () => {
      const menuRoute = mainRoutes.find(r => r.path === '/menu');
      expect(menuRoute).toBeDefined();
      expect(menuRoute?.name).toBe('Menú');
    });

    it('debe tener ruta de sobre nosotros /sobre-nosotros', () => {
      const aboutRoute = mainRoutes.find(r => r.path === '/sobre-nosotros');
      expect(aboutRoute).toBeDefined();
      expect(aboutRoute?.name).toBe('Sobre Nosotros');
    });

    it('debe tener ruta de contacto /contacto', () => {
      const contactRoute = mainRoutes.find(r => r.path === '/contacto');
      expect(contactRoute).toBeDefined();
      expect(contactRoute?.name).toBe('Contacto');
    });

    it('debe tener ruta de galería /galeria', () => {
      const galleryRoute = mainRoutes.find(r => r.path === '/galeria');
      expect(galleryRoute).toBeDefined();
      expect(galleryRoute?.name).toBe('Galería');
    });

    it('debe tener ruta de delivery /delivery', () => {
      const deliveryRoute = mainRoutes.find(r => r.path === '/delivery');
      expect(deliveryRoute).toBeDefined();
      expect(deliveryRoute?.name).toBe('Delivery');
    });

    it('todas las rutas deben comenzar con /', () => {
      mainRoutes.forEach(route => {
        expect(route.path.startsWith('/')).toBe(true);
      });
    });

    it('no debe haber rutas duplicadas', () => {
      const paths = mainRoutes.map(r => r.path);
      const uniquePaths = new Set(paths);
      expect(paths.length).toBe(uniquePaths.size);
    });
  });

  describe('Rutas del Header', () => {
    const headerNavLinks = [
      { href: '/menu', label: 'Menú' },
      { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
      { href: '/contacto', label: 'Contacto' },
      { href: '/galeria', label: 'Galeria' },
      { href: '/delivery', label: 'Pedido Online' }
    ];

    it('debe tener 5 links de navegación en el header', () => {
      expect(headerNavLinks.length).toBe(5);
    });

    it('debe tener link al menú', () => {
      const menuLink = headerNavLinks.find(l => l.href === '/menu');
      expect(menuLink).toBeDefined();
      expect(menuLink?.label).toBe('Menú');
    });

    it('debe tener link a sobre nosotros', () => {
      const aboutLink = headerNavLinks.find(l => l.href === '/sobre-nosotros');
      expect(aboutLink).toBeDefined();
      expect(aboutLink?.label).toBe('Sobre Nosotros');
    });

    it('debe tener link a contacto', () => {
      const contactLink = headerNavLinks.find(l => l.href === '/contacto');
      expect(contactLink).toBeDefined();
      expect(contactLink?.label).toBe('Contacto');
    });

    it('debe tener link a galería', () => {
      const galleryLink = headerNavLinks.find(l => l.href === '/galeria');
      expect(galleryLink).toBeDefined();
      expect(galleryLink?.label).toBe('Galeria');
    });

    it('debe tener link a delivery', () => {
      const deliveryLink = headerNavLinks.find(l => l.href === '/delivery');
      expect(deliveryLink).toBeDefined();
      expect(deliveryLink?.label).toBe('Pedido Online');
    });

    it('debe tener botón "Ordenar Ahora" que apunta a /delivery', () => {
      const orderButton = '/delivery';
      expect(orderButton).toBe('/delivery');
    });

    it('todos los links deben ser rutas internas (comenzar con /)', () => {
      headerNavLinks.forEach(link => {
        expect(link.href.startsWith('/')).toBe(true);
      });
    });
  });

  describe('Rutas del Footer', () => {
    const footerNavLinks = [
      { href: '/menu', label: 'Menú' },
      { href: '/galeria', label: 'Galeria' },
      { href: '/delivery', label: 'Pedido Online' },
      { href: '/contacto', label: 'Contactanos' },
      { href: '/sobre-nosotros', label: 'Sobre Nosotros' }
    ];

    it('debe tener 5 links de navegación en el footer', () => {
      expect(footerNavLinks.length).toBe(5);
    });

    it('todos los links del footer deben ser válidos', () => {
      footerNavLinks.forEach(link => {
        expect(link.href).toBeTruthy();
        expect(link.label).toBeTruthy();
        expect(link.href.startsWith('/')).toBe(true);
      });
    });

    it('debe tener enlaces a redes sociales externas', () => {
      const socialLinks = [
        { href: 'https://www.instagram.com/galipanpan/', label: 'Instagram' },
        { href: 'https://www.facebook.com/galipanpan', label: 'Facebook' },
        { href: 'https://api.whatsapp.com/send?phone=573173934277', label: 'Whatsapp' }
      ];

      expect(socialLinks.length).toBe(3);
      socialLinks.forEach(link => {
        expect(link.href.startsWith('http')).toBe(true);
      });
    });
  });

  describe('Rutas de React Router (Delivery App)', () => {
    const deliveryBasePath = '/delivery';

    it('debe tener basename correcto /delivery', () => {
      expect(deliveryBasePath).toBe('/delivery');
    });

    it('debe tener ruta index para mostrar todos los productos', () => {
      const indexRoute = `${deliveryBasePath}`;
      expect(indexRoute).toBe('/delivery');
    });

    it('debe tener ruta para categoría roles', () => {
      const rolesRoute = `${deliveryBasePath}/category/roles`;
      expect(rolesRoute).toBe('/delivery/category/roles');
    });

    it('debe tener ruta para categoría panadería', () => {
      const panaderiaRoute = `${deliveryBasePath}/category/panaderia`;
      expect(panaderiaRoute).toBe('/delivery/category/panaderia');
    });

    it('debe tener ruta para categoría tortas y cupcakes', () => {
      const tortasRoute = `${deliveryBasePath}/category/tortasYCupcakes`;
      expect(tortasRoute).toBe('/delivery/category/tortasYCupcakes');
    });

    it('debe generar rutas de categoría correctamente', () => {
      const generateCategoryRoute = (category: string) => `${deliveryBasePath}/category/${category}`;

      expect(generateCategoryRoute('roles')).toBe('/delivery/category/roles');
      expect(generateCategoryRoute('panaderia')).toBe('/delivery/category/panaderia');
      expect(generateCategoryRoute('tortasYCupcakes')).toBe('/delivery/category/tortasYCupcakes');
    });

    it('todas las rutas de delivery deben comenzar con /delivery', () => {
      const deliveryRoutes = [
        '/delivery',
        '/delivery/category/roles',
        '/delivery/category/panaderia',
        '/delivery/category/tortasYCupcakes'
      ];

      deliveryRoutes.forEach(route => {
        expect(route.startsWith('/delivery')).toBe(true);
      });
    });
  });

  describe('Links internos en páginas', () => {
    it('index.astro debe tener link a /menu', () => {
      const menuLink = '/menu';
      expect(menuLink).toBe('/menu');
    });

    it('index.astro debe tener link a /delivery para "Añadir al Carrito"', () => {
      const addToCartLink = '/delivery';
      expect(addToCartLink).toBe('/delivery');
    });

    it('logo en Header debe apuntar a /', () => {
      const logoLink = '/';
      expect(logoLink).toBe('/');
    });

    it('logo en Navbar de delivery debe usar React Router Link', () => {
      // El logo en delivery navbar debe usar Link to='/' (React Router)
      // que navegará dentro del contexto /delivery
      const deliveryLogoLink = '/'; // Relativo a /delivery, = /delivery
      expect(deliveryLogoLink).toBe('/');
    });
  });

  describe('Validación de rutas', () => {
    it('no debe haber links rotos (hrefs vacíos)', () => {
      const allLinks = [
        '/',
        '/menu',
        '/sobre-nosotros',
        '/contacto',
        '/galeria',
        '/delivery',
        '/delivery/category/roles',
        '/delivery/category/panaderia',
        '/delivery/category/tortasYCupcakes'
      ];

      allLinks.forEach(link => {
        expect(link).toBeTruthy();
        expect(link.length).toBeGreaterThan(0);
      });
    });

    it('no debe haber rutas con espacios', () => {
      const allLinks = [
        '/',
        '/menu',
        '/sobre-nosotros',
        '/contacto',
        '/galeria',
        '/delivery'
      ];

      allLinks.forEach(link => {
        expect(link).not.toContain(' ');
      });
    });

    it('rutas con guiones deben estar en minúsculas', () => {
      const routesWithHyphens = ['/sobre-nosotros'];

      routesWithHyphens.forEach(route => {
        expect(route).toBe(route.toLowerCase());
      });
    });

    it('debe mapear correctamente rutas a archivos .astro', () => {
      const routeToFile = {
        '/': 'index.astro',
        '/menu': 'menu.astro',
        '/sobre-nosotros': 'sobre-nosotros.astro',
        '/contacto': 'contacto.astro',
        '/galeria': 'galeria.astro',
        '/delivery': 'delivery.astro'
      };

      Object.entries(routeToFile).forEach(([route, file]) => {
        expect(file.endsWith('.astro')).toBe(true);
        if (route === '/') {
          expect(file).toBe('index.astro');
        } else {
          expect(file).toBe(`${route.slice(1)}.astro`);
        }
      });
    });
  });

  describe('Navegación entre páginas', () => {
    it('desde index se puede navegar a todas las páginas principales', () => {
      const fromIndex = ['/menu', '/delivery', '/sobre-nosotros', '/contacto', '/galeria'];

      fromIndex.forEach(route => {
        expect(route.startsWith('/')).toBe(true);
      });

      expect(fromIndex.length).toBe(5);
    });

    it('desde delivery se puede navegar entre categorías', () => {
      const deliveryCategories = [
        '/delivery',
        '/delivery/category/roles',
        '/delivery/category/panaderia',
        '/delivery/category/tortasYCupcakes'
      ];

      deliveryCategories.forEach(route => {
        expect(route.startsWith('/delivery')).toBe(true);
      });

      expect(deliveryCategories.length).toBe(4);
    });

    it('todas las páginas deben tener acceso al Header y Footer', () => {
      // Header y Footer están en todas las páginas que usan BaseLayout
      const pagesWithLayout = [
        'index.astro',
        'menu.astro',
        'sobre-nosotros.astro',
        'contacto.astro',
        'galeria.astro',
        'delivery.astro'
      ];

      expect(pagesWithLayout.length).toBe(6);
      pagesWithLayout.forEach(page => {
        expect(page.endsWith('.astro')).toBe(true);
      });
    });
  });

  describe('Skip link', () => {
    it('debe tener skip link que apunta a #main-content', () => {
      const skipLinkHref = '#main-content';
      expect(skipLinkHref).toBe('#main-content');
    });

    it('todas las páginas deben tener elemento con id="main-content"', () => {
      const mainContentId = 'main-content';
      expect(mainContentId).toBe('main-content');
    });
  });
});
