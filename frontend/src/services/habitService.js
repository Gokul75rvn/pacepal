import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
});

export const getHabits = async () => {
  const { data } = await api.get('/habits');
  return data;
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

export const completeHabit = (id, notes) => {
  return api.post(`/habits/${id}/complete`, { notes })
}

export const uncompleteHabit = (id) => {
  return api.post(`/habits/${id}/uncomplete`)
}