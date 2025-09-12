import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import Home from './pages/Home'
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
import ProtectedRoute from './components/common/ProtectedRoute'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
  <Route path="/community" element={<MainLayout><Community /></MainLayout>} />
  <Route path="/community/friends" element={<MainLayout><CommunityFriends /></MainLayout>} />
  <Route path="/community/challenges" element={<MainLayout><CommunityChallenges /></MainLayout>} />
  <Route path="/community/discussions" element={<MainLayout><CommunityDiscussions /></MainLayout>} />
  <Route path="/community/progress" element={<MainLayout><CommunityProgress /></MainLayout>} />
  <Route path="/community/groups" element={<MainLayout><CommunityGroups /></MainLayout>} />
        <Route path="/community/join" element={<MainLayout><JoinGroup /></MainLayout>} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App