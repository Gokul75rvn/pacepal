import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ProgressChart = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-dark mb-4">Weekly Progress</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="completed" fill="#4F46E5" name="Completed" />
            <Bar dataKey="missed" fill="#EF4444" name="Missed" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ProgressChart