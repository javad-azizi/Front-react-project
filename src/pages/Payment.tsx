import { useState } from 'react';
import { DollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';
import UserSidebar from '../components/UserSidebar';

interface PaymentClass {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  tuitionFee: number;
  isPaid: boolean;
}

export default function Payment() {
  const [classes] = useState<PaymentClass[]>([
    { id: 1, name: 'English 101', startDate: '2024-01-15', endDate: '2024-03-15', tuitionFee: 500, isPaid: false },
    { id: 2, name: 'English 201', startDate: '2024-04-01', endDate: '2024-06-01', tuitionFee: 600, isPaid: false },
    { id: 3, name: 'English 301', startDate: '2024-07-15', endDate: '2024-09-15', tuitionFee: 700, isPaid: false },
  ]);

  const totalDebt = classes.reduce((sum, class_) => sum + (class_.isPaid ? 0 : class_.tuitionFee), 0);
  const totalPaid = classes.reduce((sum, class_) => sum + (class_.isPaid ? class_.tuitionFee : 0), 0);

  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <UserSidebar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Student Payment Details</h1>
              <p className="mt-2 text-gray-600">
                Manage payments for student: {user?.firstName} {user?.lastName}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Class Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Start Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      End Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tuition Fee
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {classes.map((class_) => (
                    <tr key={class_.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {class_.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {class_.startDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {class_.endDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${class_.tuitionFee}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button 
                          className="text-indigo-600 hover:text-indigo-900"
                          disabled={class_.isPaid}
                        >
                          Pay
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Total Remaining Debt</span>
                <span className="font-medium">${totalDebt}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Total Paid Amount</span>
                <span className="font-medium">${totalPaid}</span>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}