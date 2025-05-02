import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeList from './pages/RecipeList';
import CreateRecipe from './pages/CreateRecipe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/create" element={<CreateRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;


