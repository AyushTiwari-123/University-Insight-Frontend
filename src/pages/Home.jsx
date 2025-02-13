import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to University Insights</h1>
        <p className="mt-4 text-lg text-gray-700">
          Your gateway to tracking applications, finding scholarships, and exploring opportunities.
        </p>
      </div>

      <div className="mt-8 flex space-x-4">
        <Link to="/login">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition">
            Register
          </button>
        </Link>
      </div>

      <div className="mt-10 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Features:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">📑 Application Tracking</h3>
            <p className="text-gray-600 text-sm">Monitor your university applications in real-time.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">🤖 AI Profile Matcher</h3>
            <p className="text-gray-600 text-sm">Get personalized university recommendations.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold">🎓 Scholarship Finder</h3>
            <p className="text-gray-600 text-sm">Discover scholarships tailored to your profile.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
