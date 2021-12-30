import React from 'react'

function JobCard({brandName, weeklyHrs, locationCountry, openings, jobDesc, jobDescSum, jobProfiles, workShift, startDate}) {
    const brandUpper = brandName.charAt(0).toUpperCase() + brandName.slice(1)
    const jobDescShort = jobDesc.substring(0,500)
    return (
        <div className='job-card-container-v1'>
            <p><strong>{brandUpper}</strong></p>
            
            <div dangerouslySetInnerHTML={{__html: jobDescShort + "<span className=blueText style= color:blue>...Click to read more </span>"}} />
           
            {weeklyHrs}
            {locationCountry}
            {openings}

        </div>
    )
}

export default JobCard
