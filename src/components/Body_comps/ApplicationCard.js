import React, {useState} from 'react'

function ApplicationCard({jobId,jobTitle,jobLocation, jobWorkShift, jobBrand, applicationEmail, startDate}) {

    const [openModal, setOpenModal] = useState(false)
    function revokeApplication() {
        
    }
    function reasureRevoke() {
        setOpenModal(true)
    }
    return (
        <div className='application-card-container-v1' >

            <div className="jobcard-left col-5">
            <p>  <strong> Job Title: </strong> {jobTitle}</p>

            <p><strong> Company: </strong> {jobBrand}</p>

            <p><strong> Location: </strong> {jobLocation}</p>

            <p><strong>Work Shift: </strong> {jobWorkShift}</p>
            </div>
            <div className='jobcard-right col-7'>

            
            <p><strong> You applied with: </strong> {applicationEmail}</p>
            <p><strong> Your prefered start date: </strong> {startDate}</p>
            <button onClick={reasureRevoke}> Revoke Application </button>
        </div>
        <br/>
            
            
            
            

        </div>
    )
}

export default ApplicationCard
