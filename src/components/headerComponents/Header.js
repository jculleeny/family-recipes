import React from 'react'

// Components
import Nav from './Nav'
import Breadcrumbs from './Breadcrumbs'
import TitleLogo from './TitleLogo'

const Header = () => {


    return(
        <header className='header'>
            <div className='headerContainer'>
                <TitleLogo />
                <Nav />
            </div>
            <div className='breadcrumbsWrapper'>
                <Breadcrumbs />
            </div>
        </header>
    )
}

export default Header