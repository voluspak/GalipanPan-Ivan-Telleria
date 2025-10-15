// Mock de productos para tests
export const mockProducts = [
  {
    id: 1,
    name: "Rollos de canela",
    img: "/assets/rol1.webp",
    price: 19,
    unid: "x 4 Rolls",
    cant: 1,
    category: "roles",
    display: true
  },
  {
    id: 2,
    name: "Rollos de canela",
    img: "/assets/rol2.webp",
    price: 22,
    unid: "x 6 Rolls",
    cant: 1,
    category: "roles",
    display: true
  },
  {
    id: 3,
    name: "Pan de jamón",
    img: "/assets/pan-de-jamón.webp",
    price: 15,
    unid: "x 1 unid",
    cant: 1,
    category: "panaderia",
    display: true
  },
  {
    id: 4,
    name: "Golfeado",
    img: "/assets/golfeado.webp",
    price: 20,
    unid: "x 4 Rolls",
    cant: 1,
    category: "panaderia",
    display: true
  },
  {
    id: 5,
    name: "Cupcake",
    img: "/assets/cupcake.webp",
    price: 26,
    unid: "x 6 cupcakes",
    cant: 1,
    category: "tortasYCupcakes",
    display: true
  },
  {
    id: 6,
    name: "Tortarol",
    img: "/assets/tortarol.webp",
    price: 25,
    unid: "x 1 unid",
    cant: 1,
    category: "tortasYCupcakes",
    display: true
  }
];

export const mockProduct = mockProducts[0];

export const mockCartItem = {
  ...mockProduct,
  quantity: 2
};

export const mockCart = [
  { ...mockProducts[0], quantity: 2 },
  { ...mockProducts[1], quantity: 1 }
];
