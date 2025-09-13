import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/Userlist';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-4">  
      {loading && <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && <UserList users={users} />}
    </div>
  );
}

export default App;
