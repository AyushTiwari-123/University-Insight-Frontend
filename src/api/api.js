import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);
export const fetchApplications = (token) => API.get('/applications', { headers: { Authorization: `Bearer ${token}` } });
export const fetchScholarships = () => API.get('/scholarships');
