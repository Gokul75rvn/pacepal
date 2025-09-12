import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import Home from './pages/Home'
import Before from './pages/before'
import LogoPage from './pages/LogoPage'
import SignInPage from './pages/SignInPage'
import VerifyEmailPage from './pages/VerifyEmailPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Habits from './pages/Habits'
import Routines from './pages/Routines'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import ProtectedRoute from './components/common/ProtectedRoute'
import Community from './pages/Community'
import Notifications from './pages/Notifications'

function App() {
  return (
    <Routes>
      {/* Splash / Landing - no Navbar */}
      <Route path="/" element={<LogoPage />} />

      {/* Auth pages - no Navbar */}
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
      <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />

      {/* Home pages */}
      <Route path="/before" element={<Before />} />
      <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/community" element={<MainLayout><Community /></MainLayout>} />
      <Route path="/notifications" element={
        <ProtectedRoute>
          <MainLayout><Notifications /></MainLayout>
        </ProtectedRoute>
      } />
      {/* Home1 route removed - file does not exist */}

      {/* Protected pages with Navbar */}
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <MainLayout><Dashboard /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/habits" element={
        <ProtectedRoute>
          <MainLayout><Habits /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/routines" element={
        <ProtectedRoute>
          <MainLayout><Routines /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/analytics" element={
        <ProtectedRoute>
          <MainLayout><Analytics /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute>
          <MainLayout><Profile /></MainLayout>
        </ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute>
          <MainLayout><Settings /></MainLayout>
        </ProtectedRoute>
      } />

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
