
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import server from "../Config_Env/Config"
import SavedJobsProps  from "./SavedJobsProps"
import {Link} from "react-router-dom"



function SavedJobs() {
    
    const userId = localStorage.getItem("userId")
   const useGetSaved = () => {
       const [jobArray, setJobArray] = useState([])
       const [loading, setLoading] = useState(true)

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
   const [savedJobs, setSavedJobs] = useState([])
   if(!loading){
      console.log(jobArray.savedJobs)
      for(let i = 0; i < jobArray.savedJobs.length; i++) {
        // const getSavedJobs = async() => {
        //     const response  = await axios.get(`${server}api/jobs?id=${jobArray[i]}`)
        //     setSavedJobs(response)
        //     console.log(response)
        // }
        // getSavedJobs()
        
      }
      
   }


   
    return (
        <div>
            {!loading && jobArray.savedJobs.length !== 0  ? jobArray.savedJobs.map((job,key)=> {
                
                return(
                    <>
                    <br/>
                    <h2>Here are your saved jobs!</h2>
                    <SavedJobsProps key={key} id={job} existing={jobArray}/>
                    </>
                )
                
            }) : <>You haven`t saved any jobs yet! <br/>Please head over to the job filtering page: 
                    <Link to="/jobs"> Jobs</Link>
                </> }
            
            
        </div>
    )
}

export default SavedJobs
