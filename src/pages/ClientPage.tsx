import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { ShoppingCart, CreditCard, Headphones } from 'lucide-react';

export const ClientPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Client Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <ShoppingCart className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold">Orders</h2>
            </div>
            <p className="text-gray-600">View your order history</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold">Billing</h2>
            </div>
            <p className="text-gray-600">Manage payment methods</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Headphones className="h-6 w-6 text-purple-600 mr-2" />
              <h2 className="text-xl font-semibold">Support</h2>
            </div>
            <p className="text-gray-600">Get help and support</p>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Client Information</h2>
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