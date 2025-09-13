import React, { useState, useContext } from "react";
import { ThemeContext } from "./Settings";
import { useAuth } from "../hooks/useAuth";
import { useHabits } from "../hooks/useHabits";
import {
  FaPlus,
  FaChartLine,
  FaFire,
  FaCalendarCheck,
  FaUser,
  FaCheck,
  FaRobot,
  FaList,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import HabitCard from "../components/features/HabitCard";
import StatsCard from "../components/features/StatsCard";
import ProgressChart from "../components/features/ProgressChart";
import Button from "../components/common/Button";

const Dashboard = () => {
  const { user } = useAuth();
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === "dark";
  const bgClass = darkMode ? "bg-dark" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-dark";
  const cardBgClass = darkMode ? "bg-gray-900" : "bg-white";
  const borderClass = darkMode ? "border-gray-800" : "border-gray-200";
  const { habits, loading, error } = useHabits();
  const [refreshKey, setRefreshKey] = useState(0);

  // Mock data for the chart
  const chartData = [
    { name: "Mon", completed: 3, missed: 1 },
    { name: "Tue", completed: 4, missed: 0 },
    { name: "Wed", completed: 2, missed: 2 },
    { name: "Thu", completed: 5, missed: 0 },
    { name: "Fri", completed: 3, missed: 1 },
    { name: "Sat", completed: 2, missed: 2 },
    { name: "Sun", completed: 4, missed: 0 },
  ];

  const handleHabitUpdate = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const completedToday = habits.filter((h) => h.completedToday).length;
  const totalStreak = habits.reduce((sum, habit) => sum + habit.streak, 0);
  const avgStreak =
    habits.length > 0 ? Math.round(totalStreak / habits.length) : 0;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        darkMode ? "bg-dark text-white min-h-screen" : ""
      }`}
    >
      {/* Top Navigation Bar */}
      <nav className="flex justify-center gap-6 mb-10">
        <Link to="/dashboard">
          <Button variant="primary" className="flex items-center gap-2">
            <FaChartLine className="mr-2" /> Dashboard
          </Button>
        </Link>
        <Link to="/chatbot">
          <Button variant="accent" className="flex items-center gap-2">
            <FaRobot className="mr-2" /> Habino (Chatbot)
          </Button>
        </Link>
        <Link to="/habits">
          <Button variant="secondary" className="flex items-center gap-2">
            <FaCalendarCheck className="mr-2" /> Habits
          </Button>
        </Link>
        <Link to="/routines">
          <Button variant="secondary" className="flex items-center gap-2">
            <FaList className="mr-2" /> Routine
          </Button>
        </Link>
        <Link to="/analytics">
          <Button variant="secondary" className="flex items-center gap-2">
            <FaChartLine className="mr-2" /> Analysis
          </Button>
        </Link>
      </nav>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className={`text-3xl font-bold ${textClass}`}>Dashboard</h1>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Welcome back, {user?.name}!
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <Button variant="primary">
            <FaPlus className="mr-2" /> Add Habit
          </Button>
          <button
            type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-lg flex items-center gap-2"
            onClick={() => (window.location.href = "/chatbot")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 7.5v-1.5A2.25 2.25 0 0 1 9 3.75h6a2.25 2.25 0 0 1 2.25 2.25v1.5m-10.5 0h10.5m-10.5 0a2.25 2.25 0 0 0-2.25 2.25v7.5A2.25 2.25 0 0 0 6.75 19.5h10.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25m-10.5 0v1.5m10.5-1.5v1.5"
              />
              <circle cx="12" cy="14" r="2" fill="currentColor" />
            </svg>
            Chatbot
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-yellow-50 text-yellow-800 rounded-md">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Total Habits"
          value={habits.length}
          icon={<FaCalendarCheck />}
          color="primary"
        />
        <StatsCard
          title="Completed Today"
          value={`${completedToday}/${habits.length}`}
          icon={<FaCheck />}
          color="secondary"
        />
        <StatsCard
          title="Avg. Streak"
          value={`${avgStreak} days`}
          icon={<FaFire />}
          color="accent"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ProgressChart data={chartData} />
        </div>
        <div
          className={`rounded-lg shadow-md p-6 border ${cardBgClass} ${borderClass}`}
        >
          <h3 className={`text-lg font-semibold mb-4 ${textClass}`}>
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <p className="text-sm">Completed "Morning Meditation"</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <p className="text-sm">Completed "Drink Water"</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
              <p className="text-sm">Missed "Evening Walk"</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <p className="text-sm">Completed "Read 10 Pages"</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className={`text-2xl font-semibold mb-4 ${textClass}`}>My Habits</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <HabitCard
            key={habit._id}
            habit={habit}
            onHabitUpdate={handleHabitUpdate}
          />
        ))}
      </div>
      {/* Chatbot Floating Button */}
      <Link to="/chatbot">
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            variant="accent"
            className="rounded-full shadow-lg flex items-center gap-2 px-4 py-2"
          >
            <FaRobot className="text-xl" />
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
