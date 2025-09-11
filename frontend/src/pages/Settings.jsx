import React, { useState } from 'react'
import { FaBell, FaLock, FaDatabase, FaPalette, FaQuestionCircle } from 'react-icons/fa'
import Button from '../components/common/Button'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('notifications')

  const tabs = [
    { id: 'notifications', label: 'Notifications', icon: <FaBell /> },
    { id: 'security', label: 'Security', icon: <FaLock /> },
    { id: 'data', label: 'Data & Privacy', icon: <FaDatabase /> },
    { id: 'appearance', label: 'Appearance', icon: <FaPalette /> },
    { id: 'help', label: 'Help & Support', icon: <FaQuestionCircle /> },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-dark mb-8">Settings</h1>
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-64 mb-6 md:mb-0">
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`flex items-center w-full px-4 py-3 text-left ${
                  activeTab === tab.id 
                    ? 'bg-primary text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="mr-3">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex-grow md:ml-6">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            {activeTab === 'notifications' && <NotificationsSettings />}
            {activeTab === 'security' && <SecuritySettings />}
            {activeTab === 'data' && <DataSettings />}
            {activeTab === 'appearance' && <AppearanceSettings />}
            {activeTab === 'help' && <HelpSettings />}
          </div>
        </div>
      </div>
    </div>
  )
}

const NotificationsSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [reminderTime, setReminderTime] = useState('09:00')

  return (
    <div>
      <h2 className="text-xl font-semibold text-dark mb-6">Notification Settings</h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-medium">Email Notifications</h3>
            <p className="text-sm text-gray-600">Receive email updates about your habits and progress</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-medium">Push Notifications</h3>
            <p className="text-sm text-gray-600">Get reminders on your devices</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={pushNotifications}
              onChange={() => setPushNotifications(!pushNotifications)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Daily Reminder Time</h3>
          <div className="flex items-center">
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="ml-3 text-gray-600">Local time</span>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button variant="primary">Save Changes</Button>
        </div>
      </div>
    </div>
  )
}

const SecuritySettings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-dark mb-6">Security Settings</h2>
      
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Password</h3>
          <p className="text-sm text-gray-600 mb-4">Last changed 3 months ago</p>
          <Button variant="outline">Change Password</Button>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
          <p className="text-sm text-gray-600 mb-4">Add an extra layer of security to your account</p>
          <Button variant="outline">Enable 2FA</Button>
        </div>
        
        <div className="p-4 bg-red-50 rounded-lg">
          <h3 className="font-medium text-red-800 mb-2">Deactivate Account</h3>
          <p className="text-sm text-red-600 mb-4">
            Temporarily disable your account. You can reactivate it later by logging in.
          </p>
          <Button variant="danger">Deactivate Account</Button>
        </div>
      </div>
    </div>
  )
}

const DataSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-dark mb-6">Data & Privacy</h2>
      
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Download Your Data</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get a copy of all your habit data and activity history
          </p>
          <Button variant="outline">Download Data</Button>
        </div>
        
        <div className="p-4 bg-red-50 rounded-lg">
          <h3 className="font-medium text-red-800 mb-2">Delete Account</h3>
          <p className="text-sm text-red-600 mb-4">
            Permanently delete your account and all associated data
          </p>
          <Button variant="danger">Delete Account</Button>
        </div>
      </div>
    </div>
  )
}

const AppearanceSettings = () => {
  const [theme, setTheme] = useState('light')
  const [accentColor, setAccentColor] = useState('blue')

  return (
    <div>
      <h2 className="text-xl font-semibold text-dark mb-6">Appearance</h2>
      
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-4">Theme</h3>
          <div className="grid grid-cols-3 gap-4">
            <div 
              className={`border-2 rounded-lg p-4 cursor-pointer ${theme === 'light' ? 'border-primary' : 'border-gray-300'}`}
              onClick={() => setTheme('light')}
            >
              <div className="h-16 bg-white rounded mb-2"></div>
              <p className="text-center">Light</p>
            </div>
            <div 
              className={`border-2 rounded-lg p-4 cursor-pointer ${theme === 'dark' ? 'border-primary' : 'border-gray-300'}`}
              onClick={() => setTheme('dark')}
            >
              <div className="h-16 bg-gray-800 rounded mb-2"></div>
              <p className="text-center">Dark</p>
            </div>
            <div 
              className={`border-2 rounded-lg p-4 cursor-pointer ${theme === 'system' ? 'border-primary' : 'border-gray-300'}`}
              onClick={() => setTheme('system')}
            >
              <div className="h-16 bg-gradient-to-r from-white to-gray-800 rounded mb-2"></div>
              <p className="text-center">System</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button variant="primary">Save Changes</Button>
        </div>
      </div>
    </div>
  )
}

const HelpSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-dark mb-6">Help & Support</h2>
      
      <div className="space-y-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Contact Support</h3>
          <p className="text-sm text-gray-600 mb-4">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Button variant="outline">Contact Support</Button>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">App Information</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Version</span>
              <span>1.2.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Last Updated</span>
              <span>Nov 15, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings