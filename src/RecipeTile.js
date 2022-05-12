import React from 'react'
import './style.css'

function RecipeTile({recipe}) {
  return (
    <div className='recipeTile'>
      <img className='recipeTile__image' src={recipe["recipe"]["image"]} alt='title-image' 
      onClick={() => window.open(recipe["recipe"]["url"])} />
      <p className='recipeTile__name'>{recipe["recipe"]["label"]}</p>
    </div>
  )
}

export default RecipeTile
