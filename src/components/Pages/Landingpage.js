import React from 'react'
import HeroLadning from '../Body_comps/Hero_comps/HeroLadning'

function Landingpage() {

    const token = localStorage.getItem("jwt")
    const user = localStorage.getItem("username")
    return (
        <div className="body-v1">
           <HeroLadning/>
        </div>
    )
}

export default Landingpage
