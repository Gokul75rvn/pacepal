import { Routes, Route, Navigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from './layouts/MainLayout'
import AddSchedule from './pages/AddSchedule'
import AllHabitsSchedule from './pages/AllHabitsSchedule'
import AuthLayout from './layouts/AuthLayout'
import Home from './pages/Home'
import Before from './pages/before'
import LogoPage from './pages/LogoPage'
import SignInPage from './pages/SignInPage'
import VerifyEmailPage from './pages/VerifyEmailPage'
import Community from './pages/Community'
import CommunityFriends from './pages/CommunityFriends'
import CommunityChallenges from './pages/CommunityChallenges'
import CommunityDiscussions from './pages/CommunityDiscussions'
import CommunityProgress from './pages/CommunityProgress'
import CommunityGroups from './pages/CommunityGroups'
import JoinGroup from './pages/JoinGroup';
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Habits from './pages/Habits'
import Routines from './pages/Routines'
import Analytics from './pages/Analytics'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import HabitTracking from './pages/HabitTracking'
import ScheduleDetails from './pages/ScheduleDetails'
import RoutineBuilderPage from './pages/RoutineBuilder'
import RoutineList from './pages/RoutineList'
        <Route path="/routine-list" element={
          <ProtectedRoute>
            <MainLayout><RoutineList /></MainLayout>
          </ProtectedRoute>
        } />
import ProtectedRoute from './components/common/ProtectedRoute'
import Community from './pages/Community'
import Notifications from './pages/Notifications'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
        <Route path="/habits-schedule" element={
          <ProtectedRoute>
            <MainLayout><AllHabitsSchedule /></MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/habit-tracking" element={
          <ProtectedRoute>
            <MainLayout><HabitTracking /></MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/routine-builder" element={
          <ProtectedRoute>
            <MainLayout><RoutineBuilderPage /></MainLayout>
          </ProtectedRoute>
        } />
        <Route path="/add-schedule" element={
          <ProtectedRoute>
            <MainLayout><AddSchedule /></MainLayout>
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
        <Route path="/community" element={<MainLayout><Community /></MainLayout>} />
        <Route path="/community/friends" element={<MainLayout><CommunityFriends /></MainLayout>} />
        <Route path="/community/challenges" element={<MainLayout><CommunityChallenges /></MainLayout>} />
        <Route path="/community/discussions" element={<MainLayout><CommunityDiscussions /></MainLayout>} />
        <Route path="/community/progress" element={<MainLayout><CommunityProgress /></MainLayout>} />
        <Route path="/community/groups" element={<MainLayout><CommunityGroups /></MainLayout>} />
        <Route path="/community/join" element={<MainLayout><JoinGroup /></MainLayout>} />
        <Route path="/schedule-details" element={
          <ProtectedRoute>
            <MainLayout><ScheduleDetails /></MainLayout>
          </ProtectedRoute>
        } />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
