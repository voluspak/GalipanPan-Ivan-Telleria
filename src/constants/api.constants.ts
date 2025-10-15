/**
 * URL base de la API
 */
export const API_BASE_URL = 'https://galipanapi.onrender.com/api'

/**
 * Endpoints de la API
 */
export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/products`,
  LOGIN: `${API_BASE_URL}/login`
} as const

/**
 * Configuración de entorno
 */
export const USE_MOCKS = true // Cambiar a false para usar la API real

/**
 * Timeouts y delays
 */
export const API_TIMEOUTS = {
  MOCK_DELAY: 1000, // Delay para simular latencia de red con mocks (ms)
  REQUEST_TIMEOUT: 30000 // Timeout para requests a la API real (ms)
} as const

/**
 * Headers comunes
 */
export const COMMON_HEADERS = {
  'Content-Type': 'application/json'
} as const
