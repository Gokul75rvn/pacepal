import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
  <footer className="bg-dark text-white py-1 text-xs">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-1">
          <div className="mb-1 md:mb-0">
            <div className="flex items-center space-x-1">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="text-base font-bold">Pacepal</span>
            </div>
            <p className="mt-1 text-gray-400 text-xs">Your intelligent habit tracker</p>
          </div>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub size={14} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={14} />
            </a>
          </div>
        </div>
        <div className="mt-2 pt-1 border-t border-gray-800 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Pacepal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer