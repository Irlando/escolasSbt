import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Dashboard } from './pages/Dashboard';
import { useAuth } from './contexts/AuthContext';

export function App() {
  const { user } = useAuth();
  const location = useLocation();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user && location.pathname !== '/login') {
      window.location.href = '/login';
    }
  }, [user, location]);

  return (
    <Routes>
      <Route path="/login" element={
        user ? <Navigate to="/" replace /> : <Login />
      } />
      <Route path="/profile" element={
        user ? <Profile /> : <Navigate to="/login" replace />
      } />
      <Route path="/" element={
        user ? <Dashboard /> : <Navigate to="/login" replace />
      } />
    </Routes>
  );
}