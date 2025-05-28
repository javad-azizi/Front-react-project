import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
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

interface StudentGrade {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
}

export default function Grades() {
  const [selectedTerm, setSelectedTerm] = useState<number | ''>('');
  const [selectedClass, setSelectedClass] = useState<number | ''>('');
  const [showGrades, setShowGrades] = useState(false);

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

  const studentGrades: StudentGrade[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', grade: 18.5 },
    { id: 2, firstName: 'Jane', lastName: 'Smith', grade: 19.0 },
    { id: 3, firstName: 'Michael', lastName: 'Johnson', grade: 17.5 },
    { id: 4, firstName: 'Emily', lastName: 'Brown', grade: 20.0 },
    { id: 5, firstName: 'David', lastName: 'Wilson', grade: 16.5 },
  ];

  const filteredClasses = classes.filter(c => c.termId === selectedTerm);

  const handleDisplay = () => {
    if (selectedTerm && selectedClass) {
      setShowGrades(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <AdminSidebar />
        
        <div className="flex-1 p-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Grades</h1>
            </div>

            <div className="flex gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Term
                </label>
                <select
                  className="mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={selectedTerm}
                  onChange={(e) => {
                    setSelectedTerm(Number(e.target.value) || '');
                    setSelectedClass('');
                    setShowGrades(false);
                  }}
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Class
                </label>
                <select
                  className="mt-1 block w-64 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={selectedClass}
                  onChange={(e) => {
                    setSelectedClass(Number(e.target.value) || '');
                    setShowGrades(false);
                  }}
                  disabled={!selectedTerm}
                >
                  <option value="">Select Class</option>
                  {filteredClasses.map(class_ => (
                    <option key={class_.id} value={class_.id}>
                      {class_.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleDisplay}
                disabled={!selectedTerm || !selectedClass}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Display
              </button>
            </div>
          </div>

          {showGrades && (
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
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {studentGrades.map((student) => (
                    <tr key={student.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {student.firstName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.lastName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {student.grade.toFixed(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}