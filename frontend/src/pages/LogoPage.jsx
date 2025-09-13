import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react"; // ✅ for center tick watermark
import ZintickLogo from "../assets/icons/logo.svg";

const LogoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/signin");
    }, 6000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen grid place-items-center bg-gradient-to-br from-white via-emerald-50 to-emerald-100 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950 overflow-hidden">
      {/* Background corner glow */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200 dark:bg-emerald-900/30 rounded-full blur-3xl opacity-30 -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-300 dark:bg-emerald-800/30 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

      {/* ✅ Center Tick Watermark */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 0.08 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute flex items-center justify-center"
      >
        <CheckCircle className="w-[30rem] h-[30rem] text-emerald-400 dark:text-emerald-700" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center text-center z-10"
      >
        {/* Logo with smooth rotation */}
        <motion.img
          src={ZintickLogo}
          alt="Zintick"
          className="w-28 h-28 md:w-36 md:h-36 mb-3 drop-shadow-xl"
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Brand Name */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-emerald-200 drop-shadow-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Zintick
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-2 text-sm text-gray-600 dark:text-emerald-300/70"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          One habit. One tick.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LogoPage;
