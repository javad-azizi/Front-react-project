import { Home, BookOpen, GraduationCap, DollarSign, MessageSquare } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function UserSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const userRole = localStorage.getItem('userRole');

  return (
    <div className="w-64 min-h-[calc(100vh-64px)] bg-white shadow-sm p-4">
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-500">Menu</h2>
      </div>
      
      <nav className="space-y-1">
        <button 
          onClick={() => navigate('/main-panel')}
          className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 ${
            location.pathname === '/main-panel' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
          }`}
        >
          <Home className="w-5 h-5 mr-3" />
          Home
        </button>
        <button 
          onClick={() => navigate('/classes')}
          className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 ${
            location.pathname === '/classes' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
          }`}
        >
          <MessageSquare className="w-5 h-5 mr-3" />
          Classes
        </button>
        <button 
          onClick={() => navigate('/grades')}
          className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 ${
            location.pathname === '/grades' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
          }`}
        >
          <GraduationCap className="w-5 h-5 mr-3" />
          Grades
        </button>
        {userRole !== 'teacher' && (
          <button 
            onClick={() => navigate('/payment')}
            className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50 ${
              location.pathname === '/payment' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'
            }`}
          >
            <DollarSign className="w-5 h-5 mr-3" />
            Payment
          </button>
        )}
      </nav>
    </div>
  );
}