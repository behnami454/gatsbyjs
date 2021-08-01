import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
    return(
        <nav>
            <div className="links">
                <div className="topnav">
                 <Link to = "/"><a class="active" href="#home">Home</a></Link>
                 <Link to = "/about"><a href="#news">About</a></Link>
                 <Link to = "/contact"><a href="#contact">Contact</a></Link>
                 <Link to = "/stuff"><a href="#about">Stuff</a></Link>
                </div>
            </div>
        </nav>
    )
}