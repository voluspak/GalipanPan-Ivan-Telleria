import axios, { type AxiosRequestConfig } from 'axios'
import productsData from '../mocks/productsData.json'
import type { Product, ProductCreate, ProductUpdate, ProductsResponse } from '../types'
import { API_ENDPOINTS, API_TIMEOUTS, COMMON_HEADERS, USE_MOCKS } from '../constants'

/**
 * Crea los headers de autenticación
 */
function createAuthHeaders(token: string): AxiosRequestConfig {
  return {
    headers: {
      ...COMMON_HEADERS,
      Authorization: `bearer ${token}`
    }
  }
}

/**
 * Crea un nuevo producto
 */
export async function createProduct(productToAdd: ProductCreate, token: string): Promise<Product> {
  const config = createAuthHeaders(token)

  try {
    const response = await axios.post<Product>(API_ENDPOINTS.PRODUCTS, productToAdd, config)
    return response.data
  } catch (error) {
    console.error('Error al crear producto:', error)
    throw new Error('No se pudo crear el producto correctamente')
  }
}

/**
 * Actualiza un producto completo (PUT)
 */
export async function updateProduct(
  id: number,
  modifications: ProductUpdate,
  token: string
): Promise<Product> {
  const PUT_URL = `${API_ENDPOINTS.PRODUCTS}/${id}`
  const config = createAuthHeaders(token)

  try {
    const response = await axios.put<Product>(PUT_URL, modifications, config)
    return response.data
  } catch (error) {
    console.error('Error al actualizar producto:', error)
    throw new Error('No se pudo actualizar el producto correctamente')
  }
}

/**
 * Actualiza parcialmente un producto (PATCH)
 */
export async function patchProduct(
  id: number,
  keyToUpdate: Partial<Product>,
  token: string
): Promise<Product> {
  const PATCH_URL = `${API_ENDPOINTS.PRODUCTS}/${id}`
  const config = createAuthHeaders(token)

  try {
    const response = await axios.patch<Product>(PATCH_URL, keyToUpdate, config)
    return response.data
  } catch (error) {
    console.error('Error al hacer patch del producto:', error)
    throw new Error('No se pudo actualizar el producto correctamente')
  }
}

/**
 * Obtiene todos los productos
 * Si USE_MOCKS está activado, usa datos locales con delay simulado
 */
export async function getProducts(): Promise<ProductsResponse> {
  // Si USE_MOCKS está activado, usar los datos locales
  if (USE_MOCKS) {
    return new Promise<ProductsResponse>((resolve) => {
      // Simular delay de red para mantener la experiencia del loader
      setTimeout(() => {
        resolve(productsData as ProductsResponse)
      }, API_TIMEOUTS.MOCK_DELAY)
    })
  }

  // Si no, hacer la petición a la API
  try {
    const response = await axios.get<ProductsResponse>(API_ENDPOINTS.PRODUCTS, {
      timeout: API_TIMEOUTS.REQUEST_TIMEOUT
    })
    return response.data
  } catch (error) {
    console.error('Error al obtener productos:', error)
    throw new Error('No se pudieron obtener los productos')
  }
}

/**
 * Elimina un producto
 */
export async function deleteProduct(id: number, token: string): Promise<Product> {
  const DELETE_URL = `${API_ENDPOINTS.PRODUCTS}/${id}`
  const config = createAuthHeaders(token)

  try {
    const response = await axios.delete<Product>(DELETE_URL, config)
    return response.data
  } catch (error) {
    console.error('Error al eliminar producto:', error)
    throw new Error('No se pudo eliminar el producto correctamente')
  }
}
