import Navbar from '../components/Navbar';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <p>Welcome to the admin dashboard. This is a protected route for administrators only.</p>
          </div>
        </div>
      </div>
    </div>
  );
}