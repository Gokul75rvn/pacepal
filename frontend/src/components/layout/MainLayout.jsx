import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const MainLayout = ({ children, showNavbar = true }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {showNavbar && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
