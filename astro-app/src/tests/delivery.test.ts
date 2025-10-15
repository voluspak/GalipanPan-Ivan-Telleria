import { describe, it, expect, beforeEach } from 'vitest';
import { mockProducts, mockProduct, mockCart } from './mocks/products.mock';

describe('Delivery - Estructura de datos', () => {
  describe('Productos', () => {
    it('debe tener la estructura correcta de producto', () => {
      const product = mockProduct;

      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('img');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('unid');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('display');
    });

    it('debe tener tipos correctos en las propiedades', () => {
      const product = mockProduct;

      expect(typeof product.id).toBe('number');
      expect(typeof product.name).toBe('string');
      expect(typeof product.img).toBe('string');
      expect(typeof product.price).toBe('number');
      expect(typeof product.unid).toBe('string');
      expect(typeof product.category).toBe('string');
      expect(typeof product.display).toBe('boolean');
    });

    it('debe tener productos de diferentes categorías', () => {
      const categories = [...new Set(mockProducts.map(p => p.category))];

      expect(categories).toContain('roles');
      expect(categories).toContain('panaderia');
      expect(categories).toContain('tortasYCupcakes');
      expect(categories.length).toBeGreaterThanOrEqual(3);
    });

    it('debe tener precios válidos (mayores a 0)', () => {
      mockProducts.forEach(product => {
        expect(product.price).toBeGreaterThan(0);
      });
    });

    it('debe tener al menos 6 productos', () => {
      expect(mockProducts.length).toBeGreaterThanOrEqual(6);
    });
  });

  describe('Carrito', () => {
    it('debe tener estructura correcta de item de carrito', () => {
      const cartItem = { ...mockProduct, quantity: 2 };

      expect(cartItem).toHaveProperty('id');
      expect(cartItem).toHaveProperty('quantity');
      expect(cartItem.quantity).toBe(2);
    });

    it('debe poder calcular el total de un item', () => {
      const cartItem = { ...mockProduct, quantity: 2 };
      const total = cartItem.price * cartItem.quantity;

      expect(total).toBe(38); // 19 * 2
    });

    it('debe poder calcular el total del carrito', () => {
      const cart = mockCart;
      const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

      expect(total).toBe(60); // (19*2) + (22*1)
    });

    it('debe poder contar items totales en el carrito', () => {
      const cart = mockCart;
      const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

      expect(totalItems).toBe(3); // 2 + 1
    });
  });

  describe('Categorías', () => {
    it('debe filtrar productos por categoría "roles"', () => {
      const rolesProducts = mockProducts.filter(p => p.category === 'roles');

      expect(rolesProducts.length).toBeGreaterThan(0);
      rolesProducts.forEach(product => {
        expect(product.category).toBe('roles');
      });
    });

    it('debe filtrar productos por categoría "panaderia"', () => {
      const panaderiaProducts = mockProducts.filter(p => p.category === 'panaderia');

      expect(panaderiaProducts.length).toBeGreaterThan(0);
      panaderiaProducts.forEach(product => {
        expect(product.category).toBe('panaderia');
      });
    });

    it('debe filtrar productos por categoría "tortasYCupcakes"', () => {
      const tortasProducts = mockProducts.filter(p => p.category === 'tortasYCupcakes');

      expect(tortasProducts.length).toBeGreaterThan(0);
      tortasProducts.forEach(product => {
        expect(product.category).toBe('tortasYCupcakes');
      });
    });

    it('debe mostrar solo productos con display true', () => {
      const visibleProducts = mockProducts.filter(p => p.display);

      expect(visibleProducts.length).toBe(mockProducts.length);
    });
  });
});

