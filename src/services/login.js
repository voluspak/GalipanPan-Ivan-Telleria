import axios from 'axios'

const baseUrl = 'https://galipanapi.onrender.com/api/login'

async function login (credentials) {
  const { data } = await axios.post(baseUrl, credentials)
  return data
}

export default login
