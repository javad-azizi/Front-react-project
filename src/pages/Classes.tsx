import { useState } from 'react';
import { PlusCircle, Pencil, Trash2, X, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import AdminSidebar from '../components/AdminSidebar';

interface Term {
  id: number;
  year: number;
  season: string;
}

interface Teacher {
  id: number;
  name: string;
}

interface Course {
  id: number;
  name: string;
  code: string;
}

interface Class {
  id: number;
  name: string;
  courseId: number;
  courseName: string;
  teacherId: number;
  teacherName: string;
  termId: number;
  startDate: string;
  endDate: string;
  tuitionFee: number;
  capacity: number;
  startRegistrationDate: string;
  endRegistrationDate: string;
}

export default function Classes() {
  // Static data for demonstration
  const terms: Term[] = [
    { id: 1, year: 2024, season: 'Fall' },
    { id: 2, year: 2024, season: 'Spring' },
    { id: 3, year: 2023, season: 'Fall' },
  ];

  const teachers: Teacher[] = [
    { id: 1, name: 'Dr. Eleanor Harper' },
    { id: 2, name: 'Prof. Samuel Bennett' },
    { id: 3, name: 'Ms. Olivia Carter' },
    { id: 4, name: 'Dr. Ethan Mitchell' },
    { id: 5, name: 'Prof. Sophia Reynolds' },
  ];

  const courses: Course[] = [
    { id: 1, name: 'Computer Science 101', code: 'CS101' },
    { id: 2, name: 'Mathematics 201', code: 'MATH201' },
    { id: 3, name: 'English 101', code: 'ENG101' },
    { id: 4, name: 'Physics 101', code: 'PHYS101' },
    { id: 5, name: 'History 101', code: 'HIST101' },
  ];

  const classes: Class[] = [
    {
      id: 1,
      name: 'Introduction to Programming',
      courseId: 1,
      courseName: 'Computer Science 101',
      teacherId: 1,
      teacherName: 'Dr. Eleanor Harper',
      termId: 1,
      startDate: '2024-09-05',
      endDate: '2024-12-15',
      tuitionFee: 1500,
      capacity: 30,
      startRegistrationDate: '2024-08-01',
      endRegistrationDate: '2024-08-31'
    },
    {
      id: 2,
      name: 'Calculus I',
      courseId: 2,
      courseName: 'Mathematics 201',
      teacherId: 2,
      teacherName: 'Prof. Samuel Bennett',
      termId: 1,
      startDate: '2024-09-05',
      endDate: '2024-12-15',
      tuitionFee: 1200,
      capacity: 25,
      startRegistrationDate: '2024-08-01',
      endRegistrationDate: '2024-08-31'
    },
    {
      id: 3,
      name: 'English Composition',
      courseId: 3,
      courseName: 'English 101',
      teacherId: 3,
      teacherName: 'Ms. Olivia Carter',
      termId: 1,
      startDate: '2024-09-05',
      endDate: '2024-12-15',
      tuitionFee: 1000,
      capacity: 20,
      startRegistrationDate: '2024-08-01',
      endRegistrationDate: '2024-08-31'
    },
    {
      id: 4,
      name: 'Physics I',
      courseId: 4,
      courseName: 'Physics 101',
      teacherId: 4,
      teacherName: 'Dr. Ethan Mitchell',
      termId: 1,
      startDate: '2024-09-05',
      endDate: '2024-12-15',
      tuitionFee: 1300,
      capacity: 25,
      startRegistrationDate: '2024-08-01',
      endRegistrationDate: '2024-08-31'
    },
    {
      id: 5,
      name: 'History of Civilization',
      courseId: 5,
      courseName: 'History 101',
      teacherId: 5,
      teacherName: 'Prof. Sophia Reynolds',
      termId: 1,
      startDate: '2024-09-05',
      endDate: '2024-12-15',
      tuitionFee: 900,
      capacity: 35,
      startRegistrationDate: '2024-08-01',
      endRegistrationDate: '2024-08-31'
    }
  ];

  const [selectedTerm, setSelectedTerm] = useState<Term>(terms[0]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    courseId: '',
    teacherId: '',
    termId: '',
    startDate: '',
    endDate: '',
    capacity: '',
    tuitionFee: '',
    startRegistrationDate: '',
    endRegistrationDate: ''
  });

  const handleEdit = (classItem: Class) => {
    setSelectedClass(classItem);
    setFormData({
      name: classItem.name,
      courseId: classItem.courseId.toString(),
      teacherId: classItem.teacherId.toString(),
      termId: classItem.termId.toString(),
      startDate: classItem.startDate,
      endDate: classItem.endDate,
      capacity: classItem.capacity.toString(),
      tuitionFee: classItem.tuitionFee.toString(),
      startRegistrationDate: classItem.startRegistrationDate,
      endRegistrationDate: classItem.endRegistrationDate
    });
    setIsEditModalOpen(true);
  };

  const handleShowInfo = (classItem: Class) => {
    setSelectedClass(classItem);
    setIsInfoModalOpen(true);
  };

  const ClassForm = ({ isEdit = false }) => (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Term</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.termId}
          onChange={(e) => setFormData({ ...formData, termId: e.target.value })}
        >
          <option value="">Select a term</option>
          {terms.map(term => (
            <option key={term.id} value={term.id}>
              {term.season} {term.year}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Course</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.courseId}
          onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
        >
          <option value="">Select a course</option>
          {courses.map(course => (
            <option key={course.id} value={course.id}>{course.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Teacher</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.teacherId}
          onChange={(e) => setFormData({ ...formData, teacherId: e.target.value })}
        >
          <option value="">Select a teacher</option>
          {teachers.map(teacher => (
            <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Class Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.endDate}
            onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Capacity</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.capacity}
            onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Tuition Fee</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.tuitionFee}
            onChange={(e) => setFormData({ ...formData, tuitionFee: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Registration Start</label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.startRegistrationDate}
            onChange={(e) => setFormData({ ...formData, startRegistrationDate: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Registration End</label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.endRegistrationDate}
            onChange={(e) => setFormData({ ...formData, endRegistrationDate: e.target.value })}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3 mt-6">
        <button
          type="button"
          onClick={() => isEdit ? setIsEditModalOpen(false) : setIsAddModalOpen(false)}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isEdit ? 'Update Class' : 'Create Class'}
        </button>
      </div>
    </form>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <AdminSidebar />
        
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold text-gray-900">Classes</h1>
              <select
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={`${selectedTerm.season} ${selectedTerm.year}`}
                onChange={(e) => {
                  const [season, year] = e.target.value.split(' ');
                  const term = terms.find(t => t.season === season && t.year === parseInt(year));
                  if (term) setSelectedTerm(term);
                }}
              >
                {terms.map(term => (
                  <option key={term.id} value={`${term.season} ${term.year}`}>
                    {term.season} {term.year}
                  </option>
                ))}
              </select>
            </div>
            <button 
              onClick={() => {
                setFormData({
                  ...formData,
                  termId: selectedTerm.id.toString()
                });
                setIsAddModalOpen(true);
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Add Class
            </button>
          </div>

          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Teacher
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
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {classes
                  .filter(classItem => classItem.termId === selectedTerm.id)
                  .map((classItem) => (
                    <tr key={classItem.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleShowInfo(classItem)}
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-900"
                        >
                          {classItem.name}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {classItem.courseName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {classItem.teacherName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {classItem.startDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {classItem.endDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${classItem.tuitionFee}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                        <button 
                          onClick={() => handleEdit(classItem)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <Pencil className="w-5 h-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Class Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add New Class</h2>
              <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                <X className="w-6 h-6" />
              </button>
            </div>
            <ClassForm />
          </div>
        </div>
      )}

      {/* Edit Class Modal */}
      {isEditModalOpen && selectedClass && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Edit Class</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                <X className="w-6 h-6" />
              </button>
            </div>
            <ClassForm isEdit />
          </div>
        </div>
      )}

      {/* Class Info Modal */}
      {isInfoModalOpen && selectedClass && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Class Information</h2>
              <button onClick={() => setIsInfoModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Class Name</h3>
                  <p className="mt-1 text-sm text-gray-900">{selectedClass.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Course</h3>
                  <p className="mt-1 text-sm text-gray-900">{selectedClass.courseName}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Teacher</h3>
                  <p className="mt-1 text-sm text-gray-900">{selectedClass.teacherName}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Capacity</h3>
                  <p className="mt-1 text-sm text-gray-900">{selectedClass.capacity} students</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Start Date</h3>
                  <p className="mt-1 text-sm text-gray-900">{selectedClass.startDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">End Date</h3>
                  <p className="mt-1 text-sm text-gray-900">{selectedClass.endDate}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Registration Start</h3>
                  <p className="mt-1 text-sm text-gray-900">{selectedClass.startRegistrationDate}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Registration End</h3>
                  <p className="mt-1 text-sm text-gray-900">{selectedClass.endRegistrationDate}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Tuition Fee</h3>
                <p className="mt-1 text-sm text-gray-900">${selectedClass.tuitionFee}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Term</h3>
                <p className="mt-1 text-sm text-gray-900">
                  {terms.find(t => t.id === selectedClass.termId)?.season} {terms.find(t => t.id === selectedClass.termId)?.year}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => setIsInfoModalOpen(false)}
                className="w-full inline-flex justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}