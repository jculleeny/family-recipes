import React from 'react'
import { useParams } from 'react-router-dom'

const Nav = () => {
    let breadCrumbs = useParams();
    // console.log(breadCrumbs)

    return (
        <div>
            Nav Component
            
        </div>
    )
}

export default Nav