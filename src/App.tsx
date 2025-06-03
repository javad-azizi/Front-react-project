import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import MainPanel from './pages/MainPanel';
import MainClasses from './pages/MainClasses';
import Teachers from './pages/Teachers';
import TeacherRegistration from './pages/TeacherRegistration';
import Terms from './pages/Terms';
import Courses from './pages/Courses';
import Classes from './pages/Classes';
import Students from './pages/Students';
import Grades from './pages/Grades';
import Payment from './pages/Payment';
import Unauthorized from './pages/Unauthorized';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute allowedRoles={['manager']}>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/teachers"
          element={
            <PrivateRoute allowedRoles={['manager']}>
              <Teachers />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/teachers/new"
          element={
            <PrivateRoute allowedRoles={['manager']}>
              <TeacherRegistration />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/terms"
          element={
            <PrivateRoute allowedRoles={['manager']}>
              <Terms />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/courses"
          element={
            <PrivateRoute allowedRoles={['manager']}>
              <Courses />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/classes"
          element={
            <PrivateRoute allowedRoles={['manager']}>
              <Classes />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/students"
          element={
            <PrivateRoute allowedRoles={['manager']}>
              <Students />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/grades"
          element={
            <PrivateRoute allowedRoles={['manager']}>
              <Grades />
            </PrivateRoute>
          }
        />
        <Route
          path="/main-panel"
          element={
            <PrivateRoute allowedRoles={['student', 'teacher']}>
              <MainPanel />
            </PrivateRoute>
          }
        />
        <Route
          path="/classes"
          element={
            <PrivateRoute allowedRoles={['student', 'teacher']}>
              <MainClasses />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute allowedRoles={['student']}>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login\" replace />} />
      </Routes>
    </Router>
  );
}

export default App;