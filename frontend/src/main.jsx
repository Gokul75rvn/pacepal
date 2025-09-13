// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Removed old react-query import, using @tanstack/react-query below
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { HabitProvider } from "./context/HabitContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/tailwind.css";
import { ThemeProvider } from "./pages/Settings";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/AuthContext'
import { HabitProvider } from './context/HabitContext'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/tailwind.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AuthProvider>
          <HabitProvider>
            <ThemeProvider>
              <App />
              <Toaster position="top-right" />
            </ThemeProvider>
          </HabitProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
