import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>React Recipe App</h1>
      <button onClick={() => navigate('/recipes')}>View Recipes</button>
      <br/>
      <button onClick={() => navigate('/create')}>Create New Recipe</button>
    </div>
  );
}

export default Home;