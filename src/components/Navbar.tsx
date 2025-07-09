import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, User, LogOut, Home } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  if (!user) return null;

  const getDashboardPath = () => {
    switch (user.role) {
      case 'civilian':
        return '/civilian-dashboard';
      case 'police':
        return '/police-dashboard';
      case 'admin':
        return '/admin-dashboard';
      default:
        return '/';
    }
  };

  return (
    <nav className="bg-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-400 mr-3" />
            <span className="text-xl font-bold">CrimeTracker</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to={getDashboardPath()}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === getDashboardPath()
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <Home className="h-4 w-4 mr-2" />
              Dashboard
            </Link>
            
            <Link
              to="/profile"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/profile'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Link>
            
            <div className="text-sm text-gray-300">
              {user.name} ({user.role})
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;