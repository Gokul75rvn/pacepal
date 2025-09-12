import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/tailwind.css'
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from './lib/queryClient';

// Lazy load components
const App = lazy(() => import('./App'));
const Toaster = lazy(() => import('react-hot-toast').then(mod => ({ default: mod.Toaster })));
const AuthProvider = lazy(() => import('./context/AuthContext').then(mod => ({ default: mod.AuthProvider })));
const HabitProvider = lazy(() => import('./context/HabitContext').then(mod => ({ default: mod.HabitProvider })));

// Create a loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

// Initialize React Query client
const queryClient = getQueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}>
      <Suspense fallback={<LoadingFallback />}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <HabitProvider>
              <App />
              <Toaster position="top-right" />
              <ReactQueryDevtools initialIsOpen={false} />
            </HabitProvider>
          </AuthProvider>
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)