import React from 'react'

function JobCard({brandName, weeklyHrs, locationCountry}) {
    
    return (
        <div>
            {brandName}
            {weeklyHrs}
            {locationCountry}
        </div>
    )
}

export default JobCard
