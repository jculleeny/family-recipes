import React from 'react'

const Suggestions = (props) => {
    let suggestionData = props.recipeData
    let cat = props.categoryName
    let recipe = props.recipeName
    let currentRecipeIndex

    // Get the correct recipe index
    suggestionData[cat].forEach( (element, index) => {
        if (element.recipeName === recipe) {
            return currentRecipeIndex = index
        }
    })

    let suggestions = suggestionData[cat][currentRecipeIndex].suggestions

    return (
        <div>
            <h3>Suggestions</h3>
            { suggestions }
        </div>
    )
}

export default Suggestions