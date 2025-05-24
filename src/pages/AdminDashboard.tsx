import { Users, CalendarDays, BookOpen, MessageSquare, Users2, Calendar, GraduationCap, DollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-[calc(100vh-64px)] bg-white shadow-sm p-4">
          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-500">Menu</h2>
          </div>
          
          <nav className="space-y-1">
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
              <Users className="w-5 h-5 mr-3" />
              Teachers
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
              <CalendarDays className="w-5 h-5 mr-3" />
              Terms
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
              <BookOpen className="w-5 h-5 mr-3" />
              Courses
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
              <MessageSquare className="w-5 h-5 mr-3" />
              Classes
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
              <Users2 className="w-5 h-5 mr-3" />
              Students
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
              <Calendar className="w-5 h-5 mr-3" />
              Schedule
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
              <GraduationCap className="w-5 h-5 mr-3" />
              Grades
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50">
              <DollarSign className="w-5 h-5 mr-3" />
              Financial
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Frequently used</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Creating class schedules */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://images.pexels.com/photos/6863175/pexels-photo-6863175.jpeg"
                  alt="Schedule template"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Creating class schedules</h3>
                </div>
              </div>

              {/* Financial affairs */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://images.pexels.com/photos/6863250/pexels-photo-6863250.jpeg"
                  alt="Financial documents"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Financial affairs</h3>
                </div>
              </div>

              {/* Creating class */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://images.pexels.com/photos/5905498/pexels-photo-5905498.jpeg"
                  alt="Empty classroom"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Creating class</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}