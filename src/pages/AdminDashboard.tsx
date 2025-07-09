import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, FileText, Shield, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { mockFIRs, mockCriminals } from '../data/mockData';

const AdminDashboard: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const totalUsers = 156; // Mock data
  const totalOfficers = 24; // Mock data
  const pendingFIRs = mockFIRs.filter(fir => fir.status === 'pending');
  const activeFIRs = mockFIRs.filter(fir => fir.status === 'investigating');
  const closedFIRs = mockFIRs.filter(fir => fir.status === 'closed');

  const crimeData = [
    { name: 'Theft', value: 15 },
    { name: 'Burglary', value: 8 },
    { name: 'Assault', value: 5 },
    { name: 'Vandalism', value: 3 },
    { name: 'Fraud', value: 2 }
  ];

  const monthlyData = [
    { month: 'Jan', cases: 45 },
    { month: 'Feb', cases: 52 },
    { month: 'Mar', cases: 48 },
    { month: 'Apr', cases: 61 },
    { month: 'May', cases: 55 },
    { month: 'Jun', cases: 67 }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  const approveFIR = (firId: string) => {
    console.log(`Approving FIR ${firId}`);
  };

  const rejectFIR = (firId: string) => {
    console.log(`Rejecting FIR ${firId}`);
  };

  const assignOfficer = (firId: string, officer: string) => {
    console.log(`Assigning ${officer} to FIR ${firId}`);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-purple-100">System overview and management controls</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total FIRs</p>
              <p className="text-2xl font-bold text-gray-900">{mockFIRs.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{pendingFIRs.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active</p>
              <p className="text-2xl font-bold text-gray-900">{activeFIRs.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Closed</p>
              <p className="text-2xl font-bold text-gray-900">{closedFIRs.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Officers</p>
              <p className="text-2xl font-bold text-gray-900">{totalOfficers}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Users</p>
              <p className="text-2xl font-bold text-gray-900">{totalUsers}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'overview'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setSelectedTab('firs')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'firs'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Manage FIRs
            </button>
            <button
              onClick={() => setSelectedTab('officers')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'officers'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Officers
            </button>
            <button
              onClick={() => setSelectedTab('users')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'users'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setSelectedTab('analytics')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'analytics'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Analytics
            </button>
          </nav>
        </div>

        <div className="p-6">
          {selectedTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Crime Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={crimeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {crimeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Cases</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="cases" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {mockFIRs.slice(0, 5).map((fir) => (
                    <div key={fir.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{fir.title}</p>
                        <p className="text-sm text-gray-500">
                          {fir.id} • {fir.civilianName} • {fir.date}
                        </p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        fir.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        fir.status === 'investigating' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {fir.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'firs' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Manage FIRs</h2>
              
              <div className="space-y-4">
                {mockFIRs.map((fir) => (
                  <div key={fir.id} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{fir.title}</h3>
                        <p className="text-sm text-gray-500">
                          {fir.id} • Filed by: {fir.civilianName} • {fir.date}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        {fir.status === 'pending' && (
                          <>
                            <button
                              onClick={() => approveFIR(fir.id)}
                              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => rejectFIR(fir.id)}
                              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm"
                            >
                              Reject
                            </button>
                          </>
                        )}
                        <select
                          onChange={(e) => assignOfficer(fir.id, e.target.value)}
                          className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                        >
                          <option value="">Assign Officer</option>
                          <option value="Officer Smith">Officer Smith</option>
                          <option value="Officer Johnson">Officer Johnson</option>
                          <option value="Officer Williams">Officer Williams</option>
                        </select>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{fir.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Type</p>
                        <p className="font-medium">{fir.crimeType}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Location</p>
                        <p className="font-medium">{fir.location}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Priority</p>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          fir.priority === 'high' ? 'bg-red-100 text-red-800' :
                          fir.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {fir.priority}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-500">Status</p>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          fir.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          fir.status === 'investigating' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {fir.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'officers' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Police Officers</h2>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                  Add Officer
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {['Officer Smith', 'Officer Johnson', 'Officer Williams', 'Officer Davis'].map((name, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <Shield className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{name}</h3>
                        <p className="text-sm text-gray-500">Badge: P{String(index + 1).padStart(3, '0')}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Active Cases</span>
                        <span className="font-medium">{Math.floor(Math.random() * 5) + 1}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Closed Cases</span>
                        <span className="font-medium">{Math.floor(Math.random() * 10) + 5}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">District</span>
                        <span className="font-medium">District {index + 1}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'users' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">System Users</h2>
                <div className="flex space-x-2">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg">
                    Export
                  </button>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
                    Add User
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">128</p>
                    <p className="text-sm text-gray-500">Civilians</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">24</p>
                    <p className="text-sm text-gray-500">Police Officers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">4</p>
                    <p className="text-sm text-gray-500">Administrators</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { name: 'John Citizen', email: 'john@example.com', role: 'Civilian', status: 'Active' },
                    { name: 'Officer Smith', email: 'smith@police.com', role: 'Police', status: 'Active' },
                    { name: 'Jane Admin', email: 'jane@admin.com', role: 'Admin', status: 'Active' },
                    { name: 'Bob Reporter', email: 'bob@example.com', role: 'Civilian', status: 'Inactive' },
                  ].map((user, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-gray-600">{user.role}</span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.status}
                        </span>
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          Manage
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Crime Analytics</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Trends</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="cases" fill="#8B5CF6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Crime Heatmap</h3>
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Interactive crime heatmap would be displayed here</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Performance Indicators</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">85%</p>
                    <p className="text-sm text-gray-500">Case Resolution Rate</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <p className="text-2xl font-bold text-green-600">2.3</p>
                    <p className="text-sm text-gray-500">Avg. Days to Resolve</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">92%</p>
                    <p className="text-sm text-gray-500">User Satisfaction</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <p className="text-2xl font-bold text-orange-600">15%</p>
                    <p className="text-sm text-gray-500">Crime Rate Change</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;