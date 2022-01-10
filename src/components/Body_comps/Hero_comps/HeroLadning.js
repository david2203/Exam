import React from 'react'
import hero from "../bodyImages/hero.png"
import {Link} from "react-router-dom"

function HeroLadning() {
    const token = localStorage.getItem("jwt")
    const user = localStorage.getItem("username")
    return (
        <section className="hero-landing">
            {token ? <h2 className="hero-h2"> Welcome back <strong>{user}</strong>! </h2>
            : 
            <h2 className="hero-h2"> Welcome to Work Made Simple</h2>}
            
           {token ? <> <p className="hero-p"> Follow this Link to se avaliable jobs & manage your applications <Link to="/jobs">Click me!</Link></p>

            
           </>
           :
           <p className="hero-p"> Login to se avaliable jobs & manage your applications</p>
           } 
            <img className="hero-img" src={hero}></img>
        </section>
    )
}

export default HeroLadning
