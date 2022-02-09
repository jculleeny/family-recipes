import React from 'react'
import { Link } from 'react-router-dom'

const Categories = (props) => {
    const categories = props.categories
    const listCategories = categories.map( (cat) => {
        return (
        <li key={cat}>
            <Link to={ cat }>
                {cat}
            </Link>
        </li>
        )
    })

    return (
        <div className='categoriesContainer'>
            <div className='categoriesListContainer'>
                <ul>
                    { listCategories }
                </ul>
            </div>
        </div>
    )
}

export default Categories