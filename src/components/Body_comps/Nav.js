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
        }else if(e.target.id === "LinkToJobs") {
            setToActive("activeJobs")
        }else if(e.target.id === "LinkToApplications") {
            setToActive("activeApplications")
        }
        
        
    }
    return (
        <>

        {token ? 
            <div className="Nav-v1">
            <div className='nav-left col-4'> 
            <Link to="/"  onClick={setActive} id="LinkToLanding" className={active === "activeLanding" ? "active": ""}> Home </Link>
            <Link to="/Jobs" onClick={setActive} id="LinkToJobs" className={active === "activeJobs"  ? "active": ""} > Jobs </Link>
            <Link to="/myapplications" onClick={setActive} id="LinkToApplications" className={active === "activeApplications"  ? "active": ""} > My Applications </Link>
            </div>

            <h3 className="logo col-4"> W | M | S</h3>

            <div className="nav-right col-4">
            <Link to="/Logout"  > Sign out </Link>
            
            </div>
            </div>
        :

            <div className="Nav-v1">
            <div className='nav-left col-4'> 
            <Link  to="/" onClick={setActive} id="LinkToLanding" className={active === "activeLanding"  ? "active": ""} > Home </Link>
            
            </div>
            <h3 className="logo col-4"> W | M | S </h3>
            <div className="nav-right col-4">
            <Link to="/Login" onClick={setActive} id="LinkToLogin" className={active === "activeLogin" ? "active": ""} > Login </Link>
            <Link to="/Register" onClick={setActive} id="LinkToRegister" className={active === "activeReg" ? "active": ""} > Sign Up</Link>
            </div>

            </div>
            }
            
            
            
        
        </>
    )
}

export default Nav
