import React from 'react'
import hero from "../bodyImages/work.png"
function HeroJobs() {
    const token = localStorage.getItem("jwt")
    const user = localStorage.getItem("username")
    return (

        // hero visuals for job page

        <section className="hero-jobs">
            <div className="hero-cont">
                {token ? <h2 className="hero-h2"> Hello, <strong>{user}</strong>! </h2>
                    :
                    <h2 className="hero-h2"> Welcome to the searchengine for Jobs avaliable in Workday!</h2>}

                {token ? <p className="hero-p"> This is the simplest way to get a job! Select prefered filters below and send an application if you find a job that fits you!</p>
                    :
                    <p className="hero-p"> Login to se avaliable jobs & manage your applications</p>
                }
            </div>
            <img className="hero-img" src={hero}></img>
        </section>

    )
}

export default HeroJobs
