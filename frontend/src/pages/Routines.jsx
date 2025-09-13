import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./Settings";
import { FaPlus, FaPlay } from "react-icons/fa";
import RoutineBuilder from "../components/features/RoutineBuilder";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";

const Routines = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { theme } = useContext(ThemeContext);
  const darkMode = theme === "dark";
  const bgClass = darkMode ? "bg-dark" : "bg-white";
  const textClass = darkMode ? "text-white" : "text-dark";
  const cardBgClass = darkMode ? "bg-gray-900" : "bg-white";
  const borderClass = darkMode ? "border-gray-800" : "border-gray-200";
  const [routines, setRoutines] = useState([
    {
      id: "1",
      name: "Morning Routine",
      habits: [
        { name: "Drink Water", duration: 5 },
        { name: "Meditation", duration: 10 },
        { name: "Exercise", duration: 20 },
      ],
      totalDuration: 35,
    },
    {
      id: "2",
      name: "Evening Routine",
      habits: [
        { name: "Read", duration: 30 },
        { name: "Journal", duration: 15 },
      ],
      totalDuration: 45,
    },
  ]);

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        darkMode ? "bg-dark text-white min-h-screen" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-8">
        <h1 className={`text-3xl font-bold ${textClass}`}>My Routines</h1>
        <Button variant="primary" onClick={() => setShowCreateModal(true)}>
          <FaPlus className="mr-2" /> Create Routine
        </Button>
      </div>

      {routines.length === 0 ? (
        <div className="text-center py-12">
          <h3 className={`text-xl font-semibold mb-2 ${textClass}`}>
            No routines yet
          </h3>
          <p className={darkMode ? "text-gray-300 mb-6" : "text-gray-600 mb-6"}>
            Create your first routine to streamline your daily activities
          </p>
          <Button variant="primary" onClick={() => setShowCreateModal(true)}>
            <FaPlus className="mr-2" /> Create Your First Routine
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routines.map((routine) => (
            <div
              key={routine.id}
              className={`rounded-lg shadow-md p-6 border ${cardBgClass} ${borderClass}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-xl font-semibold ${textClass}`}>
                  {routine.name}
                </h3>
                <Button variant="primary" size="sm">
                  <FaPlay className="mr-1" /> Start
                </Button>
              </div>

              <div className="mb-4">
                <div
                  className={`flex justify-between text-sm mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <span>Habits: {routine.habits.length}</span>
                  <span>Total: {routine.totalDuration} min</span>
                </div>

                <div className="space-y-2">
                  {routine.habits.map((habit, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-6 h-6 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mr-2">
                        <span className="text-primary text-xs">
                          {index + 1}
                        </span>
                      </div>
                      <span>{habit.name}</span>
                      <span
                        className={`ml-auto ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {habit.duration} min
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="ghost" size="sm">
                  <span className="text-red-500">Delete</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Routine Modal */}
      <Modal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Create New Routine"
        size="lg"
        footer={
          <>
            <Button variant="ghost" onClick={() => setShowCreateModal(false)}>
              Cancel
            </Button>
            <Button variant="primary">Save Routine</Button>
          </>
        }
      >
        <RoutineBuilder />
      </Modal>
      {/* Chatbot Floating Button */}
      <Link to="/chatbot">
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            variant="accent"
            className="rounded-full shadow-lg flex items-center gap-2 px-4 py-2"
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
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default Routines;
