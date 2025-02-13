import { useEffect, useState } from "react";
import { fetchScholarships } from "../api/api";

const Scholarships = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    const loadScholarships = async () => {
      try {
        const { data } = await fetchScholarships();
        setScholarships(data);
      } catch (error) {
        console.error("Failed to fetch scholarships:", error);
      }
    };

    loadScholarships();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Available Scholarships</h2>
      {scholarships.length > 0 ? (
        <div className="mt-4 space-y-4">
          {scholarships.map((scholarship) => (
            <div key={scholarship._id} className="p-4 border rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{scholarship.name}</h3>
              <p className="text-sm text-gray-600">{scholarship.description}</p>
              <p className="text-sm font-bold">Amount: ${scholarship.amount}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-500">No scholarships available.</p>
      )}
    </div>
  );
};

export default Scholarships;
