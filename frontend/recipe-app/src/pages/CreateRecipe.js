import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateRecipe() {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    prepTime: ''
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5220/api/recipe', recipe)
      .then(() => alert('Recipe created!'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <h2>Create New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Recipe Name"
          value={recipe.name}
          onChange={handleChange}
          required
        />
        <b>Ingredients</b>
        <textarea
          name="ingredients"
          placeholder="potatoes, garlic, celeri"
          value={recipe.ingredients}
          onChange={handleChange}
          required
        />
        <b>Instructions</b>
        <textarea
          name="instructions"
          placeholder="boil potatoes. peel garlic. cut celeri."
          value={recipe.instructions}
          onChange={handleChange}
          required
        />
        <b>Prep Time</b>
        <input
          name="prepTime"
          placeholder="HH:MM:SS"
          value={recipe.prepTime}
          onChange={handleChange}
          required
        />
        <button type="submit">Create Recipe</button>
      </form>
      <button onClick={() => navigate('/')}>&lt; Back</button>
    </div>
  );
}

export default CreateRecipe;