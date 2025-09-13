import React, { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    alert(`Signed in with email: ${email}`);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT SECTION */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8 lg:p-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Create <span className="text-green-600">Good Habits</span>
        </h1>
        <p className="text-gray-500 text-center max-w-md mb-6">
          Change your life by slowly adding new healthy habits and sticking to them.
          Build better days — one habit, one tick at a time.
        </p>

        <form
          onSubmit={handleSignIn}
          className="flex flex-col w-full max-w-sm gap-3"
        >
          {/* Continue with Email */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition"
          >
            <Mail size={18} /> Continue with Email
          </button>

          {/* Google Button Only */}
          <button className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 rounded-lg">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            Google
          </button>
        </form>

        {/* Register & Login Buttons */}
        <div className="flex gap-4 mt-6 w-full max-w-sm">
          <button
            onClick={() => navigate("/register")}
            className="flex-1 border border-green-500 text-green-600 py-2 rounded-lg hover:bg-green-50 transition"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Log In
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          By continuing, you agree to our Terms of Service & Privacy Policy
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1 bg-gray-50 flex flex-col justify-center items-center p-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Habit Tracker</h2>

          {/* Calendar */}
          <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-3">
            {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
              <span key={d}>{d}</span>
            ))}
            {Array.from({ length: 28 }, (_, i) => (
              <span
                key={i}
                className={`py-1 rounded-full ${
                  [1, 3, 4, 7, 10, 11, 15].includes(i + 1)
                    ? "bg-green-500 text-white"
                    : "text-gray-700"
                }`}
              >
                {i + 1}
              </span>
            ))}
          </div>

          {/* Habits List */}
          <div className="space-y-2 mb-4">
            {["Exercise", "Read", "Meditate"].map((habit) => (
              <div key={habit} className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500" size={18} />
                <span className="text-gray-700">{habit}</span>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-4">
            <div className="bg-green-500 h-2 w-3/4 rounded-full" />
          </div>

          {/* Routine Section */}
          <h3 className="font-medium text-gray-700 mb-2">Build a Routine</h3>
          <div className="bg-gray-100 rounded-xl p-3 space-y-2">
            <p className="text-gray-800">1 Morning run</p>
            <p className="text-gray-800">2 Shower</p>
            <p className="text-gray-800">3 Healthy breakfast</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
