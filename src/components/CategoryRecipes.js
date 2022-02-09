import React from 'react'
import { useParams, Link } from 'react-router-dom'

const CategoryRecipes = (props) => {
    const { category } = useParams()
    const currentCategory = { category }
    const cat = currentCategory.category
    const recipeArray = props.recipeData[ cat ]

    const listRecipes = recipeArray.map( (recipe) => {
        return (
            <li key={recipe.recipeName}>
                <Link to={recipe.recipeName}>
                    {recipe.recipeName}
                </Link>
            </li>
        )
    })

    return (
        <div className='categoriesContainer'>
            <div className='categoriesListContainer'>
                <ul>
                    { listRecipes }
                </ul>
            </div>
        </div>
    )
}

export default CategoryRecipes