import React, { createContext, useState, useEffect } from 'react'
import * as routineService from '../services/routineService'

export const RoutineContext = createContext()

export const RoutineProvider = ({ children }) => {
  const [routines, setRoutines] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        setLoading(true)
        const response = await routineService.getRoutines()
        setRoutines(response.data)
        setError(null)
      } catch (error) {
        console.error('Failed to fetch routines:', error)
        setError('Failed to fetch routines. Using mock data for now.')
        
        // Use mock data when backend is not available
        setRoutines([
          {
            _id: '1',
            name: 'Morning Routine',
            description: 'Start your day with these productive habits',
            habits: [
              { habitId: '1', duration: 10 },
              { habitId: '2', duration: 20 },
              { habitId: '3', duration: 15 }
            ],
            estimatedDuration: 45,
            schedule: 'morning'
          },
          {
            _id: '2',
            name: 'Evening Routine',
            description: 'Wind down and prepare for a good night\'s sleep',
            habits: [
              { habitId: '3', duration: 30 },
              { habitId: '4', duration: 15 }
            ],
            estimatedDuration: 45,
            schedule: 'evening'
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchRoutines()
  }, [])

  const addRoutine = async (routineData) => {
    try {
      const response = await routineService.createRoutine(routineData)
      setRoutines([...routines, response.data])
      return { success: true }
    } catch (error) {
      console.error('Failed to create routine:', error)
      return { success: false, error: error.response?.data?.message || 'Failed to create routine' }
    }
  }

  const updateRoutine = async (id, routineData) => {
    try {
      const response = await routineService.updateRoutine(id, routineData)
      setRoutines(routines.map(routine => routine._id === id ? response.data : routine))
      return { success: true }
    } catch (error) {
      console.error('Failed to update routine:', error)
      return { success: false, error: error.response?.data?.message || 'Failed to update routine' }
    }
  }

  const deleteRoutine = async (id) => {
    try {
      await routineService.deleteRoutine(id)
      setRoutines(routines.filter(routine => routine._id !== id))
      return { success: true }
    } catch (error) {
      console.error('Failed to delete routine:', error)
      return { success: false, error: error.response?.data?.message || 'Failed to delete routine' }
    }
  }