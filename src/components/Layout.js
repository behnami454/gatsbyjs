import React from 'react'
import Footerr from './Footerr'
import Navbar from './Navbar'
import '../styles/global.css'

const Layout = ({ childern }) => {
    return(
        <div>
            <Navbar />
            <div className="content">
             { childern }
            </div>
            <Footerr />
        </div>
    )
}
export default Layout;