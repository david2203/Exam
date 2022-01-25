import React from 'react'
import HeroLadning from '../Body_comps/Hero_comps/HeroLadning'

function Landingpage() {
    // landingpage visuals (import from herolanding)
    const token = localStorage.getItem("jwt")
    const user = localStorage.getItem("username")
    return (
        <div className="body-v1">
            <HeroLadning />

            {/* <WelcomeMessage/> */}
        </div>
    )
}

export default Landingpage
