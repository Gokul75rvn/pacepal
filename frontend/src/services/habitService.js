import api from './api'
import habitService from '../../services/habitService'
import analyticsService from '../services/analyticsService'

export const getHabits = () => {
  return api.get('/habits')
}

export const createHabit = (habitData) => {
  return api.post('/habits', habitData)
}

export const updateHabit = (id, habitData) => {
  return api.put(`/habits/${id}`, habitData)
}

export const deleteHabit = (id) => {
  return api.delete(`/habits/${id}`)
}

export const completeHabit = (id) => {
  return api.post(`/habits/${id}/complete`)
}

export const uncompleteHabit = (id) => {
  return api.post(`/habits/${id}/uncomplete`)
}
 
 export default {
   getHabits,
   createHabit,
   updateHabit,
   deleteHabit,
   completeHabit,
   uncompleteHabit
 }