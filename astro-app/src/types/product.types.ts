/**
 * Representa un producto en el catálogo
 */
export interface Product {
  id: number
  name: string
  img: string
  price: number
  unid: string
  cant: number
  category: ProductCategory
  display: boolean
}

/**
 * Categorías disponibles para productos
 */
export type ProductCategory = 'roles' | 'panaderia' | 'tortasYCupcakes'

/**
 * Producto para crear (sin id, cant, display por defecto)
 */
export interface ProductCreate {
  name: string
  img: string
  price: number
  unid: string
  category: ProductCategory
}

/**
 * Producto para actualizar (campos opcionales)
 */
export interface ProductUpdate {
  name?: string
  img?: string
  price?: number
  unid?: string
  category?: ProductCategory
  display?: boolean
}

/**
 * Respuesta del servicio de productos
 */
export type ProductsResponse = Product[]
