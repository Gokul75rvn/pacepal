import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaChartLine, FaList, FaUserFriends } from 'react-icons/fa'
import Button from '../components/common/Button'
import HabitTracker from '../components/features/HabitTracker'
import RoutineBuilder from '../components/features/RoutineBuilder'
import Notifications from '../components/features/Notifications'
import Chatbot from '../components/features/Chatbot'

const Home = () => {
      {/* Feature preview containers */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Habit Tracking Preview */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-primary flex flex-col items-center">
          <h2 className="text-xl font-bold text-primary mb-2">Your Habit Tracking Summary</h2>
          <p className="text-black mb-4 text-center">See a quick overview of your current habits, streaks, and progress right here.</p>
          <div className="w-full">
            <HabitTracker previewMode={true} />
          </div>
          <a href="/habits" className="mt-4 inline-block bg-primary text-black px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-primary border border-primary transition">Go to Habit Tracking</a>
        </div>
        {/* Analytics Preview */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-primary flex flex-col items-center">
          <h2 className="text-xl font-bold text-primary mb-2">Analytics Snapshot</h2>
          <p className="text-black mb-4 text-center">Visualize your habit trends and completion rates.</p>
          <div className="w-full">
            {/* You can add a small chart or summary here, or import Analytics component with previewMode */}
            <span className="text-primary">[Analytics Preview]</span>
          </div>
          <a href="/analytics" className="mt-4 inline-block bg-primary text-black px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-primary border border-primary transition">Go to Analytics</a>
        </div>
        {/* Routine Builder Preview */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-primary flex flex-col items-center">
          <h2 className="text-xl font-bold text-primary mb-2">Routine Builder</h2>
          <p className="text-black mb-4 text-center">Preview your routines and optimize your day.</p>
          <div className="w-full">
            <RoutineBuilder previewMode={true} />
          </div>
          <a href="/routines" className="mt-4 inline-block bg-primary text-black px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-primary border border-primary transition">Go to Routine Builder</a>
        </div>
        {/* Community Preview */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-primary flex flex-col items-center">
          <h2 className="text-xl font-bold text-primary mb-2">Community</h2>
          <p className="text-black mb-4 text-center">Connect, join challenges, and share your progress.</p>
          <div className="w-full">
            {/* You can add a small community summary or import Community component with previewMode */}
            <span className="text-primary">[Community Preview]</span>
          </div>
          <a href="/community" className="mt-4 inline-block bg-primary text-black px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-primary border border-primary transition">Go to Community</a>
        </div>
        {/* Notifications Preview */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-primary flex flex-col items-center">
          <h2 className="text-xl font-bold text-primary mb-2">Notifications</h2>
          <p className="text-black mb-4 text-center">Stay updated with reminders and progress alerts.</p>
          <div className="w-full">
            {/* You can add a small notifications summary or import Notifications component with previewMode */}
            <span className="text-primary">[Notifications Preview]</span>
          </div>
          <a href="/notifications" className="mt-4 inline-block bg-primary text-black px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-primary border border-primary transition">Go to Notifications</a>
        </div>
      </div>
  return (
    <div className="container mx-auto px-4 py-12">
      {/* About Section */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-10">
        <h2 className="text-2xl font-bold text-dark mb-2">About PacePal</h2>
        <p className="text-gray-700 mb-4">
          PacePal is your all-in-one habit and routine tracker designed to help you build consistency, gain insights, and stay motivated. Explore these core features:
        </p>
        <ul className="list-disc pl-6 text-gray-600">
          <li><span className="font-semibold text-primary">Community:</span> Connect with others, join challenges, and share your progress for accountability and support.</li>
          <li><span className="font-semibold text-primary">Notifications:</span> Get timely reminders and updates about your habits and routines.</li>
          <li><span className="font-semibold text-primary">Routine Builder:</span> Create and customize daily routines to maximize productivity and streamline your day.</li>
          <li><span className="font-semibold text-primary">Analytics:</span> Visualize your progress, streaks, and completion rates with detailed charts and insights.</li>
          <li><span className="font-semibold text-primary">Habit Tracking:</span> Track your daily habits, set goals, and celebrate your achievements.</li>
        </ul>
      </div>
      {/* Top features summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10" role="list" aria-label="Feature list">
        <FeatureCard 
          icon={<FaCheck className="text-3xl" />}
          title="Habit Tracking"
          description="Track your daily habits, set goals, and celebrate achievements."
          details={null}
        />
        <FeatureCard 
          icon={<FaChartLine className="text-3xl" />}
          title="Analytics"
          description="Get insights into your habit patterns with detailed analytics and reports."
          details={null}
        />
        <FeatureCard 
          icon={<FaList className="text-3xl" />}
          title="Routine Builder"
          description="Create custom routines to streamline your daily activities."
          details={null}
        />
        <FeatureCard 
          icon={<FaUserFriends className="text-3xl" />}
          title="Community"
          description="Join challenges and share your progress with a supportive community."
          details={null}
        />
        <FeatureCard 
          icon={<FaUserFriends className="text-3xl" />}
          title="Notifications"
          description="Get notified about your habits and progress."
          details={null}
        />
      </div>

      {/* Habit Tracking Preview Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-primary flex flex-col items-center">
          <h2 className="text-xl font-bold text-primary mb-2">Your Habit Tracking Summary</h2>
          <p className="text-gray-700 mb-4 text-center">See a quick overview of your current habits, streaks, and progress right here.</p>
          <div className="w-full">
            <HabitTracker previewMode={true} />
          </div>
          <a href="/habits" className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition">Go to Habit Tracking</a>
        </div>
      </div>

    {/* ...main content sections removed... */}
    {/* Chatbot placed horizontally at the bottom */}
    <Chatbot />
    </div>
  )
}

const FeatureCard = ({ icon, title, description, details }) => {
  const routeMap = {
    'Habit Tracking': '/habits',
    'Analytics': '/analytics',
    'Routine Builder': '/routines',
    'Community': '/community',
    'Notifications': '/notifications',
  };
  return (
    <Link to={routeMap[title]} style={{ textDecoration: 'none' }} tabIndex={0} aria-label={`Go to ${title} details`}>
      <div
        className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 focus:ring-2 focus:ring-primary flex flex-col justify-between h-80"
        role="listitem"
        tabIndex={-1}
        aria-label={title}
      >
        <div className="w-20 h-20 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="text-2xl font-bold text-dark mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{description}</p>
      </div>
    </Link>
  );
}

export default Home
