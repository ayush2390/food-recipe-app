
import { useState } from 'react';
import './App.css';
import Axios from "axios";
import RecipeTile from './RecipeTile';

function App() {
  const YOUR_APP_ID = 'f12ec901'
  const YOUR_APP_KEY = '6b81e697888b9b71d4511a6364bd05fa'
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState([])
  const [healthLabels, setHealthLabels] = useState('vegetarian')
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`
  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(recipes);
  };

  
  const onSubmit = (e) =>{
    e.preventDefault();
    getRecipeInfo();
  }
  let recipesValue;
  if(recipes.length>0){
    recipesValue = true;
  }else{
    recipesValue=false
  }

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}><u>Food Recipe Hub</u>🥗</h1>
      <form className='app__searchForm' onSubmit={onSubmit}>
        <input type='text' placeholder='Type the Ingredient' autoComplete='Off' className='app__input' value={query} onChange={(e) =>setQuery(e.target.value)}/>
        <select className='app__healthLabels' onClick={(e) => setHealthLabels(e.target.value)}>
          <option value='vegan'>Vegan</option>
          <option value='vegetarian'>vegetarian</option>
          <option value='low-sugar'>low-sugar</option>
          <option value='dairy-free'>dairy-free</option>
          <option value='immuno-supportive'>immuno-supportive</option>
          <option value='wheat-free'>wheat-free</option>
        </select>
        <input type='submit' value='Get Recipe' className='app__submit' />
      </form>
      <div className='app__recipes'>
        {recipes.map((recipe) =>{
          return <RecipeTile recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;
