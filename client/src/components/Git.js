import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Git = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users', {
          headers: {
            Authorization: 'Bearer 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',
          },
        });

        setUsers(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = searchQuery
    ? users.filter(user =>
        user.login.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : users;

  return (
    <div>
      <div>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {error && <p>Error: {error.message}</p>}
      {filteredUsers.length > 0 ? (
        <div>
          <h1>Github Users</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredUsers.map((user) => (
              <div key={user.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
                <img src={user.avatar_url} alt={`${user.login}'s avatar`} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                <h3>{user.login}</h3>
                <p>Email: {user.email || 'Not available'}</p>
                <p>Profile: {user.html_url}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No matching users found.</p>
      )}
    </div>
  );
};

export default Git;
