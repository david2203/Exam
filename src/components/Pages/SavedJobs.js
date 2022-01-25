
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import server from "../Config_Env/Config"
import SavedJobsProps  from "./SavedJobsProps"
import {Link} from "react-router-dom"

// page for saved jobs

function SavedJobs() {
    

    const userId = localStorage.getItem("userId")
   const useGetSaved = () => {
       const [jobArray, setJobArray] = useState([])
       const [loading, setLoading] = useState(true)
    // getting saved jobs from currently logged in user
        const getSavedJobs = async() => {
            try {
                const jobs = await axios.get(`${server}api/users/${userId}`)
                setJobArray(jobs.data.savedIds)
                
            }
            catch(err) {
                console.log(err)
            }
            setLoading(false)
        }

        useEffect(()=> {
            getSavedJobs()
        },[])

        return(
            {loading, jobArray}
        )

   }

   
   const {loading, jobArray} = useGetSaved()
   
   


   
    return (
        // saved Jobs jsx and looping through SavedJobsprops Visuals
        <div>
            {!loading && jobArray.savedJobs.length !== 0  ? jobArray.savedJobs.map((job,key)=> {
                
                return(
                    <div className='savedJobsContainer'>
                    <br/>
                    <h2>Here are your saved jobs!</h2>
                    <SavedJobsProps key={key} id={job} existing={jobArray}/>
                    </div>
                )
                
            }) : <h2 className="nothingSaved">You haven`t saved any jobs yet! <br/>Please head over to the job filtering page: 
                   <p> <Link to="/jobs"> Jobs</Link></p>
                </h2> }
            
            
        </div>
    )
}

export default SavedJobs
