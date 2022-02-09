import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Nav from './Nav'

const Header = () => {


    return(
        <div className='header'>
            <div className='headerContainer'>
                <h1>Header Component</h1>
                <Nav />
            </div>

        </div>
    )
}

export default Header