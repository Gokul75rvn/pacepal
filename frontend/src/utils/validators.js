export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePassword = (password) => {
  return password.length >= 6
}

export const validateName = (name) => {
  return name.trim().length >= 2
}

export const validateHabitName = (name) => {
  return name.trim().length >= 1
}

export const validateDuration = (duration) => {
  return duration > 0 && duration <= 480 // Max 8 hours
}