import React from 'react'
import { useAnalytics } from '../hooks/useAnalytics'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts'
import { FaChartLine, FaCalendarAlt, FaFire, FaTrophy } from 'react-icons/fa'
import StatsCard from '../components/features/StatsCard'

const Analytics = () => {
  const { weeklyData, monthlyData, habitStats, categoryData, loading } = useAnalytics()
  
  const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444']

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold text-primary mb-8">Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          title="Current Streak" 
          value={`${habitStats.currentStreak || 0} days`} 
          icon={<FaFire />} 
          color="primary" 
        />
        <StatsCard 
          title="Best Streak" 
          value={`${habitStats.bestStreak || 0} days`} 
          icon={<FaTrophy />} 
          color="primary" 
        />
        <StatsCard 
          title="Completion Rate" 
          value={`${habitStats.completionRate || 0}%`} 
          icon={<FaChartLine />} 
          color="primary" 
        />
        <StatsCard 
          title="Total Habits" 
          value={habitStats.totalHabits || 0} 
          icon={<FaCalendarAlt />} 
          color="primary" 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-primary">
          <h3 className="text-lg font-semibold text-primary mb-4">Weekly Completion</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" fill="#6EE7B7" name="Completed" />
                <Bar dataKey="missed" fill="#111111" name="Missed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-primary">
          <h3 className="text-lg font-semibold text-primary mb-4">Monthly Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="completion" stroke="#111111" name="Completion %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border border-primary">
          <h3 className="text-lg font-semibold text-primary mb-4">Habit Categories</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#6EE7B7"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#6EE7B7' : '#111111'} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-primary">
          <h3 className="text-lg font-semibold text-primary mb-4">Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-black">Best Performance</h4>
              <p className="text-sm text-black mt-1">
                You complete 90% of your habits on Thursdays. Consider scheduling challenging habits on this day.
              </p>
            </div>
            
            <div className="p-4 bg-green-100 rounded-lg">
              <h4 className="font-medium text-black">Needs Attention</h4>
              <p className="text-sm text-black mt-1">
                Your weekend habit completion is lower. Try simplifying your weekend routines.
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-black">Positive Trend</h4>
              <p className="text-sm text-black mt-1">
                Your overall completion rate has improved by 12% this month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics