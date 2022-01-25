import React, { useState, useEffect } from 'react';
import FilterJobs from './FilterJobs';
import HeroJobs from '../Body_comps/Hero_comps/HeroJobs';


function Jobs() {
    // actual job page that imports visuals from HeroJobs and Filterjobs
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    useEffect(() => {
        topFunction()
    }, [])



    return (
        <div className="body-v1">
            <HeroJobs />
            <FilterJobs />

        </div>
    )
}

export default Jobs
