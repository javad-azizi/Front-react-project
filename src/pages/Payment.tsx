import React from 'react';
import Navbar from '../components/Navbar';
import UserSidebar from '../components/UserSidebar';

const Payment = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <UserSidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Payment</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-600">Payment content will go here</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Payment;