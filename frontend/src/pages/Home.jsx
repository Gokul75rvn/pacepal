import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaChartLine, FaList, FaUserFriends, FaCalendarAlt } from 'react-icons/fa'
import Button from '../components/common/Button'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Build Better Habits with <span className="text-primary">Pacepal</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Your intelligent habit and routine management platform designed to help you build consistency, 
          break bad habits, and achieve personal growth.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
          <Link to="/register">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Login
            </Button>
          </Link>
        </div>
      </div>
      
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
        <Link to="/habit-tracking" className="block">
          <FeatureCard 
            icon={<FaCheck className="text-2xl" />}
            title="Habit Tracking"
            description="Track your daily habits and build consistency with visual progress indicators."
          />
        </Link>
        <FeatureCard 
          icon={<FaChartLine className="text-2xl" />}
          title="Analytics"
          description="Get insights into your habit patterns with detailed analytics and reports."
        />
        <FeatureCard 
          icon={<FaList className="text-2xl" />}
          title="Routine Builder"
          description="Create custom routines to streamline your daily activities and maximize productivity."
        />
        <FeatureCard 
          icon={<FaUserFriends className="text-2xl" />}
          title="Community"
          description="Join challenges and share your progress with a supportive community."
        />
        <Link to="/all-habits-schedule" className="block">
          <FeatureCard
            icon={<FaCalendarAlt className="text-2xl" />}
            title="All Habits Schedule"
            description="View and manage your complete habit schedule in one place."
          />
        </Link>
      </div>
      
      <div className="bg-primary rounded-xl p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Habits?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join thousands of users who have already improved their lives with Pacepal.
        </p>
        <Link to="/register">
          <Button variant="secondary" size="lg">
            Start Your Journey
          </Button>
        </Link>
      </div>
    </div>
  )
}

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 text-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer">
      <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Home