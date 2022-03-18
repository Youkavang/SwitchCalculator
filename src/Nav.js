import React from "react";
import './Nav.css'
import ff7logo from './images/ff7logo.gif';

function Nav () {
    return (
        <div className="navbar">
           <img className='image'
                src={ff7logo} alt='logo'></img>
        </div>
    )
}

export default Nav;