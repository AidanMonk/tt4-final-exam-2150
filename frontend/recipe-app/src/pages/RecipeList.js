import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RecipeList() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5220/api/recipe') // Adjust port if necessary
      .then(res => setRecipes(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5220/api/recipe/${id}`)
      .then(() => {
        setRecipes(recipes.filter(recipe => recipe.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the recipe!', error);
      });
  };

  return (
    <div className="container">
      <h2>All Recipes</h2>
      <ul>
      {recipes.map(r => (
        <div key={r.id} className="recipe-card">
          <h3>{r.name}</h3>

          <p><strong>Ingredients:</strong></p>
          <ul className="ingredient-list">
            {r.ingredients.split(',').map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>

          <p><strong>Instructions:</strong></p>
          <ul className="step-list">
            {r.instructions.split('.').map((instruction, index) => (
              instruction.trim() && <li key={index}>{instruction.trim()}.</li>
            ))}
          </ul>

          <p><strong>Prep Time:</strong> {r.prepTime}</p>

          <button className="delete-button" onClick={() => handleDelete(r.id)}>Delete</button>
        </div>
      ))}
      </ul>
      <button onClick={() => navigate('/')}>&lt; Back</button>
    </div>
  );
}

export default RecipeList;