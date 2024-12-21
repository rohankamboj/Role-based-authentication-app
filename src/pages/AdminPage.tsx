import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Users, Settings, BarChart } from 'lucide-react';

export const AdminPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">User Management</h2>
            </div>
            <p className="text-gray-600">Manage user accounts and permissions</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Settings className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold">System Settings</h2>
            </div>
            <p className="text-gray-600">Configure system parameters</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <BarChart className="h-6 w-6 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold">Analytics</h2>
            </div>
            <p className="text-gray-600">View system analytics and reports</p>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Current User</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Name:</span> {user?.name}</p>
            <p><span className="font-medium">Email:</span> {user?.email}</p>
            <p><span className="font-medium">Role:</span> {user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};