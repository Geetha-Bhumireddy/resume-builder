import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Use useHistory from react-router-dom

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a login API call
    const mockUser = { name: 'User', email };
    onLogin(mockUser); // Update parent with user info
    
    // Redirect to home page after successful login
    history.push('/'); // Use history.push instead of navigate
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-4 w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-4 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