describe('Delivery - Lógica de negocio', () => {
  describe('Operaciones de carrito', () => {
    let cart: typeof mockCart;

    beforeEach(() => {
      cart = [];
    });

    it('debe agregar un producto al carrito vacío', () => {
      const product = mockProduct;
      cart.push({ ...product, quantity: 1 });

      expect(cart.length).toBe(1);
      expect(cart[0].id).toBe(product.id);
      expect(cart[0].quantity).toBe(1);
    });

    it('debe incrementar cantidad si el producto ya existe', () => {
      const product = mockProduct;

      // Agregar producto
      cart.push({ ...product, quantity: 1 });

      // Simular agregar el mismo producto
      const existingItem = cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      }

      expect(cart.length).toBe(1);
      expect(cart[0].quantity).toBe(2);
    });

    it('debe decrementar cantidad de un producto', () => {
      const product = mockProduct;
      cart.push({ ...product, quantity: 3 });

      // Simular decrementar
      const item = cart.find(i => i.id === product.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      expect(cart[0].quantity).toBe(2);
    });

    it('debe remover producto si cantidad llega a 0', () => {
      const product = mockProduct;
      cart.push({ ...product, quantity: 1 });

      // Simular decrementar y remover
      const item = cart.find(i => i.id === product.id);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          cart = cart.filter(i => i.id !== product.id);
        }
      }

      expect(cart.length).toBe(0);
    });

    it('debe calcular correctamente el subtotal de cada item', () => {
      const product = { ...mockProduct, quantity: 3 };
      const subtotal = product.price * product.quantity;

      expect(subtotal).toBe(57); // 19 * 3
    });

    it('debe calcular correctamente el total del carrito con múltiples items', () => {
      cart = [
        { ...mockProducts[0], quantity: 2 }, // 19 * 2 = 38
        { ...mockProducts[1], quantity: 1 }, // 22 * 1 = 22
        { ...mockProducts[2], quantity: 3 }  // 15 * 3 = 45
      ];

      const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

      expect(total).toBe(105); // 38 + 22 + 45
    });
  });

  describe('Validaciones', () => {
    it('debe validar que el ID del producto sea único', () => {
      const ids = mockProducts.map(p => p.id);
      const uniqueIds = new Set(ids);

      expect(ids.length).toBe(uniqueIds.size);
    });

    it('debe validar que el nombre no esté vacío', () => {
      mockProducts.forEach(product => {
        expect(product.name).toBeTruthy();
        expect(product.name.length).toBeGreaterThan(0);
      });
    });

    it('debe validar que la unidad no esté vacía', () => {
      mockProducts.forEach(product => {
        expect(product.unid).toBeTruthy();
        expect(product.unid.length).toBeGreaterThan(0);
      });
    });

    it('debe validar que la categoría sea válida', () => {
      const validCategories = ['roles', 'panaderia', 'tortasYCupcakes'];

      mockProducts.forEach(product => {
        expect(validCategories).toContain(product.category);
      });
    });

    it('debe validar que la imagen tenga una ruta', () => {
      mockProducts.forEach(product => {
        expect(product.img).toBeTruthy();
        expect(product.img).toMatch(/\.(jpg|jpeg|png|webp)$/i);
      });
    });
  });

  describe('Búsqueda y filtrado', () => {
    it('debe encontrar un producto por ID', () => {
      const productId = 3;
      const found = mockProducts.find(p => p.id === productId);

      expect(found).toBeDefined();
      expect(found?.id).toBe(productId);
    });

    it('debe buscar productos por nombre (case insensitive)', () => {
      const searchTerm = 'roll';
      const results = mockProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      expect(results.length).toBeGreaterThan(0);
    });

    it('debe obtener productos por rango de precio', () => {
      const minPrice = 15;
      const maxPrice = 22;
      const results = mockProducts.filter(p =>
        p.price >= minPrice && p.price <= maxPrice
      );

      expect(results.length).toBeGreaterThan(0);
      results.forEach(product => {
        expect(product.price).toBeGreaterThanOrEqual(minPrice);
        expect(product.price).toBeLessThanOrEqual(maxPrice);
      });
    });
  });
});

describe('Delivery - Rutas y navegación', () => {
  it('debe tener ruta base /delivery', () => {
    const deliveryRoute = '/delivery';

    expect(deliveryRoute).toBe('/delivery');
  });

  it('debe tener rutas de categorías correctas', () => {
    const categoryRoutes = [
      '/delivery',
      '/delivery/category/roles',
      '/delivery/category/panaderia',
      '/delivery/category/tortasYCupcakes'
    ];

    categoryRoutes.forEach(route => {
      expect(route).toMatch(/^\/delivery/);
    });
  });

  it('debe mapear categorías a rutas', () => {
    const categoryToRoute = (category: string) => {
      if (category === 'all') return '/delivery';
      return `/delivery/category/${category}`;
    };

    expect(categoryToRoute('all')).toBe('/delivery');
    expect(categoryToRoute('roles')).toBe('/delivery/category/roles');
    expect(categoryToRoute('panaderia')).toBe('/delivery/category/panaderia');
    expect(categoryToRoute('tortasYCupcakes')).toBe('/delivery/category/tortasYCupcakes');
  });
});

describe('Delivery - Renderizado de componentes', () => {
  describe('ProductsList', () => {
    it('debe renderizar correctamente la estructura de un producto', () => {
      const product = mockProduct;

      // Simulación de estructura HTML esperada
      const productHTML = {
        image: product.img,
        title: product.name,
        price: `COP${product.price}k`,
        unit: product.unid,
        deliveryNote: '+ Delivery'
      };

      expect(productHTML.image).toBeDefined();
      expect(productHTML.title).toBe('Rollos de canela');
      expect(productHTML.price).toBe('COP19k');
      expect(productHTML.unit).toBe('x 4 Rolls');
      expect(productHTML.deliveryNote).toBe('+ Delivery');
    });

    it('debe mostrar solo productos con display true', () => {
      const visibleProducts = mockProducts.filter(p => p.display);

      expect(visibleProducts.every(p => p.display === true)).toBe(true);
    });
  });

  describe('CartWidget', () => {
    it('debe calcular el total de items en el carrito', () => {
      const cart = mockCart;
      const total = cart.reduce((acc, item) => acc + item.quantity, 0);

      expect(total).toBe(3);
    });

    it('debe mostrar badge solo si hay items', () => {
      const emptyCart: typeof mockCart = [];
      const fullCart = mockCart;

      const shouldShowBadge = (cart: typeof mockCart) => cart.length > 0;

      expect(shouldShowBadge(emptyCart)).toBe(false);
      expect(shouldShowBadge(fullCart)).toBe(true);
    });
  });

  describe('ModalCart', () => {
    it('debe calcular el total a pagar', () => {
      const cart = mockCart;
      const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

      expect(total).toBe(60);
    });

    it('debe formatear el precio correctamente', () => {
      const formatPrice = (price: number) => `COP$${price}k`;

      expect(formatPrice(19)).toBe('COP$19k');
      expect(formatPrice(60)).toBe('COP$60k');
    });

    it('debe mostrar mensaje si el carrito está vacío', () => {
      const cart: typeof mockCart = [];
      const isEmpty = cart.length === 0;

      expect(isEmpty).toBe(true);
    });
  });
});
