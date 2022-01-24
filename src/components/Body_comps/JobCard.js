import React from 'react'
import { useNavigate, Link} from "react-router-dom";


function JobCard({brandName, weeklyHrs, jobId, locationCountry, openings, jobDesc, jobDescSum, jobProfiles, workShift, startDate}) {
    const brandUpper = brandName.charAt(0).toUpperCase() + brandName.slice(1)
    const jobDescShort = jobDesc.substring(0,500)
    const navigate = useNavigate()
    function showWholeJobCard() {
        navigate(`/SpecificJob?id=${jobId}`)
    }

    
    return (
        <div className='job-card-container-v1' >

            <div className="jobcard-left col-5">
            <p>  <strong> Job Profile: </strong> {jobProfiles}</p> 

            <p><strong> Company: </strong> <Link to={`/aboutBrand?brand=${brandUpper}`}>{brandUpper}  </Link> </p>

            <p><strong> Location: </strong> {locationCountry}</p>

            <p><strong>Currently available openings: </strong> {openings}</p>
            </div>
            <div className='jobcard-right col-7'>

            
            <p><strong> Job description: </strong> </p>
        {jobDescSum ?
         <div dangerouslySetInnerHTML={{__html: jobDescSum + "..." +  "<button class=button-81-orange > Click to read more </button>"}} onClick={showWholeJobCard}/>
         :
        <div dangerouslySetInnerHTML={{__html: jobDescShort + "..." + "<button class=button-81-orange > Click to read more </button>"}} onClick={showWholeJobCard}/>
            
        }
        </div>
        <br/>
            
            
            
            

        </div>
    )
}

export default JobCard
