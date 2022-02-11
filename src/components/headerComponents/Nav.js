import React from 'react'
import { Link } from 'react-router-dom'
import { GrInstagram, GrGithub, GrMail } from 'react-icons/gr'

const Nav = () => {

    return (
        <nav className='navContainer'>
            <ul>
                <li>
                    <h4><Link to="/about">About</Link></h4>
                </li>
                <li className='icon'>
                    <h4><a href="https://instagram.com/jculleeny" target="_blank"><GrInstagram/></a></h4>
                </li>
                <li className='icon'>
                    <h4><a href="mailto:jculleeny@gmail.com"><GrMail/></a></h4>
                </li>
                <li className='icon'>
                    <h4><a href="https://github.com/jculleeny" target="_blank"><GrGithub/></a></h4>
                </li>
            </ul>
        </nav>
    )
}

export default Nav