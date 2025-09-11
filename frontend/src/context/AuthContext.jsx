import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

// Mock user data
const mockUser = {
  _id: '1',
  name: 'Test User',
  email: 'test@example.com',
  avatar: '',
  memberSince: '2023-01-01',
  totalHabits: 5,
  currentStreak: 7,
  bestStreak: 21
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    
    if (token && userData) {
      setUser(JSON.parse(userData))
      setIsAuthenticated(true)
    }
    
    setLoading(false)
  }, [])

  const login = async (credentials) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock validation - in a real app, this would be done by the backend
    if (credentials.email === 'test@example.com' && credentials.password === 'password') {
      const token = 'mock-jwt-token-' + Date.now()
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(mockUser))
      setUser(mockUser)
      setIsAuthenticated(true)
      return { success: true }
    } else {
      return { 
        success: false, 
        error: 'Invalid email or password. Use test@example.com / password' 
      }
    }
  }

  const register = async (userData) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock validation - in a real app, this would be done by the backend
    if (userData.email && userData.password && userData.name) {
      const token = 'mock-jwt-token-' + Date.now()
      const newUser = {
        ...mockUser,
        name: userData.name,
        email: userData.email
      }
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(newUser))
      setUser(newUser)
      setIsAuthenticated(true)
      return { success: true }
    } else {
      return { 
        success: false, 
        error: 'Please fill in all fields' 
      }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}