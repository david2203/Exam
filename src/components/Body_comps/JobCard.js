import React from 'react'
import {Navigate, useNavigate} from "react-router-dom";

function JobCard({brandName, weeklyHrs, jobId, locationCountry, openings, jobDesc, jobDescSum, jobProfiles, workShift, startDate}) {
    const brandUpper = brandName.charAt(0).toUpperCase() + brandName.slice(1)
    const jobDescShort = jobDesc.substring(0,500)
    const navigate = useNavigate()
    function showWholeJobCard() {
        navigate(`/SpecificJob?id=${jobId}`)
  
    }

    
    return (
        <div className='job-card-container-v1' onClick={showWholeJobCard}>

            <div className="jobcard-left col-5">
            <p>  <strong> Job Profile: </strong> {jobProfiles}</p>

            <p><strong> Company: </strong> {brandUpper}</p>

            <p><strong> Location: </strong> {locationCountry}</p>

            <p><strong>Currently available openings: </strong> {openings}</p>
            </div>
            <div className='jobcard-right col-7'>

            
            <p><strong> Job description: </strong> </p>
        {jobDescSum ?
         <div dangerouslySetInnerHTML={{__html: jobDescSum + "<span style= color:blue>...Click to read more </span>"}} />
         :
        <div dangerouslySetInnerHTML={{__html: jobDescShort + "<span style= color:blue>...Click to read more </span>"}} />
            
        }
        </div>
        <br/>
            
            
            
            

        </div>
    )
}

export default JobCard
