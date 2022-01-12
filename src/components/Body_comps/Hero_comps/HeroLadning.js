import React from 'react'
import hero from "../bodyImages/hero.png"
import {Link} from "react-router-dom"

function HeroLadning() {
    const token = localStorage.getItem("jwt")
    const user = localStorage.getItem("username")
    const firstLogin = localStorage.getItem("firstLogin")
    return (
        <section className="hero-landing">
            {token ? firstLogin ? <h2 className="hero-h2"> Welcome to Work Made Simple <strong>{user}</strong>! </h2> : <h2 className="hero-h2"> Welcome back <strong>{user}</strong>! </h2>
            : 
            <h2 className="hero-h2"> Welcome to Work Made Simple</h2>}
            
           {token ? firstLogin ?  <> <p className="hero-p"> Follow this Link to se avaliable jobs  <Link to="/jobs">Click me!</Link></p> 

            
           </> : <><p className="hero-p"> Take a look at your applications: <Link to="/myApplications">Click me!</Link></p></>
           :
           <p className="hero-p"> Login to se avaliable jobs & manage your applications</p>
           } 
            <img className="hero-img" src={hero}></img>
        </section>
    )
}

export default HeroLadning
