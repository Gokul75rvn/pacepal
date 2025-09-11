// Mock analytics data
const mockWeeklyData = [
  { name: 'Mon', completed: 3, missed: 1 },
  { name: 'Tue', completed: 4, missed: 0 },
  { name: 'Wed', completed: 2, missed: 2 },
  { name: 'Thu', completed: 5, missed: 0 },
  { name: 'Fri', completed: 3, missed: 1 },
  { name: 'Sat', completed: 2, missed: 2 },
  { name: 'Sun', completed: 4, missed: 0 },
]

const mockMonthlyData = [
  { name: 'Week 1', completion: 75 },
  { name: 'Week 2', completion: 82 },
  { name: 'Week 3', completion: 68 },
  { name: 'Week 4', completion: 90 },
]

const mockCategoryData = [
  { name: 'Health', value: 35 },
  { name: 'Productivity', value: 25 },
  { name: 'Learning', value: 20 },
  { name: 'Mindfulness', value: 20 },
]

const mockHabitStats = {
  bestStreak: 21,
  currentStreak: 7,
  completionRate: 78,
  totalHabits: 12
}

export const getWeeklyData = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return { data: mockWeeklyData }
}

export const getMonthlyData = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return { data: mockMonthlyData }
}

export const getHabitStats = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return { data: mockHabitStats }
}

export const getStreakData = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return { data: { current: 7, best: 21 } }
}

export const getCategoryData = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return { data: mockCategoryData }
}