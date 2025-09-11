import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Habits from './pages/Habits'
import Routines from './pages/Routines'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import ProtectedRoute from './components/common/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
      <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
      
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
    </Routes>
  )
}

export default App