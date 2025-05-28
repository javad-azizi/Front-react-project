import React from 'react';
import { GraduationCap } from 'lucide-react';

const Students = () => {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-6 h-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">Students</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">Student management dashboard coming soon...</p>
      </div>
    </div>
  );
};

export default Students;