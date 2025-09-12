import api from './api'

export const login = async ({ idToken }) => {
  try {
    const response = await api.post('/auth/login', { idToken })
    return response.data
  } catch (error) {
    console.error('Login service error:', error)
    throw error
  }
}

export const register = async ({ idToken, name }) => {
  try {
    const response = await api.post('/auth/register', { idToken, name })
    return response.data
  } catch (error) {
    console.error('Register service error:', error)
    throw error
  }
}

export const getCurrentUser = () => {
  return api.get('/auth/profile')
}

export const updateProfile = (profileData) => {
  return api.put('/auth/profile', profileData)
}