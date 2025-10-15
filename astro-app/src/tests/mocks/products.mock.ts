// Mock de productos para tests
export const mockProducts = [
  {
    id: 1,
    name: "Rollos de canela",
    img: "../assets/rol1.jpg",
    price: 19,
    unid: "x 4 Rolls",
    cant: 1,
    category: "roles",
    display: true
  },
  {
    id: 2,
    name: "Rollos de canela",
    img: "../assets/rol2.jpg",
    price: 22,
    unid: "x 6 Rolls",
    cant: 1,
    category: "roles",
    display: true
  },
  {
    id: 3,
    name: "Pan de jamon",
    img: "../assets/pan-de-jamón.jpg",
    price: 15,
    unid: "x 1 unid",
    cant: 1,
    category: "panaderia",
    display: true
  },
  {
    id: 4,
    name: "Golfeado",
    img: "../assets/golfeado.jpg",
    price: 20,
    unid: "x 4 Rolls",
    cant: 1,
    category: "panaderia",
    display: true
  },
  {
    id: 5,
    name: "Cupcake",
    img: "../assets/cupcake.jpg",
    price: 26,
    unid: "x 6 cupcakes",
    cant: 1,
    category: "tortasYCupcakes",
    display: true
  },
  {
    id: 6,
    name: "Tortarol",
    img: "../assets/tortarol.jpg",
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
