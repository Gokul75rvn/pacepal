import React from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmailPage = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/register");
  };

  const handleSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h2 className="text-3xl font-bold mb-6 text-green-600">Verify Your Email</h2>
      <p className="mb-8 text-gray-700">Please check your email and click the verification link to continue.</p>
      <button
        onClick={handleContinue}
        className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition mb-4"
      >
        Continue to Account Creation
      </button>
      <button
        onClick={handleSignIn}
        className="px-6 py-2 bg-gray-200 text-green-700 rounded-lg shadow hover:bg-gray-300 transition"
      >
        Back to Sign In
      </button>
    </div>
  );
};

export default VerifyEmailPage;
