import React from 'react'

const IngredientItem = (props) => {


    return (
        <li>
            <input className='inputQuantity' type="text" placeholder='ex: 1/2 cup'></input>
            <input className='inputIngredient' type="text" placeholder='ex: Chicken Broth'/>
            <button className="inputButtonDelete">X</button>
        </li>
    )
}

export default IngredientItem