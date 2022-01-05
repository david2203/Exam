import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
function Nav() {
    const [active, setToActive] = useState("")
    const token = localStorage.getItem("jwt")
    function setActive(e) {
        if(e.target.id === "LinkToLanding") {
            setToActive("activeLanding")
        } else if(e.target.id === "LinkToLogin") {
            setToActive("activeLogin")
        } else if(e.target.id === "LinkToRegister") {
            setToActive("activeReg")
        }
    }
    return (
        <>

        {token ? 
            <div className="Nav-v1">
            <div className='nav-left col-5'> 
            <Link to="/Landingpage"  onClick={setActive} id="LinkToLanding" className={active === "activeLanding" ? "active": ""}> Home </Link>
            </div>

            <h3 className="logo col-2"> Work Made Simple</h3>

            <div className="nav-right col-5">
            <Link to="/Logout"  > Sign out </Link>
            
            </div>
            </div>
        :

            <div className="Nav-v1">
            <div className='nav-left col-5'> 
            <Link  to="/Landingpage" onClick={setActive} id="LinkToLanding" className={active === "activeLanding"  ? "active": ""} > Home </Link>
            </div>
            <h3 className="logo col-2"> W | M | S </h3>
            <div className="nav-right col-5">
            <Link to="/Login" onClick={setActive} id="LinkToLogin" className={active === "activeLogin" ? "active": ""} > Login </Link>
            <Link to="/Register" onClick={setActive} id="LinkToRegister" className={active === "activeReg" ? "active": ""} > Sign Up</Link>
            </div>

            </div>
            }
            
            
            
        
        </>
    )
}

export default Nav
