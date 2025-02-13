import { useEffect, useState, useContext } from "react";
import { fetchApplications } from "../api/api";
import { AuthContext } from "../AuthContext";

const Applications = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const loadApplications = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await fetchApplications(token);
        setApplications(data);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      }
    };

    loadApplications();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">My Applications</h2>
      {applications.length > 0 ? (
        <div className="mt-4 space-y-4">
          {applications.map((app) => (
            <div key={app._id} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{app.courseName}</h3>
              <p className="text-sm text-gray-600">Status: {app.status}</p>
              <p className="text-sm">Applied on: {new Date(app.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-500">No applications found.</p>
      )}
    </div>
  );
};

export default Applications;
