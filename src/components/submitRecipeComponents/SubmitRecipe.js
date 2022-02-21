import React, { useState } from 'react'

// Components
import IngredientItem from './IngredientItem'
import InstructionsItem from './InstructionsItem'



const SubmitRecipe = () => {
    const [ ingredientField, setIngredientField ] = useState([ ])
    const [ instructionField, setInstructionField ] = useState([ ])

    const addInputIngredient = (e) => {
        e.preventDefault()
        setIngredientField(ingredientField.concat(<IngredientItem key={ingredientField.length} />))
    }

    const addInputInstruction = (e) => {
        e.preventDefault()
        setInstructionField(instructionField.concat(<InstructionsItem key={instructionField.length} />))
    }

    return (
        <div className='submit'>
            <div className='formContainer'>
                <form>
                    <fieldset>
                        <legend><label for="recipe-name">Recipe Name</label></legend>

                        <input type="text" placeholder='ex: Tomato Soup' name="recipe-name" id="recipe-name"/>
                    </fieldset>


                    <fieldset>
                        <legend>Ingredients</legend>

                        <ul>
                            <IngredientItem />
                            { ingredientField }
                        </ul>
                        <button onClick={ addInputIngredient }>+ add</button>
                    </fieldset>

                    <fieldset>
                        <legend>Instructions</legend>

                        <ul>
                            <InstructionsItem />
                            { instructionField }
                        </ul>
                        <button onClick={ addInputInstruction }>+ add</button>
                    </fieldset>

                    <fieldset>
                        <legend><label for="background">Background</label></legend>

                        <textarea name="background" id="background" placeholder="Give the recipe's history and where or who it comes from..."/>
                    </fieldset>

                    <fieldset>
                        <legend><label for="suggestions">Suggestions</label></legend>

                        <textarea name="suggestions" id="suggestions" placeholder="Mention any alternatives that can easily change the recipe..."/>
                    </fieldset>

                    <fieldset>
                        <legend>Details</legend>

                        <label for="servings">Servings</label>
                        <select name="servings" id="servings">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                        </select>

                        <label for="difficulty">Difficulty</label>
                        <select name="difficulty" id="difficulty">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>


                    </fieldset>

                    <div></div>
                    <input type="submit" />

                </form>
            </div>
        </div>
    )
}

export default SubmitRecipe