import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
           <nav>
           <ul className='unorderedList'>
            <li>
                <Link to="/react-Portfolio" style={{ textDecoration: 'none' }}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="/About" style={{ textDecoration: 'none' }}>
                    About
                </Link>
            </li>
            <li>
                <Link to="/Resume" style={{ textDecoration: 'none' }}>
                    Resume
                </Link>
            </li>
            <li>
                <Link to="/Contact" style={{ textDecoration: 'none' }}>
                    Contact Me
                </Link>
            </li>
        </ul>
     
      </nav> 
        </div>
    )
}
