import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_recipe } from './recipeSlice';
import { current } from '@reduxjs/toolkit';

export const RecipeForm = () => {
  const dispatch = useDispatch();

  const initialState = {
    title: '',
    description: '',
    ingredients: '',
    prepTime: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title && formData.description && formData.ingredients && formData.prepTime) {
      dispatch(add_recipe({
        id:Date.now(),
        title: formData.title,
        description: formData.description,
        ingredients: formData.ingredients.split(',').map(item => item.trim()),
        prepTime: parseInt(formData.prepTime),
      }));

      setFormData(initialState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div >
        <label >Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div >
        <label >Ingredients (comma separated):</label>
        <input
          type="text"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
      </div>

      <div >
        <label>Prep Time (minutes):</label>
        <input
          type="number"
          name="prepTime"
          value={formData.prepTime}
          onChange={handleChange}
          required
        />
      </div>

      <button 
        type="submit" >
        Add Recipe
      </button>
    </form>
  );
};

export default RecipeForm;
