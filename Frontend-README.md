# University Insight - Frontend

## Live Demo
🔗 [University Insight Frontend](https://university-insight-ayu.netlify.app)

## Repository
🔗 [GitHub Repository](https://github.com/AyushTiwari-123/University-Insight-Frontend)

## Project Overview
University Insight is a full-stack EdTech web application that helps students track scholarships and university applications efficiently. This repository contains the frontend, built with React and styled using Tailwind CSS.

## Tech Stack
- **React.js** (Frontend framework)
- **Vite** (Development environment)
- **Tailwind CSS** (Styling framework)
- **React Router** (Navigation)
- **Axios** (API requests)
- **Netlify** (Deployment)

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- npm or yarn

### Steps to Run Locally

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/AyushTiwari-123/University-Insight-Frontend.git
   cd University-Insight-Frontend
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root and add the backend URL:
   ```sh
   VITE_API_URL=https://university-insight-backend.onrender.com
   ```

4. **Start the Development Server:**
   ```sh
   npm run dev
   ```
   This will start the frontend on `http://localhost:5173/`.

## Deployment

### Deploying to Netlify
1. **Push your code to GitHub.**
2. **Login to Netlify** and select "New site from Git".
3. **Connect to your GitHub repository.**
4. **Set the build command:** `npm run build`
5. **Set publish directory:** `dist`
6. **Deploy the site!**

### Environment Variables in Netlify
Go to "Site Settings" → "Environment Variables" and add:
```sh
VITE_API_URL=https://university-insight-backend.onrender.com
```

## Dependencies
- **react** - UI framework
- **react-router-dom** - Routing
- **axios** - API calls
- **tailwindcss** - Styling

## Future Improvements
- Implement user profile management.
- Enhance UI/UX with animations.
- Improve authentication security.

## License
This project is licensed under the MIT License.
