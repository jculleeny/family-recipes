import React from 'react'

// Components
import IngredientItem from './IngredientItem'
import InstructionsItem from './InstructionsItem'

const SubmitRecipe = () => {
    // Category
    // Recipe name
    // Ingredients
    // Steps
    // Background
    // Suggestions
    // Difficulty
    // Servings

    return (
        <div>
            SubmitRecipe Component
            <div className='formContainer'>
                <form>
                    <h3>Recipe Name</h3>
                    <input type="text" placeholder='Recipe name'/>
                    <h3>Ingredients</h3>
                    <ul>
                        <IngredientItem />
                    </ul>
                    <h3>Instructions</h3>
                    <ul>
                        <InstructionsItem />
                    </ul>
                    <h3>Background</h3>
                    <textarea/>
                    <h3>Servings</h3>
                    <input type="number" />
                </form>
            </div>
        </div>
    )
}

export default SubmitRecipe