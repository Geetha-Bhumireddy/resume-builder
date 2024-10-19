import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import DraftList from './components/DraftList';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [user, setUser] = useState(null);  // Simulated user login state

  const handleLogin = (userData) => {
    setUser(userData); // Simulate login by setting user data
  };

  const handleLogout = () => {
    setUser(null); // Simulate logout
  };

  const saveToDB = async (formData) => {
    // Function to handle saving resume to the backend
    const response = await fetch('/api/resumes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to save resume');
    }

    return await response.json(); // Return the saved resume data or confirmation
  };

  return (
    <Router>
      <Header isAuthenticated={!!user} onLogout={handleLogout} />
      <div className="container mx-auto p-6">
        <Switch>
          <Route path="/" exact>
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6"> {/* Responsive flex container */}
              <div className="w-full lg:w-1/2 mb-4"> {/* Full width on small devices, 1/2 on large */}
                <ResumeForm setResumeData={setResumeData} saveToDB={saveToDB} user={user} />
              </div>
              <div className="w-full lg:w-1/2 mb-4"> {/* Full width on small devices, 1/2 on large */}
                <ResumePreview resumeData={resumeData} />
              </div>
            </div>
          </Route>
          <Route path="/drafts">
            <DraftList setResumeData={setResumeData} />
          </Route>
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
