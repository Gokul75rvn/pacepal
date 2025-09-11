import React from 'react'

const StatsCard = ({ title, value, icon, color = 'primary' }) => {
  const colorClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    accent: 'bg-accent text-white',
    light: 'bg-gray-100 text-dark',
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${colorClasses[color]}`}>
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-dark">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
      </div>
    </div>
  )
}

export default StatsCard