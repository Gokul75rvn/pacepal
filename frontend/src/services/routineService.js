import api from './api'

export const getRoutines = () => {
  return api.get('/routines')
}

export const createRoutine = (routineData) => {
  return api.post('/routines', routineData)
}

export const updateRoutine = (id, routineData) => {
  return api.put(`/routines/${id}`, routineData)
}

export const deleteRoutine = (id) => {
  return api.delete(`/routines/${id}`)
}

export const startRoutine = (id) => {
  return api.post(`/routines/${id}/start`)
}