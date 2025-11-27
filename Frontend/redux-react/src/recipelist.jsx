import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delete_recipe } from './recipeSlice';
import { MdDelete } from "react-icons/md";
import { Show } from './show';
export const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.list);

  const handleDelete = (id) => {
    dispatch(delete_recipe(id));
  };

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet.</p>
      ) : (
        recipes.map((recipe,index) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            {recipe.description.length > 100 ? <Show text={recipe.description}/> : <p>{recipe.description}</p>}
            <p>Prep Time: {recipe.prepTime} minutes</p>
            <MdDelete onClick={() => handleDelete(recipe.id)}></MdDelete>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;