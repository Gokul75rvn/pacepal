import React, { createContext, useState, useEffect } from 'react'
import * as habitService from '../services/habitService'

export const HabitContext = createContext()

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await habitService.getHabits()
        setHabits(response.data)
      } catch (error) {
        console.error('Failed to fetch habits:', error)
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
      return { success: false, error: error.response?.data?.message || 'Failed to create habit' }
    }
  }

  const updateHabit = async (id, habitData) => {
    try {
      const response = await habitService.updateHabit(id, habitData)
      setHabits(habits.map(habit => habit._id === id ? response.data : habit))
      return { success: true }
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Failed to update habit' }
    }
  }

  const deleteHabit = async (id) => {
    try {
      await habitService.deleteHabit(id)
      setHabits(habits.filter(habit => habit._id !== id))
      return { success: true }
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Failed to delete habit' }
    }
  }

  return (
    <HabitContext.Provider value={{ habits, loading, addHabit, updateHabit, deleteHabit }}>
      {children}
    </HabitContext.Provider>
  )
}