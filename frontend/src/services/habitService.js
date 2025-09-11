import api from './api'

export const createHabit = (data) => api.post('/habits', data)
export const getHabits = () => api.get('/habits')
export const updateHabit = (id, data) => api.put(`/habits/${id}`, data)
export const deleteHabit = (id) => api.delete(`/habits/${id}`)

export default {
  createHabit,
  getHabits,
  updateHabit,
  deleteHabit
}