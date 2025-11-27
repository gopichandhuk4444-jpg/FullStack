import { useState } from 'react';
import { useGetRecipeQuery, useGetRecipesQuery } from "./recipeApi";
// import '../App.css'

export const DisplayRecipes = () => {
  const { data: recipes, isLoading, error } = useGetRecipesQuery();
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const handleBack = () => {
    setSelectedId(null); 
  };

  if (isLoading) return <p>Loading ....</p>;
  if (error) return <p>Error: {error.message || 'Failed to load recipes'}</p>;

  return (
    <div>
      {selectedId ? (
        <DisplayRecipe id={selectedId} onBack={handleBack} />
      ) : (
        <div className='recipe-list'>
          {recipes?.recipes?.map((recipe) => (
            <div key={recipe.id } className='recipe-card' onClick={() => handleClick(recipe.id)}>
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                className='recipe-image' 
                style={{height:'150px',width:'150px'}}
              />
              <h3>{recipe.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const DisplayRecipe = ({ id, onBack }) => {
  const { data: recipe, isLoading, error } = useGetRecipeQuery({ id });

  if (isLoading) return <p>Loading ....</p>;
  if (error) return <p>Error: {error.message || 'Failed to load recipe'}</p>;

  return (
    <div className='recipe-details'>
      <button onClick={onBack}>Back to Recipes</button>  
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} style={{height:'200px',width:'200px'}}/>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ol>
        {recipe.instructions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};


