import api from './api'
import habitService from '../../services/habitService'
import analyticsService from '../services/analyticsService'

export const getWeeklyData = () => {
  return api.get('/analytics/weekly')
}

export const getMonthlyData = () => {
  return api.get('/analytics/monthly')
}

export const getHabitStats = () => {
  return api.get('/analytics/habits')
}

export const getStreakData = () => {
  return api.get('/analytics/streaks')
}
export default {
  getWeeklyData,
  getMonthlyData,
  getHabitStats,
  getStreakData
}