export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export const formatTime = (minutes) => {
  if (minutes < 60) {
    return `${minutes} min`
  }
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
}

export const calculateStreak = (completionDates) => {
  if (!completionDates || completionDates.length === 0) return 0
  
  const sortedDates = [...completionDates].sort((a, b) => new Date(b) - new Date(a))
  let streak = 1
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  // Check if the most recent completion is today
  const mostRecent = new Date(sortedDates[0])
  mostRecent.setHours(0, 0, 0, 0)
  
  if (mostRecent.getTime() !== today.getTime()) {
    // If not completed today, check if it was yesterday
    const yesterday = new Date(today)
    yesterday.setDate(yesterday.getDate() - 1)
    
    if (mostRecent.getTime() !== yesterday.getTime()) {
      return 0 // Streak broken
    }
  }
  
  // Calculate consecutive days
  for (let i = 1; i < sortedDates.length; i++) {
    const currentDate = new Date(sortedDates[i])
    currentDate.setHours(0, 0, 0, 0)
    
    const prevDate = new Date(sortedDates[i - 1])
    prevDate.setHours(0, 0, 0, 0)
    
    const diffTime = Math.abs(prevDate - currentDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) {
      streak++
    } else {
      break
    }
  }
  
  return streak
}

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}