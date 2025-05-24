import Navbar from '../components/Navbar';

export default function MainPanel() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
            <h1 className="text-2xl font-bold mb-4">Main Panel</h1>
            <p>Welcome to the main panel. This area is accessible to both students and teachers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}