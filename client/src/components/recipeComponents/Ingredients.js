import React from 'react'

const Ingredients = (props) => {
    let ingredientData = props.recipeData
    let cat = props.categoryName
    let recipe = props.recipeName
    let currentRecipeIndex

    // Get the correct recipe index
    ingredientData[cat].forEach( (element, index) => {
        if (element.recipeName === recipe) {
            return currentRecipeIndex = index
        }
    })

    let recipeIngredientsArray = ingredientData[cat][currentRecipeIndex].ingredients

    const recipeIngredients = recipeIngredientsArray.map( ingredient => {
        return (
            <tr>
            <li key={ingredient.quantity}>
                <div className='ingredientItem'>
                        <td className='quantity'>{ ingredient.quantity }</td>
                        <td className='ingredientName'>{ ingredient.name }</td>
                </div>
            </li>
            </tr>
        )
    })

    return (
        <div className='ingredients'>
            <h3>Ingredients</h3>
            <ul>
                <table>
                    { recipeIngredients }
                </table>
            </ul>
        </div>
    )
}

export default Ingredients