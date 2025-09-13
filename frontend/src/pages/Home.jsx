import React, { useContext } from "react";
import { ThemeContext } from "./Settings";
import { Link } from "react-router-dom";
import {
  FaCheck,
  FaChartLine,
  FaList,
  FaUserFriends,
  FaRobot,
} from "react-icons/fa";
import Button from "../components/common/Button";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === "dark";
  const bgClass = darkMode ? "bg-dark" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-dark";
  const cardBgClass = darkMode ? "bg-gray-900" : "bg-white";
  const borderClass = darkMode ? "border-gray-800" : "border-gray-200";
  return (
    <div
      className={`container mx-auto px-4 py-12 relative ${
        darkMode ? "bg-dark text-white min-h-screen" : ""
      }`}
    >
      {/* Chatbot Corner Button */}
      <Link to="/chatbot">
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            variant="primary"
            size="md"
            className="rounded-full shadow-lg flex items-center gap-2 px-4 py-2"
          >
            <FaRobot className="text-xl" /> Chatbot
          </Button>
        </div>
      </Link>
      {/* <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
          Build Better Habits with <span className="text-primary">Pacepal</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Your intelligent habit and routine management platform designed to
          help you build consistency, break bad habits, and achieve personal
          growth.
        </p> */}

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
          <Link to="/register">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${textClass}`}>
              Build Better Habits with{" "}
              <span className="text-primary">Pacepal</span>
            </h1>
            <p
              className={`text-lg mb-10 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Your intelligent habit and routine management platform designed to
              help you build consistency, break bad habits, and achieve personal
              growth.
            </p>
          </Link>
        </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <FeatureCard
          icon={<FaCheck className="text-2xl" />}
          title="Habit Tracking"
          description="Track your daily habits and build consistency with visual progress indicators."
          darkMode={darkMode}
          textClass={textClass}
        />
        <FeatureCard
          icon={<FaChartLine className="text-2xl" />}
          title="Analytics"
          description="Get insights into your habit patterns with detailed analytics and reports."
          darkMode={darkMode}
          textClass={textClass}
        />
        <FeatureCard
          icon={<FaList className="text-2xl" />}
          title="Routine Builder"
          description="Create custom routines to streamline your daily activities and maximize productivity."
          darkMode={darkMode}
          textClass={textClass}
        />
        <FeatureCard
          icon={<FaUserFriends className="text-2xl" />}
          title="Community"
          description="Join challenges and share your progress with a supportive community."
          darkMode={darkMode}
          textClass={textClass}
        />
      </div>

      <div
        className={`rounded-xl p-8 text-center ${
          darkMode ? "bg-primary text-white" : "bg-primary text-white"
        }`}
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Habits?
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join thousands of users who have already improved their lives with
          Pacepal.
        </p>
        <Link to="/register">
          <Button variant="secondary" size="lg">
            Start Your Journey
          </Button>
        </Link>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, darkMode, textClass }) => {
  return (
    <div
      className={`rounded-lg shadow-md p-6 border text-center ${
        darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
      }`}
    >
      <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${textClass}`}>{title}</h3>
      <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
        {description}
      </p>
    </div>
  );
};

export default Home;
