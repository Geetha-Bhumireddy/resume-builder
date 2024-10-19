import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaFileAlt } from 'react-icons/fa'; // Import the resume icon

const Header = ({ isAuthenticated, onLogout }) => {
  return (
    <header className="bg-blue-600 text-white p-5 flex justify-between items-center text-bold">
      {/* Container for the logo and text */}
      <div className="flex items-center">
        <FaFileAlt className="text-3xl mr-2" /> {/* Resume builder icon */}
        <Link to="/" className="text-4xl text-bold">Resume Builder</Link>
      </div>
      
      <div className="flex items-center">
        {isAuthenticated ? (
          <>
            <Link to="/drafts" className="mr-4">My Drafts</Link>
            <Link to="/login">
              <button onClick={onLogout} className="bg-red-500 px-4 py-2 rounded">Logout</button>
            </Link>
          </>
        ) : (
          <Link to="/login" className="bg-green-500 px-4 py-2 rounded">Login</Link>
        )}
        <FaUser className="inline ml-2" />
      </div>
    </header>
  );
};

export default Header;
