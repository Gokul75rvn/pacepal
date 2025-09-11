// src/context/HabitContext.jsx
import React, { createContext, useState, useEffect } from 'react'
import * as habitService from '../services/habitService'

export const HabitContext = createContext()

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        setLoading(true)
        // Try to fetch from API
        const response = await habitService.getHabits()
        setHabits(response.data)
        setError(null)
      } catch (error) {
        console.error('Failed to fetch habits:', error)
        setError('Failed to fetch habits. Using mock data for now.')
        
        // Use mock data when backend is not available
        setHabits([
          {
            _id: '1',
            name: 'Morning Meditation',
            description: 'Start the day with mindfulness',
            frequency: 'daily',
            completedToday: false,
            streak: 5
          },
          {
            _id: '2',
            name: 'Exercise',
            description: '30 minutes of physical activity',
            frequency: 'daily',
            completedToday: true,
            streak: 10
          },
          {
            _id: '3',
            name: 'Read',
            description: 'Read at least 10 pages',
            frequency: 'daily',
            completedToday: false,
            streak: 3
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchHabits()
  }, [])

  const addHabit = async (habitData) => {
    try {
      const response = await habitService.createHabit(habitData)
      setHabits([...habits, response.data])
      return { success: true }
    } catch (error) {
      console.error('Failed to create habit:', error)
      return { success: false, error: error.response?.data?.message || 'Failed to create habit' }
    }
  }

  const updateHabit = async (id, habitData) => {
    try {
      const response = await habitService.updateHabit(id, habitData)
      setHabits(habits.map(habit => habit._id === id ? response.data : habit))
      return { success: true }
    } catch (error) {
      console.error('Failed to update habit:', error)
      return { success: false, error: error.response?.data?.message || 'Failed to update habit' }
    }
  }

  const deleteHabit = async (id) => {
    try {
      await habitService.deleteHabit(id)
      setHabits(habits.filter(habit => habit._id !== id))
      return { success: true }
    } catch (error) {
      console.error('Failed to delete habit:', error)
      return { success: false, error: error.response?.data?.message || 'Failed to delete habit' }
    }
  }

  return (
    <HabitContext.Provider value={{ habits, loading, error, addHabit, updateHabit, deleteHabit }}>
      {children}
    </HabitContext.Provider>
  )
}