import { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6">
      <h2>Welcome, {user?.name}</h2>
      <Link to="/applications">View Applications</Link>
      <Link to="/scholarships">View Scholarships</Link>
    </div>
  );
};

export default Dashboard;
