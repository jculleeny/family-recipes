import React from 'react'
import { useParams } from 'react-router-dom'

// Components
import Ingredients from './Ingredients'
import Instructions from './Instructions'
import Background from './Background'
import Suggestions from './Suggestions'

// API Data
import recipes from '../../recipes.json'

// Testing Images
import testImage from '../../noodles-test-img.jpg'

const Recipe = () => {
    const { category, recipe } = useParams()
    const cat = { category }
    const rec = { recipe }
    let currentRecipeIndex

    console.log(recipes[cat.category])
    console.log(rec.recipe)

    // Get the correct recipe index
    recipes[cat.category].forEach( (element, index) => {
        if (element.recipeName === rec.recipe) {
            return currentRecipeIndex = index
        }
    })

    let detailsData = recipes[cat.category][currentRecipeIndex]

    return (
        <div className='recipe'>
            <div className='recipeContainer'>
                <div className='recipeHeaderContainer'>
                    <div className='recipeHeaderInfo'>
                        <h2>{ rec.recipe }</h2>
                        <h4>Servings: <span>{ detailsData.servings }</span></h4>
                        <h4>Difficulty: <span>{ detailsData.difficulty }</span></h4>
                        <h4>Category: <span>{ detailsData.category }</span></h4>
                    </div>
                    <div className='recipeImg'>
                        <img src={ testImage } alt='placeholder' />
                    </div>
                </div>
                <Ingredients categoryName={ cat.category } recipeName={ rec.recipe } recipeData={ recipes } />
                <Instructions categoryName={ cat.category } recipeName={ rec.recipe } recipeData={ recipes } />
                <Background categoryName={ cat.category } recipeName={ rec.recipe } recipeData={ recipes } />
                <Suggestions categoryName={ cat.category } recipeName={ rec.recipe } recipeData={ recipes } />
            </div>
        </div>

    )
}

export default Recipe