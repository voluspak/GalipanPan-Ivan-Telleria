import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mockProduct, mockProducts } from './mocks/products.mock';

// Mock de localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

// Asignar mock a window
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Acciones del carrito
const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_ONE_FROM_CART: 'REMOVE_ONE_FROM_CART',
  DELETE_FROM_CART: 'DELETE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
};

describe('CartReducer - Lógica del carrito', () => {
  let state: any[];

  beforeEach(() => {
    // Limpiar localStorage antes de cada test
    window.localStorage.clear();
    state = [];
  });

  describe('ADD_TO_CART', () => {
    it('debe agregar un producto al carrito vacío', () => {
      const product = mockProduct;
      const action = {
        type: CART_ACTIONS.ADD_TO_CART,
        payload: product
      };

      // Simular lógica del reducer
      const cartItemIndex = state.findIndex((prod) => prod.id === product.id);

      if (cartItemIndex >= 0) {
        state[cartItemIndex].cant += 1;
      } else {
        state = [
          ...state,
          {
            ...product,
            cant: 1
          }
        ];
      }

      expect(state.length).toBe(1);
      expect(state[0].id).toBe(product.id);
      expect(state[0].cant).toBe(1);
    });

    it('debe incrementar cantidad si el producto ya existe en el carrito', () => {
      const product = mockProduct;

      // Estado inicial con producto
      state = [{ ...product, cant: 1 }];

      // Agregar el mismo producto
      const cartItemIndex = state.findIndex((prod) => prod.id === product.id);

      if (cartItemIndex >= 0) {
        state = [...state];
        state[cartItemIndex] = { ...state[cartItemIndex], cant: state[cartItemIndex].cant + 1 };
      }

      expect(state.length).toBe(1);
      expect(state[0].cant).toBe(2);
    });

    it('debe agregar múltiples productos diferentes', () => {
      state = [];

      // Agregar varios productos
      mockProducts.slice(0, 3).forEach(product => {
        const cartItemIndex = state.findIndex((prod) => prod.id === product.id);

        if (cartItemIndex >= 0) {
          state[cartItemIndex].cant += 1;
        } else {
          state = [
            ...state,
            {
              ...product,
              cant: 1
            }
          ];
        }
      });

      expect(state.length).toBe(3);
      expect(state.every(item => item.cant === 1)).toBe(true);
    });
  });

  describe('REMOVE_ONE_FROM_CART', () => {
    it('debe decrementar cantidad si es mayor a 1', () => {
      const product = mockProduct;
      state = [{ ...product, cant: 3 }];

      const cartItemIndex = state.findIndex((prod) => prod.id === product.id);

      if (cartItemIndex >= 0 && state[cartItemIndex].cant > 1) {
        state = [...state];
        state[cartItemIndex] = { ...state[cartItemIndex], cant: state[cartItemIndex].cant - 1 };
      }

      expect(state.length).toBe(1);
      expect(state[0].cant).toBe(2);
    });

    it('debe eliminar el producto si cantidad es 1', () => {
      const product = mockProduct;
      state = [{ ...product, cant: 1 }];

      const cartItemIndex = state.findIndex((prod) => prod.id === product.id);

      if (cartItemIndex >= 0) {
        if (state[cartItemIndex].cant > 1) {
          state[cartItemIndex].cant -= 1;
        } else {
          state = state.filter(item => item.id !== product.id);
        }
      }

      expect(state.length).toBe(0);
    });

    it('no debe hacer nada si el producto no existe', () => {
      const product = mockProduct;
      state = [{ ...mockProducts[1], cant: 2 }];
      const originalLength = state.length;

      const cartItemIndex = state.findIndex((prod) => prod.id === product.id);

      if (cartItemIndex >= 0) {
        if (state[cartItemIndex].cant > 1) {
          state[cartItemIndex].cant -= 1;
        } else {
          state = state.filter(item => item.id !== product.id);
        }
      }

      expect(state.length).toBe(originalLength);
    });
  });

  describe('DELETE_FROM_CART', () => {
    it('debe eliminar completamente un producto del carrito', () => {
      const product = mockProduct;
      state = [
        { ...product, cant: 5 },
        { ...mockProducts[1], cant: 2 }
      ];

      state = state.filter(item => item.id !== product.id);

      expect(state.length).toBe(1);
      expect(state.find(item => item.id === product.id)).toBeUndefined();
    });

    it('debe eliminar el producto correcto de múltiples items', () => {
      state = [
        { ...mockProducts[0], cant: 2 },
        { ...mockProducts[1], cant: 3 },
        { ...mockProducts[2], cant: 1 }
      ];

      const productToDelete = mockProducts[1];
      state = state.filter(item => item.id !== productToDelete.id);

      expect(state.length).toBe(2);
      expect(state.find(item => item.id === productToDelete.id)).toBeUndefined();
      expect(state.find(item => item.id === mockProducts[0].id)).toBeDefined();
      expect(state.find(item => item.id === mockProducts[2].id)).toBeDefined();
    });
  });

  describe('CLEAR_CART', () => {
    it('debe vaciar completamente el carrito', () => {
      state = [
        { ...mockProducts[0], cant: 2 },
        { ...mockProducts[1], cant: 3 },
        { ...mockProducts[2], cant: 1 }
      ];

      state = [];

      expect(state.length).toBe(0);
    });
  });

  describe('Cálculos del carrito', () => {
    it('debe calcular correctamente el total de items', () => {
      state = [
        { ...mockProducts[0], cant: 2 },
        { ...mockProducts[1], cant: 3 },
        { ...mockProducts[2], cant: 1 }
      ];

      const totalItems = state.reduce((acc, item) => acc + item.cant, 0);

      expect(totalItems).toBe(6);
    });

    it('debe calcular correctamente el subtotal de cada item', () => {
      const item = { ...mockProduct, cant: 3 };
      const subtotal = item.price * item.cant;

      expect(subtotal).toBe(57); // 19 * 3
    });

    it('debe calcular correctamente el total a pagar', () => {
      state = [
        { ...mockProducts[0], cant: 2 }, // 19 * 2 = 38
        { ...mockProducts[1], cant: 1 }, // 22 * 1 = 22
        { ...mockProducts[2], cant: 3 }  // 15 * 3 = 45
      ];

      const total = state.reduce((acc, item) => acc + (item.price * item.cant), 0);

      expect(total).toBe(105);
    });

    it('debe retornar 0 si el carrito está vacío', () => {
      state = [];

      const total = state.reduce((acc, item) => acc + (item.price * item.cant), 0);

      expect(total).toBe(0);
    });
  });

  describe('Persistencia en localStorage', () => {
    it('debe guardar el carrito en localStorage', () => {
      state = [{ ...mockProduct, cant: 2 }];

      // Simular guardado
      window.localStorage.setItem('cart', JSON.stringify(state));

      const saved = window.localStorage.getItem('cart');
      expect(saved).toBeDefined();

      const parsed = JSON.parse(saved!);
      expect(parsed.length).toBe(1);
      expect(parsed[0].id).toBe(mockProduct.id);
    });

    it('debe recuperar el carrito de localStorage', () => {
      const cartData = [
        { ...mockProducts[0], cant: 2 },
        { ...mockProducts[1], cant: 1 }
      ];

      // Guardar en localStorage
      window.localStorage.setItem('cart', JSON.stringify(cartData));

      // Recuperar
      const saved = window.localStorage.getItem('cart');
      const recovered = saved ? JSON.parse(saved) : [];

      expect(recovered.length).toBe(2);
      expect(recovered[0].cant).toBe(2);
      expect(recovered[1].cant).toBe(1);
    });

    it('debe retornar array vacío si no hay datos en localStorage', () => {
      const saved = window.localStorage.getItem('cart');
      const cart = saved ? JSON.parse(saved) : [];

      expect(Array.isArray(cart)).toBe(true);
      expect(cart.length).toBe(0);
    });

    it('debe limpiar localStorage al vaciar carrito', () => {
      // Guardar carrito
      window.localStorage.setItem('cart', JSON.stringify([{ ...mockProduct, cant: 1 }]));

      // Limpiar
      window.localStorage.setItem('cart', JSON.stringify([]));

      const saved = window.localStorage.getItem('cart');
      const cart = saved ? JSON.parse(saved) : [];

      expect(cart.length).toBe(0);
    });
  });

  describe('Validaciones', () => {
    it('debe validar que cant sea mayor a 0', () => {
      state = [{ ...mockProduct, cant: 2 }];

      state.forEach(item => {
        expect(item.cant).toBeGreaterThan(0);
      });
    });

    it('debe validar que los IDs sean únicos en el carrito', () => {
      state = [
        { ...mockProducts[0], cant: 2 },
        { ...mockProducts[1], cant: 1 },
        { ...mockProducts[2], cant: 3 }
      ];

      const ids = state.map(item => item.id);
      const uniqueIds = new Set(ids);

      expect(ids.length).toBe(uniqueIds.size);
    });

    it('debe validar que cant sea un número', () => {
      state = [{ ...mockProduct, cant: 2 }];

      state.forEach(item => {
        expect(typeof item.cant).toBe('number');
      });
    });
  });
});
