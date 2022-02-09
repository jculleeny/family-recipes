import React from 'react'

const Background = (props) => {
    let backgroundData = props.recipeData
    let cat = props.categoryName
    let recipe = props.recipeName
    let currentRecipeIndex

    // Get the correct recipe index
    backgroundData[cat].forEach( (element, index) => {
        if (element.recipeName === recipe) {
            return currentRecipeIndex = index
        }
    })

    let background = backgroundData[cat][currentRecipeIndex].background
    
    return (
        <div>
            <h3>Background</h3>
            { background }
        </div>
    )
}

export default Background