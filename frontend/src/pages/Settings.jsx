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
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Notification Types</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <input type="checkbox" id="habit-reminders" className="mr-2" defaultChecked />
              <label htmlFor="habit-reminders">Habit reminders</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="streak-alerts" className="mr-2" defaultChecked />
              <label htmlFor="streak-alerts">Streak alerts</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="weekly-reports" className="mr-2" defaultChecked />
              <label htmlFor="weekly-reports">Weekly progress reports</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="achievement-notifications" className="mr-2" defaultChecked />
              <label htmlFor="achievement-notifications">Achievement notifications</label>
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
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Active Sessions</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Chrome on Windows</p>
                <p className="text-sm text-gray-600">New York, USA • Current session</p>
              </div>
              <span className="text-sm text-green-600">Active now</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Safari on iPhone</p>
                <p className="text-sm text-gray-600">New York, USA • 2 days ago</p>
              </div>
              <Button variant="ghost" size="sm">Sign out</Button>
            </div>
          </div>
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
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Data Sharing</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <input type="checkbox" id="analytics" className="mr-2" defaultChecked />
              <label htmlFor="analytics">Share anonymous usage data to improve Pacepal</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="personalization" className="mr-2" defaultChecked />
              <label htmlFor="personalization">Allow personalized recommendations</label>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Data Retention</h3>
          <p className="text-sm text-gray-600 mb-4">
            Choose how long we keep your deleted data
          </p>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option>30 days</option>
            <option>90 days</option>
            <option>1 year</option>
            <option>Forever</option>
          </select>
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
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-4">Accent Color</h3>
          <div className="grid grid-cols-5 gap-3">
            {['blue', 'green', 'purple', 'red', 'yellow'].map(color => (
              <div 
                key={color}
                className={`w-10 h-10 rounded-full cursor-pointer ${accentColor === color ? 'ring-2 ring-offset-2 ring-gray-400' : ''}`}
                style={{ backgroundColor: getColorHex(color) }}
                onClick={() => setAccentColor(color)}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Font Size</h3>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Small</option>
            <option selected>Medium</option>
            <option>Large</option>
          </select>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Compact Mode</h3>
          <p className="text-sm text-gray-600 mb-4">Reduce spacing and padding to fit more content</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
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
          <h3 className="font-medium mb-2">Frequently Asked Questions</h3>
          <div className="space-y-3">
            <div className="border-b border-gray-200 pb-3">
              <p className="font-medium">How do I create a new habit?</p>
              <p className="text-sm text-gray-600">Go to the Habits page and click "Add Habit"</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <p className="font-medium">Can I share my progress with friends?</p>
              <p className="text-sm text-gray-600">Yes, you can share your progress from the Analytics page</p>
            </div>
            <div className="pb-3">
              <p className="font-medium">How do streaks work?</p>
              <p className="text-sm text-gray-600">Streaks count consecutive days you complete your habits</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Contact Support</h3>
          <p className="text-sm text-gray-600 mb-4">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <Button variant="outline">Contact Support</Button>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-medium mb-2">Pacepal Resources</h3>
          <div className="space-y-2">
            <a href="#" className="block text-primary hover:underline">User Guide</a>
            <a href="#" className="block text-primary hover:underline">Video Tutorials</a>
            <a href="#" className="block text-primary hover:underline">Blog</a>
            <a href="#" className="block text-primary hover:underline">Community Forum</a>
          </div>
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
            <div className="flex justify-between">
              <span className="text-gray-600">Terms of Service</span>
              <a href="#" className="text-primary">View</a>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Privacy Policy</span>
              <a href="#" className="text-primary">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const getColorHex = (color) => {
  switch (color) {
    case 'blue': return '#4F46E5'
    case 'green': return '#10B981'
    case 'purple': return '#8B5CF6'
    case 'red': return '#EF4444'
    case 'yellow': return '#F59E0B'
    default: return '#4F46E5'
  }
}

export default Settings