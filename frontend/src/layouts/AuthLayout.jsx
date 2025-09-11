import React from 'react'
import Navbar from '../components/layout/Navbar'

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        {children}
      </main>
    </div>
  )
}

export default AuthLayout