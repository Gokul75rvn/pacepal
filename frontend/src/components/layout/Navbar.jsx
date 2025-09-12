import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { FaHome, FaChartLine, FaTasks, FaList, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa'

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-green-600 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">Zintick</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {isAuthenticated && (
              <>
                <NavLink to="/dashboard" icon={<FaHome />} label="Dashboard" />
                <NavLink to="/habits" icon={<FaTasks />} label="Habits" />
                <NavLink to="/routines" icon={<FaList />} label="Routines" />
                <NavLink to="/analytics" icon={<FaChartLine />} label="Analytics" />
              </>
            )}
          </div>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">{user?.name?.charAt(0)}</span>
                  </div>
                  <span className="text-white font-medium hidden md:inline">{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-10">
                  <DropdownItem to="/profile" icon={<FaUser />} label="Profile" />
                  <DropdownItem to="/settings" icon={<FaCog />} label="Settings" />
                  <div className="border-t border-gray-200"></div>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-green-700 hover:bg-green-100"
                  >
                    <FaSignOutAlt className="mr-3" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-white hover:text-green-100 font-medium">Login</Link>
                <Link to="/register" className="bg-white text-green-600 px-4 py-2 rounded-md hover:bg-green-100 transition">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ to, icon, label }) => (
  <Link 
    to={to} 
    className="flex items-center space-x-2 px-3 py-2 rounded-md text-dark hover:bg-gray-100 hover:text-primary"
  >
    {icon}
    <span>{label}</span>
  </Link>
)

const DropdownItem = ({ to, icon, label }) => (
  <Link 
    to={to} 
    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  >
    {icon}
    <span className="ml-3">{label}</span>
  </Link>
)

export default Navbar;