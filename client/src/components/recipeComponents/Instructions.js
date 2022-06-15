import React from 'react'

const Instructions = (props) => {
    let instructionData = props.recipeData
    let cat = props.categoryName
    let recipe = props.recipeName
    let currentRecipeIndex

    // Get the correct recipe index
    instructionData[cat].forEach( (element, index) => {
        if (element.recipeName === recipe) {
            return currentRecipeIndex = index
        }
    })

    let recipeInstructionArray = instructionData[cat][currentRecipeIndex].steps

    let instructions = recipeInstructionArray.map( steps => {
        return (
            <li key={steps}>{ steps }</li>
        )
    })


    return (
        <div>
            <h3>Instructions</h3>
            <ol>
                { instructions }
            </ol>
        </div>
    )
}

export default Instructions