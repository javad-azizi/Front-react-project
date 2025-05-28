import { useState } from 'react';
import { Eye, Trash2, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import AdminSidebar from '../components/AdminSidebar';

interface Term {
  id: number;
  year: number;
  season: string;
}

interface Class {
  id: number;
  name: string;
  termId: number;
}

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  nationalId: string;
  phone: string;
  email: string;
  address: string;
  birthDate: string;
}

export default function Students() {
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [showStudents, setShowStudents] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  // Static data for demonstration
  const terms: Term[] = [
    { id: 1, year: 2024, season: 'Fall' },
    { id: 2, year: 2024, season: 'Spring' },
    { id: 3, year: 2023, season: 'Fall' },
  ];

  const classes: Class[] = [
    { id: 1, name: 'Introduction to Programming', termId: 1 },
    { id: 2, name: 'Calculus I', termId: 1 },
    { id: 3, name: 'English Composition', termId: 1 },
    { id: 4, name: 'Physics I', termId: 2 },
    { id: 5, name: 'History of Civilization', termId: 2 },
  ];

  const students: Student[] = [
    {
      id: 1,
      firstName: 'Lucas',
      lastName: 'Taylor',
      nationalId: '1234567890',
      phone: '555-123-4567',
      email: 'lucas.taylor@example.com',
      address: '123 Main St, City, Country',
      birthDate: '2000-05-15'
    },
    {
      id: 2,
      firstName: 'Chloe',
      lastName: 'Miller',
      nationalId: '0987654321',
      phone: '555-987-6543',
      email: 'chloe.miller@example.com',
      address: '456 Oak Ave, City, Country',
      birthDate: '2001-03-22'
    },
    {
      id: 3,
      firstName: 'Owen',
      lastName: 'Anderson',
      nationalId: '1122334455',
      phone: '555-111-2222',
      email: 'owen.anderson@example.com',
      address: '789 Pine Rd, City, Country',
      birthDate: '2000-11-30'
    },
    {
      id: 4,
      firstName: 'Sophia',
      lastName: 'Clark',
      nationalId: '6677889900',
      phone: '555-333-4444',
      email: 'sophia.clark@example.com',
      address: '321 Elm St, City, Country',
      birthDate: '2001-07-18'
    },
    {
      id: 5,
      firstName: 'Henry',
      lastName: 'Walker',
      nationalId: '5544332211',
      phone: '555-555-6666',
      email: 'henry.walker@example.com',
      address: '654 Maple Ln, City, Country',
      birthDate: '2000-09-25'
    }
  ];

  const handleTermChange = (termId: string) => {
    const term = terms.find(t => t.id === parseInt(termId));
    setSelectedTerm(term || null);
    setSelectedClass(null);
    setShowStudents(false);
  };

  const handleClassChange = (classId: string) => {
    const classItem = classes.find(c => c.id === parseInt(classId));
    setSelectedClass(classItem || null);
    setShowStudents(false);
  };

  const handleDisplay = () => {
    if (selectedTerm && selectedClass) {
      setShowStudents(true);
    }
  };

  const handleViewDetails = (student: Student) => {
    setSelectedStudent(student);
    setIsDetailsModalOpen(true);
  };

  const filteredClasses = selectedTerm
    ? classes.filter(c => c.termId === selectedTerm.id)
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <AdminSidebar />
        
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Students</h1>

          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Term</label>
                <select
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={selectedTerm?.id || ''}
                  onChange={(e) => handleTermChange(e.target.value)}
                >
                  <option value="">Select Term</option>
                  {terms.map(term => (
                    <option key={term.id} value={term.id}>
                      {term.season} {term.year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                <select
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={selectedClass?.id || ''}
                  onChange={(e) => handleClassChange(e.target.value)}
                  disabled={!selectedTerm}
                >
                  <option value="">Select Class</option>
                  {filteredClasses.map(classItem => (
                    <option key={classItem.id} value={classItem.id}>
                      {classItem.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleDisplay}
                  disabled={!selectedTerm || !selectedClass}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Display
                </button>
              </div>
            </div>
          </div>

          {showStudents && (
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      National ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {student.firstName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.lastName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.nationalId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.phone}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                        <button
                          onClick={() => handleViewDetails(student)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <Eye className="w-5 h-5" />
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
          )}

          {/* Student Details Modal */}
          {isDetailsModalOpen && selectedStudent && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-2xl w-full p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Student Details</h2>
                  <button onClick={() => setIsDetailsModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">First Name</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedStudent.firstName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Last Name</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedStudent.lastName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">National ID</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedStudent.nationalId}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone Number</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedStudent.phone}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedStudent.email}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Birth Date</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedStudent.birthDate}</p>
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-sm font-medium text-gray-500">Address</h3>
                    <p className="mt-1 text-sm text-gray-900">{selectedStudent.address}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setIsDetailsModalOpen(false)}
                    className="w-full inline-flex justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}