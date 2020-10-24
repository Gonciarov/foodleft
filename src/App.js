import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const[query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&from=0&to=20&app_key=${APP_KEY}`, 
    {
  mode: 'no-cors'
});
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    
    <div className ="App">
      <div className="welcome">
      What's in your fridge?
      </div>
      <div className="welcome2">
      (Example: "milk butter egg")
      </div>
      <form onSubmit={getSearch} className="search-form">
      <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button className="search-button" type="submit">SEARCH</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe key={recipe.recipe.label}
        title={recipe.recipe.label} 
        ingredients={recipe.recipe.ingredients}
        image={recipe.recipe.image}/>
      ))}
      </div>
      </div>
  );
};
export default App;
