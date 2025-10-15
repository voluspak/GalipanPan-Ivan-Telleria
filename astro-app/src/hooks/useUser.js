import login from '../services/login'
import { useState, useEffect } from 'react'

function useUser () {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  async function handleLogin (event) {
    event.preventDefault()

    try {
      const user = await login({ username, password })
      console.log('Succes!')

      window.localStorage.setItem('loggedAdminUser', JSON.stringify(user))

      setUser(user)
      setPassword('')
      setUsername('')
    } catch (error) {
      setErrorMessage('Wrong Credentials')
      setTimeout(() => setErrorMessage(null), 5000)
    }
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAdminUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])
  return { handleLogin, errorMessage, username, password, setUsername, setPassword, user }
}

export default useUser
