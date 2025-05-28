import { Users, CalendarDays, BookOpen, MessageSquare, Users2, Calendar, GraduationCap, DollarSign } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div className="w-64 min-h-[calc(100vh-64px)] bg-white shadow-sm p-4">
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-500">Menu</h2>
      </div>
      
      <nav className="space-y-1">
        <button 
          onClick={() => navigate('/admin/teachers')}
          className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 ${
            location.pathname === '/admin/teachers' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
          }`}
        >
          <Users className="w-5 h-5 mr-3" />
          Teachers
        </button>
        <button 
          onClick={() => navigate('/admin/terms')}
          className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 ${
            location.pathname === '/admin/terms' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
          }`}
        >
          <CalendarDays className="w-5 h-5 mr-3" />
          Terms
        </button>
        <button 
          onClick={() => navigate('/admin/courses')}
          className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 ${
            location.pathname === '/admin/courses' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
          }`}
        >
          <BookOpen className="w-5 h-5 mr-3" />
          Courses
        </button>
        <button 
          onClick={() => navigate('/admin/classes')}
          className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 ${
            location.pathname === '/admin/classes' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
          }`}
        >
          <MessageSquare className="w-5 h-5 mr-3" />
          Classes
        </button>
        <button 
          onClick={() => navigate('/admin/students')}
          className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 ${
            location.pathname === '/admin/students' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
          }`}
        >
          <Users2 className="w-5 h-5 mr-3" />
          Students
        </button>
        <button 
          onClick={() => navigate('/admin/schedule')}
          className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 ${
            location.pathname === '/admin/schedule' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
          }`}
        >
          <Calendar className="w-5 h-5 mr-3" />
          Schedule
        </button>
        <button 
          onClick={() => navigate('/admin/grades')}
          className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 ${
            location.pathname === '/admin/grades' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
          }`}
        >
          <GraduationCap className="w-5 h-5 mr-3" />
          Grades
        </button>
        <button 
          onClick={() => navigate('/admin/financial')}
          className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 ${
            location.pathname === '/admin/financial' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
          }`}
        >
          <DollarSign className="w-5 h-5 mr-3" />
          Financial
        </button>
      </nav>
    </div>
  );
}