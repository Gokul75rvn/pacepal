import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { FaUser, FaEnvelope, FaLock, FaBell, FaMoon, FaGlobe } from 'react-icons/fa'
import Button from '../components/common/Button'
import Input from '../components/common/Input'

const Profile = () => {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    timezone: 'UTC-5',
    notifications: true,
    darkMode: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Update profile logic would go here
    setIsEditing(false)
  }

  return (
  <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-dark mb-8">My Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-3xl font-bold">{user?.name?.charAt(0)}</span>
              </div>
              <h2 className="text-xl font-semibold text-dark">{user?.name}</h2>
              <p className="text-gray-600">{user?.email}</p>
              <div className="mt-6 w-full">
                <Button 
                  variant="outline" 
                  className="w-full mb-3"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </Button>
                <Button variant="ghost" className="w-full">
                  Change Password
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mt-6">
            <h3 className="text-lg font-semibold text-dark mb-4">Account Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Member Since</span>
                <span className="font-medium">Jan 2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Habits</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Current Streak</span>
                <span className="font-medium">7 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Best Streak</span>
                <span className="font-medium">21 days</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-dark mb-6">Profile Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  icon={<FaUser />}
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  disabled={!isEditing}
                />
                <Input
                  label="Email Address"
                  type="email"
                  icon={<FaEnvelope />}
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  disabled={!isEditing}
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FaLock className="inline mr-2" />
                    Password
                  </label>
                  <div className="flex items-center">
                    <input
                      type="password"
                      value="••••••••"
                      disabled
                      className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                    />
                    <Button variant="ghost" className="ml-2" type="button">
                      Change
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FaGlobe className="inline mr-2" />
                    Timezone
                  </label>
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-700 bg-gray-100"
                  >
                    <option value="UTC-12">UTC-12:00</option>
                    <option value="UTC-11">UTC-11:00</option>
                    <option value="UTC-10">UTC-10:00</option>
                    <option value="UTC-9">UTC-09:00</option>
                    <option value="UTC-8">UTC-08:00</option>
                    <option value="UTC-7">UTC-07:00</option>
                    <option value="UTC-6">UTC-06:00</option>
                    <option value="UTC-5">UTC-05:00</option>
                    <option value="UTC-4">UTC-04:00</option>
                    <option value="UTC-3">UTC-03:00</option>
                    <option value="UTC-2">UTC-02:00</option>
                    <option value="UTC-1">UTC-01:00</option>
                    <option value="UTC+0">UTC+00:00</option>
                    <option value="UTC+1">UTC+01:00</option>
                    <option value="UTC+2">UTC+02:00</option>
                    <option value="UTC+3">UTC+03:00</option>
                    <option value="UTC+4">UTC+04:00</option>
                    <option value="UTC+5">UTC+05:00</option>
                    <option value="UTC+6">UTC+06:00</option>
                    <option value="UTC+7">UTC+07:00</option>
                    <option value="UTC+8">UTC+08:00</option>
                    <option value="UTC+9">UTC+09:00</option>
                    <option value="UTC+10">UTC+10:00</option>
                    <option value="UTC+11">UTC+11:00</option>
                    <option value="UTC+12">UTC+12:00</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between p-4 bg-gray-100 border border-gray-300 rounded-lg">
                    <div>
                      <div className="flex items-center">
                        <FaBell className="text-gray-700 mr-2" />
                        <span className="font-medium text-gray-700">Email Notifications</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">Receive reminders and progress updates</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                      
                        type="checkbox"
                        name="notifications"
                        checked={formData.notifications}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-100 border border-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-gray-100 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-700 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center justify-between p-4 bg-gray-100 border border-gray-300 rounded-lg">
                    <div>
                      <div className="flex items-center">
                        <FaMoon className="text-gray-700 mr-2" />
                        <span className="font-medium text-gray-700">Dark Mode</span>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">Enable dark theme for better night viewing</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="darkMode"
                        checked={formData.darkMode}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-100 border border-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-gray-100 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-700 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
              {isEditing && (
                <div className="mt-6 flex justify-end">
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </div>
              )}
            </form>
                    </div>
                  </div>
                </div>