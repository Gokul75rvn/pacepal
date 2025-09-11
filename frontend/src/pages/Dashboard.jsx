import React from 'react'
import { useQuery } from 'react-query'
import { useHabits } from '../hooks/useHabits'
import { FaPlus, FaChartLine, FaFire, FaCalendarCheck } from 'react-icons/fa'
import HabitCard from '../components/features/HabitCard'
import StatsCard from '../components/features/StatsCard'
import ProgressChart from '../components/features/ProgressChart'
import Button from '../components/common/Button'

const Dashboard = () => {
  const { habits, loading } = useHabits()
  
  // Mock data for the chart
  const chartData = [
    { name: 'Mon', completed: 3, missed: 1 },
    { name: 'Tue', completed: 4, missed: 0 },
    { name: 'Wed', completed: 2, missed: 2 },
    { name: 'Thu', completed: 5, missed: 0 },
    { name: 'Fri', completed: 3, missed: 1 },
    { name: 'Sat', completed: 2, missed: 2 },
    { name: 'Sun', completed: 4, missed: 0 },
  ]

  const completedToday = habits.filter(h => h.completedToday).length
  const totalStreak = habits.reduce((sum, habit) => sum + habit.streak, 0)
  const avgStreak = habits.length > 0 ? Math.round(totalStreak / habits.length) : 0

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-dark">Dashboard</h1>
        <Button variant="primary">
          <FaPlus className="mr-2" /> Add Habit
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard 
          title="Total Habits" 
          value={habits.length} 
          icon={<FaCalendarCheck />} 
          color="primary" 
        />
        <StatsCard 
          title="Completed Today" 
          value={`${completedToday}/${habits.length}`} 
          icon={<FaCheck />} 
          color="secondary" 
        />
        <StatsCard 
          title="Avg. Streak" 
          value={`${avgStreak} days`} 
          icon={<FaFire />} 
          color="accent" 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ProgressChart data={chartData} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-dark mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <p className="text-sm">Completed "Morning Meditation"</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <p className="text-sm">Completed "Drink Water"</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
              <p className="text-sm">Missed "Evening Walk"</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <p className="text-sm">Completed "Read 10 Pages"</p>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold text-dark mb-4">My Habits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map(habit => (
          <HabitCard key={habit._id} habit={habit} />
        ))}
      </div>
    </div>
  )
}

export default Dashboard