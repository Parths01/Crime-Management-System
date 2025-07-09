import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Phone, Mail, MapPin } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Shield className="h-20 w-20 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Crime<span className="text-blue-400">Tracker</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A comprehensive crime management system that connects civilians, police, and administrators 
              for efficient crime reporting, tracking, and resolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How CrimeTracker Works
            </h2>
            <p className="text-lg text-gray-600">
              Our system provides different interfaces for different user types
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Civilians</h3>
              <p className="text-gray-600">
                File FIRs online, track case status, receive crime alerts in your area, 
                and stay connected with law enforcement.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Police</h3>
              <p className="text-gray-600">
                Manage assigned cases, update case status, upload evidence, 
                and access criminal database efficiently.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Administrators</h3>
              <p className="text-gray-600">
                Oversee system operations, manage users, generate reports, 
                and analyze crime patterns with advanced analytics.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Need Help or Support?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-colors transform hover:scale-105"
              >
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold">Contact Support</h3>
                <p className="text-blue-100">Get help with the system</p>
              </Link>
              <a
                href="mailto:help@crimetracker.com"
                className="bg-gray-700 hover:bg-gray-600 text-white p-6 rounded-lg text-center transition-colors transform hover:scale-105"
              >
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold">Email Us</h3>
                <p className="text-gray-300">help@crimetracker.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;