import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
function Nav() {

    const token = localStorage.getItem("jwt")

    return (
        <>

        {token ? 
            <div className="Nav-v1">
            <div className='nav-left'> 
            <Link to="/Landingpage"> Home </Link>
            </div>

            <div className="nav-right">
            <Link to="/Logout" > Sign out </Link>
            
            </div>
            </div>
        :

            <div className="Nav-v1">
            <div className='nav-left'> 
            <Link to="/Landingpage"> Home </Link>
            </div>

            <div className="nav-right">
            <Link to="/Login" > Login </Link>
            <Link to="/Register" > Sign Up</Link>
            </div>

            </div>
            }
            
            
            
        
        </>
    )
}

export default Nav
