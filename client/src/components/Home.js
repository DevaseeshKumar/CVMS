import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const { state } = useLocation();
  const username = state && state.username;

  return (
    <div>
      <h3>Welcome {username && <p>{username}</p>} </h3>
      
    </div>
  );
};

export default Home;
