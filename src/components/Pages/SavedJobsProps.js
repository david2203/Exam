
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import server from "../Config_Env/Config"
import { useNavigate } from "react-router-dom";

// saved jobs visuals
function SavedJobsProps({ id, existing }) {
    const userId = localStorage.getItem("userId")
    const navigate = useNavigate()

    //navigate function 
    function showWholeJobCard() {
        navigate(`/SpecificJob?id=${id}`)
    }
    //getting data ready for later use
    const useGetSaved = () => {
        const [jobArray, setJobArray] = useState([])
        const [loading, setLoading] = useState(true)

        const getSavedJob = async () => {
            try {
                const jobs = await axios.get(`${server}api/jobs/${id}`)
                setJobArray(jobs.data.data.attributes)

            }
            catch (err) {
                console.log(err)
            }
            setLoading(false)
        }

        useEffect(() => {
            getSavedJob()
        }, [])

        return (
            { loading, jobArray }
        )

    }

    const { loading, jobArray } = useGetSaved()
    const removedArray = []

    // functionality for removing a job from saved jobs
    function removeFromSaved(e) {
        e.preventDefault()
        for (let i = 0; i < existing.savedJobs.length; i++) {
            if (existing.savedJobs[i] !== id) {
                removedArray.push(existing.savedJobs[i])
            }
        }
        axios.put(`${server}api/users/${userId}`, {

            "savedIds": {
                "savedJobs": removedArray
            }
        }).then(window.location.reload())
    }
    if (!loading) {

        //refining data for visual display
        const brandUpper = jobArray.Brand_Name.charAt(0).toUpperCase() + jobArray.Brand_Name.slice(1)

        const jobDescShort = jobArray.Job_Description.substring(0, 500)

        if (jobArray.Job_Description_Summary !== null) {
            const jobDescSum = jobArray.Job_Description_Summary
        }
        const jobDescSum = jobArray.Job_Description_Summary
        return (

            // saved jobs jsx
            <div>
                <div className='job-card-container-v1' >

                    <div className="jobcard-left col-5">
                        <p>  <strong> Job Profile: </strong> {jobArray.Job_Profiles}</p>

                        <p><strong> Company: </strong> {brandUpper}</p>

                        <p><strong> Location: </strong> {jobArray.locationCountry}</p>

                        <p><strong>Currently available openings: </strong> {jobArray.Number_of_Openings_Available}</p>

                        <button className="button-81" onClick={removeFromSaved}> remove from saved</button>
                    </div>
                    <div className='jobcard-right col-7' onClick={showWholeJobCard}>


                        <p><strong> Job description: </strong> </p>
                        {jobDescSum ?
                            <div dangerouslySetInnerHTML={{ __html: jobDescSum + "..." + "<button class=button-81 > Click to read more </button>" }} />
                            :
                            <div dangerouslySetInnerHTML={{ __html: jobDescShort + "..." + "<button class=button-81 > Click to read more </button>" }} />

                        }
                    </div>
                    <br />





                </div>

            </div>
        )
    }
    return (
        <> </>
    )

}

export default SavedJobsProps
