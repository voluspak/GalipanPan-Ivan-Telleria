import axios from 'axios'

const baseUrl = 'https://galipanapi.onrender.com/api/products'

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
