import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CivilianDashboard from './pages/CivilianDashboard';
import PoliceDashboard from './pages/PoliceDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';

const PrivateRoute: React.FC<{ children: React.ReactNode; roles?: string[] }> = ({ children, roles }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={!user ? <LandingPage /> : <Navigate to={`/${user.role}-dashboard`} replace />} />
      <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={`/${user.role}-dashboard`} replace />} />
      <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to={`/${user.role}-dashboard`} replace />} />
      <Route path="/contact" element={<ContactPage />} />
      
      <Route path="/civilian-dashboard" element={
        <PrivateRoute roles={['civilian']}>
          <Layout>
            <CivilianDashboard />
          </Layout>
        </PrivateRoute>
      } />
      
      <Route path="/police-dashboard" element={
        <PrivateRoute roles={['police']}>
          <Layout>
            <PoliceDashboard />
          </Layout>
        </PrivateRoute>
      } />
      
      <Route path="/admin-dashboard" element={
        <PrivateRoute roles={['admin']}>
          <Layout>
            <AdminDashboard />
          </Layout>
        </PrivateRoute>
      } />
      
      <Route path="/profile" element={
        <PrivateRoute>
          <Layout>
            <ProfilePage />
          </Layout>
        </PrivateRoute>
      } />
      
      <Route path="/unauthorized" element={
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Unauthorized</h1>
            <p className="text-gray-600">You don't have permission to access this page.</p>
          </div>
        </div>
      } />
      
      <Route path="*" element={
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-gray-600">Page not found.</p>
          </div>
        </div>
      } />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;