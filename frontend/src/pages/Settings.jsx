import React, { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaLock,
  FaStar,
  FaPalette,
  FaQuestionCircle,
  FaVolumeUp,
  FaUserShield,
  FaPlane,
  FaShareAlt,
  FaInfoCircle,
  FaEnvelope,
  FaCog,
  FaRegCommentDots,
  FaRegFileAlt,
} from "react-icons/fa";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

// Theme context for global dark mode
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Settings = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const [notifications, setNotifications] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [vacationMode, setVacationMode] = useState(false);

  // Sync darkMode toggle with global theme
  const darkMode = theme === "dark";
  const handleDarkModeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Share API integration
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Habit Tracker",
        text: "Check out this awesome Habit Tracker app!",
        url: window.location.origin,
      });
    } else {
      alert("Share API not supported on this browser.");
    }
  };

  // Modal states
  const [showRateModal, setShowRateModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showVacationModal, setShowVacationModal] = useState(false);
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [rateSubmitted, setRateSubmitted] = useState(false);

  // Settings items
  const iconColor = darkMode ? "#fff" : "#000";
  const settingsItems = [
    {
      label: "Dark Mode",
      icon: <FaPalette className="mr-2" color={iconColor} />,
      type: "toggle",
      value: darkMode,
      onToggle: handleDarkModeToggle,
    },
    {
      label: "Security",
      icon: <FaUserShield className="mr-2" color={iconColor} />,
      type: "button",
      onClick: () => setShowSecurityModal(true),
    },
    {
      label: "Notifications",
      icon: <FaBell className="mr-2" color={iconColor} />,
      type: "toggle",
      value: notifications,
      onToggle: () => setNotifications((v) => !v),
    },
    {
      label: "Sounds",
      icon: <FaVolumeUp className="mr-2" color={iconColor} />,
      type: "toggle",
      value: sounds,
      onToggle: () => setSounds((v) => !v),
    },
    {
      label: "Vacation Mode",
      icon: <FaPlane className="mr-2" color={iconColor} />,
      type: "toggle",
      value: vacationMode,
      onToggle: () => setShowVacationModal(true),
    },
    {
      label: "Rate Routiner",
      icon: <FaStar className="mr-2" color={iconColor} />,
      type: "button",
      onClick: () => setShowRateModal(true),
    },
    {
      label: "Share with Friends",
      icon: <FaShareAlt className="mr-2" color={iconColor} />,
      type: "button",
      onClick: handleShare,
    },
    {
      label: "About Us",
      icon: <FaInfoCircle className="mr-2" color={iconColor} />,
      type: "button",
      onClick: () => setShowAboutModal(true),
    },
    {
      label: "Support",
      icon: <FaRegCommentDots className="mr-2" color={iconColor} />,
      type: "button",
      onClick: () => navigate("/chatbot"),
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="flex items-center px-8 pt-8">
        <button
          className={`rounded-full p-2 shadow ${
            darkMode ? "bg-black" : "bg-white"
          }`}
          aria-label="Back"
          onClick={() => navigate(-1)}
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke={iconColor}
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1
          className={`text-2xl font-bold mb-8 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Settings
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {settingsItems.map((item) => (
            <div
              key={item.label}
              className={`rounded-lg flex items-center justify-between px-6 py-4 shadow transition-colors duration-500 cursor-pointer ${
                darkMode ? "bg-white" : "bg-white"
              } hover:bg-gray-100`}
              onClick={item.type === "button" ? item.onClick : undefined}
            >
              <div className="flex items-center">
                {item.icon}
                <span
                  className={`font-medium ${
                    darkMode ? "text-black" : "text-black"
                  }`}
                >
                  {item.label}
                </span>
              </div>
              {item.type === "toggle" ? (
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={item.value}
                    onChange={item.onToggle}
                    className="sr-only peer"
                  />
                  <div
                    className={`w-11 h-6 rounded-full peer-focus:outline-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 transition-colors duration-300 ${
                      darkMode ? "bg-gray-200" : "bg-gray-200"
                    }`}
                  ></div>
                </label>
              ) : (
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Rate Routiner Modal */}
      {showRateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div
            className={`rounded-lg p-8 w-full max-w-md mx-auto shadow-lg ${
              darkMode ? "bg-black" : "bg-white"
            }`}
          >
            <h2
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Rate Routiner
            </h2>
            {!rateSubmitted ? (
              <>
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setRating(star)}
                      onMouseLeave={() => setRating(rating)}
                      className={`cursor-pointer text-3xl transition-colors duration-200 ${
                        star <= rating
                          ? "text-yellow-400"
                          : darkMode
                          ? "text-gray-700"
                          : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => setRateSubmitted(true)}
                >
                  Submit
                </Button>
              </>
            ) : (
              <div
                className={`text-center font-semibold ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                Thank you for your feedback!
              </div>
            )}
            <Button
              variant="outline"
              className="mt-4 w-full"
              onClick={() => {
                setShowRateModal(false);
                setRateSubmitted(false);
                setRating(0);
              }}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* About Us Modal */}
      {showAboutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div
            className={`rounded-lg p-8 w-full max-w-md mx-auto shadow-lg ${
              darkMode ? "bg-black" : "bg-white"
            }`}
          >
            <h2
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              About This Project
            </h2>
            <p className={`mb-4 ${darkMode ? "text-white" : "text-black"}`}>
              This Habit Tracker project was created to help users build and
              maintain healthy routines. Built with the MERN stack (MongoDB,
              Express, React, Node.js), it features real-time habit tracking,
              analytics, and a modern responsive UI.
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowAboutModal(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Vacation Mode Modal */}
      {showVacationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div
            className={`rounded-lg p-8 w-full max-w-md mx-auto shadow-lg ${
              darkMode ? "bg-black" : "bg-white"
            }`}
          >
            <h2
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Vacation Mode
            </h2>
            <p className={`mb-4 ${darkMode ? "text-white" : "text-black"}`}>
              Vacation Mode lets you pause your habit streaks and reminders
              while you’re away. Enable it to stop notifications and streak loss
              until you return.
            </p>
            <Button
              variant="primary"
              className="w-full mb-2"
              onClick={() => {
                setVacationMode((v) => !v);
                setShowVacationModal(false);
              }}
            >
              {vacationMode ? "Disable" : "Enable"} Vacation Mode
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowVacationModal(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Security Modal */}
      {showSecurityModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div
            className={`rounded-lg p-8 w-full max-w-md mx-auto shadow-lg ${
              darkMode ? "bg-black" : "bg-white"
            }`}
          >
            <h2
              className={`text-xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Security Features
            </h2>
            <ul
              className={`mb-4 list-disc pl-5 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              <li>OAuth 2.0 Authentication (used by Google, Facebook)</li>
              <li>Two-Factor Authentication (used by banking apps)</li>
              <li>Data Encryption (used by Dropbox, Slack)</li>
              <li>Role-based Access Control (used by enterprise apps)</li>
              <li>Session Management & Expiry</li>
            </ul>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowSecurityModal(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
