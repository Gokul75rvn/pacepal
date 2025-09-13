import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Settings";
import { useAnalytics } from "../hooks/useAnalytics";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FaChartLine, FaCalendarAlt, FaFire, FaTrophy } from "react-icons/fa";
import StatsCard from "../components/features/StatsCard";

const Analytics = () => {
  const { weeklyData, monthlyData, habitStats, categoryData, loading } =
    useAnalytics();
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === "dark";
  const bgClass = darkMode ? "bg-dark" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-dark";
  const cardBgClass = darkMode ? "bg-gray-900" : "bg-white";
  const borderClass = darkMode ? "border-gray-800" : "border-gray-200";

  const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444"];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold text-primary mb-8">Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          title="Current Streak" 
          value={`${habitStats.currentStreak || 0} days`} 
          icon={<FaFire />} 
          color="primary" 
=======
    <div
      className={`container mx-auto px-4 py-8 ${
        darkMode ? "bg-dark text-white min-h-screen" : ""
      }`}
    >
      <h1 className={`text-3xl font-bold mb-8 ${textClass}`}>Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Current Streak"
          value={`${habitStats.currentStreak || 0} days`}
          icon={<FaFire />}
          color="accent"
>>>>>>> c08c04586be84b3de270914ebd193bd744356e92
        />
        <StatsCard
          title="Best Streak"
          value={`${habitStats.bestStreak || 0} days`}
          icon={<FaTrophy />}
          color="primary"
        />
<<<<<<< HEAD
        <StatsCard 
          title="Completion Rate" 
          value={`${habitStats.completionRate || 0}%`} 
          icon={<FaChartLine />} 
          color="primary" 
        />
        <StatsCard 
          title="Total Habits" 
          value={habitStats.totalHabits || 0} 
          icon={<FaCalendarAlt />} 
          color="primary" 
=======
        <StatsCard
          title="Completion Rate"
          value={`${habitStats.completionRate || 0}%`}
          icon={<FaChartLine />}
          color="secondary"
        />
        <StatsCard
          title="Total Habits"
          value={habitStats.totalHabits || 0}
          icon={<FaCalendarAlt />}
          color="light"
>>>>>>> c08c04586be84b3de270914ebd193bd744356e92
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
<<<<<<< HEAD
        <div className="bg-white rounded-lg shadow-md p-6 border border-primary">
          <h3 className="text-lg font-semibold text-primary mb-4">Weekly Completion</h3>
=======
        <div
          className={`rounded-lg shadow-md p-6 border ${cardBgClass} ${borderClass}`}
        >
          <h3 className={`text-lg font-semibold mb-4 ${textClass}`}>
            Weekly Completion
          </h3>
>>>>>>> c08c04586be84b3de270914ebd193bd744356e92
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" fill="#6EE7B7" name="Completed" />
                <Bar dataKey="missed" fill="#111111" name="Missed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
<<<<<<< HEAD
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-primary">
          <h3 className="text-lg font-semibold text-primary mb-4">Monthly Trend</h3>
=======

        <div
          className={`rounded-lg shadow-md p-6 border ${cardBgClass} ${borderClass}`}
        >
          <h3 className={`text-lg font-semibold mb-4 ${textClass}`}>
            Monthly Trend
          </h3>
>>>>>>> c08c04586be84b3de270914ebd193bd744356e92
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
<<<<<<< HEAD
                <Line type="monotone" dataKey="completion" stroke="#111111" name="Completion %" />
=======
                <Line
                  type="monotone"
                  dataKey="completion"
                  stroke="#4F46E5"
                  name="Completion %"
                />
>>>>>>> c08c04586be84b3de270914ebd193bd744356e92
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<<<<<<< HEAD
        <div className="bg-white rounded-lg shadow-md p-6 border border-primary">
          <h3 className="text-lg font-semibold text-primary mb-4">Habit Categories</h3>
=======
        <div
          className={`rounded-lg shadow-md p-6 border ${cardBgClass} ${borderClass}`}
        >
          <h3 className={`text-lg font-semibold mb-4 ${textClass}`}>
            Habit Categories
          </h3>
>>>>>>> c08c04586be84b3de270914ebd193bd744356e92
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#6EE7B7"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {categoryData.map((entry, index) => (
<<<<<<< HEAD
                    <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#6EE7B7' : '#111111'} />
=======
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
>>>>>>> c08c04586be84b3de270914ebd193bd744356e92
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
<<<<<<< HEAD
        
        <div className="bg-white rounded-lg shadow-md p-6 border border-primary">
          <h3 className="text-lg font-semibold text-primary mb-4">Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-black">Best Performance</h4>
              <p className="text-sm text-black mt-1">
                You complete 90% of your habits on Thursdays. Consider scheduling challenging habits on this day.
              </p>
            </div>
            
            <div className="p-4 bg-green-100 rounded-lg">
              <h4 className="font-medium text-black">Needs Attention</h4>
              <p className="text-sm text-black mt-1">
                Your weekend habit completion is lower. Try simplifying your weekend routines.
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-black">Positive Trend</h4>
              <p className="text-sm text-black mt-1">
=======

        <div
          className={`rounded-lg shadow-md p-6 border ${cardBgClass} ${borderClass}`}
        >
          <h3 className={`text-lg font-semibold mb-4 ${textClass}`}>
            Insights
          </h3>
          <div className="space-y-4">
            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-blue-900" : "bg-blue-50"
              }`}
            >
              <h4
                className={`font-medium ${
                  darkMode ? "text-blue-200" : "text-blue-800"
                }`}
              >
                Best Performance
              </h4>
              <p
                className={`text-sm mt-1 ${
                  darkMode ? "text-blue-300" : "text-blue-600"
                }`}
              >
                You complete 90% of your habits on Thursdays. Consider
                scheduling challenging habits on this day.
              </p>
            </div>

            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-yellow-900" : "bg-yellow-50"
              }`}
            >
              <h4
                className={`font-medium ${
                  darkMode ? "text-yellow-200" : "text-yellow-800"
                }`}
              >
                Needs Attention
              </h4>
              <p
                className={`text-sm mt-1 ${
                  darkMode ? "text-yellow-300" : "text-yellow-600"
                }`}
              >
                Your weekend habit completion is lower. Try simplifying your
                weekend routines.
              </p>
            </div>

            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-green-900" : "bg-green-50"
              }`}
            >
              <h4
                className={`font-medium ${
                  darkMode ? "text-green-200" : "text-green-800"
                }`}
              >
                Positive Trend
              </h4>
              <p
                className={`text-sm mt-1 ${
                  darkMode ? "text-green-300" : "text-green-600"
                }`}
              >
>>>>>>> c08c04586be84b3de270914ebd193bd744356e92
                Your overall completion rate has improved by 12% this month.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Chatbot Floating Button */}
      <Link to="/chatbot">
        <div className="fixed bottom-8 right-8 z-50">
          <button
            type="button"
            className="rounded-full shadow-lg flex items-center gap-2 px-4 py-2 bg-accent text-white hover:bg-accent-dark focus:outline-none"
          >
            <span className="sr-only">Open Chatbot</span>
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
                d="M12 2c4.418 0 8 3.582 8 8 0 3.866-2.936 7.064-6.75 7.813V21a1 1 0 01-2 0v-3.187C6.936 17.064 4 13.866 4 10c0-4.418 3.582-8 8-8z"
              />
            </svg>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Analytics;
