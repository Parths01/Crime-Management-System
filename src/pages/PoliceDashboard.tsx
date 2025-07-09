import React, { useState } from 'react';
import { FileText, Users, AlertTriangle, CheckCircle, Upload, Search } from 'lucide-react';
import { mockFIRs, mockCriminals } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';

const PoliceDashboard: React.FC = () => {
  const { user } = useAuth();
  const [selectedTab, setSelectedTab] = useState('cases');
  const [searchTerm, setSearchTerm] = useState('');

  const assignedCases = mockFIRs.filter(fir => fir.assignedOfficer === user?.name);
  const activeCases = assignedCases.filter(fir => fir.status === 'investigating');
  const closedCases = assignedCases.filter(fir => fir.status === 'closed');

  const updateCaseStatus = (firId: string, newStatus: string) => {
    // Here you would typically update the backend
    console.log(`Updating case ${firId} to ${newStatus}`);
  };

  const filteredCriminals = mockCriminals.filter(criminal =>
    criminal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    criminal.crimes.some(crime => crime.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome, Officer {user?.name}!</h1>
        <p className="text-green-100">Badge: {user?.badgeNumber || 'P001'} • District: {user?.area || 'District 1'}</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Cases</p>
              <p className="text-2xl font-bold text-gray-900">{assignedCases.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Cases</p>
              <p className="text-2xl font-bold text-gray-900">{activeCases.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Closed Cases</p>
              <p className="text-2xl font-bold text-gray-900">{closedCases.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Criminals</p>
              <p className="text-2xl font-bold text-gray-900">{mockCriminals.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button
              onClick={() => setSelectedTab('cases')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'cases'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Assigned Cases
            </button>
            <button
              onClick={() => setSelectedTab('criminals')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'criminals'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Criminal Database
            </button>
            <button
              onClick={() => setSelectedTab('workload')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'workload'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Workload Overview
            </button>
          </nav>
        </div>

        <div className="p-6">
          {selectedTab === 'cases' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Assigned Cases</h2>
              
              <div className="space-y-4">
                {assignedCases.map((fir) => (
                  <div key={fir.id} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{fir.title}</h3>
                        <p className="text-sm text-gray-500">
                          FIR ID: {fir.id} • Filed by: {fir.civilianName}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <select
                          value={fir.status}
                          onChange={(e) => updateCaseStatus(fir.id, e.target.value)}
                          className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        >
                          <option value="pending">Pending</option>
                          <option value="investigating">Investigating</option>
                          <option value="closed">Closed</option>
                        </select>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg text-sm flex items-center space-x-1">
                          <Upload className="h-3 w-3" />
                          <span>Evidence</span>
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{fir.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Type</p>
                        <p className="font-medium">{fir.crimeType}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Date</p>
                        <p className="font-medium">{fir.date}</p>
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'criminals' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Criminal Database</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search criminals..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCriminals.map((criminal) => (
                  <div key={criminal.id} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{criminal.name}</h3>
                        <p className="text-sm text-gray-500">Age: {criminal.age}</p>
                      </div>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        criminal.status === 'wanted' ? 'bg-red-100 text-red-800' :
                        criminal.status === 'in_custody' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {criminal.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-gray-500">Crimes</p>
                        <p className="font-medium">{criminal.crimes.join(', ')}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Related FIRs</p>
                        <p className="font-medium">{criminal.firIds.join(', ')}</p>
                      </div>
                      {criminal.lastKnownLocation && (
                        <div>
                          <p className="text-sm text-gray-500">Last Known Location</p>
                          <p className="font-medium">{criminal.lastKnownLocation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'workload' && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Workload Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Case Statistics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Cases</span>
                      <span className="font-medium">{assignedCases.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Active Cases</span>
                      <span className="font-medium text-yellow-600">{activeCases.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Closed Cases</span>
                      <span className="font-medium text-green-600">{closedCases.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="font-medium">
                        {assignedCases.length > 0 ? Math.round((closedCases.length / assignedCases.length) * 100) : 0}%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {assignedCases.slice(0, 5).map((fir) => (
                      <div key={fir.id} className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          fir.status === 'investigating' ? 'bg-blue-500' :
                          fir.status === 'closed' ? 'bg-green-500' :
                          'bg-yellow-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{fir.title}</p>
                          <p className="text-xs text-gray-500">{fir.id}</p>
                        </div>
                      </div>
                    ))}
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

export default PoliceDashboard;