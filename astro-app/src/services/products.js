import axios from 'axios'
import productsData from '../mocks/productsData.json'

const baseUrl = 'https://galipanapi.onrender.com/api/products'
const USE_MOCKS = true // Cambiar a false para usar la API real

async function createProduct (productToAdd, token) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`
    }
  }

  try {
    const addingProd = axios.post(baseUrl, productToAdd, config)
    return await addingProd.data
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo hacer la peticion correctamente')
  }
}

async function updateProduct (id, modifications, token) {
  const PUT_URL = `${baseUrl}/${id}`
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`
    }
  }

  try {
    const newProd = axios.put(PUT_URL, modifications, config)
    const { data } = newProd
    return data
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo hacer la peticion correctamente')
  }
}

async function patchProduct (id, keyToUpdate, token) {
  const PATCH_URL = `${baseUrl}/${id}`
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`
    }
  }

  try {
    const newProd = axios.patch(PATCH_URL, keyToUpdate, config)
    const { data } = newProd
    return data
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo hacer la peticion correctamente')
  }
}

async function getProducts () {
  // Si USE_MOCKS está activado, usar los datos locales
  if (USE_MOCKS) {
    return new Promise((resolve) => {
      // Simular delay de red para mantener la experiencia del loader
      setTimeout(() => {
        resolve(productsData)
      }, 500)
    })
  }

  // Si no, hacer la petición a la API
  try {
    const response = await axios.get(baseUrl)
    return await response.data
  } catch (error) {
    console.error('Problemas al hacer la peticion')
    throw new Error('Request failed')
  }
}

async function deleteProduct (id, token) {
  const DELETE_URL = `${baseUrl}/${id}`
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`
    }
  }

  try {
    const newProd = axios.delete(DELETE_URL, config)
    return await newProd.data
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo hacer la peticion correctamente')
  }
}

export { createProduct, updateProduct, getProducts, deleteProduct, patchProduct }
